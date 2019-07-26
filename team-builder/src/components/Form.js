import React, {useState} from 'react';
//import logo from './logo.svg';
// import './App.css';

 function Form(props) {

  const [input, setInput]= useState({
      name: "",
      email:"",
      role:"", 
      id: null
    //   role1:"",
    //   role2: "",
    //   role3:""
  });
// console.log('props', props)
  const handleiInput = e =>{
      console.log('handle input Fire');
    //   console.log('Value', e.target.value);
    //   console.log('Name', e.target.name);
      setInput({ ...input, [e.target.name] : e.target.value});

  };

console.log('input', input)

  const handleSubmit = event => {
         event.preventDefault(); //keeps page from reloading
         props.addMember({...input , id: Math.random()});
    //   console.log('target name', event.target.name)
    //   event.preventDefault(); //keeps page from reloading
    setInput( {  name: "",
    email:"",
    role:""})
  };

  return (
    <div className="App">
      <h1>Add a member to</h1>
      <p>The List</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:<input type="text" value ={input.name} name="name" onChange={handleiInput} />
        </label>
        <label htmlFor="email">
          Email:<input type="text" value ={input.email} name="email" onChange={handleiInput} />
        </label>
       <p>
           <label htmlFor="role">
          Role:
          <input type="text" value ={input.role} name="role" onChange={handleiInput} />


        </label></p>
        <p><button>Add Member</button></p>

      </form>
    </div>
  );
}

export default Form;
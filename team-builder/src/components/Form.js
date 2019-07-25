import React, {useState} from 'react';
//import logo from './logo.svg';
// import './App.css';

function Form() {

  const [input, setInput]= useState({
      name: "",
      email:"",
      role:"",
    //   role1:"",
    //   role2: "",
    //   role3:""
  });

  const handleiInput = e =>{
      console.log('handle input Fire');
      console.log('Value', e.target.value);
      console.log('Name', e.target.name);
      setInput({ ...input, [e.target.name] : e.target.value});

  }

  const handleSubmit = event =>{
      event.preventDefault();
    setInput(event.target.value);
  }
  return (
    <div className="App">
      <h1>Add a member to</h1>
      <p>The List</p>
      <form>
        <label htmlFor="name">
          Name:<input type="text" value ={input.name} name="name" onChange={handleiInput} />
        </label>
        <label htmlFor="email">
          Email:<input type="text" value ={input.email} name="email" onChange={handleiInput} />
        </label>
       <p>
           <label htmlFor="role">
          Role:
          <input type="radio" value ={input.role} name="role" onChange={handleiInput} />Role Sample


        </label></p>
        <p><button>Add Member</button></p>

      </form>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default Form;

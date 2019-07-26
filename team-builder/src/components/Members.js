import React, {useState} from 'react';

function Members(props){

    console.log('member props', props)
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput]= useState({
        name: props.member.name,
        email: props.member.email,
        role: props.member.role
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

    const handleEdit = e => {
        // preventDefault()
        setIsEditing(!isEditing)
    }

console.log('edit', isEditing)
if(isEditing){
    return(
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
          <input type="text" value ={input.role} name="role" onChange={handleiInput} />


        </label></p>
        <p><button>Add Member</button>
        <button onClick={handleEdit}>Go Back</button></p>

      </form>
    </div>
    )
}


    return (
        <div>
            <h2>Member:</h2>
            <p>{props.member.name}</p>
            <h2>Name: {props.member.name}</h2>
            <h2>Email: {props.member.email}</h2>
            <h2>Role: {props.member.role}</h2>

            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default Members
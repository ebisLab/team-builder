import React, {useState} from 'react';
//import logo from './logo.svg';
import Form from './components/Form';
import Members from './components/Members'
import './App.css';

function App() {

  const [members, setMembers]= useState([]);

  // const [addMember, setAddMember]= setMembers([...members, members])
  const addMember = member => setMembers([...members, member])

  // const changeHandler = event =>{
  //   setMembers(event.target.value);
  // }
  console.log('members', members)
  return (
    <div className="App">
      <Form addMember={addMember} />
      < Members />
    </div>
  );
}

export default App;

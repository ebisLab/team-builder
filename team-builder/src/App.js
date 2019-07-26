import React, {useState} from 'react';
//import logo from './logo.svg';
import Form from './components/Form';
import Members from './components/Members'
import './App.css';

function App() {

  const [members, setMembers]= useState([]);

  const addMember = member => setMembers([...members, member])
 
  console.log('members', members)
  return (
    <div className="App">
      <Form addMember={addMember} />
      {members.map(member => < Members member={member} />  )}
    </div>
  );
}

export default App;

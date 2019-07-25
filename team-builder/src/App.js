import React, {useState} from 'react';
//import logo from './logo.svg';
import Form from './components/Form';
import Members from './components/Members'
import './App.css';

function App(props) {
console.log(props)
  const [members, setMembers]= useState([]);

  const changeHandler = event =>{
    setMembers(event.target.value);
  }
  return (
    <div className="App">
      <Form />
      < Members />
    </div>
  );
}

export default App;

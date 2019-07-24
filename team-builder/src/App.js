import React, {useState} from 'react';
import logo from './logo.svg';
// import './App.css';

function App() {

  const [name, setName]= useState("");

  const changeHandler = event =>{
    setName(event.target.value);
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Team Members</p>
      <form>
        <label>
          Name:<input type="text" /*onChange={changeHandler}*/ />
        </label>
        <label>
          Email:<input type="text" /*onChange={changeHandler}*/ />
        </label>
       <p><label for="radioOptions">
          Role:
          <input type="radio" /*name="gender" value="male" checked*/ />Backend
          <input type="radio" /*name="gender" value="male" checked*/ />Frontend
          <input type="radio" /*name="gender" value="male" checked*/ />UX


        </label ></p>

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

export default App;

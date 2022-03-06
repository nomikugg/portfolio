import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
let heart_react ='<3';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          I returned
        </p>
        <a href='https://github.com/nomikugg'>
          My Github perfil {heart_react}.
        </a>
        <p>Lorem impsum</p>
        <img src='https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg'></img>
      </header>
    </div>
  );
}

export default App;

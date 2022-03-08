import React from 'react';
import './App.css';
let heart_react ='<3';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Lanzamiento de mi pagina web... {Contador}
        </p>
        <Contador>

        </Contador>
        <a href='https://github.com/nomikugg'>
          My Github perfil {heart_react}.
        </a>
        <input
          className='input-class'
          type="text"
          name = "name"
        />

        
        <p>Lorem impsum</p>
        <img src='https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg' alt='My img'></img>
      </header>
    </div>
  );
  function Contador() {
    const data = new Date().toLocaleTimeString()
    return data
  };
}




export default App;

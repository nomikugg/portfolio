import logo from './logo.svg';
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
      </header>
    </div>
  );
}

export default App;

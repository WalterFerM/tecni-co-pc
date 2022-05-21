import logo from './logo.svg';
import logoTec from './logo-Tec.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
        👋 Hola, esta Web se encuentra en fase de desarrollo 👷.
        </span>
        <span>
          puede contactarnos en el siguente link👇.
        </span>
        <a
          className="App-link"
          href="https://g.page/r/CX0RkwTaYy3dEBA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Perfil de Google
        </a>
        <img src={logoTec} className="logomio" alt="logo"></img>
      </header>
    </div>
  );
}

export default App;

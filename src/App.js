import logo from './logo.svg';
import './App.css';

function Ospina() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I like the women
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=n6zvD8kA3z4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Ospina;

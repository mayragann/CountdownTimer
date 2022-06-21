import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="head"> React Countdown</h1>
      </header>
      <div id="Countdown">
        <ul>
          <li><span>00</span>Days</li>
          <li><span>00</span>Hours</li>
          <li><span>00</span>Days</li>
          <li><span>00</span>Seconds</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

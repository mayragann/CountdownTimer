import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount(){
    this.startInterval()
  }
  startInterval = () => {
   
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour* 24
    let distance = new Date("Fri Jun 28 2022 16:21:48 GMT-0400") - new Date().getTime()
    let x = setInterval(
      function (){
       document.getElementById("days").innerText = Math.floor(distance / day)
       document.getElementById("hours").innerText = "00"
       document.getElementById("minutes").innerText = "00"
       document.getElementById("seconds").innerText = "00"
      }, second)
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 id="head"> React Countdown</h1>
        </header>
        <div id="Countdown">
          <ul>
            <li><span id="days"></span>Days</li>
            <li><span id="hours"></span>Hours</li>
            <li><span id="minutes"></span>Minutes</li>
            <li><span id="seconds"></span>Seconds</li>
          </ul>
        </div>
      </div>
    );

  }

}

export default App;

import React from 'react';
import './App.css';
import MyTimer from './Components/Timer/Timer';
import MyStopwatch from './Components/Timer/Stopwatch/Stopwatch';

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <div>
      <MyTimer expiryTimestamp={time} />

      <MyStopwatch />
    </div>
  );
}

export default App;

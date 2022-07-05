import React, { useState } from 'react';
import './App.css';
import MyTimer from './Components/Timer/Timer';
import MyStopwatch from './Components/Timer/Stopwatch/Stopwatch';
import MyTime from './Components/Timer/CurrentTime/CurrentTime';


function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  const [toggleTimer, setToggleTimer] = useState(true)
  const [toggleWatch, setToggleWatch] = useState(true)
  const [toggleCurrent, setToggleCurrent] = useState(true)

  return (
    <div className='container'>
      <button onClick={() => setToggleTimer(!toggleTimer)} className="btn-btn-primary mb-5">My Timer</button>
      {toggleTimer && (
      <MyTimer expiryTimestamp={time} />
      )}
      <button onClick={() => setToggleWatch(!toggleWatch)} className="btn-btn-primary mb-5">My Stopwatch</button>
      {toggleWatch && (
      <MyStopwatch />
      )}
      <button onClick={() => setToggleCurrent(!toggleCurrent)} className="btn-btn-primary mb-5">My Current Time</button>
      {toggleCurrent && (
      <MyTime />
      )}
    </div>
  );
}

export default App;

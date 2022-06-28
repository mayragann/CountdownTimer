import React from 'react';
import './App.css';
import MyTimer from './Components/Timer/Timer';

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default App;

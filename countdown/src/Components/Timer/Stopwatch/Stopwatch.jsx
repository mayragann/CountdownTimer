import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
    const {seconds, minutes, hours, days, isRunning, start, pause, reset} = useStopwatch ({ autoStart: true});
    return (
        <div style={{textAlign: 'center'}}>
            <h1> React-Timer-Hook</h1>
            <p>Stopwatch Demo</p>
            <div style={{fontSize: '100px'}}>
            <span>{days}:{hours}:{minutes}:{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button on onClick={start}>Start</button>
            <button on onClick={pause}>Pause</button>
            <button on onClick={reset}>Reset</button>
        </div>
    );
}
 
export default MyStopwatch;

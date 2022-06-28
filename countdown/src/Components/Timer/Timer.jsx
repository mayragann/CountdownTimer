import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({expiryTimestamp}){
    const {seconds, minutes, hours, days, isRunning, start, pause, resume, restart} = useTimer ({
        expiryTimestamp, onExpire: () => console.warn('onExpire called')
    });
    return (
        <div style={{textAlign: 'center'}}>
            <h1> React-Timer-Hook</h1>
            <p>Timer Demo</p>
            <div style={{fontSize: '100px'}}>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button on onClick={start}>Start</button>
            <button on onClick={pause}>Pause</button>
            <button on onClick={resume}>Resume</button>
            <button on onClick={() => {
                const time = new Date ();
                time.setSeconds(time.getSeconds() +300);
                restart(time)
            }}>Restart</button>
        </div>
    );


}


export default MyTimer ;
import React from 'react';
import { useTime } from 'react-timer-hook';

function MyTime() {
    const {seconds, minutes, hours, ampm} = useTime ({ format: '12-hour'});

    return ( 
        <div style={{textAlign: 'center'}}>
            <h1> React-Timer-Hook</h1>
            <p>Current Time Demo</p>
            <div style={{fontSize: '100px'}}>
            <span>{hours}:{minutes}:{seconds} {ampm}</span>
            </div>
        </div>
        );
}
 
export default MyTime ;
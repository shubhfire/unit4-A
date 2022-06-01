import React from 'react'
import { useState } from 'react';

export default function Stopwatch() {
    const [watch, setWatch] = useState(0);
    const [timerId,setTimerId]= useState(0)
    const start = () => {

        if(!timerId)
        {
            let id=   setInterval(() => {
            setWatch((watch) => watch + 1)
             }, 1000)
             console.log(id)
             setTimerId(id)
            
        }
     
    }
    const pause = () => {
        clearInterval(timerId)
        setTimerId(0)

    }
    const reset = () => {
        clearInterval(timerId)
        setWatch(0)
        setTimerId(0)

    }


    return (
        <div>
            <h1>StopWatch</h1>
            <h2>{watch}</h2>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

import React, { useEffect, useState } from "react";

const calculateTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return [minutes, seconds];
}

const useTimer = (isRunning) => {
    const [time, setTime] = useState(0);
    const [results, setResults] = useState([0,0]);

    useEffect(()=>{
        console.log("Interval effect")
        let interval;
        if(isRunning){
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        },1000);
        } else if(!isRunning){
        clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isRunning]);

    useEffect(() => {
        console.log("time effect")
        setResults(calculateTime(time));
    }, [time]);

    return results;
}

export default useTimer;
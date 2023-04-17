import { useState, useEffect } from 'react';

const cooldown_time = 2;

function ms( number ) {
    return number * 1000;
}

function Timer() {
    //use 10 seconds for now 
    const [timeLeft, setTimeLeft] = useState(ms(cooldown_time));
    const [timer, setTimer] = useState('00:10');
    useEffect(() =>{
        let interval_1 = null;
        if (timeLeft >= 0){
            interval_1 = setTimeout(() => {
                setTimeLeft((timeLeft) => timeLeft - 1000);
                let minutes = Math.floor((timeLeft / 1000 / 60) % 60);
                let seconds = Math.floor((timeLeft / 1000) % 60);
                setTimer(
                    (minutes > 9 ? minutes : '0' + minutes) + ':'
                    + (seconds > 9 ? seconds : '0' + seconds)                
                )
            
            }, 0);
        }
        return () => clearTimeout(interval_1);
    }, []); 
    useEffect(() => {
        let interval_2 = null;
        if (timeLeft >= 0){
            interval_2 = setTimeout(() => {
                setTimeLeft((timeLeft) => timeLeft - 1000);
                let minutes = Math.floor((timeLeft / 1000 / 60) % 60);
                let seconds = Math.floor((timeLeft / 1000) % 60);
                setTimer(
                    (minutes > 9 ? minutes : '0' + minutes) + ':'
                    + (seconds > 9 ? seconds : '0' + seconds)                
                )
            }, 1000);
        }
        return () => clearTimeout(interval_2);
    });

    return (
        <div className = "timer">
            <h2>Time left before you can color another block: {timer}</h2>
        </div>
    );
}

export default Timer;
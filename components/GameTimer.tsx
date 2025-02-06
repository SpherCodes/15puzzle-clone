'use client';
import React, { useEffect } from 'react';


const GameTimer: React.FC<GameTimerProps> = ({ isRunning, reset }) => {
    const [time, setTime] = React.useState(0);

    // Timer logic to start/stop based on `isRunning`
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval as unknown as NodeJS.Timeout);
        }

        return () => clearInterval(interval as NodeJS.Timeout);
    }, [isRunning,]);

    // Reset timer when `reset` is true
    useEffect(() => {
        if (reset) {
            setTime(0);
        }
    }, [reset]);

    // Format time into minutes:seconds
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="text-xs text-white p-1 rounded-md w-[40%] ml-auto w-1/2">
            Time <span className='font-bold'>{formatTime(time)}</span>
        </div>
    );
};

export default GameTimer;

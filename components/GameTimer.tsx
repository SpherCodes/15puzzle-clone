'use client';
import React, { useState, useEffect } from 'react';

function GameTimer({ isRunning, reset }: { isRunning: boolean; reset: boolean }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (reset) {
      setTime(0);
    }
  }, [reset]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex-1 text-center">
      <p className="text-sm text-foreground/70 mb-1">Time</p>
      <p className="text-xl md:text-2xl font-bold">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
}

export default GameTimer;

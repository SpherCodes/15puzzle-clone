'use client';
import React, { useEffect, useState } from 'react';
import GameTimer from './GameTimer';
import MoveCounter from './MoveCounter';

function GameBoard() {
    const [tiles, setTiles] = useState<(number | null)[]>([]);
    const solvedState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];
    const [isRunning, setIsRunning] = useState(false);
    const [resetTimer, setResetTimer] = useState(false);
    const [moves, setMoves] = useState(0);

    useEffect(() => {
        initializeTiles();
    }, []);

    useEffect(() => {
        checkCorrectPositions();
        if (CheckWin() === true) {
            alert("Congratulations, you won!");
        }
    }, [tiles]);

    function initializeTiles() {
        let numbers: (number | null)[] = Array.from({ length: 15 }, (_, i) => i + 1);
        numbers.push(null); // The empty space
        numbers = shuffle(numbers);
        setResetTimer(true); // Reset time
        setIsRunning(true); // Start the timer
        setMoves(0);
        setTiles(numbers);
    }

    function shuffle(array: (number | null)[]): (number | null)[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function moveTile(index: number) {
        const emptyIndex = tiles.findIndex((tile) => tile === null);
        if (emptyIndex === -1) return;

        const emptyRow = Math.floor(emptyIndex / 4);
        const emptyCol = emptyIndex % 4;
        const tileRow = Math.floor(index / 4);
        const tileCol = index % 4;

        if (
            (Math.abs(emptyRow - tileRow) === 1 && emptyCol === tileCol) ||
            (Math.abs(emptyCol - tileCol) === 1 && emptyRow === tileRow)
        ) {
            const newTiles = [...tiles];
            newTiles[emptyIndex] = tiles[index];
            newTiles[index] = null;
            setTiles(newTiles);
            setMoves(moves + 1);
            if(!isRunning){
                setIsRunning(true);
            }
        }
    }

    function CheckWin() {
        if (tiles.length === 0) return false;
        if( tiles.every((tile, index) => tile === solvedState[index])){
            return true;
        }
    }

    function checkCorrectPositions() {
        const tileDivs = document.querySelectorAll('.tile');
        tiles.forEach((tile, index) => {
            if (tile === solvedState[index]) {
                tileDivs[index]?.classList.add('correctposition');
            } else {
                tileDivs[index]?.classList.remove('correctposition');
            }
        });
    }

    return (
        <div>
            <div className='flex justify-between p-3'>
                <button className='btn' onClick={initializeTiles}>new game</button>
                <div className='flex items-center w-[40%] bg-purple-200 rounded'>
                    <MoveCounter moves={moves}  />
                    <GameTimer isRunning={isRunning} reset={resetTimer} />
                </div>
            </div>
            <div className="flex flex-wrap w-[400px] h-[400px] border border-white p-3 m-2 rounded-xl bg-purple-500"> 
                {tiles.map((tile, index) => (
                    <div
                        key={index}
                        className={`w-[25%] h-[25%] flex items-center justify-center 
                            text-2xl font-bold border-2 border-white m-0 tile
                            ${tile ? 'bg-blue-500 text-white' : 'bg-gray-500'}`}
                        onClick={() => moveTile(index)}
                    >
                        {tile}
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                <button 
                    className='btn w-[80%]' 
                    onClick={() => setIsRunning(!isRunning)}
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>

            </div>
        </div>
    );
}

export default GameBoard;

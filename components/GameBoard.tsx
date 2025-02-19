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
        numbers.push(null);
        numbers = shuffle(numbers);
        setResetTimer(true);
        setIsRunning(true);
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
        console.log(tileDivs)
        tiles.forEach((tile, index) => {
            if (tile === solvedState[index]) {
                tileDivs[index]?.classList.add('tile-correct');
            } else {
                tileDivs[index]?.classList.remove('tile-correct');
            }
        });
    }

    return (
        <div>
            <h1 className="font-bold text-white flex justify-center items-center pb-10 text-4xl">15 Puzzle</h1>
            <div className='flex justify-between p-3 h-16 text-xs '>
                <button className='btn' onClick={initializeTiles}>new game</button>
                <div className='flex items-center justify-center w-[40%] rounded btn'>
                    <MoveCounter moves={moves} />
                    <GameTimer isRunning={isRunning} reset={resetTimer} />
                </div>
            </div>
            <div className="flex flex-wrap w-[300px] h-[300px] p-5 m-2 gap-2"> 
                {tiles.map((tile, index) => (
                    <div
                        key={index}
                        className={`w-[22%] h-[22%] flex items-center justify-center 
                            text-2xl font-bold m-0 s
                            ${tile ? 'tile' : 'tile-empty'}`}
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

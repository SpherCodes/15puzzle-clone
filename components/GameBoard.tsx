'use client';
import React, { useEffect, useState } from 'react';
import GameTimer from './GameTimer';
import MoveCounter from './MoveCounter';

function GameBoard() {
    const [tiles, setTiles] = useState<(number | null)[]>([]);
    const solvedState = React.useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null], []);
    const [isRunning, setIsRunning] = useState(false);
    const [resetTimer, setResetTimer] = useState(false);
    const [moves, setMoves] = useState(0);

    const initializeTiles = React.useCallback(() => {
        let numbers: (number | null)[] = Array.from({ length: 15 }, (_, i) => i + 1);
        numbers.push(null);
        numbers = shuffle(numbers);
        setResetTimer(true);
        setIsRunning(true);
        setMoves(0);
        setTiles(numbers);
    }, []);

    const CheckWin = React.useCallback(() => {
        if (tiles.length === 0) return false;
        if(tiles.every((tile, index) => tile === solvedState[index])){
            return true;
        }
    }, [tiles, solvedState]);

    const checkCorrectPositions = React.useCallback(() => {
        const tileDivs = document.querySelectorAll('.tile');
        tiles.forEach((tile, index) => {
            if (tile === solvedState[index]) {
                tileDivs[index]?.classList.add('tile-correct');
            } else {
                tileDivs[index]?.classList.remove('tile-correct');
            }
        });
    }, [tiles, solvedState]);

    useEffect(() => {
        initializeTiles();
    }, [initializeTiles]);

    useEffect(() => {
        checkCorrectPositions();
        if (CheckWin() === true) {
            alert("Congratulations, you won!");
        }
    }, [tiles, checkCorrectPositions, CheckWin]);

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

    return (
        <div className="w-full max-w-md mx-auto px-4 py-6">
            <h1 className="font-bold text-white text-center text-3xl md:text-4xl mb-8">15 Puzzle</h1>
            <div className='flex flex-col gap-4 mb-6'>
                <div className='grid grid-cols-2 gap-4'>
                    <button className='btn bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm font-medium hover:bg-white/20 transition-all' 
                            onClick={initializeTiles}>
                        New Game
                    </button>
                    <button 
                        className='btn bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm font-medium hover:bg-white/20 transition-all' 
                        onClick={() => setIsRunning(!isRunning)}
                    >
                        {isRunning ? 'Pause' : 'Start'}
                    </button>
                </div>
                <div className='flex justify-between items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                    <MoveCounter moves={moves} />
                    <div className="w-px h-8 bg-white/20"></div>
                    <GameTimer isRunning={isRunning} reset={resetTimer} />
                </div>
            </div>
            <div className="aspect-square w-full max-w-[500px] mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-3"> 
                <div className="grid grid-cols-4 gap-2 h-full">
                    {tiles.map((tile, index) => (
                        <div
                            key={index}
                            className={`aspect-square flex items-center justify-center 
                                text-xl md:text-2xl font-bold rounded-lg transition-all duration-200
                                ${tile 
                                    ? 'tile bg-white/20 hover:bg-white/30 active:scale-95' 
                                    : 'tile-empty bg-transparent'
                                } 
                                ${tile && 'cursor-pointer shadow-sm'}`}
                            onClick={() => moveTile(index)}
                        >
                            {tile}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GameBoard;

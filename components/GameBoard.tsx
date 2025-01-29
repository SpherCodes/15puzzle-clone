'use client';
import React, { useEffect, useState } from 'react';

function GameBoard() {
    const [tiles, setTiles] = useState<number[]>([]);

    useEffect(() => {
        initializeTiles();
    }, []);

    function initializeTiles() {
        let numbers = Array.from({ length: 15 }, (_, i) => i + 1);
        numbers.push(null); // The empty space
        numbers = shuffle(numbers);

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
        }
    }

    return (
        <div className="flex flex-wrap w-[400px] h-[400px] border border-white bg-gray-300 p-1">
            {tiles.map((tile, index) => (
                <div
                    key={index}
                    className={`w-[97px] h-[97px] flex items-center justify-center 
                        text-2xl font-bold border-2 border-white m-0 
                        ${tile ? 'bg-blue-500 text-white' : 'bg-gray-500'}`}
                    onClick={() => moveTile(index)}
                >
                    {tile}
                </div>
            ))}
        </div>
    );
}

export default GameBoard;

import React from 'react';


function MoveCounter({ moves = 0 }: MoveCounterProps) {


  return (
    <div className="text-center text-black p-3">
      <h1 className="text-l font-normal">Moves</h1>
      <p className="text-lg">{moves}</p>
    </div>
  );
}

export default MoveCounter;

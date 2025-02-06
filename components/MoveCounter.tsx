import React from 'react';


function MoveCounter({ moves = 0 }: MoveCounterProps) {


  return (
    <div className="text-center text-white p-3">
      <h1 className="text-xs">Moves</h1>
      <p className="text-xs font-bold">{moves}</p>
    </div>
  );
}

export default MoveCounter;

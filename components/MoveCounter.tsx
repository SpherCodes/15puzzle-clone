import React from 'react';

function MoveCounter({ moves = 0 }: MoveCounterProps) {
  return (
    <div className="flex-1 text-center">
      <p className="text-sm text-foreground/70 mb-1">Moves</p>
      <p className="text-xl md:text-2xl font-bold">{moves}</p>
    </div>
  );
}

export default MoveCounter;

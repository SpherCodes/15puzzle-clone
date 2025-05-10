import React from 'react'
import GameBoard from '../../components/GameBoard';

function page() {
  return (
    <div  className="home ">
      <div className='flex-container flex-center px-10'>
        <GameBoard />
      </div>
    </div>
  )
}

export default page

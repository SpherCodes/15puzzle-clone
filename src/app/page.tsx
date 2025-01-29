import React from 'react'
import GameBoard from '../../components/GameBoard'

function page() {
  return (
    <div  className="home">
      <div className='flex-container flex-center pt-4'>
        <GameBoard />
      </div>
    </div>
  )
}

export default page

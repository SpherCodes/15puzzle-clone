import React from 'react'
import GameBoard from '../../components/GameBoard'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Analytics } from "@vercel/analytics/next"

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

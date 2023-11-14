import React from 'react'
import Sidebar from './Sidebar'
import Dash from './Dash'
import Right from './Right'

const Board = () => {
  return (
    <div >
      <div>
      <Sidebar/>
      </div>

    <div className='mr-[5rem] sm:flex justify-around items-center mx-[7rem]  overflow-hidden'>
       <div>
          <Dash/>
        </div>

       <div className='md:flex hidden'>
         <Right/>
       </div> 
    </div>

    </div>
  )
}

export default Board

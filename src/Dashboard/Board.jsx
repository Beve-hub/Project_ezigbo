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

    <div className=' sm:flex justify-around items-center mx-auto  overflow-hidden'>
       <div className='mx-[8rem] border-l-black'>
          <Dash/>
        </div>

       <div className=' sm:flex hidden'>
         <Right/>
       </div> 
    </div>

    </div>
  )
}

export default Board

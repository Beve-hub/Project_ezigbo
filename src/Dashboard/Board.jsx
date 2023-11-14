import React from 'react'
import Sidebar from './Sidebar'
import Dash from './Dash'
import Right from './Right'

const Board = () => {
  return (
    <div className='md: flex overflow-hidden '>
     <div>
      <Sidebar/>
     </div>

     <div className='flex justify-around'>

        <div>
          <Dash/>
        </div>

       <div className=''>
         <Right/>
       </div>

     </div>

    </div>
  )
}

export default Board

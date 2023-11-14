import React from 'react'
import Sidebar from './Sidebar'
import Dash from './Dash'

const Board = () => {
  return (
    <div className='md: flex'>
     <div>
      <Sidebar/>
     </div>

     <div>
      <Dash/>
     </div>

    </div>
  )
}

export default Board

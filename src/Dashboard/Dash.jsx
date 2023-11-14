import React from 'react'
import IMG1 from '../Asset/6.png'
import IMG2 from '../Asset/5.png'

const Dash = () => {
  return (
    <div className='grid justify-center items-center w-[80rem] mt-8'>
      <div>

      <h1 className='pb-6 font-semibold text-2xl'>Hi, Welcome</h1>


   <div className='flex items-center bg-[--btn-color] p-6 rounded-lg gap-6'>
    <div >
     <div className='pb-4'>
     <h1 className='font-semibold text-white text-lg'>Carry out check on the product</h1>
     <p className='text-sm text-white'>Click on the barcode icon to verify the originality of your drug</p>
     </div>
     <button className='flex items-center gap-2 bg-[#FF9900] rounded-full px-2 py-1'>
       <img src={IMG1} alt='' className='w-[2rem]'/>
       Scan Code
     </button>
       </div>
       <img src={IMG2} alt='' className='w-[8rem] rounded-full ml-4'/>
       </div>

    <div>
  <h1>Activity history</h1>

  <div>
    <div className='flex items-center'>
      <div>
        <h1>Nestle Milo</h1>
        <p>nestle</p>
      </div>
      <div>
        <h1>13 Sept 23</h1>
        <p>Original</p>
      </div>
    </div>
  </div>
    </div>

      </div>
    </div>
  )
}

export default Dash

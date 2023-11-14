import React, {useState} from 'react'
import IMG1 from '../Asset/6.png'
import IMG2 from '../Asset/5.png'
import WebcamScanner from './WebcamScanner'

const Dash = () => {
  const [showModal, setShowModal ] = useState(false);

   const handleOnClose = () => {
     setShowModal(false);
       }
  return (
    <div className='sm:grid justify-center items-center  mt-16'>
      <div className='grid gap-8'>
      <h1 className='font-semibold text-2xl'>Hi, Welcome</h1>


   <div className='flex items-center bg-[--btn-color] p-6 rounded-lg gap-10'>
    <div >
     <div className='pb-4 '>
     <h1 className='font-semibold text-white text-lg pb-5'>Carry out check on the product</h1>
     <p className='text-sm text-white'>Click on the barcode icon to verify the originality of your drug</p>
     </div>
     <button className='flex items-center gap-2 bg-[#FF9900] rounded-full px-2 py-1'  onClick={() => setShowModal(true)}>
       <img src={IMG1} alt='' className='w-[2rem]'/>
       Scan Code
     </button>
       </div>
       <img src={IMG2} alt='' className='w-[8rem] rounded-full ml-4 md:flex hidden'/>
       </div>

    <div>
  <h1 className='font-semibold text-xl mt-3'>Activity history</h1>

  <div className='py-8'>
    <div className='flex items-center justify-between '>
      <div>
        <h1 className='font-semibold '>Nestle Milo</h1>
        <p>nestle</p>
      </div>
      <div>
        <h1>13 Sept 23</h1>
        <p className='text-[green]'>Original</p>
      </div>
    </div>
  </div>
    </div>

      </div>
      <WebcamScanner onClose={handleOnClose} isVisible={showModal} /> 
    </div>
  )
}

export default Dash

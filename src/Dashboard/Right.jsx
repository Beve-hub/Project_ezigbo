import React, {useState} from 'react'
import {MdOutlineLogout} from 'react-icons/md'
import IMG from '../Asset/7.png'
import OIM from '../Asset/6.png'
import WebcamScanner from './WebcamScanner'
import {useNavigate} from 'react-router-dom';


const Right = () => {
  const [showModal, setShowModal ] = useState(false);

   const handleOnClose = () => {
     setShowModal(false);
       }

    const navigate = useNavigate();   
   
  return (
    <div className=' grid items-center mt-8 pr-8 gap-4'>
      
      <button onClick={() => navigate('/')} className='flex gap-3 items-center justify-end cursor-pointer ' >
           Logout
        <MdOutlineLogout size={20}/>
      </button>

      <div className='grid items-center justify-center gap-8 pt-[4rem]'>
        <div className='grid gap-2'>
            <h1 className='font-semibold text-xl'>Scan products.</h1>
            <p className='w-[20rem]'>Place barcode inside the frame to scan. Please keep your device steady when scanning to ensure accurate results.</p>
        </div>

        <div className='bg-slate-200 p-4 grid items-center w-[13rem] h-[13rem] ml-8 justify-center rounded-xl'>
            <img src={IMG} alt='' onClick={() => setShowModal(true)}  className='w-[6rem]'/>
        </div>

        <div className='grid justify-center items-center'>
            <button onClick={() => setShowModal(true)}  className='flex items-center bg-[--btn-color] py-2  px-2 rounded-full gap-2 w-[11rem] text-white font-medium justify-center'>
            <img src={OIM} alt='' className='w-[2rem]'/>
            Scan Barcode
            </button>
        </div>
      </div> 
      <WebcamScanner onClose={handleOnClose} isVisible={showModal} /> 
    </div>
  )
}

export default Right

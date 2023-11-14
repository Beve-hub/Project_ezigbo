import React from 'react'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import IMG from '../Asset/Logo2.png'


const Footer = () => {
  return (
    <section id="Footer" className=" min-h-[10rem] bg-[--btn-color] py-8 text-white ">
      <div className=' mx-auto grid md:grid-cols-2  justify-center gap-8 items-start'>
        <div className='grid justify-start gap-2 ml-[5rem]'>
          <p className='font-semibold text-lg'>Contact EZIGO</p>
          <ul className='text-white flex gap-8'>
            <li><BsLinkedin size={30}/></li>
            <li><AiFillTwitterCircle size={30}/></li>
            <li><BsFacebook size={30}/></li>
          </ul>
        </div>
        <div className='grid gap-2 items-start'>
          <p className='font-semibold text-lg'>Subscribe to our Newsletter</p>
          <div className='grid md:grid-cols-2 justify-center items-center gap-1'>
          <input type="email" name="email" className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
          <button className='px-1 bg-white text-[--btn-color] w-[10rem] py-2' >Subscribes</button>
          </div>
        </div>
      </div>

      <div className='md:mt-[2rem] flex items-center gap-2 '>
        <img src={IMG} alt='' className='w-[15px]'/>
        <p className='text-xs'>All Reserved 2023.</p>
      </div>

    </section>
  )
}

export default Footer

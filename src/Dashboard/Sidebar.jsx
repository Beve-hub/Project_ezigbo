import{useState}from 'react'
import IMG from '../Asset/Logo.png'
import {link, lins} from '../data'
import { NavLink } from 'react-router-dom'
import {AiFillCloseCircle, AiOutlineMenu} from 'react-icons/ai'

const Sidebar = () => {
  const [ open , setOpen ] =useState(false);
  const toggle = () => setOpen (!open);  
  return (

    <div>
           <div style={{width: open ? "180px" : "100px"}} className='w-[200px] h-screen bg-[#f2f2f2] p-8 fixed z-99 sm:block hidden'>
      <div className='flex items-center gap-3' >
        <img src={IMG} alt='' className='w-[3rem]' onClick={toggle}/>
        <h1 className='font-semibold text-lg' style={{display: open ? "block" : "none"}}>EZIGBO</h1>
      </div>

      <div className='mt-[5rem] grid gap-10'>
     {
      link.map((item, index)=>(
        <NavLink to={item.path} key={index} className='flex items-center gap-2'>
          <div className='grid justify-center'>{item.icon}</div>
          <div style={{display: open ? "block" : "none"}}>{item.name}</div>
        </NavLink>
      ))
     }
     </div>
     

   </div>
         <div onClick={toggle} className='absolute md:hidden '>
          {open ? <img src={IMG} alt='' className='w-[3rem] ml-[2rem] mt-8' onClick={toggle} /> : <AiFillCloseCircle size={30} className='ml-[7rem] mt-6'/>}
          </div>


        <div className={!open ? 'lg:hidden fixed left-0 top-0 w-[6rem] h-[20rem] bg-[#ffffff]  z-99 ease-in-out duration-500' : 'fixed left-[-400%]'}>
  
        <ul className='gap-10  text-xl text-black grid items-center justify-center uppercase pt-24 '>
        {
        lins.map((item, index)=>(
          <NavLink to={item.path} key={index} className='flex items-center gap-2'>
            <div className='grid justify-center'>{item.icon}</div>
            <div style={{display: open ? "block" : "none"}}>{item.name}</div>
          </NavLink>
        ))
       }
        </ul>
        </div>

    </div>
    
  )
}

export default Sidebar

import{useState}from 'react'
import IMG from '../Asset/Logo.png'
import {link} from '../data'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [ open , setOpen ] =useState(false);
  const toggle = () => setOpen (!open);  
  return (
    <div style={{width: open ? "180px" : "100px"}} className='w-[200px] h-screen bg-[#f2f2f2] p-8 fixed z-99 '>
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
  )
}

export default Sidebar

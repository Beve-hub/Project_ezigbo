import React, { useState } from 'react';
import Logo from '../Asset/Logo.png';
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri';
import ICON1 from '../Asset/metamask-icon.png';
import ICON2 from '../Asset/coinbase-logo 1.png';
import ICON3 from '../Asset/wallet-connect-logo 1.png';



const Navbar = () => {
  const [open, setOpen] = useState(false);
  


  return (
    <div className=' fixed w-full h-[6rem] bg-[#ffffff] px-10 flex items-center justify-between'>
      <div className='w-[3rem] flex items-center gap-1'>
        <img src={Logo} alt='/' />
        <h1 className='fonts-bold '>EZIGBO</h1>
      </div>
      <div className='flex gap-8'>
        <div className='grid text-white'>
          <div>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className='font-semibold bg-[--btn-color] px-4 py-2 rounded-xl flex items-center sm:text-sm'>
              connect wallet{' '}
              {!open ? <RiArrowDropUpLine size={30} /> : <RiArrowDropDownLine size={30} />}
            </button>
          </div>
         {open && (
          <div className='absolute mt-14 rounded-lg bg-[--primary-color] grid items-center p-3 border-2 border-[green]'>
            <ul className='grip items-center cursor-pointer '>
              <li className='flex items-center gap-2 text-white py-4 hover:bg-gray-800 rounded-lg'>
                <img src={ICON1} alt='icon_img' className='w-[20px]' />
                Metamask
              </li>
              <li className='flex items-center gap-2 text-white py-4 hover:bg-gray-800 rounded-lg'>
                <img src={ICON2} alt='icon_img' className='w-[20px]' />
                Coinbase
              </li>
              <li className='flex items-center gap-2 text-white py-4 hover:bg-gray-800 rounded-lg'>
                <img src={ICON3} alt='icon_img' className='w-[20px]' />
                Wallet-connect
              </li>
            </ul>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

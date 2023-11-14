import React from 'react'
import IMG1 from '../Asset/1.png'
import IMG2 from '../Asset/2.png'
import IMG3 from '../Asset/3.png'
import IMG4 from '../Asset/4.png'
const Works = () => {
  return (
    <section id="works" className="min-h-[30rem] flex py-10 md:flex-row grid-col-2 items-center justify-center ">
      <div>
        <h1 className='font-bold text-lg ml-10'>How it works</h1>
        <div className='max-w-[1640px] mx-auto grid md:grid-cols-4 gap-4 px-8 py-10'>
          <div className='border-2 px-2 w-[18rem]'>
            <img src={IMG1} alt='join_img' className='mt-4 mx-2 w-[30px] h-[30px]'/>
            
            <p className='text-xs text-left py-2 pb-4'>Inscribe and ID a product with unique hash values.</p>
          </div>
          <div className='border-2 px-2 w-[18rem]'>
            <img src={IMG2} alt='join_img' className='mt-4 mx-2 w-[30px] h-[30px]'/>
            <p className='text-xs text-left py-2 pb-4'>Generate barcode with hash values.</p>
          </div>
          <div className='border-2 px-2 w-[18rem]'>
            <img src={IMG3} alt='join_img' className='mt-4 mx-2 w-[30px] h-[30px]'/>
            <p className='text-xs text-left py-2 pb-4'>Store hash values in blockchain.</p>
          </div>
          <div className='border-2 px-2 w-[18rem]'>
            <img src={IMG4} alt='join_img' className='mt-4 mx-2 w-[30px] h-[30px]'/>
            <p className='text-xs text-left py-2 pb-4'>Now you can verify product anywhere.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works

import React from 'react'
import Img1 from '../Asset/section-5.png'

const Product = () => {
  return (
    <section id="Steps" className="min-h-[30rem] flex py-10 md:flex-row grid-col-2 items-center justify-center ">
      <div className='max-w-[1640px] mx-auto grid md:grid-cols-2 gap-12 px-20 justify-center w-[80rem]'>
        <div className>
          <h1 className='font-semibold text-2xl'>How to Protect your Product?</h1>
          <p className='text-start'>EZIGO runs on the blockchain technology allowing relevant data about drug production, distribution and sales to be immutable and safely stored.</p>
          <ul className='grid gap-2 mt-8 text-start'>
            <li className='flex items-baseline gap-4'><span className='bg-[#89f989] px-4 py-2 rounded-[100%]'>1</span>Inscribes and identifies a drug product with unique hash values</li>
            <li className='flex items-baseline gap-4'><span className='bg-[#89f989] px-4 py-2 rounded-[100%]'>2</span>Stores hash values in blockchain</li>
            <li className='flex items-baseline gap-4'><span className='bg-[#89f989] px-4 py-2 rounded-[100%]'>3</span>Generates barcode with hash values.</li>
            <li className='flex items-baseline gap-4'><span className='bg-[#89f989] px-4 py-2 rounded-[100%]'>4</span>Inscribes and identifies a drug product with unique hash values</li>
          </ul>

        </div>
        <img src={Img1} alt='step_img' className='w-[30rem] object-contain'/>

      </div>
    </section>
  )
}

export default Product

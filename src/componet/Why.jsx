import React from 'react'
import IMG1 from '../Asset/bro.png'
const Why = () => {
  return (
    <section id="why" className="min-h-[30rem] bg-[white] flex py-10 md:flex-row grid-col-2 items-center justify-center">
      <div className='max-w-full mx-auto grid md:grid-cols-2 gap-12 px-20 justify-center items-center'>
      <img src={IMG1}  alt='' className="md:w-[30rem] h-[25rem] object-contain"/>
      <div className='md:w-[40rem]'>
        <h1 className='md:font-bold text-2xl text-start'>Why EZIGBO?</h1>
        <p className='md:pt-4 text-start'>EZIGBO runs on the blockchain technology allowing relevant data about drug production, distribution and sales to be immutable and safely stored.</p>
      </div>
        
      </div>
    </section>
  )
}

export default Why

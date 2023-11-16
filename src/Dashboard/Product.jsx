import React from 'react'
import Sidebar from './Sidebar'
import ProductDetails from './ProductDetails';

const Product = () => {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div className='bg-[--btn-color] h-screen'>
        <ProductDetails/>
      </div>
    </div>
  )
}

export default Product

import React, {useState} from 'react'

const ProductDetails = () => {
    const [poName, setPoName] = useState("");
    const [poType, setPoType] = useState("");
    const [naNum , setNaNum] = useState("");  
    const [maDate, setMaDate] = useState(""); 
    const [expNum, setExpNum] = useState("");      
    const [PoCont, setPoCont] = useState("");  
      
      
        const handleSubmit = (e) => {
          e.preventDefault();
        };
        
  return (
    <div className='grid justify-center text-center gap-6 pt-[7rem] sm:ml-[6.5rem]'>
    <h1 className='font-bold text-2xl text-white'>Product Details</h1>
    <form onSubmit={handleSubmit}>
      <div className='w-[30rem] grid gap-3'>

        <div className='gird text-start '>
        <label for='poName'  className=' text-white '>Product Name</label>
        <input type='text' 
        name="poName" id="poName"
        value={poName}
         onChange={(e) => setPoName(e.target.value)} 
         placeholder='Enter Product Name' className='mt-2 block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
        </div>


        <div className='gird text-start '>
        <label for='poType'  className=' text-white '>Product Type</label>
        <input type='text' 
        name="poType" id="poType"
        value={poType}
         onChange={(e) => setPoType(e.target.value)} 
         placeholder='Enter product Type' className='mt-2 block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
        </div>

        <div className='gird text-start '>
        <label for='naNum '  className=' text-white '>NAFDAC Number</label>
        <input type='text' 
        name="naNum " id="naNum "
        value={naNum }
         onChange={(e) => setNaNum(e.target.value)} 
         placeholder='Enter NAFDAC Number' className='mt-2 block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
        </div>

        <div className='flex gap-4'>

           <div className='gird text-start '>
           <label for='maDate'  className=' text-white '>Manufacturing Date</label>
           <input type='number' 
           name="maDate" id="maDate"
           value={maDate}
            onChange={(e) =>  setMaDate(e.target.value)} 
            placeholder='MM/YY' className='mt-2 block w-[13rem] bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
           </div>

           <div className='gird text-start '>
           <label for='expNum'  className=' text-white '>Expiry Date</label>
           <input type='number' 
           name="expNum" id="expNum"
           value={expNum}
            onChange={(e) =>  setExpNum(e.target.value)} 
            placeholder='MM/YY' className='mt-2 block w-[16rem] bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
           </div>

           

        </div>

        <div className='gird text-start '>
        <label for='PoCont'  className=' text-white '>Product Name</label>
        <textarea type='text' 
        name="PoCont" id="PoCont"
        value={PoCont}
         onChange={(e) => setPoCont(e.target.value)} 
         placeholder='Describe content' className='mt-2 block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
        </div>

      </div>

      <div className='grid gap-2 pt-8'>
      <button type="submit" className='bg-[#FF9900] w-full p-2 text-white font-semibold' > Submit</button>
    </div>
    </form>
    
  </div>
  )
}

export default ProductDetails

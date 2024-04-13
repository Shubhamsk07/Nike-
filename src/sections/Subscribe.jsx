import React from 'react'

const Subscribe = () => {
  return (
    <section
    id="contact-us"
    className='flex justify-between  text-center  max-lg:flex-col max-container gap-10 max-lg:px-1 px-16  items-center'>
      
        <h1 className='text-4xl max-md:3xl  leading[68px] font-palanquin font-bold'>Sign Up for <span className=' text-coral-red'>Updates</span><br />
          & Newsletter</h1>
        <div className='flex lg:max-w-[40%] w-full items-center gap-5 p-2.5 rounded-full border-slate-gray border-[1px]'>
          <input
            className='input'
            type="text" 
            placeholder='subscribe@nike.com' />
          <button className='text-white rounded-full font-montserrat text-lg leading-none bg-coral-red py-4 px-7
            '>Sign Up</button>
        </div>
     
    </section>
  )
}

export default Subscribe

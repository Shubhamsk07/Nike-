import React from 'react'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section className='flex flex-row max-lg:flex-col items-center justify-between gap-10'>
      <div className=' flex flex-1 flex-col '>
        <h1 className='text-4xl font-bold font-palanquin mb-4 '  >
          We Provide You
        <span className=' text-coral-red'> Super <br/> Quality</span> Shoes</h1>
        <p className='lg:max-w-lg text-slate-gray font-montserrat info-text'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <br/>
        <p className='lg:max-w-lg text-slate-gray font-montserrat info-text '>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='flex gap-2'><button className=' bg-coral-red text-white text-lg font-montserrat px-7 py-4 rounded-full mt-10
        max-lg:mb-6'>View details</button></div>
      </div>
      <div className='flex-1  flex justify-center items-center w-full  '>
        <img src={shoe8}
        alt='shoe collection'
        className=' object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality

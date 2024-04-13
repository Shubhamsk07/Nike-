import React from 'react'
import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className='flex justify-between gap-10 items-center
     max-lg:flex-col-reverse
    '>
      <div className='flex-1 flex justify-center items-center'>
        <img src={offer} alt=" offer" />
      </div>
      <div className='flex-1 mt-16 '>
        <h1 className='text-4xl font-bold font-palanquin '><span className='text-coral-red'>Special</span> Offer</h1>
        <p className='mt-4 leading-7 text-slate-gray font-montserrat text-lg'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <br />
        <p className='mb-11 leading-7 text-slate-gray font-montserrat text-lg'>
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='flex flex-row gap-3'>
        <Button iconURL={arrowRight} label={"Shop Now"} />
        <button className='flex mb-20 justify-center items-center rounded-full gap-2 px-7 py-4 border font-montserrat text-lg leading-none text-slate-gray border-slate-gray bg-white'>Learn More</button>
        </div>
        
      </div>
    </section>
  )
}

export default SpecialOffer

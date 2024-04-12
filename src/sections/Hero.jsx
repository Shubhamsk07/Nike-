import React from 'react'
import { arrowRight } from '../assets/icons';
import { shoes } from '../constants';
import { useState } from 'react';
import Button from '../components/Button';
import { statistics } from '../constants';
import ShoeCard from '../components/ShoeCard';
import { bigShoe1 } from '../assets/images';


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className='w-full flex  xl:flex-row flex-col justify-center min-h-screen gap-10  '>
      <div className=' relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>
        <p className='text-coral-red text-xl font-montserrat'>Our Summer collections</p>
        <h1 className='pt-10 text-8xl  font-bold font-palanquin
        max-sm:text-[69px]
        max-sm:leading-[1.1]
        '><span
            className='xl:bg-white
        xl:whitespace-nowrap
        relative z-10 max-sm:z-0 pr-10'
          >The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='text-lg leading-8 mt-6 mb-14 text-slate-gray font-montserrat'>Discover stylish Nike arrivals, quality<br /> comfort, and innovation for your active life.</p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className='flex gap-16 max-sm:justify-evenly  flex-wrap'>

          {statistics.map((item) => (
            <div key={item.label}>
              <p className='text-4xl max-sm:pt-2 font-bold font-palanquin pt-20'>{item.value}</p>
              <p className='text-md text-slate-gray leading-7   font-montserrat'>{item.label}</p>
            </div>
          ))}

        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-center bg-primary'>
        <img
          className=' object-contain relative z-10'
          src={bigShoeImg} alt="shoe collection" />
        <div className='flex sm:gap-6 gap-4 
        absolute -bottom-[5%]
        sm:left-[10%] max-sm:px-6
        '>
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe  }>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage={(shoe)=>{
                setBigShoeImg(shoe)
              }}
              bigShoeImg={bigShoeImg}/>
            </div>

          ))}

        </div>
      </div>
    </section> 
  )
}

export default Hero;

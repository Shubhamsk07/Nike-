import React from 'react'

export default function ServiceCard({imgURL,title,subtitle}) {
  return (
    <div className='flex flex-1 flex-col gap-4 max-sm:py-16 px-10 py-[64px] w-full  sm:min-w-[350px]  bg-white rounded-[20px] shadow-3xl '>
      <img src={imgURL} alt='services logo'
      className='rounded-full px-2 py-2  mb-1 bg-coral-red'
      width={40}
      height={30}
      />
      <h1 className=' font-palanquin text-3xl leading-normal font-bold'>{title}</h1>
      <p className=' info-text break-words  '>{subtitle}</p>
    </div>
  )
}

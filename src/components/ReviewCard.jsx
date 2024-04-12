import React from 'react'
import { star } from '../assets/icons'

export default function ReviewCard({imgURL,rating,reviews,name}) {
  return (
    <div className='max-w-sm flex flex-1 text-center justify-center items-center flex-col gap-2'>
      <img src={imgURL}
      alt="photo"
      className=' rounded-full'
      width={120}
      />
      <p className='info-text mt-4 max-sm:px-2 '>{reviews}</p>
      <div className='flex flex-row gap-2'>
        <img src={star} alt="star" />
        <p className='  text-slate-gray text-xl'>({rating})</p>
      </div>
      <h2 className='text-3xl font-palanquin font-bold'>{name}</h2>
    </div>
  )
}

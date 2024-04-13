import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'
const CustomerReviews = () => {
  return (
    <section className='max-container '>
      <h1 className=' font-palanquin text-center text-4xl font-bold '>What Our <span className=' text-coral-red'>Customers</span> Say?</h1>
      <p className='mt-4 info-text text-center'>Hear genuine stories from our satisfied customers about<br/> their exceptional experiences with us.</p>
      <div className='flex max-lg:flex-col items-center  flex-1 mt-24 gap-10 justify-evenly'>
        {reviews.map((item)=>(
          <ReviewCard 
          imgURL={item.imgURL} 
          name={item.customerName}
          rating={item.rating}
          reviews={item.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews

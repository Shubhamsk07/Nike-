import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'
import { truckFast } from '../assets/icons'
const Services = () => {
  return (
    <section className='flex px-8 max-sm:px-0 max-container justify-center flex-wrap gap-9 '>
      {services.map((service) => (
        
          <ServiceCard 
            imgURL={service.imgURL}
            title={service.label}
            subtitle={service.subtext}
          />
        
      ))}
      
    </section>
  )
}

export default Services

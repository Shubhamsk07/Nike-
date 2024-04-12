import React from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'
import { copyrightSign } from '../assets/icons'
const Footer = () => {
  return (
    <footer className='max-container px-6'>
    <div className='flex max-[770px]:flex-col justify-between gap-20  '>
      <div className='flex  flex-col '>
        <img src={footerLogo}
        alt="footer logo"
        width={150} />
        <p className='text-white-400 pt-8 text-base sm:max-w-sm font-montserrat leading-7 '>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
      <div className='flex gap-6 mt-7 max-w-[40%]'>
        {socialMedia.map((social)=>(
          <img 
          className='bg-white rounded-full p-3 mb-4'
          width={50}
          src={social.src}
          alt={social.alt}
          />
        ))}
      </div>
      </div>
      <div className='flex gap-20  lg:gap-10 flex-wrap justify-between flex-1'>
        
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.title}>
            <h1 className='text-white-400 mb-8 text-2xl font-medium leading-none font-montserrat'>{footerLink.title}</h1>
            <div className='flex flex-col  gap-3'>
              {footerLink.links.map((link)=>(
                <a className='text-white-400 font-montserrat  hover:text-slate-gray'
                 href={link.link}>{link.name}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='flex justify-between font-montserrat text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
      <div className=' cursor-pointer font-montserrat gap-2 flex flex-1 justify-start items-center'>
        <img src={copyrightSign} width={20} height={20} className='rounded-full m-0' alt="copyright sign" />
        <p  >Copyright. All rights reserved.</p>
      </div>
      <p className='cursor-pointer' >Terms & Conditions</p>
    </div>
    </footer>
  )
}

export default Footer

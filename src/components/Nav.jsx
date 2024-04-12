import React from 'react'
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import '../index.css';
import { cross } from "../assets/icons";
import { navLinks } from '../constants'; "../components/index.js"
import { useState } from 'react';



export default function Nav() {
    const [clicked, setClicked] = useState(false);
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className='flex-1 flex gap-16 justify-center items-center max-lg:hidden '>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className=' font-montserrat leading-normal text-slate-gray text-lg'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 max-lg:hidden font-medium font-montserrat text-lg  leading-normal wide:mr-24 '>
                    <a href="/">Sign in</a>
                    <span>/</span>
                    <a href='/'>Explore now</a>
                </div>
                <div className='hidden max-lg:block z-20 cursor-pointer' onClick={() => {
                    setClicked(!clicked);
                }} >

                    {clicked ? <div className='flex flex-col justify-end' >
                        <img src={cross}
                            alt="cross"
                            width={20}
                            height={20} />
                        <ul className='flex  absolute top-[70px] right-8 px-4 pb-2 pt-3  rounded bg-gradient-to-br flex-col justify-start my-bg'>
                            {navLinks.map((item) =>(
                                <li key={item.label}>
                                    <a href={item.href}
                                        className=' font-montserrat text-lg max-sm:leading-9 leading-10 text-white text-[12px]  '>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        </div> : 
                        <img src={hamburger}
                            alt="hamburger"
                            width={25}
                            height={20}
                    />}
                </div>
            </nav>
        </header>
    )
}

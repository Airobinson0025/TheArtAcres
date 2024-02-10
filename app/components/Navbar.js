'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCart } from 'react-icons/io5'
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import { IoSearchSharp } from "react-icons/io5";


const Navbar = () => {

    const [ dropMenu, setDropMenu ] = useState(false);

    const toggleMenu = () => {
        setDropMenu(!dropMenu)
    }

    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.2,
                delay: 0
            }
        }
    }

    

    


    return (
    <header className='flex items-center justify-between fixed w-full px-2 py-3 text-neutral-950 bg-white z-50 transtion duration-200 shadow-md shadow-neutral-800/40'>
        <h1 className='text-[1.75rem] tracking-wide uppercase font-bold cursor-pointer '>
            <Link href="/" className='font-nemek tracking-norma1 rounded-md'>Art Acres</Link>
        </h1>

        <div className='hidden lg:flex items-center justify-between pl-2 pr-2 border-2 border-neutral-950 rounded-md text-neutral-950 font-jost mx-24 flex-grow'>
            <input type='text' placeholder='Search Art' className='placeholder:text-neutral-950 bg-transparent outline-none py-2 text-[1rem]' />
            <IoSearchSharp size={22} className='hover:cursor-pointer' />
        </div>

        <nav className='hidden lg:inline rounded-md'>
            <ul className='flex items-center space-x-8 text-[1.1rem] uppercase tracking-wide font-jost font-bold'>
                
                <li className='hover:scale-105 transition duration-150 cursor-pointer'>
                    <Link href="/">Home</Link>
                </li>
                <li className='hover:scale-105 transition duration-150'>
                    <Link href="/browse">Browse</Link>
                </li>
                <li className='hover:scale-105 transition duration-150'>
                    <Link href="/login">Login</Link>
                </li>
                <li className='hover:scale-105 transition duration-150'>
                    <Link href="/signup">Sign Up</Link>
                </li>
                
                
                <div className='flex items-center justify-center space-x-1'>
                    <li className='hover:scale-105 transition duration-150'>
                        <Link href="/cart">
                            <IoCart size={28}/>
                        </Link>
                    </li>
                </div>
            
            </ul>
        </nav>

        {/* mobile menu icon */}
        <div className='lg:hidden' onClick={toggleMenu}>
            <i>
                <GiHamburgerMenu size={30} className='hover:cursor-pointer' />
            </i>
        </div>

        {/* mobile menu*/}

        <AnimatePresence >
        {
            dropMenu && ( 
            <motion.div 
            variants={item}
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: '100vh'}}
            transition={{duration:.2}}
            exit='exit'
            className='lg:hidden absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-evenly items-center font-jost font-medium text-left text-[3rem] text-neutral-950 tracking-wide w-full h-screen bg-white'>
                <div onClick={toggleMenu} className='absolute top-3 right-2'>
                    <AiFillCloseCircle size={40} color='#0a0a0a' />
                </div>



            <ul className='space-y-10'>
               <li>
                    <Link onClick={toggleMenu} href='/'>Home</Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} href='/browsse'>Browse</Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} href='/signin'>Login</Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} href='/signup'>Sign Up</Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} href='/cart'>Cart</Link>
                </li>
            </ul>

            <div className='text-center space-y-2'>
                <p className='font-nemek text-[2.5rem]'>The Art Acres</p>
                <p className='text-[1rem]'>Developed by Aaron Robinson</p>
            </div>
        </motion.div> )}
        </AnimatePresence>



    </header>
  )
}

export default Navbar
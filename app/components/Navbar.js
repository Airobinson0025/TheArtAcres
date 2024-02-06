'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCart } from 'react-icons/io5'
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'


const Navbar = () => {

    const [ dropMenu, setDropMenu ] = useState(false);
    const [ color, setColor ] = useState('')
    const [ textColor, setTextColor ] = useState('')
    const [ boxShadow, setBoxShadow ] = useState('')

    const toggleMenu = () => {
        setDropMenu(!dropMenu)
    }

    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0
            }
        }
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 25) {
                setColor('white')
                setTextColor('#0a0a0a')
                setBoxShadow('0 4px 2px -2px rgba(0,0,0,.2)')
            } else {
                setColor('')
                setTextColor('')
                setBoxShadow('0 0px 0px -0px rgba(0,0,0,0)')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])



  return (
    <header style={{backgroundColor: `${color}`, color: `${textColor}`, boxShadow: `${boxShadow}`}} className='flex items-center justify-between fixed w-full p-3 text-white z-50 transtion duration-200'>
        <h1 className='text-[1.5rem] tracking-wide uppercase font-bold cursor-pointer'>
            <Link href="/" className='font-nemek tracking-normal'>Art Acres</Link>
        </h1>

        <nav className='hidden lg:inline'>
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
                            <IoCart size={30}/>
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
            transition={{duration:.3}}
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
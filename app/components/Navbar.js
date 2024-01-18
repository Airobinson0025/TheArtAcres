import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between fixed w-full p-3 text-white'>
        <h1 className='text-[1.75rem] tracking-wide uppercase font-bold'>
            <Link href="/" className='font-nemek tracking-normal'>Art Acres</Link>
        </h1>

        <nav className='hidden md:inline'>
            <ul className='flex items-center space-x-8 text-[1.2rem] uppercase tracking-wide font-work font-bold'>
                <li className='hover:scale-105 transition duration-150'>
                    <Link href="/about">About</Link>
                </li>
                <li className='hover:scale-105 transition duration-150'>
                    <Link href="/browse">Browse</Link>
                </li>
                <li className='hover:scale-105 transition duration-150'>
                    <Link href="/login">Login</Link>
                </li>
            </ul>
        </nav>

        <div className='md:hidden'>
            <i>
                <GiHamburgerMenu size={32} className='hover:cursor-pointer' />
            </i>
        </div>

    </header>
  )
}

export default Navbar
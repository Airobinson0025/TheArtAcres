import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCart, IoSearchCircle } from 'react-icons/io5'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between fixed w-full p-3 text-white z-50'>
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
                            <IoCart size={30} color='white' />
                        </Link>
                    </li>
                </div>
            
            </ul>
        </nav>

        {/* mobile menu icon */}
        <div className='lg:hidden'>
            <i>
                <GiHamburgerMenu size={30} className='hover:cursor-pointer' />
            </i>
        </div>

    </header>
  )
}

export default Navbar
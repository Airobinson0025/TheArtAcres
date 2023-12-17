import React from 'react'
import { FaEye } from 'react-icons/fa'

const SignUp = () => {
  return (
    <div className='bg-neutral-950 h-screen flex flex-col items-center justify-center'>
        <div>
            <h1 className='font-nemek text-[2.5rem] md:text-[3rem] text-white my-8'>Create Account</h1>
        </div>
        <section className='w-full sm:max-w-[600px] px-8'>
            <form type='sumbit' className='flex flex-col space-y-4 font-rethink text-white'>
                <label 
                className='text-xl md:text-2xl font-nemek tracking-widest'>Name:</label>
                <input 
                className='bg-neutral-950 outline-none border-2 border-white py-1 pl-2 text-lg rounded-md' 
                type='email'
                placeholder='Full Name' 
                required />
                
                <label
                className='text-xl md:text-2xl font-nemek tracking-widest'>Email:</label>
                <input 
                className='bg-neutral-950 outline-none border-2 border-white py-1 pl-2 text-lg rounded-md'
                type='email'
                placeholder='Example123@gmail.com' 
                required />
                
                <label
                className='text-xl md:text-2xl font-nemek tracking-widest'>Username:</label>
                <input
                className='bg-neutral-950 outline-none border-2 border-white py-1 pl-2 text-lg rounded-md'
                type='email'
                placeholder='Enter a username' 
                required />
                
                <label
                className='text-xl md:text-2xl font-nemek tracking-widest'>Password:</label>
                <div className='flex justify-between items-center border-2 border-white py-1 pl-2 rounded-md'>
                <input
                className='bg-neutral-950 outline-none text-lg' 
                type='password'
                placeholder='Password' 
                required />
                <FaEye size={22} color='white' className='mr-3' />
                </div>
            </form>

            <div className='text-center mt-10'>
                <button className='border-2 border-white py-2 px-6 rounded-md font-rethink font-semibold text-lg text-white uppercase tracking-wider hover:bg-white hover:text-neutral-950 hover:scale-105 transition duration-200'>Sign Up</button>
            </div>
        </section>
    </div>
  )
}

export default SignUp

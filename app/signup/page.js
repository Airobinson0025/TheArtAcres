'use client'
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'

const SignUp = () => {
    
    const [ togglePassword, setTogglePassword ] = useState(false)
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleTogglePassword = () => {
        setTogglePassword(!togglePassword)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const response = fetch('api/user', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({ name, email, username, password })
            })
            if(response.ok) {
                console.log("User created successfully:", response)
                
            }
        
        } catch (error) {

            console.error(error)
            
        }

        setName('')
        setEmail('')
        setUsername('')
        setPassword('')
    }
       

    
  return (
    <div className='bg-neutral-950 h-screen flex flex-col items-center justify-center'>
        <div>
            <h1 className='font-nemek text-[2rem] md:text-[2.25rem] text-white my-14 md:mt-20 signup-header'>Create Account</h1>
        </div>
        <section className='w-full sm:max-w-[600px] px-8'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4 font-rethink text-white'>
                
                <label 
                className='text-[#AF4923] text-xl md:text-2xl font-nemek tracking-wider signup-label'>Name:</label>
                <input 
                className='bg-neutral-950 outline-none border-2 border-white py-1 pl-2 text-md md:text-[1.1rem] tracking-wide rounded-md ' 
                type='name'
                placeholder='Full Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                 />
                
                <label
                className='text-[#AF4923] text-xl md:text-2xl font-nemek tracking-wider signup-label'>Email:</label>
                <input 
                className='bg-neutral-950 outline-none border-2 border-white py-1 pl-2 text-md md:text-[1.1rem] tracking-wide rounded-md '
                type='email'
                placeholder='Valid Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                 />
                
                <label
                className='text-[#AF4923] text-xl md:text-2xl font-nemek tracking-wider signup-label'>Username:</label>
                <input
                className='bg-neutral-950 outline-none border-2 border-white py-1 pl-2 text-md md:text-[1.1rem] tracking-wide rounded-md '
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
                 />
                
                <label
                className='text-[#AF4923] text-xl md:text-2xl font-nemek tracking-wider signup-label'>Password:</label>
                
                <div className='flex justify-between items-center border-2 border-white py-1 pl-2 rounded-md '>
                <input
                className='bg-neutral-950 outline-none text-md md:text-[1.1rem] tracking-wide' 
                type={ togglePassword ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                 />
                <i onClick={handleTogglePassword}>
                    { togglePassword ? <FaEyeSlash size={22} color='white' className='mr-3' /> : <FaEye size={22} color='white' className='mr-3'/>}
                </i>
                </div>

                <label
                className='text-[#AF4923] text-xl md:text-2xl font-nemek tracking-wider signup-label'>Confirm Password:</label>
                
                <div className='flex justify-between items-center border-2 border-white py-1 pl-2 rounded-md '>
                <input
                className='bg-neutral-950 outline-none text-md md:text-[1.1rem] tracking-wide' 
                type={ togglePassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                required 
                 />
                <i onClick={handleTogglePassword}>
                    { togglePassword ? <FaEyeSlash size={22} color='white' className='mr-3' /> : <FaEye size={22} color='white' className='mr-3'/>}
                </i>
                </div>

                

                <div className='text-center pt-5'>
                    <button type='submit' className='border-2 border-white py-2 px-6 rounded-md font-rethink font-semibold text-[1.1rem] text-white uppercase tracking-wider hover:bg-white hover:text-neutral-950 hover:scale-55 transition duration-200 shadow-lg shadow-black'>Sign Up</button>
                </div>
            
            </form>
        </section>
    </div>
  )
}

export default SignUp

'use client';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
        setTogglePassword(!togglePassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
        } catch (error) {
            console.error(error);
        }

        setEmail('');
        setPassword('');
    };

    return (
        <div className='bg-neutral-950 h-screen flex flex-col items-center justify-center'>
            <div>
                <h1 className='font-nemek text-[2rem] md:text-[2rem] text-white mb-10 md:mt-20 signup-header'>
                    Create Account
                </h1>
            </div>
            <section className='w-full sm:max-w-[600px] px-8'>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-4 font-rethink text-white'>
                    <label className='text-[#AF4923] text-xl md:text-xl font-nemek tracking-widest signup-label'>
                        Email:
                    </label>
                    <input 
                        className='bg-neutral-950 outline-none border-2 border-white py-1 pl-2 text-md md:text-[1.1rem] tracking-wide rounded-md'
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label className='text-[#AF4923] text-xl md:text-xl font-nemek tracking-widest signup-label'>
                        Password:
                    </label>
                    <div className='flex justify-between items-center border-2 border-white py-1 pl-2 rounded-md'>
                        <input 
                            className='bg-neutral-950 outline-none text-md md:text-[1.1rem] tracking-wide'
                            type={togglePassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <i onClick={handleTogglePassword} className='cursor-pointer'>
                            {togglePassword ? <FaEyeSlash size={22} color='white' className='mr-3' /> : <FaEye size={22} color='white' className='mr-3' />}
                        </i>
                    </div>

                    <div className='text-center pt-8'>
                        <button type='submit' className='border-2 border-white py-2 px-6 rounded-md font-rethink font-semibold text-[1rem] text-white uppercase tracking-wider hover:bg-white hover:text-neutral-950 hover:scale-55 transition duration-200 shadow-lg shadow-black'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SignUp;

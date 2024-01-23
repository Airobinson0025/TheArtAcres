'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaCircleXmark, FaCircleCheck } from 'react-icons/fa6'

const SignUp = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState({
        minLength: false,
        specialChar: false
    });

    const handleTogglePassword = () => {
        setTogglePassword(!togglePassword);
    };

    const updatePassword = (newPassword) => {
        setPassword(newPassword);
        setPasswordValidation({
            minLength: newPassword.length >= 8,
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
        });
    };

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!passwordValidation.minLength || !passwordValidation.specialChar) {
            alert('Password must meet all requirements.');
            return;
        }

    
        try {
            const response= await fetch('api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            if(response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token)
                router.push('/account')
            } 

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='h-screen flex flex-col items-center justify-center bg-cover bg-center acres-signup'>
            <div>
                <h1 className='font-nemek text-[2rem] sm:text-[2.3rem] text-white mb-12 signup-header md:mt-14'>
                    Become a memeber
                </h1>
            </div>
            
            <section className='w-full sm:max-w-[580px] px-8'>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-4 font-work text-white'>
                    <label className='text-white text-xl md:text-2xl font-nemek tracking-widest signup-label'>Email:</label>
                    <input 
                        className='bg-transparent outline-none border-2 border-white py-1 pl-2 text-lg md:text-[1.2rem] placeholder:text-neutral-500 tracking-wide rounded-md'
                        type='email'
                        placeholder='Enter Valid Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label className='text-white text-xl md:text-2xl font-nemek tracking-widest signup-label'>Password:</label>
                    <div className='flex justify-between items-center border-2 border-white py-1 pl-2 rounded-md'>
                        <input 
                            className='bg-transparent outline-none text-lg md:text-[1.2rem] placeholder:text-neutral-500 tracking-wide'
                            type={togglePassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => updatePassword(e.target.value)}
                            required 
                        />
                        <i onClick={handleTogglePassword} className='cursor-pointer'>
                            {togglePassword ? <FaEyeSlash size={22} color='white' className='mr-3' /> : <FaEye size={22} color='white' className='mr-3' />}
                        </i>
                    </div>
                    
                    <div className='text-[1rem] md:text-[1.1rem] text-center space-y-2 pt-6'>
                        <p>Must be at least 8 characters long: {passwordValidation.minLength ? <FaCircleCheck size={19} className='inline ' color='#5FD85F'/> : <FaCircleXmark size={19} className='inline' color='white'/>}</p>
                        <p>Must include one special character: {passwordValidation.specialChar ? <FaCircleCheck size={19} className='inline' color='#5FD85F'/> : <FaCircleXmark size={19} className='inline' color='white'/>}</p>
                    </div>

                    <div className='text-center pt-8'>
                        <button type='submit' className='border-2 border-white py-2 px-6 rounded-md font-rethink font-semibold text-[1.1rem] text-white uppercase tracking-wider hover:bg-white hover:text-neutral-950 hover:scale-55 transition duration-200 shadow-lg shadow-black'>
                            create
                        </button>
                    </div>
                
                </form>
            </section>
        
        </div>
    );
};

export default SignUp;

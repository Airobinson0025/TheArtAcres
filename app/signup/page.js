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
                <h1 className='font-nemek text-[2.0rem] text-neutral-950 mb-14 signup-header md:mt-24'>
                    Become a memeber
                </h1>
            </div>
            
            <section className='w-full sm:max-w-[500px] px-8'>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-4 font-jost font-medium text-neutral-950'>
                    <label className='text-neutral-950 text-xl md:text-xl font-jost tracking-wide signup-label'>Email:</label>
                    <input 
                        className='bg-transparent backdrop-blur-xl outline-none border-2 border-neutral-950 py-1 pl-2 text-[1.1rem] md:text-[1.2rem] placeholder:text-neutral-950 tracking-wide rounded-md shadow-lg shadow-neutral-950/80'
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label className='text-neutral-950 text-xl md:text-xl font-jost font-medium tracking-wide signup-label'>Password:</label>
                    <div className='flex justify-between items-center border-2 border-neutral-950 py-1 pl-2 rounded-md bg-transparent backdrop-blur-lg shadow-lg shadow-neutral-950/80'>
                        <input 
                            className='bg-transparent backdrop-blur-xl outline-none text-[1.1rem] md:text-[1.2rem] placeholder:text-neutral-950 tracking-wide'
                            type={togglePassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => updatePassword(e.target.value)}
                            required 
                        />
                        <i onClick={handleTogglePassword} className='cursor-pointer'>
                            {togglePassword ? <FaEyeSlash size={22} color='neutral-950' className='mr-3' /> : <FaEye size={22} color='neutral-950' className='mr-3' />}
                        </i>
                    </div>
                    
                    <div className='text-[1rem] md:text-[1.1rem] text-center space-y-2 pt-6'>
                        <p>Must be at least 8 characters long: {passwordValidation.minLength ? <FaCircleCheck size={20} className='inline ' color='#5FD85F'/> : <FaCircleXmark size={20} className='inline' color='neutral-950'/>}</p>
                        <p>Must include one special character: {passwordValidation.specialChar ? <FaCircleCheck size={20} className='inline' color='#5FD85F'/> : <FaCircleXmark size={20} className='inline' color='neutral-950'/>}</p>
                    </div>

                    <div className='text-center pt-8'>
                        <button type='submit' className='bg-white border-2 border-neutral-950 py-2 px-6 rounded-md font-jost font-semibold text-[1.rem] text-neutral-950 uppercase tracking-wider hover:bg-neutral-950 hover:text-white hover:scale-55 transition duration-200 shadow-lg shadow-neutral-950/80'>
                            create
                        </button>
                    </div>
                
                </form>
            </section>
        
        </div>
    );
};

export default SignUp;

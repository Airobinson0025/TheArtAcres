'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const AccountInfo = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');

    return (
        <div className='flex flex-col items-center bg-cover bg-center text-white h-[1400px] acres-account'>
            <div className='pt-44 sm:pl-10 text-center font-nemek text-[2.5rem]'>
                <h1 className='account-info-header'>Account Info</h1>
            </div>

  
            <form className='flex flex-col w-[400px] sm:w-[500px] md:w-[600px] pt-14 px-2 space-y-[12px] font-work text-[1.1rem]'>
                {/* Name Input */}
                <label className='font-nemek md:text-[1.4rem] tracking-wider text-xl uppercase account-info-label'>Name</label>
                <input 
                    placeholder='Full Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-200 py-1 px-2'/>

                {/* Username Input */}
                <label className='font-nemek md:text-[1.4rem] tracking-wider text-xl uppercase account-info-label'>Username</label>
                <input 
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-200 py-1 px-2' />
                
                {/* Contact Number Input */}
                <label className='font-nemek md:text-[1.4rem] tracking-wider text-xl uppercase account-info-label'>Contact Number</label>
                <input 
                    placeholder='(123) 456-7890'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-200 py-1 px-2' />

                {/* Bio Input */}
                <label className='font-nemek md:text-[1.4rem] tracking-wider uppercase account-info-label'>Bio</label>
                <textarea 
                    name="bio" 
                    id="bio" 
                    rows="4" 
                    cols="50" 
                    maxLength="250" 
                    placeholder="Tell us about yourself (Max 250 characters)" 
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-200 py-1 px-2' />

                {/* Address Input */}
                <label className='font-nemek md:text-[1.4rem] tracking-wider text-xl uppercase account-info-label'>Address</label>
                <input 
                    placeholder='Address Line'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-200 py-1 px-2' />

                {/* Birthday Input */}
                <label className='font-nemek md:text-[1.4rem] tracking-wider text-xl uppercase account-info-label'>Birthday</label>
                <input 
                    placeholder='MM/DD/YYYY'
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-200 py-1 px-2' />

                {/* Other fields and submit button can go here */}
            </form>
        </div>
    );
}

export default AccountInfo;

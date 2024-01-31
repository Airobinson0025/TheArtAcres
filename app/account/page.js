'use client'
import React, { useState } from 'react';

const AccountInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');

    return (
        <div className='flex flex-col items-center bg-cover bg-center text-white h-[1400px] acres-account bg-fixed'>
            <div className='pt-44 sm:pl-10 text-center font-nemek text-[2.5rem]'>
                <h1 className='account-info-header'>Account Info</h1>
            </div>

  
            <form className='flex flex-col w-[400px] sm:w-[500px] md:w-[600px] pt-14 px-2 space-y-3 font-jost text-[1.1rem]'>
                {/* Name Input */}
                <label className='font-jost md:text-[1.3rem] tracking-wider text-xl account-info-label'>First Name</label>
                <input 
                    placeholder=''
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-400 py-1 px-2 tracking-wider shadow-lg shadow-neutral-950/80'/>

                <label className='font-jost md:text-[1.3rem] tracking-wider text-xl account-info-label'>Last Name</label>
                <input 
                    placeholder=''
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-400 py-1 px-2 tracking-wider shadow-lg shadow-neutral-950/80'/>

                {/* Username Input */}
                <label className='font-jost md:text-[1.3rem] tracking-wider text-xl account-info-label'>Username</label>
                <input 
                    placeholder='Choose A Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-400 py-1 px-2 tracking-wider shadow-lg shadow-neutral-950/80' />
                
                {/* Contact Number Input */}
                <label className='font-jost md:text-[1.3rem] tracking-wider text-xl account-info-label'>Contact Number</label>
                <input 
                    placeholder='(123) 456-7890'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-400 py-1 px-2 tracking-wider shadow-lg shadow-neutral-950/80' />

                {/* Bio Input */}
                <label className='font-jost md:text-[1.3rem] tracking-wider account-info-label'>Bio</label>
                <textarea 
                    name="bio" 
                    id="bio" 
                    rows="4" 
                    cols="50" 
                    maxLength="250" 
                    placeholder="Tell us about yourself (Max 250 characters)" 
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-400 py-1 px-2 tracking-wider shadow-lg shadow-neutral-950/80' />

                {/* Address Input */}
                <label className='font-jost md:text-[1.3rem] tracking-wider text-xl account-info-label'>Address</label>
                <input 
                    placeholder='Address Line'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-400 py-1 px-2 tracking-wider shadow-lg shadow-neutral-950/80' />

                {/* Birthday Input */}
                <label className='font-jost md:text-[1.3rem] tracking-wider text-xl account-info-label'>Birthday</label>
                <input 
                    placeholder='MM/DD/YYYY'
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)} 
                    className='bg-transparent backdrop-blur-xl border-2 border-white outline-none rounded-md placeholder:text-neutral-400 py-1 px-2 tracking-wider shadow-lg shadow-neutral-950/80' />

                {/* Other fields and submit button can go here */}
            </form>
        </div>
    );
}

export default AccountInfo;

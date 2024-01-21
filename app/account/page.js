import React from 'react'

const page = () => {
  return (
    <div className='bg-neutral-950 text-white h-[1400px]'>
      <div className='pt-44 pl-10 font-nemek text-[2.5rem]'>
        <h1>Account Info</h1>
      </div>
      
      <form className='flex flex-col max-w-[600px] pt-14 pl-10 space-y-3 font-work text-[1.1rem]'>
        <label className='font-nemek text-[1.4rem] tracking-wider text-xl uppercase'>Name</label>
        <input placeholder='Full Name' className='bg-transparent border-2 border-white outline-none rounded-md py-1 pl-2'/>

        <label className='font-nemek text-[1.4rem] tracking-wider text-xl uppercase'>Username</label>
        <input placeholder='Pick a username' className='bg-transparent border-2 border-white outline-none rounded-md py-1 pl-2' />
        
        <label className='font-nemek text-[1.4rem] tracking-wider text-xl uppercase'>Contact Number</label>
        <input placeholder='(123) 456-7890' className='bg-transparent border-2 border-white outline-none rounded-md py-1 pl-2' />

        <label className='font-nemek text-[1.4rem] tracking-wider uppercase'>Bio</label>
        <textarea name="bio" id="bio" rows="4" cols="50" maxLength="250" placeholder="Tell us about yourself ( Max 250 characters )" className='bg-transparent border-2 border-white outline-none rounded-md py-1 pl-2' />

        <label className='font-nemek text-[1.4rem] tracking-wider text-xl uppercase'>Address</label>
        <input placeholder='Address Line' className='bg-transparent border-2 border-white outline-none rounded-md py-1 pl-2' />

        
      </form>
    </div>
  )
}

export default page
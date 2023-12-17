import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col items-start sm:items-center justify-center h-screen bg-cover bg-center banner text-white px-10'>
        <h1 className='uppercase text-[4.75rem] sm:text-[4rem] lg:text-[4.75rem] font-nemek tracking-normal'>The <br className='sm:hidden'/>Art <br className='sm:hidden'/> Acres</h1>
        <h2 className='hidden sm:inline sm:text-[1.5rem] font-bold font-rethink uppercase tracking-wider'>where creativity finds a home</h2>
        

        <nav className='space-x-4 pt-4 font-rethink'>
            <a href='/browse'>
                <button className='text-[1.1rem] font-semibold uppercase tracking-widest py-2 px-4  sm:px-6 rounded-md border-2 border-white bg-transparent backdrop-blur-xl text-white hover:bg-white hover:text-[#040301] transition duration-300 shadow-lg shadow-black/70'>browse</button>
            </a>
            <a href='/signup'>
                <button className='text-[1.1rem] font-semibold uppercase tracking-widest py-2 px-4  sm:px-6 rounded-md border-2 border-white bg-transparent backdrop-blur-xl text-white hover:bg-white hover:text-[#040301]  transition duration-300 shadow-lg shadow-black/70'>sign up</button>
            </a>
        </nav>

    </div>
  )
}

export default Banner
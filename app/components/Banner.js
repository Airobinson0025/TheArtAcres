import React from 'react'

const Banner = () => {
  return (
  <div>
      <div className='flex flex-col space-y-3 items-start sm:items-center justify-center h-[750px] sm:h-[600px] bg-cover bg-center banner text-white px-10'>
        <h1 className='uppercase text-[4.75rem] sm:text-[4rem]  font-nemek tracking-wide banner-heading'>The <br className='sm:hidden'/>Art <br className='sm:hidden'/> Acres</h1>
        <h2 className='text-[1.4rem] sm:text-[1.5rem] font-bold font-rethink uppercase tracking-widest leading-10 sm:leading-none banner-subheading'>where creativity <br className='sm:hidden' /> finds a home</h2>
        

        <nav className='space-x-6 pt-6 font-rethink'>
            {/* <a href='/login'>
                <button className='text-[1rem] font-semibold uppercase tracking-widest py-2 px-4  sm:px-6 rounded-md border-2 border-white bg-transparent backdrop-blur-xl text-white hover:bg-white hover:text-[#040301] transition duration-200 shadow-lg shadow-black/70 banner-nav'>login</button>
            </a> */}
            <a href='/signup'>
                <button className='text-[1rem] font-semibold uppercase tracking-widest py-2 px-4  sm:px-6 rounded-md border-2 border-white bg-transparent backdrop-blur-xl text-white hover:bg-white hover:text-[#040301]  transition duration-200 shadow-lg shadow-black/70 banner-nav'>start your journey</button>
            </a>
        </nav>
    </div>
  </div>
  )
}

export default Banner
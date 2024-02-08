import React from 'react';
import { IoSearchCircle } from 'react-icons/io5';


const Banner = () => {
  return (
    <div className='relative h-[750px] md:h-[650px] flex items-center justify-center'>
      {/* Background Video */}
      <video playsInline autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover -z-10'>
        <source src='/acres-banner-vid.mp4' type='video/mp4' />
      </video>
      
      {/* Text Content Centered Over Video */}
      <div className='z-10 text-white text-left pl-8 sm:pl-0 sm:text-center sm:space-y-2 pt-12'>
        <h1 className='uppercase text-[4.25rem] sm:text-[3.75rem] font-nemek tracking-wider banner-heading'>
          The <br className='sm:hidden'/> Art Acres
        </h1>
        <h2 className='text-[1.2rem] sm:text-[1.2rem] font-bold font-jost uppercase tracking-widest leading-10 sm:leading-none banner-subheading'>
          where creativity <br className='sm:hidden' /> finds a home
        </h2>
        
        
        <nav className='space-x-6 pt-6 font-jost'>
          <a href='/signup'>
            <button className='text-[.9rem] font-semibold uppercase tracking-widest py-2 px-4 sm:px-6 rounded-md border-2 border-white bg-transparent backdrop-blur-2xl hover:bg-white hover:text-[#040301] transition duration-200 shadow-md shadow-black/50'>
              start your journey
            </button>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Banner;


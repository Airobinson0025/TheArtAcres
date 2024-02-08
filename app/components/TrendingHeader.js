import React from 'react'
import Link from 'next/link'

const TrendingHeader = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mx-10 mt-8 mb-12 text-center'>
            <h1 className='font-jost font-bold text-[3rem] sm:text-[2.25rem] text-neutral-950 tracking-wider uppercase '>Today&apos;s <br className='sm:hidden'/> Trending <br className='sm:hidden'/> Art</h1>
            <Link href='/browse' className='hidden md:inline'>
                <button className='py-2 px-4 bg-netural-950 border-2 border-neutral-950 font-jost font-medium text-neutral-950 hover:bg-neutral-950 hover:text-white transition duration-200 rounded-md tracking-wide uppercase text-sm'>View All</button>
            </Link>
        </div>
    </div>
  )
}

export default TrendingHeader
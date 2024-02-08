'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const ViewArt = () => {
  const search = useSearchParams()
  const  title = search.get('title')
  const price = search.get('price')
  const sellerNote = search.get('sellerNote')
  const image = search.get('image')
  const artist = search.get('artist')

 

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center h-screen lg:pt-0 space-y-10 lg:space-y-0 lg:space-x-10'>
      <section className='relative w-[370px] h-[400px] md:w-[420px] md:h-[410px] lg:w-[440px] lg:h-[480px]'>
        <div className='absolute inset-0'>
          <Image src={image} layout='fill' objectFit='cover' alt='art' className='rounded-md' />
        </div>
      </section>

      <section className='max-w-[380px] pl-0 lg:pl-14'>
        <div className='flex flex-col items-start font-jost space-y-4'>
          <h1 className='font-medium text-[2.5rem] md:text-[3rem]'>{title}</h1>
          <p className='text-[1.5rem]'>${price}</p>
          <p className='text-[1.2rem] font-medium'>Created By: {artist}</p>
          <p className='tracking-wide'>Artist&apos;s Note: {sellerNote}</p>
          <Link href='/cart'>
            <button className='font-jost text-sm text-white uppercase tracking-wider bg-neutral-950 py-2 px-4 border-2 border-neutral-900 rounded-md hover:bg-white hover:text-neutral-950 transition duration-200 mt-2'>
              Add to Cart
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ViewArt
import React from 'react'
import Image from 'next/image'

const ArtsCard = ({image, title, price}) => {
  return (
    <div className='py-3 sm:my-0 flex flex-col items-start'>
        <div className=''>
            <Image src={image} width={325} height={300} alt='art' />
        </div>
        <p className='font-jost font-medium text-[1.4rem] tracking-wide pt-3'>{title}</p>
        <h2 className='font-jost text-[1.2rem] tracking-wide'>${price}</h2>
        <button className='font-jost text-[1.rem] text-white uppercase tracking-wider bg-neutral-950 py-1 px-4 border-2 border-neutral-900 rounded-md hover:bg-white hover:text-neutral-950 transition duration-200 mt-2'>View</button>
    </div>
  )
}

export default ArtsCard
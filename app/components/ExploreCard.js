import React from 'react'
import Image from 'next/image'

const ExploreCard = ({img, title}) => {
  return (
    <div className='hover-pointer hover:scale-95 transition transform duration-300 ease-out'>
        <div className='relative h-[480px] w-[360px] md:w-[300px] md:h-[420px] xl:h-[480px] xl:w-[360px]'>
            <Image src={img} layout='fill' alt='img'className='rounded-xl'/>
        </div>
        <h3 className='font-jost font-medium text-[1.6rem] mt-3 tracking-wide'>{title}</h3>
    </div>
  )
}

export default ExploreCard
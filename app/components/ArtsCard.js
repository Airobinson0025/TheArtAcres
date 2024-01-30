import React from 'react';
import Image from 'next/image';

const ArtsCard = ({ image, title, price }) => {
  return (
    <div className='flex flex-col'>
      <section className='relative w-[310px] h-[390px] md:w-[300px] md:h-[350px] lg:w-[220px] lg:h-[280px] xl:w-[270px]'>
        <div className='absolute inset-0'>
          <Image src={image} layout='fill' objectFit='cover' sizes='100vw' alt='art' className='rounded-md' />
        </div>
      </section>

      <div className='p-4 text-center sm:text-left'>
        <p className='font-jost font-medium text-xl tracking-wide mb-2'>{title}</p>
        <h2 className='font-jost text-lg tracking-wide'>${price}</h2>
        <button className='font-jost text-sm text-white uppercase tracking-wider bg-neutral-950 py-1 px-4 border-2 border-neutral-900 rounded-md hover:bg-white hover:text-neutral-950 transition duration-200 mt-2'>
          View
        </button>
      </div>
    </div>
  );
};

export default ArtsCard;

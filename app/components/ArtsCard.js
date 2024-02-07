'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const ArtsCard = ({ image, title, price, sellerNote }) => {
  const router = useRouter();
  
  const viewArt = () => {
    const pathname = '/viewart';
    const queryParams = { title:title, price:price, image:image, sellerNote:sellerNote };

    const url = new URL(pathname, window.location.origin);
    url.search = new URLSearchParams(queryParams).toString();

    // Use router.push to navigate to the new page with the specified pathname and query parameters
    router.push(url.toString());
  }
  
return (
    <div className='flex flex-col'>
      <section className='relative w-[340px] h-[390px] md:w-[300px] md:h-[350px] lg:w-[220px] lg:h-[250px] xl:w-[270px]'>
        <div className='absolute inset-0 '>
          <Image src={image} layout='fill' objectFit='cover' sizes='100vw' alt='art' className='hover:scale-95 transition duration-300 rounded-md' />
        </div>
      </section>

      <div className='mt-3 text-center sm:text-left'>
        <p className='font-jost font-medium text-xl tracking-wide mb-2'>{title}</p>
        <h2 className='font-jost text-lg tracking-wide'>${price}</h2>
        <button onClick={viewArt} className='font-jost text-sm text-white uppercase tracking-wider bg-neutral-950 py-1 px-4 border-2 border-neutral-900 rounded-md hover:bg-white hover:text-neutral-950 transition duration-200 mt-2'>
        View
       </button>
        
      </div>
    </div>
  );
};

export default ArtsCard;

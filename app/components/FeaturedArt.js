import React from 'react'
import ArtsCard from './ArtsCard'
import Link from 'next/link'

const arts = [
  {
      id: '1',
      title: "Miami Summer",
      price: "200.99",
      image: "https://images.unsplash.com/photo-1599753894977-bc6c162417e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhcnR8ZW58MHx8MHx8fDA%3D",
      sellerNote: "This painting captures the vibrant spirit of Miami summers. Perfect for adding a pop of color to any space."
  },
  {
      id: '2',
      title: "Flower Vase",
      price: "114.99",
      image: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
      sellerNote: "A beautiful vase that adds elegance to any room. Its simplicity brings tranquility to your home."
  },
  {
      id: '3',
      title: "Broken Heart",
      price: "169.99",
      image: "https://images.unsplash.com/photo-1604367233962-bce0799fbe9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
      sellerNote: "An emotional piece that reflects the pain and healing process of a broken heart. Each stroke tells a story."
  },
  {
      id: '4',
      title: "Crowded Street",
      price: "245.99",
      image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
      sellerNote: "A bustling street scene captured in vivid detail. Feel the energy of the city in every brushstroke."
  },
  {
      id: '5',
      title: "Cat Portrait",
      price: "75.99",
      image: "https://images.unsplash.com/photo-1550532422-378e93ec379c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sellerNote: "An adorable portrait capturing the unique personality of your feline friend. A purrfect addition to any cat lover's home."
  },
  {
      id: '6',
      title: "Donut Shop",
      price: "400.99",
      image: "https://images.unsplash.com/photo-1545050814-0a22f900193e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxhcnR8ZW58MHx8MHx8fDA%3D",
      sellerNote: "Indulge in the sweetness of life with this delightful depiction of a bustling donut shop. Each pastry is a work of art!"
  },
  {
      id: '7',
      title: "The Motherboard",
      price: "209.99",
      image: "https://images.unsplash.com/photo-1533158628620-7e35717d36e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk1fHxhcnR8ZW58MHx8MHx8fDA%3D",
      sellerNote: "A futuristic artwork inspired by the intricate designs of a computer motherboard. Dive into the world of technology and creativity."
  }
];


const FeaturedArt = () => {
  return (
    <div className='mx-7 flex flex-col items-center'>
        
        <div className='flex items-center justify-center md:justify-between mt-8 mb-14 text-center w-full'>
            <h1 className='font-jost font-bold text-[3rem] sm:text-[2.25rem] text-neutral-950 tracking-wider uppercase '>Today&apos;s <br className='sm:hidden'/> Trending <br className='sm:hidden'/> Art</h1>
            <Link href='/browse' className='hidden md:inline'>
                <button className='py-2 px-4 bg-red-700 border-2 border-red-700 font-jost font-medium text-white hover:bg-white hover:text-red-700 transition duration-200 rounded-md tracking-wide uppercase text-sm'>View All</button>
            </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-14 justify-center items-center'>
          {arts.map((art) => (
            <ArtsCard
            key={art.id}
            id={art.id}
            image={art.image}
            title={art.title}
            price={art.price}
            sellerNote={art.sellerNote} />
          ))}
        </div>
    
    </div>
  )
}

export default FeaturedArt
  
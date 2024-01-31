import React from 'react'
import ArtsCard from './ArtsCard'
import Link from 'next/link'

const arts = [
    {
        id:'1',
        title: "Miami Summer",
        price: "200.99",
        image: "https://images.unsplash.com/photo-1599753894977-bc6c162417e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhcnR8ZW58MHx8MHx8fDA%3D"
    },
    { 
      id:'2',
      title: "My Vase",
      price: "114.99",
      image: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id:'3',
    title: "Broken Heart",
    price: "169.99",
    image: "https://images.unsplash.com/photo-1604367233962-bce0799fbe9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
},
{ 
  id:'4',
  title: "Crowded Street",
  price: "245.99",
  image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
},
{ 
  id:'4',
  title: "Cat Portrait",
  price: "75.99",
  image: "https://images.unsplash.com/photo-1550532422-378e93ec379c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{ 
  id:'4',
  title: "Hungry Cop",
  price: "400.99",
  image: "https://images.unsplash.com/photo-1545050814-0a22f900193e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxhcnR8ZW58MHx8MHx8fDA%3D"
},
{ 
  id:'4',
  title: "The Motherboard",
  price: "209.99",
  image: "https://images.unsplash.com/photo-1533158628620-7e35717d36e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk1fHxhcnR8ZW58MHx8MHx8fDA%3D"
}

]

const FeaturedArt = () => {
  return (
    <div className='mx-7 flex flex-col items-center'>
        
        <div className='flex items-center justify-center md:justify-between mt-8 mb-14 text-center w-full'>
            <h1 className='font-jost font-bold text-[3rem] sm:text-[2.5rem] text-neutral-950 tracking-wider uppercase '>Today&apos;s <br className='sm:hidden'/> Featured <br className='sm:hidden'/> Art</h1>
            <Link href='/browse' className='hidden md:inline'>
                <button className='py-2 px-4 bg-red-700 border-2 border-red-700 font-jost font-medium text-white hover:bg-white hover:text-red-700 transition duration-200 rounded-md tracking-wide uppercase text-sm'>View All</button>
            </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14 justify-center items-center'>
          {arts.map((art) => (
            <ArtsCard
            key={art.id}
            image={art.image}
            title={art.title}
            price={art.price} />
          ))}
        </div>
    
    </div>
  )
}

export default FeaturedArt
  
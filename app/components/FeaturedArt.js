import React from 'react'
import ArtsCard from './ArtsCard'

const arts = [
    {
        id:'1',
        title: "Miami Summer",
        price: "200.99",
        image: "https://images.unsplash.com/photo-1599753894977-bc6c162417e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhcnR8ZW58MHx8MHx8fDA%3D"
    },
    { 
      id:'2',
      title: "Miami Summer",
      price: "200.99",
      image: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id:'3',
    title: "Miami Summer",
    price: "200.99",
    image: "https://images.unsplash.com/photo-1604367233962-bce0799fbe9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
},
{ 
  id:'4',
  title: "Miami Summer",
  price: "200.99",
  image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
}
]

const FeaturedArt = () => {
  return (
    <div className='px-6 flex flex-col items-center sm:items-start'>
        <div className='my-6 text-left'>
            <h1 className='font-jost font-bold text-[3rem] text-neutral-950 tracking-wider uppercase '>Featured Today</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center'>
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

import React from 'react'
import ExploreCard from './ExploreCard'

const exploreData = [
    {
        img: 'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaW50ZXJ8ZW58MHwxfDB8fHww',
        title: 'Paintings'
    },
    {
        img:'https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8MXwwfHx8MA%3D%3D',
        title: 'Photography'
    },
    {
        img: 'https://images.unsplash.com/photo-1690993660127-1a7cdd87ec9e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpZ2l0YWwlMjBpbWFnZXxlbnwwfDF8MHx8fDA%3D',
        title: 'Digital Art'
    },
    {
        img:'https://images.unsplash.com/photo-1576881941475-6c979f434f92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxzY3VscHR1cmV8ZW58MHwxfDB8fHww',
        title: 'Sculptures'
    },
    {
        img: 'https://images.unsplash.com/photo-1605117012605-b68dedd4accc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VyYW1pY3N8ZW58MHwxfDB8fHww',
        title: 'Ceramics'
    },
    {
        img: 'https://images.unsplash.com/photo-1512540452972-baac55d40ef1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGFydHxlbnwwfDF8MHx8fDA%3D',
        title: 'More'
    }
]

const Explore = () => {
  return (
    <section className='flex flex-col items-center mt-14'>
        <div className='my-8 font-jost font-bold text-[2.5rem] sm:text-[2.25rem] text-neutral-950 tracking-wider uppercase'>
            <h1>Discover Art</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 xl:gap-10'>
            {exploreData.map((data) => (
                <div key={data.id}>
                    <ExploreCard img={data.img} title={data.title} />
                </div>
            ))}
        </div>
    </section>
  )
}

export default Explore
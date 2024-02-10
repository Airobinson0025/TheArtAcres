import React from 'react'
import ArtsCard from './ArtsCard'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const arts = [
  {
      id: '1',
      title: "Miami Summer",
      price: "200.99",
      image: "https://images.unsplash.com/photo-1599753894977-bc6c162417e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhcnR8ZW58MHx8MHx8fDA%3D",
      artist: "Elena Rodriguez",
      sellerNote: "This painting captures the vibrant spirit of Miami summers. Perfect for adding a pop of color to any space."
  },
  {
      id: '2',
      title: "Flower Vase",
      price: "114.99",
      image: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
      artist: "Lucas Johnson",
      sellerNote: "A beautiful vase that adds elegance to any room. Its simplicity brings tranquility to your home."
  },
  {
      id: '3',
      title: "Broken Heart",
      price: "169.99",
      image: "https://images.unsplash.com/photo-1604367233962-bce0799fbe9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
      artist: "Sophie Martinez",
      sellerNote: "An emotional piece that reflects the pain and healing process of a broken heart. Each stroke tells a story."
  },
  {
      id: '4',
      title: "Crowded Street",
      price: "245.99",
      image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
      artist: "David Lee",
      sellerNote: "A bustling street scene captured in vivid detail. Feel the energy of the city in every brushstroke."
  },
  {
      id: '5',
      title: "Cat Portrait",
      price: "75.99",
      image: "https://images.unsplash.com/photo-1550532422-378e93ec379c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artist: "Emily Thompson",
      sellerNote: "An adorable portrait capturing the unique personality of your feline friend. A purrfect addition to any cat lover's home."
  },
  {
      id: '6',
      title: "Donut Shop",
      price: "400.99",
      image: "https://images.unsplash.com/photo-1545050814-0a22f900193e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxhcnR8ZW58MHx8MHx8fDA%3D",
      artist: "Daniel Garcia",
      sellerNote: "Indulge in the sweetness of life with this delightful depiction of a bustling donut shop. Each pastry is a work of art!"
  },
  {
      id: '7',
      title: "The Motherboard",
      price: "209.99",
      image: "https://images.unsplash.com/photo-1533158628620-7e35717d36e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk1fHxhcnR8ZW58MHx8MHx8fDA%3D",
      artist: "Olivia Brown",
      sellerNote: "A futuristic artwork inspired by the intricate designs of a computer motherboard. Dive into the world of technology and creativity."
  },
  {
      id: '8',
      title: "Abstract Ocean",
      price: "175.99",
      image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaW50aW5nc3xlbnwwfHwwfHx8MA%3D%3D",
      artist: "Sophia Nguyen",
      sellerNote: "Dive into the depths of the ocean with this captivating abstract artwork. Let the soothing hues of blue wash over you."
  },
  {
      id: '9',
      title: "Day In Venice",
      price: "129.99",
      image: "https://images.unsplash.com/photo-1518945756765-f8641d60fc0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBhaW50aW5nc3xlbnwwfHwwfHx8MA%3D%3D",
      artist: "Michael Taylor",
      sellerNote: "Capture memories in style with this vintage oil artwork. A tribute to the timeless charm of photography."
  },
 
];




const FeaturedArt = () => {
  return (
    <section className='ml-0 sm:mx-10 lg:mx-14 flex flex-col items-center md:items-start overflow-scroll scrollbar-track-transparent scrollbar-thumb-neutral-950 scrollbar-thin '>
        
        <div className='flex flex-col items-center justify-center md:flex-row space-y-14 md:space-y-0 md:space-x-10 pb-12 md:overflow-auto'>
          {arts.map((art) => (
            <ArtsCard
            key={art.id}
            id={art.id}
            image={art.image}
            title={art.title}
            price={art.price}
            artist={art.artist}
            sellerNote={art.sellerNote} />
          ))}
        </div>
    
    </section>
  )
}

export default FeaturedArt
  
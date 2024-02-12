'use client'
import React, { useState, useEffect } from 'react'
import TestCard from './TestCard';
import  Link  from 'next/link';

const artistTestimonials = [
    {
      artist: "Sofia Rivera",
      testimonial: "Art Acres has been a game-changer for me! Their platform helped me reach a wider audience and sell my artworks faster than ever before. I'm grateful for the opportunity to showcase my creations to art lovers around the world."
    },
    {
      artist: "Max Chen",
      testimonial: "I've been using Art Acres for a while now, and I couldn't be happier with the experience. The platform is user-friendly, and the team behind it is incredibly supportive. Thanks to Art Acres, I've been able to turn my passion for art into a sustainable business."
    },
    {
      artist: "Emily Watts",
      testimonial: "As a budding artist, finding a platform like Art Acres was a dream come true. Not only did it provide me with a platform to sell my art, but it also connected me with fellow artists and art enthusiasts. It's like having a supportive community right at your fingertips!"
    },
    {
      artist: "Alejandro Gomez",
      testimonial: "Art Acres has exceeded my expectations in every way. Their dedication to promoting artists and their commitment to providing a seamless buying and selling experience are unmatched. I've had the pleasure of connecting with collectors from all walks of life, thanks to this incredible platform."
    },
    {
      artist: "Mia Patel",
      testimonial: "I've had the pleasure of partnering with Art Acres, and it's been an absolute joy! Their platform is beautifully designed, making it easy for both artists and buyers to navigate. I appreciate how they prioritize artist empowerment and support creativity in all its forms."
    },
    {
      artist: "Lucas Thompson",
      testimonial: "Art Acres has been instrumental in helping me grow my art business. Their platform offers valuable insights and resources that have helped me refine my craft and expand my reach. I'm proud to be part of such a vibrant and supportive artistic community."
    },
    {
      artist: "Isabella Nguyen",
      testimonial: "I can't say enough good things about Art Acres! From the seamless onboarding process to the helpful customer support, they've truly thought of everything. Thanks to their platform, I've been able to showcase my art to a global audience and connect with collectors from around the world."
    },
    {
      artist: "David Kim",
      testimonial: "Art Acres has been a lifeline for me as an emerging artist. Their platform provides the perfect balance of exposure and control, allowing me to showcase my art on my terms. I'm grateful for the opportunities it has provided me."
    },
    {
      artist: "Sophie Roberts",
      testimonial: "Art Acres has been my go-to platform for selling art online. The ease of use, coupled with the supportive community, has made my experience truly enjoyable. I highly recommend Art Acres to any artist looking to showcase their work and connect with buyers."
    },
    {
      artist: "Michael Johnson",
      testimonial: "Art Acres has revolutionized the way I approach selling my art. Their platform offers unparalleled visibility and support, allowing me to focus on what I do best – creating. I'm thrilled to be part of such an innovative and artist-friendly platform."
    }
  ];
  
  
  

const Testimonials = () => {

    const [ currentTestimonial, setCurrentTestimonial ] = useState(0);

    const length = artistTestimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial(currentTestimonial === length - 1 ? 0 : currentTestimonial + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentTestimonial, length]);

  return (
    <section className='flex flex-col items-center md:items-start justify-between testimonials bg-cover bg-center h-[950px] md:h-[800px] lg:h-[550px] mx-4 lg:mx-10 mt-24 rounded-lg font-jost'>
        <div className='p-6'>
            <h1 className='text-white text-[2.2rem] font-medium tracking-wider test-header uppercase'>Artists Testimonials</h1>
        </div>

        <div className='flex flex-col p-8 w-full'>
            {
                artistTestimonials.map((testimonial, index) => (
                    <div key={index} className={index === currentTestimonial ? 'opacity-1000 transition duration-1000' : 'opacity-0 transition duration-700'}>
                       {index === currentTestimonial && (
                        <TestCard artist={testimonial.artist} testimonial={testimonial.testimonial} />
                       )}
                    </div>
                ))
            }
            <Link href='/signup'>
                <button className='mt-8 py-2 px-6 border-2 border-white text-[1.2rem] text-white tracking-wide rounded-md hover:bg-white hover:text-neutral-950 transition duration-300'>Start Selling</button>
            </Link>
        </div>
    </section>
  )
}

export default Testimonials
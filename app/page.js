import React from 'react'
import Banner from './components/Banner'
import FeaturedArt from './components/FeaturedArt'
import TrendingHeader from './components/TrendingHeader'
import Footer from './components/Footer'
import Explore from './components/Explore'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main className=''>
      <Banner />
      < TrendingHeader />
      <FeaturedArt />
      <Explore  />
      <Testimonials />
      {/* <Footer /> */}
    </main>
  )
}

import React from 'react'
import Banner from './components/Banner'
import FeaturedArt from './components/FeaturedArt'
import TrendingHeader from './components/TrendingHeader'

export default function Home() {
  return (
    <main>
      <Banner />
      < TrendingHeader />
      <FeaturedArt />
    </main>
  )
}

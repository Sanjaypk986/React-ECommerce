import React, { useEffect } from 'react'
import './Home.css';
import Banner from './Section1/Banner';
import Ourfavorites from './Section2/OurFavorites';
import Bluesky from './section3/Bluesky';
import MediaSpot from './Section4/MediaSpot';
const Home = () => {

      
  return (
    <main >
      <Banner />
      <Ourfavorites />
      <Bluesky />
      <MediaSpot />
    </main>
  )
}

export default Home

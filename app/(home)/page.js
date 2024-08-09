import React from 'react';
import { CategoriesBanner } from '../../components/CategoriesBanner';
import { Carousel } from '../../components/Carousel';
import { SponsorsCarousel } from '../../components/SponsorsCarousel';

const Home = () => {
  return (
    <div className='min-h-screen '>
      <Carousel />
      <CategoriesBanner />
      <SponsorsCarousel />
    </div>
  )
};

export default Home;

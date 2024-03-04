import React from 'react'
import Carousel from './Carousel'

const Gallery = () => {
  const imageUrls = [
    '/images/Turbo/930turbo.jpg',
    '/images/Turbo/964turbo.jpg',
    '/images/Turbo/993turbo.jpg',
    '/images/Turbo/996turbo.jpg',
    '/images/Turbo/997turbo.jpg',
    '/images/Turbo/991turbo.jpg',
    '/images/Turbo/992duo.jpg',
  ];

  return (
    <section className='container'>
      <div className="w-screen pt-10 ">
       
      <Carousel images={imageUrls} />
      </div>
    </section>
  );
};

export default Gallery
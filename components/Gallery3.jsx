import React from 'react'
import Carousel from './Carousel'

const Gallery = () => {
  const imageUrls = [
    '/images/GT3/3gen.jpg',
    '/images/GT3/996gt3.jpg',
    '/images/GT3/996gt3rs.jpeg',
    '/images/GT3/997gt3.jpg',
    '/images/GT3/997gt3rs.jpeg',
    '/images/GT3/991gt3.jpg',
    '/images/GT3/purplers.jpg',
    '/images/GT3/992gt3.jpeg',
    '/images/GT3/992gt3rs.jpg',
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
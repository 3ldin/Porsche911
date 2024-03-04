import React from 'react'
import Carousel from './Carousel'

const Gallery = () => {
  const imageUrls = [
    '/images/GT2/3gen.jpeg',
    '/images/GT2/993gt2.jpg',
    '/images/GT2/996gt2.jpg',
    '/images/GT2/997gt2rs.jpeg',
    '/images/GT2/redgt2rs.jpeg',
    '/images/GT2/2gen.jpg',
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
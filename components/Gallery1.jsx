import React from 'react'
import Carousel from './Carousel'

const Gallery = () => {
  const imageUrls = [
    '/images/Carrera/930carrera.jpeg',
    '/images/Carrera/carrera1cab.jpg',
    '/images/Carrera/964carrera.jpeg',
    '/images/Carrera/95rs02.jpeg',
    '/images/Carrera/996carreracab.jpg',
    '/images/Carrera/997carrera.jpeg',
    '/images/Carrera/991carrera.jpg',
    '/images/Carrera/992carrera.jpg',
  ];

  return (
    <section className='container'>
      <div className="w-screen pt-10">
       
      <Carousel images={imageUrls} />
      </div>
    </section>
  );
};

export default Gallery
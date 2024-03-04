import React from 'react'
import Slider from 'react-slick'

const Carousel = ({ images }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  
     return (
        <div className="max-w-screen-md mx-auto">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="text-center">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className=" max-w-full mx-auto h-auto"
                />
                
              </div>
            ))}
          </Slider>
        </div>
      );
    };
  export default Carousel;
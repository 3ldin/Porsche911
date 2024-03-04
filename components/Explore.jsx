import React from 'react';
import Link from 'next/link';

const Explore = () => {
  return (
    <div className="relative mx-auto mt-20">      
      <h2 className="text-4xl font-bold text-center mb-4 lg:mb-12 text-black">
        Discover the 911 generations
      </h2>
      <div className="relative">
        <img
          src="/images/explore.jpg"
          alt="Explore"
          className="w-full"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center mb-4 lg:mb-16">
          <Link
            href="/Generations"
            className="bg-black text-white px-6 py-3 rounded-full text-lg lg:text-xl shadow-lg transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;

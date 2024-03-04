import React from 'react';
import Link from 'next/link'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 w-screen mt-20 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Porsche 911</h3>
          <div className="flex justify-center items-center"> 
            <img src='/plogo.png' width={80} className='items-center mb-2'/>
          </div>
          <p>Stuttgart, Germany</p>
        </div>
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link legacyBehavior href="/">
                <a className="hover:text-gray-500 transition duration-300">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/Carrera">
                <a className="hover:text-gray-500 transition duration-300">Carrera</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/Turbo">
                <a className="hover:text-gray-500 transition duration-300">Turbo</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/GT3">
                <a className="hover:text-gray-500 transition duration-300">GT3</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/GT2">
                <a className="hover:text-gray-500 transition duration-300">GT2</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/Generations">
                <a className="hover:text-gray-500 transition duration-300">Generations</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p> All rights due to Porsche.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Gallery2 from '@/components/Gallery2'
import { FaArrowUp } from 'react-icons/fa';


const Turbo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className='bg-[#e9e8e8]'>
    <Navbar  />
    <div className='mx-auto py-20 '>
      <h1 className='text-4xl font-bold mb-10 text-black text-center'>Turbo</h1>
      
     
      <section className='pb-10 lg:pb-24'> 
      <div className='grid lg:grid-cols-4 mx-auto gap-8'>
        <img src='/images/Turbo/silver992.jpg' className='lg:col-span-2' />
          <div className='lg:col-span-2 flex flex-col justify-center'>
            <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-left'>The Porsche 911 Turbo, a pinnacle of automotive engineering, epitomizes power, precision, and performance.</h2>
            <p className='text-black font-semibold text-xl  text-center lg:text-left mt-8 lg:mt-16'>With its iconic rear-engine design and turbocharged powertrain, the 911 Turbo commands attention on the road and the track. Renowned for its blistering acceleration and cutting-edge technology, the Turbo delivers an unparalleled driving experience that pushes the boundaries of automotive excellence.</p>
          </div>
      </div>
      </section>

      <section className='lg:pb-24'>
    <Gallery2 />
    <p className='text-black mx-6 lg:mx-24 font-semibold text-xl text-center mt-10 lg:mt-16'>Beyond its raw performance, the Turbo S is also a symbol of Porsche&apos;s rich heritage and engineering prowess. Born from a legacy of motorsport excellence, the Turbo S traces its roots back to the iconic 911 Turbo models of the past, which dominated racetracks and exhilarated drivers on the streets. Over the years, Porsche has refined and perfected the Turbo S, incorporating the latest advancements in technology and design to create a true masterpiece of automotive engineering.</p>
    </section>

    <h1 className='text-4xl font-bold mb-10 text-black text-center mt-20 mx-auto'>Performance</h1>
    <div className='grid lg:grid-cols-4 mx-auto gap-8'>
        <div className='lg:col-span-2 flex flex-col justify-center'>
          <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-right'>2024 992 Turbo S</h2>
          <div className='text-black mx-6 font-semibold text-xl text-center lg:text-right mt-10 lg:mt-16'>
            <p>Horsepower: 640 HP</p>
            <p>Torque: 590 lb-ft</p>
            <p>0-60 MPH Time: 2.6 seconds</p>
            <p>Top Speed: 205 mph</p>
            <p>Weight: 3,636 pounds</p>
            <p>Engine: Turbocharged flat-six</p>
            <p>Transmission: 8-speed dual-clutch automatic (PDK)</p>
          </div>
        </div>
        <img src='/images/turbos.jpg' className='lg:col-span-2' />
        
        
        <h1 className='text-4xl font-bold mb-10 text-black lg:col-span-4 text-center mt-20 mx-auto'>Appearances</h1>
        <img src='/images/Turbo/badboys.jpeg' className='lg:col-span-2' />
        <div className='lg:col-span-2 flex flex-col justify-center'>
          <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-left'>Bad Boys (1995)</h2>
          <div className='text-black mx-6 font-semibold text-xl text-center lg:text-left mt-10 lg:mt-16'>
            <p>In this action-packed film starring Will Smith and Martin Lawrence, a 1995 Porsche 911 Turbo (964) is prominently featured in a high-speed chase scene through the streets of Miami. Director Michael Bay owned the car and ended up selling it for $60k, just for it to be later auctioned of at $1.3 million.</p>
          </div>
        </div> 
    </div>
    
    <div className='flex justify-center pt-10 lg:pt-24'>
      <button
        className='bg-gray-600 text-white rounded-full p-4 w-12 h-12 hover:bg-gray-800 focus:outline-none'
        onClick={scrollToTop}
        >
        <FaArrowUp />
      </button>
    </div>
  </div>
<Footer />
  </div>
  )
}

export default Turbo
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Gallery1 from '@/components/Gallery1'
import { FaArrowUp } from 'react-icons/fa';


const Carrera = () => {
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
    <h1 className='text-4xl font-bold mb-10 text-black text-center'>Carrera</h1>
    
    <section className='pb-10 lg:pb-24'>
    <div className='grid lg:grid-cols-4 mx-auto gap-8'>
        <img src='/images/Carrera/carrera1.jpg' className='lg:col-span-2' />
        <div className='lg:col-span-2 flex flex-col justify-center'>
            <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-left'>
The Porsche 911 Carrera, an icon among sports cars, stands as a testament to Porsche&apos;s enduring commitment to performance, precision, and style.</h2>
            <p className='text-black font-semibold text-xl  text-center lg:text-left mt-8 lg:mt-16'>With its distinctive silhouette, characterized by its rear-engine layout, the 911 Carrera embodies the essence of automotive excellence. Renowned for its exceptional agility and handling, the Carrera delivers an exhilarating driving experience on both the racetrack and the open road.</p>
        </div>
    </div>
</section>
    
    <section className='lg:pb-24'>
    <Gallery1 />
    <p className='text-black mx-6 lg:mx-24 font-semibold text-xl text-center mt-10 lg:mt-16'>Since its inception, the Carrera has evolved through numerous generations, each iteration pushing the boundaries of engineering innovation while staying true to its heritage. From its debut in the 1960s to the present day, the 911 Carrera has continually set new standards for sports car enthusiasts worldwide.</p>
    </section>
    
    <h1 className='text-4xl font-bold mb-10 text-black text-center mt-20 mx-auto'>Performance</h1>
    <div className='grid lg:grid-cols-4 mx-auto gap-8'> 
        <div className='lg:col-span-2 flex flex-col justify-center'>
          <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-right'>2024 992 Carrera S</h2>
          <div className='text-black mx-6 font-semibold text-xl text-center lg:text-right mt-10 lg:mt-16'>
            <p>Horsepower: 443 HP</p>
            <p>Torque: 390 lb-ft</p>
            <p>0-60 MPH Time: 3.3 sec.</p>
            <p>Top Speed: 191 mph</p>
            <p>Weight: 3382 lbs</p>
            <p>Engine: Turbocharged flat-six</p>
            <p>Transmission: 8-speed dual-clutch automatic (PDK)</p>
          </div>
        </div>
        <img src='/images/Carrera/992carving.jpg' className='lg:col-span-2' />

        <h1 className='text-4xl font-bold mb-10 text-black lg:col-span-4 text-center mt-20 mx-auto'>Appearances</h1>
        <img src='/images/Carrera/sally.jpeg' className='lg:col-span-2' />
        <div className='lg:col-span-2 flex flex-col justify-center'>
          <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-left'>The one-off Sally Carrera </h2>
          <div className='text-black mx-6 font-semibold text-xl text-center lg:text-left mt-10 lg:mt-16'>
            <p>From the movie franchise &quot;Cars&quot;, introducing a real life version of Sally (996), and a brand new Carrera (992), to mimic the specification of Sally. The one-off 992 Carrera went on to sell for $3.6 million at auction.</p>
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

export default Carrera
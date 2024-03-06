import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Gallery4 from '@/components/Gallery4'
import { FaArrowUp } from 'react-icons/fa';
import GT2ModelsSection from '@/components/GT2ModelsSection';
import LoadingSpinner from '@/components/LoadingSpinner';

const GT2 = () => {
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='bg-[#e9e8e8]'>
    <Navbar  />
    {loading ? (
        <LoadingSpinner />
      ) : (
    <div className='mx-auto py-20 '>
      <h1 className='text-4xl font-bold mb-10 text-black text-center'>GT2</h1>

      <section className='pb-10 lg:pb-24'> 
      <div className='grid lg:grid-cols-4 mx-auto gap-8'>
        <img src='/images/GT2/silver2rs.jpg' className='lg:col-span-2' />
          <div className='lg:col-span-2 flex flex-col justify-center'>
            <h2 className='text-black font-bold text-2xl lg:text-3xl mx-4 lg:mx-0 text-center lg:text-left'>The Porsche 911 GT2, the Widowmaker. The GT2 is the pinnacle of the 911 chasis and pushes the limits of the GT3, and every other car on the road. </h2>
            <p className='text-black font-semibold text-xl mx-6 lg:mx-0  text-center lg:text-left mt-8 lg:mt-16'>With its turbocharged flat-six, the GT2RS produces nearly 700 horsepower. The GT2RS is the fastest, and most rowdy 911 on the road. Although it may not have the naturally aspirated scream of the GT3RS, it makes up for it in performance on the track, putting it in a whole different class of it&apos;s own.</p>
          </div>
      </div>
      </section>

      <section className='lg:pb-24'>
    <Gallery4 />
    <p className='text-black mx-6 lg:mx-24 font-semibold text-xl text-center mt-10 lg:mt-16'>Engineered for pure driving excitement, the GT2 features advanced aerodynamics, lightweight construction, and race-inspired technology to optimize performance. Its aggressive styling cues, including wider fenders, larger air intakes, and a prominent rear wing, not only enhance its visual appeal but also contribute to its exceptional aerodynamic efficiency. Since the 997 generation, there has not been another base GT2, and Porsche went forward with creating the GT2RS.</p>
    </section>

    <h1 className='text-4xl font-bold mb-10 text-black text-center mt-20 mx-auto'>Performance</h1>
    <div className='grid lg:grid-cols-4 mx-auto gap-8'>
        <div className='lg:col-span-2 flex flex-col justify-center'>
          <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-right'>2019 991 GT2RS</h2>
          <div className='text-black mx-6 font-semibold text-xl text-center lg:text-right mt-10 lg:mt-16'>
            <p>Horsepower: 691 HP</p>
            <p>Torque: 553 lb-ft</p>
            <p>0-60 MPH Time: 2.6 seconds</p>
            <p>Top Speed: 213 mph</p>
            <p>Weight: 3,241 pounds</p>
            <p>Engine: Turbocharged flat-six</p>
            <p>Transmission: 7-speed dual-clutch automatic (PDK)</p>
          </div>
        </div>
        <img src='/images/GT2/black991gt2rs.jpeg' className='lg:col-span-2' />
        
        
        <h1 className='text-4xl font-bold mb-10 text-black lg:col-span-4 text-center mt-20 mx-auto'>Variants</h1>
       <div className='lg:col-span-4 w-full'>
       <GT2ModelsSection />
       </div>
       
       <h1 className='text-4xl font-bold mb-10 text-black lg:col-span-4 text-center mt-20 mx-auto'>Appearances</h1>
        <img src='/images/GT2/blackwidow.jpg' className='lg:col-span-2' />
        <div className='lg:col-span-2 flex flex-col justify-center'>
          <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-left'>Top Gear</h2>
          <div className='text-black mx-6 font-semibold text-xl text-center lg:text-left mt-10 lg:mt-16'>
            <p>The GT2 may be a bit too niche to be within a movie, or maybe the stuntmen are afraid of driving one. In the iconic british show &quot;Top Gear&quot;, car journalist Jeremy Clarkson is seen driving a white 997 GT2. The entirety of his drive consists of him screaming out of fear, overcooking the tires and spinning out, and not being able to catch his breath.</p>
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
  )}
<Footer />
  </div>
  )
}

export default GT2
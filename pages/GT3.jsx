import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Gallery3 from '@/components/Gallery3'
import { FaArrowUp } from 'react-icons/fa';
import GT3ModelsSection from '@/components/GT3ModelsSection';


const GT3 = () => {
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
      <h1 className='text-4xl font-bold mb-10 text-black text-center'>GT3</h1>

      <section className='pb-10 lg:pb-24'> 
      <div className='grid lg:grid-cols-4 mx-auto gap-8'>
        <img src='/images/GT3/shark.jpeg' className='lg:col-span-2' />
          <div className='lg:col-span-2 flex flex-col justify-center'>
            <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-left'>The Porsche 911 GT3, an embodiment of automotive excellence, represents the perfect fusion of track-inspired performance and everyday drivability.</h2>
            <p className='text-black font-semibold text-xl  text-center lg:text-left mt-8 lg:mt-16'>With its track-focused design and naturally aspirated powerplant, the 911 GT3 demands respect on both the street and the circuit. Celebrated for its exhilarating acceleration and state-of-the-art engineering, the GT3 offers a driving experience that sets new benchmarks for automotive performance.</p>
          </div>
      </div>
      </section>

      <section className='lg:pb-24'>
    <Gallery3 />
    <p className='text-black mx-6 lg:mx-24 font-semibold text-xl text-center mt-10 lg:mt-16'>Embodying the essence of motorsport prowess, the 911 GT3 represents a culmination of Porsche&apos;s racing heritage and engineering brilliance. With its high-revving 9,000 RPM flat six engine and precision-tuned dynamics, the GT3 pays homage to its track-focused lineage while pushing the boundaries of automotive innovation. Crafted for the discerning enthusiast, the GT3 delivers an unmatched driving experience that captivates both on the road and the race circuit. Pictured above are generations the gt3, besides their corresponding RS (Renn Sport) counterpart. The GT3RS is the more track focused, aero dynamic, grip car. It receives a small boost in power, however it focuses on being lightweight and sharper.</p>
    </section>

    <h1 className='text-4xl font-bold mb-10 text-black text-center mt-20 mx-auto'>Performance</h1>
    <div className='grid lg:grid-cols-4 mx-auto gap-8'>
        <div className='lg:col-span-2 flex flex-col justify-center'>
          <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-right'>2024 992 GT3</h2>
          <div className='text-black mx-6 font-semibold text-xl text-center lg:text-right mt-10 lg:mt-16'>
            <p>Horsepower: 503 HP</p>
            <p>Torque: 347 lb-ft</p>
            <p>0-60 MPH Time: 2.7 seconds</p>
            <p>Top Speed: 199 mph</p>
            <p>Weight: 3,636 pounds</p>
            <p>Engine: Naturally aspirated flat-six</p>
            <p>Transmission: 8-speed dual-clutch automatic (PDK)</p>
          </div>
        </div>
        <img src='/images/GT3/white992.jpeg' className='lg:col-span-2' />
        
        
        <h1 className='text-4xl font-bold mb-10 text-black lg:col-span-4 text-center mt-20 mx-auto'>Variants</h1>
       <div className='lg:col-span-4 w-full'>
       <GT3ModelsSection />
       </div>
       
       <h1 className='text-4xl font-bold mb-10 text-black lg:col-span-4 text-center mt-20 mx-auto'>Appearances</h1>
        <img src='/images/GT3/fast5.jpeg' className='lg:col-span-2' />
        <div className='lg:col-span-2 flex flex-col justify-center'>
          <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-left'>Fast Five (2011)</h2>
          <div className='text-black mx-6 font-semibold text-xl text-center lg:text-left mt-10 lg:mt-16'>
            <p>In this action thriller revolved around cars, crime, and family, Paul Walker and Vin Diesel are seen on the streets of brazil, racing their own car off for Pink Slips. They stumble upon a man with a Mexico Blue 996 GT3RS, who is willing to wager his car. The next scene is Paul Walker driving the car back into their own warehouse, being the new owner.</p>
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

export default GT3
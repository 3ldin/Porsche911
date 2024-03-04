import React from 'react';

const About = () => {
  return (
    <div className='w-3/4 my-20'>
        <h1 className='text-4xl font-bold mb-10 text-black text-center'>The Porsche 911</h1>
        <div className='grid lg:grid-cols-4 mx-auto gap-8'>
            <img src='/images/911heritage.jpeg' className='lg:col-span-2' />
            <div className='lg:col-span-2 flex flex-col justify-center'>
                <h2 className='text-black font-bold text-2xl lg:text-3xl text-center lg:text-left'>The iconic, rear-engine sports car with exceptional performance.</h2>
                <p className='text-black font-semibold text-xl lg:text-lg text-center lg:text-left mt-8 lg:mt-16'>The Porsche 911 is an iconic sports car celebrated for its timeless design, unmatched performance, and lasting legacy. Since its debut in 1963, the 911 has epitomized automotive excellence, delivering exhilarating driving experiences and pushing the boundaries of engineering innovation. With its distinctive silhouette and rear-engine layout, the 911 remains a symbol of precision, agility, and passion for driving. From the racetrack to the open road, the 911 continues to captivate enthusiasts worldwide, embodying the essence of sports car greatness. Pictured is the 1994 Porsche 964 Turbo S.</p>
            </div>
        </div>
    </div>
  )
}

export default About;

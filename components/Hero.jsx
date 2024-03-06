import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 min-w-full min-h-full object-cover"
                src='videoplayback.mp4'
                autoPlay
                loop
                muted
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col text-center items-center justify-center">
                <h1 className="text-5xl text-white font-bold drop-shadow-xl">Porsche 911</h1>
                <h2 className='items-center mt-2 drop-shadow-xl text-xl underline decoration-[#d30000]'>The Ultimate Sports Car</h2>
            </div>
        </div>
    );
};

export default Hero;

import React from 'react';
import Link from 'next/link';

const Models = () => {
    return (
        <div className="w-3/4 mt-20">
            <h1 className="text-4xl font-bold mb-10 text-black text-center">Models</h1>
            <div className="lg:grid lg:grid-cols-2 lg:gap-24">
                <Link href='/Carrera'>
                <div className="bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition ease-in">
                    <div className="h-64 lg:h-96 flex items-end p-4" style={{ backgroundImage: `url('/images/Carrera/992carrera.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h2 className="text-xl font-bold text-white">Carrera</h2>
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-black">Luxury and Ease.</p>
                    </div>
                </div>
                </Link>

                <Link href='/Turbo'>
                <div className="bg-gray-100 rounded-lg overflow-hidden text-black hover:scale-105 transition ease-in">
                    <div className="h-64 lg:h-96 flex items-end p-4" style={{ backgroundImage: `url('/images/turbos.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h2 className="text-lg font-bold text-white">Turbo</h2>
                    </div>
                    <div className="p-4">
                        <p className="text-sm">Speed in style.</p>
                    </div>
                </div>
                </Link>

                <Link href='/GT3'>
                <div className="bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition ease-in">
                    <div className="h-64 lg:h-96 flex items-end p-4" style={{ backgroundImage: `url('/images/997gt3.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h2 className="text-lg font-bold text-white">GT3</h2>
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-black">On rails.</p>
                    </div>
                </div>
                </Link>

                <Link href='/GT2'>
                <div className="bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition ease-in">
                    <div className="h-64 lg:h-96 flex items-end p-4" style={{ backgroundImage: `url('/images/gt2rs.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h2 className="text-lg font-bold text-white">GT2</h2>
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-black">Widowmaker.</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Models;

import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './Navlink';
import MenuOverlay from './MenuOverlay';
import { TfiMenu, TfiClose } from "react-icons/tfi";


const navLinks = [
    {
        title: "Carrera",
        path: "/Carrera",
    },
    {
        title: "Turbo",
        path: '/Turbo',
    },
    {
        title: "GT3",
        path: "/GT3",
    },
    {
        title: "GT2",
        path: "/GT2",
    },

];

const Navbar = ({ color }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    return (
        <nav className='absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-[#303030] to-transparent bg-opacity-100 drop-shadow-lg'>
            <div className='flex items-center justify-between py-3 px-3'>
                <Link href={"/"} className='text-2xl md:text-4xl text-white italic font-bold mr-auto'>
                    911
                </Link>
                <div className='menu hidden md:block md:w-auto text-white'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white justify-center'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ml-auto hidden md:block">
                    <NavLink href="/Generations" title="Generations" />
                </div>
                <div className='mobile-menu block md:hidden pr-3'>
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center py-2 text-white hover:text-slate-500 hover:border-slate-500'>
                        <TfiMenu />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center py-2 text-white hover:text-slate-500 hover:border-slate-500'>
                        <TfiClose />
                        </button>
                    )}
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;

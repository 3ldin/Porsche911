import React from 'react'
import NavLink from './Navlink'


const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-10 items-center '>
      {links.map((link, index) => (
        <li key ={index}>
        <NavLink href={link.path} title={link.title} /> 
        </li>
     ))}
     <NavLink href='/Generations' title="Generations" />
    </ul>
  )
}

export default MenuOverlay
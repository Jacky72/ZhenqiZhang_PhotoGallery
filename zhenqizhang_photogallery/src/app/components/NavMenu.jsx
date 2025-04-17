import React from 'react'
import NavLink from './NavLink'

const NavMenu = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center shadow-2xl"> 
        {links.map((link, index) => (
            <li key={index} className="underline decoration-2 underline-offset-3">
                <NavLink href={link.path} title={link.title}/>
            </li>
        ))} 
    </ul>
  ) 
}

export default NavMenu
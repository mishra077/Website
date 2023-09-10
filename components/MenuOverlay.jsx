import React from 'react'
import NavLink from './Navlink';
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
        {links.map((link, index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title} key={index} />
            </li>
        ))}
    </ul>
  );
}

export default MenuOverlay
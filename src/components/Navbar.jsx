import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex flex-col border border-red-500'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
    </nav>
  );
}

export default Navbar;
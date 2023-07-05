import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function RootLayout() {
  return (
    <div className='grid grid-cols-[100px_1fr] min-h-screen'>
      <Navbar />
      <div className='border border-red-500 grid place-items-center'>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
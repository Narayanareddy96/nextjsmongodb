'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState('hidden');
  const handleMobilemenu = () => {
    setMobileMenu((prev) => (prev === '' ? 'hidden' : ''));
  };
  const menuItems = [
    {
      id: 1,
      name: 'Home',
      path: '/',
      isActive: true,
    },
    {
      id: 2,
      name: 'About',
      path: '/about',
      isActive: false,
    },
    {
      id: 3,
      name: 'Contact',
      path: '/contact',
      isActive: false,
    },
    {
      id: 4,
      name: 'Dashboard',
      path: '/dashboard',
      isActive: false,
    },
    {
      id: 5,
      name: 'Portfolio',
      path: '/portpolio',
      isActive: false,
    },
  ];
  return (
    <nav className="bg-blue-600 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <div className="text-white font-bold text-xl">Your Logo</div>
        </Link>
        <div className="flex items-center space-x-4">
          {menuItems.map((items) => {
            return (
              <Link
                key={items.id}
                href={items.path}
                className={`text-white hover:text-blue-200 font-semibold`}
              >
                {items.name}
              </Link>
            );
          })}

          <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-blue-100">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from './button/Button';

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState('hidden');
  const handleMobilemenu = () => {
    setMobileMenu((prev) => (prev === '' ? 'hidden' : ''));
  };
  const menuItems = [
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
          <Button title="Login" href="/dashboard/login" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

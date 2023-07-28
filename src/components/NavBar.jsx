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
      name: 'Blog',
      path: '/blog',
      isActive: false,
    },
    {
      id: 6,
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
          <div className="bg-white dark:bg-black transition-colors">
            <div className="top-4 right-4 flex items-center">
              <label htmlFor="toggle" className="cursor-pointer">
                <svg
                  className="w-6 h-6 text-yellow-500 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 2c3.33 0 6 2.67 6 6s-2.67 6-6 6-6-2.67-6-6 2.67-6 6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 1a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z"
                  ></path>
                </svg>
              </label>
              <input type="checkbox" id="toggle" className="hidden" />
              <svg
                className="w-6 h-6 text-gray-300 dark:text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 2c3.33 0 6 2.67 6 6s-2.67 6-6 6-6-2.67-6-6 2.67-6 6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 1a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z"
                ></path>
              </svg>
            </div>
          </div>
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

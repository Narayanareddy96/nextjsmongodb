'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setBlogData(json));
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <li key={blog.id} className="bg-white rounded-lg shadow-md">
            <Link href={'/blog/' + blog.id} className="block">
              <Image
                src={blog.image}
                width={100}
                height={100}
                alt="Blog Post 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700">{blog.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

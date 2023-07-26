import Link from 'next/link';
import React from 'react';

const Button = ({ title, href }) => {
  return (
    <Link href={href}>
      <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-blue-100">
        {title}
      </button>
    </Link>
  );
};

export default Button;

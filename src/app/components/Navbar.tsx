'ue client'
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-black text-base hover:underline">
            Home
          </Link>
          <Link href="/shop" className="text-black text-base hover:underline">
            Shop
          </Link>
          {/* Updated Product Link */}
          <Link href="/product" className="text-black text-base hover:underline">
            Product
          </Link>
          <Link href="/pages" className="text-black text-base hover:underline">
            Pages
          </Link>
          <Link href="/about" className="text-black text-base hover:underline">
            About
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <a href="/contact" className="text-black text-base hover:underline font-bold">
            Contact: (808) 555-0111
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full relative z-50 pt-8 pb-6">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          {/* Custom logo matching the design: lime green play/ribbon badge */}
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M8 6C8 4.89543 8.89543 4 10 4H14C21.732 4 28 10.268 28 18C28 21.3137 25.3137 24 22 24H16C11.5817 24 8 20.4183 8 16V6Z" 
                fill="#CBFC01"
              />
              <path 
                d="M12 10L22 18L12 26V10Z" 
                fill="#0724C4"
              />
            </svg>
          </div>
          <span className="font-poppins font-bold text-2xl tracking-tight text-white">
            ByteSpace
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-9 text-base">
          <a href="#" className="text-white font-medium hover:text-[#CBFC01] transition-colors">Home</a>
          <a href="#" className="text-white/80 font-medium hover:text-white transition-colors">Courses</a>
          <a href="#" className="text-white/80 font-medium hover:text-white transition-colors">Creators</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-6 text-white font-medium text-base">
          <button className="hover:text-[#CBFC01] transition-colors">
            Sign In
          </button>
          <button className="hover:text-[#CBFC01] transition-colors">
            Join Us
          </button>
          <button className="hover:text-[#CBFC01] transition-colors p-1" aria-label="Cart">
            <ShoppingBag className="w-5 h-5 text-white stroke-[2]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

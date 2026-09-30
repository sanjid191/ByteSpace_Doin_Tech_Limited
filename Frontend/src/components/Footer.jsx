import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-neutral-900 pt-16 pb-12 border-t border-neutral-200">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Newsletter & Logo */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#CBFC01] flex items-center justify-center shadow-xs">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-950 translate-x-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="font-poppins font-bold text-2xl tracking-tight text-neutral-950">
                ByteSpace
              </span>
            </div>

            <p className="text-neutral-700 text-sm font-normal max-w-md leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input + Search Button */}
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-6 pr-32 py-3.5 bg-white border border-neutral-300 rounded-full outline-none text-neutral-900 placeholder:text-neutral-400 text-sm focus:border-neutral-500 transition-colors shadow-xs"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#CBFC01] hover:bg-[#b9e600] text-neutral-950 font-poppins font-semibold px-7 rounded-full transition-all duration-200 text-sm shadow-xs cursor-pointer"
              >
                Search
              </button>
            </form>

            <p className="text-[#64748b] text-[12px] font-normal leading-normal max-w-md pt-1">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Column: Links (3 columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 pt-2">
            {/* Column 1 */}
            <div className="space-y-3.5">
              <ul className="space-y-3 text-sm text-neutral-800 font-normal">
                <li><a href="#" className="hover:text-primary-600 transition-colors">Featured Courses</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Featured Categories</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">IT</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Design</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3.5">
              <ul className="space-y-3 text-sm text-neutral-800 font-normal">
                <li><a href="#" className="hover:text-primary-600 transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Photography</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Finance</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Sport</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3.5">
              <ul className="space-y-3 text-sm text-neutral-800 font-normal">
                <li><a href="#" className="hover:text-primary-600 transition-colors">Become a Creator</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">About</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-600 gap-4">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-neutral-900 transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors underline-offset-4 hover:underline">Terms of Service</a>
            <a href="#" className="hover:text-neutral-900 transition-colors underline-offset-4 hover:underline">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


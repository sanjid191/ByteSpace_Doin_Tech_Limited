import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, BarChart2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-satoshi overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-[#0724C4] overflow-hidden">
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            backgroundPosition: 'center center'
          }}
        />

        <Navbar />

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-0 flex flex-col items-center text-center">
          
          <h1 className="font-poppins text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.1] mb-6 z-10">
            Get Access to Hundreds<br />Courses Available
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-12 z-10">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-[600px] z-10 mb-16">
            <div className="bg-white rounded-full flex items-center p-2 pl-6 shadow-xl h-16">
              <Search className="text-neutral-400 w-6 h-6 mr-3" />
              <input 
                type="text" 
                placeholder="Course, topic, creator" 
                className="flex-grow bg-transparent outline-none text-neutral-800 font-medium text-lg placeholder:text-neutral-400"
              />
              <button className="bg-secondary-500 hover:bg-[#b5e001] text-neutral-950 font-poppins font-semibold px-8 py-3 rounded-full h-full transition-colors text-lg cursor-pointer">
                Search
              </button>
            </div>
          </div>

          {/* Hero Visuals & Hero Guy */}
          <div className="relative w-full max-w-[1200px] h-[600px] mx-auto mt-4">
            {/* Giant Lime Circle */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-secondary-500 rounded-full translate-y-[35%]" />
            
            {/* The Guy */}
            <img 
              src="/assets/img_f1057d714a.png" 
              alt="Happy student with headphones" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[650px] object-cover object-bottom z-10 drop-shadow-2xl"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=650&h=800";
              }}
            />

            {/* Floating 3D Shapes */}
            <img src="/assets/img_e3b55902d6.png" className="absolute top-[10%] left-[5%] w-32 drop-shadow-xl animate-pulse" alt="shape" />
            <img src="/assets/img_63c4be8322.png" className="absolute top-[30%] left-[18%] w-16 drop-shadow-xl" alt="shape" />
            <img src="/assets/img_1e078348a5.png" className="absolute bottom-[20%] left-[5%] w-40 drop-shadow-xl" alt="shape" />
            <img src="/assets/img_0577f0e9b7.png" className="absolute top-[5%] right-[5%] w-40 drop-shadow-xl" alt="shape" />
            <img src="/assets/img_83fb3e0405.png" className="absolute top-[35%] right-[15%] w-32 drop-shadow-xl" alt="shape" />
            <img src="/assets/img_3fe5591817.png" className="absolute bottom-[30%] right-[8%] w-32 drop-shadow-xl" alt="shape" />

            {/* UI/UX Design Floating Card */}
            <div className="absolute top-[30%] left-[15%] bg-white rounded-2xl p-5 shadow-2xl z-20 w-64 flex flex-col transform -translate-y-4">
              <h4 className="font-poppins font-semibold text-neutral-950 text-lg">UI/UX Design</h4>
              <p className="text-neutral-400 text-sm font-medium mt-1">200 Courses &bull; 1000+ Students</p>
            </div>

            {/* Happy Students Floating Card */}
            <div className="absolute bottom-[15%] left-[20%] bg-white rounded-2xl p-5 shadow-2xl z-20 w-[300px]">
              <h4 className="font-poppins font-semibold text-neutral-950 text-lg">Happy Students</h4>
              <p className="text-neutral-500 text-sm font-medium mt-1">4.5 (240) <span className="text-yellow-400">⭐</span></p>
              <div className="flex -space-x-3 mt-4">
                <img src="https://i.pravatar.cc/100?img=11" className="w-10 h-10 rounded-full border-2 border-white" alt="avatar"/>
                <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 rounded-full border-2 border-white" alt="avatar"/>
                <img src="https://i.pravatar.cc/100?img=13" className="w-10 h-10 rounded-full border-2 border-white" alt="avatar"/>
                <img src="https://i.pravatar.cc/100?img=14" className="w-10 h-10 rounded-full border-2 border-white" alt="avatar"/>
                <img src="https://i.pravatar.cc/100?img=15" className="w-10 h-10 rounded-full border-2 border-white" alt="avatar"/>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-500 flex items-center justify-center font-bold text-xs text-neutral-900 z-10 relative">
                  2K+
                </div>
              </div>
            </div>

            {/* Learning Progress Floating Card */}
            <div className="absolute top-[35%] right-[18%] bg-white rounded-2xl p-5 shadow-2xl z-20 w-64">
              <h4 className="font-poppins font-medium text-neutral-500 text-sm">Learning Progress</h4>
              <p className="font-poppins font-bold text-neutral-950 text-4xl mt-1 mb-3">55%</p>
              <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                <div className="bg-secondary-500 h-full w-[55%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: CATEGORY CARDS (Explore Diverse Learning Paths at Bytespace) --- */}
      <section className="bg-white py-24 border-b border-neutral-100">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0c1024] tracking-tight leading-tight mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-neutral-400 text-base md:text-lg font-medium max-w-4xl mx-auto mb-16 leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* 1. Design */}
            <div className="bg-white rounded-[24px] border border-neutral-200 p-8 flex flex-col items-center justify-center hover:border-neutral-300 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-[#CBFC01] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-950">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <span className="font-poppins font-semibold text-neutral-900 text-lg">Design</span>
            </div>

            {/* 2. Development */}
            <div className="bg-white rounded-[24px] border border-neutral-200 p-8 flex flex-col items-center justify-center hover:border-neutral-300 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-[#CBFC01] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-950">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <span className="font-poppins font-semibold text-neutral-900 text-lg">Development</span>
            </div>

            {/* 3. IT & Software */}
            <div className="bg-white rounded-[24px] border border-neutral-200 p-8 flex flex-col items-center justify-center hover:border-neutral-300 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-[#CBFC01] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-950">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <span className="font-poppins font-semibold text-neutral-900 text-lg whitespace-nowrap">IT & Software</span>
            </div>

            {/* 4. Business */}
            <div className="bg-white rounded-[24px] border border-neutral-200 p-8 flex flex-col items-center justify-center hover:border-neutral-300 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-[#CBFC01] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-950">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                  <path d="M9 22v-4h6v4"/>
                  <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/>
                </svg>
              </div>
              <span className="font-poppins font-semibold text-neutral-900 text-lg">Business</span>
            </div>

            {/* 5. Marketing */}
            <div className="bg-white rounded-[24px] border border-neutral-200 p-8 flex flex-col items-center justify-center hover:border-neutral-300 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-[#CBFC01] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-950">
                  <path d="m3 11 18-5v12L3 14v-3z"/>
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
                </svg>
              </div>
              <span className="font-poppins font-semibold text-neutral-900 text-lg">Marketing</span>
            </div>

            {/* 6. Photography */}
            <div className="bg-white rounded-[24px] border border-neutral-200 p-8 flex flex-col items-center justify-center hover:border-neutral-300 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-[#CBFC01] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-950">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <span className="font-poppins font-semibold text-neutral-900 text-lg">Photography</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PROFESSIONAL GROWTH STATS (Your Path to Professional Growth Starts Here!) --- */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#f7fdcf]/40 via-white to-[#eef4ff]">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-poppins text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0c1024] leading-[1.15] tracking-tight">
              Your Path to Professional<br />Growth Starts Here!
            </h2>

            <p className="text-neutral-500 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="flex items-center space-x-12 pt-4">
              <div>
                <span className="font-poppins font-bold text-4xl md:text-5xl text-[#0445ff]">12K</span>
                <p className="text-neutral-500 font-medium text-base mt-1">Students</p>
              </div>
              <div>
                <span className="font-poppins font-bold text-4xl md:text-5xl text-[#0445ff]">70+</span>
                <p className="text-neutral-500 font-medium text-base mt-1">Courses</p>
              </div>
              <div>
                <span className="font-poppins font-bold text-4xl md:text-5xl text-[#0445ff]">16</span>
                <p className="text-neutral-500 font-medium text-base mt-1">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Column Graphic Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[500px]">
            {/* Background Course Card */}
            <div className="bg-white rounded-[28px] border border-neutral-200/80 p-5 shadow-2xl w-full max-w-[420px] absolute left-4 sm:left-12 top-4 transform -rotate-1">
              <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] mb-4">
                <img 
                  src="/assets/img_71d7929ee0.jpg" 
                  alt="Course Preview" 
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618788372246-ce5f4e18d6ce?auto=format&fit=crop&q=80&w=800"}
                />
                <div className="absolute bottom-3 left-3 flex space-x-2">
                  <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-[11px] font-semibold px-2.5 py-1 rounded-full">17 Lessons</span>
                  <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-[11px] font-semibold px-2.5 py-1 rounded-full">2 hours 16 mins</span>
                </div>
              </div>
              <h4 className="font-poppins font-bold text-lg text-neutral-900">Learn Figma from Basic</h4>
              <p className="text-neutral-400 text-xs mt-0.5">by <span className="text-primary-600 font-medium">purepearl studio</span></p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-100">
                <span className="bg-neutral-100 text-neutral-600 text-xs px-3 py-1 rounded-full font-medium">Beginner</span>
                <span className="font-poppins font-bold text-xl text-[#0445ff]">$25<span className="text-neutral-400 text-xs font-normal">/lifetime</span></span>
              </div>
            </div>

            {/* Lime Ribbon/Spring shape */}
            <img 
              src="/assets/img_e3b55902d6.png" 
              alt="lime coil" 
              className="absolute -right-2 top-12 w-36 drop-shadow-xl z-10 pointer-events-none"
            />

            {/* Overlapping Student Image */}
            <img 
              src="/assets/img_f1057d714a.png" 
              alt="Student" 
              className="relative z-20 h-[480px] object-contain drop-shadow-2xl translate-x-8 translate-y-6"
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=650&h=800"}
            />

            {/* Floating Learning Progress Card */}
            <div className="absolute right-0 bottom-12 z-30 bg-white rounded-2xl p-5 shadow-2xl border border-neutral-100 w-56">
              <span className="text-neutral-500 text-xs font-medium">Learning Progress</span>
              <p className="font-poppins font-bold text-neutral-950 text-4xl my-1">55%</p>
              <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden mt-2">
                <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 3: CREATE & MANAGE COURSES EASILY (Creator Section) --- */}
      <section className="relative py-28 bg-gradient-to-br from-[#ebf3ff]/60 via-white to-[#f5f2ff] overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column Graphic Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[520px]">
            {/* Top Blue Revenue Card */}
            <div className="absolute left-0 top-6 z-10 bg-[#0445ff] text-white rounded-2xl p-5 shadow-xl w-60">
              <div className="flex justify-between items-start text-xs font-medium text-white/80 mb-1">
                <span>Total Revenue</span>
                <span className="text-white/60 text-[10px]">July 1-28</span>
              </div>
              <p className="font-poppins font-bold text-2xl mb-3">$120.29</p>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div className="bg-[#CBFC01] h-full w-[75%] rounded-full" />
              </div>
            </div>

            {/* Bottom Blue Year-to-Date Card */}
            <div className="absolute left-0 bottom-16 z-10 bg-[#0445ff] text-white rounded-2xl p-5 shadow-xl w-52">
              <div className="flex justify-between items-start text-xs font-medium text-white/80 mb-1">
                <span>Year to Date</span>
                <span className="text-white/60 text-[10px]">2023</span>
              </div>
              <p className="font-poppins font-bold text-2xl mb-3">$1,200.38</p>
              <span className="bg-[#CBFC01] text-neutral-950 font-bold text-xs px-2.5 py-1 rounded-full">+12$</span>
            </div>

            {/* Lime Ribbon coil shape */}
            <img 
              src="/assets/img_e3b55902d6.png" 
              alt="lime coil" 
              className="absolute right-8 top-20 w-36 drop-shadow-xl z-10 pointer-events-none"
            />

            {/* Main Instructor / Creator Female Photo */}
            <img 
              src="/assets/img_6be36b89bf.png" 
              alt="Course Creator" 
              className="relative z-20 h-[500px] object-contain drop-shadow-2xl translate-x-4"
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=650&h=800"}
            />

            {/* Floating Happy Students Card */}
            <div className="absolute right-4 bottom-6 z-30 bg-white rounded-2xl p-4 shadow-2xl border border-neutral-100 w-[270px]">
              <h5 className="font-poppins font-semibold text-neutral-900 text-sm">Happy Students</h5>
              <div className="flex items-center text-xs font-medium text-neutral-500 mt-0.5 mb-3">
                <span className="font-bold text-neutral-900 mr-1">4.5</span>
                <span className="text-neutral-400 mr-1">(240)</span>
                <span className="text-yellow-400">★</span>
              </div>
              <div className="flex items-center -space-x-2">
                <img src="https://i.pravatar.cc/100?img=11" className="w-8 h-8 rounded-full border-2 border-white" alt="avatar"/>
                <img src="https://i.pravatar.cc/100?img=12" className="w-8 h-8 rounded-full border-2 border-white" alt="avatar"/>
                <img src="https://i.pravatar.cc/100?img=13" className="w-8 h-8 rounded-full border-2 border-white" alt="avatar"/>
                <img src="https://i.pravatar.cc/100?img=14" className="w-8 h-8 rounded-full border-2 border-white" alt="avatar"/>
                <img src="https://i.pravatar.cc/100?img=15" className="w-8 h-8 rounded-full border-2 border-white" alt="avatar"/>
                <div className="w-8 h-8 rounded-full bg-[#CBFC01] text-neutral-950 font-bold text-[10px] flex items-center justify-center border-2 border-white">
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Text & Checklist */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-poppins text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0c1024] leading-[1.15] tracking-tight">
              Create & Manage<br />Courses Easily.
            </h2>

            <p className="text-neutral-500 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              <strong className="text-neutral-900 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0445ff] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span className="font-poppins font-semibold text-neutral-900 text-lg">Share Your Expertise</span>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0445ff] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span className="font-poppins font-semibold text-neutral-900 text-lg">Monetize Your Passion</span>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0445ff] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span className="font-poppins font-semibold text-neutral-900 text-lg">Flexibility and Autonomy</span>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0445ff] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span className="font-poppins font-semibold text-neutral-900 text-lg">Build a Community</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: UNLOCK YOUR POTENTIAL AS A CREATOR (Image 1 CTA Banner) --- */}
      <section className="relative w-full bg-[#0445FF] py-24 sm:py-28 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            backgroundPosition: 'center center'
          }}
        />

        {/* 3D Decorative Floating Shapes */}
        {/* Left Side Shapes */}
        <img 
          src="/assets/img_e3b55902d6.png" 
          alt="Lime coil shape" 
          className="absolute left-[-20px] top-6 w-36 sm:w-48 lg:w-56 drop-shadow-2xl opacity-95 pointer-events-none transform -rotate-12"
        />
        <img 
          src="/assets/img_83fb3e0405.png" 
          alt="White helix 3d shape" 
          className="absolute left-[12%] top-8 w-24 sm:w-32 drop-shadow-xl opacity-90 pointer-events-none"
        />
        <img 
          src="/assets/img_1e078348a5.png" 
          alt="Lime torus shape" 
          className="absolute left-[2%] bottom-[-20px] w-40 sm:w-52 drop-shadow-2xl opacity-90 pointer-events-none"
        />

        {/* Right Side Shapes */}
        <img 
          src="/assets/img_0577f0e9b7.png" 
          alt="Yellow pyramid 3d shape" 
          className="absolute right-[12%] top-6 w-28 sm:w-36 drop-shadow-2xl opacity-95 pointer-events-none"
        />
        <img 
          src="/assets/img_3fe5591817.png" 
          alt="White cylinder 3d shape" 
          className="absolute right-[-10px] top-12 w-36 sm:w-48 lg:w-56 drop-shadow-2xl opacity-95 pointer-events-none transform rotate-12"
        />
        <img 
          src="/assets/img_e3b55902d6.png" 
          alt="Lime spring shape" 
          className="absolute right-[5%] bottom-[-40px] w-44 sm:w-56 drop-shadow-2xl opacity-95 pointer-events-none"
        />

        {/* Banner Content */}
        <div className="relative max-w-[1000px] mx-auto px-6 text-center z-10 flex flex-col items-center">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white leading-[1.2] mb-6 tracking-tight">
            Unlock Your Potential as a<br className="hidden sm:inline" /> Creator with ByteSpace
          </h2>

          <p className="text-white/90 text-sm sm:text-base md:text-lg font-normal max-w-3xl mb-10 leading-relaxed">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <button className="bg-[#CBFC01] hover:bg-[#b9e600] text-neutral-950 font-poppins font-semibold px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-base cursor-pointer">
            Join as Creator
          </button>
        </div>
      </section>

      {/* --- SECTION 5: DISCOVER WHAT OUR COMMUNITY IS SAYING (Image 2 Testimonials) --- */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[#f8fcdb]/50 via-[#fdfefe] to-[#ebf3ff]/60 overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#eefb98]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#dce8ff]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-6">
              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0c1024] leading-[1.2] tracking-tight">
                Discover What Our<br />Community Is Saying
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-neutral-600 text-sm sm:text-base font-normal leading-relaxed">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Sarah M. */}
            <div className="bg-white rounded-[28px] p-8 sm:p-9 border border-neutral-100/80 shadow-xl shadow-neutral-950/5 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
                    alt="Sarah M." 
                    className="w-16 h-16 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-neutral-900 leading-tight">Sarah M.</h3>
                    <p className="text-[#0445ff] font-medium text-sm mt-0.5">Enthusiastic Learner</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
                </p>
              </div>
            </div>

            {/* Card 2: James L. */}
            <div className="bg-white rounded-[28px] p-8 sm:p-9 border border-neutral-100/80 shadow-xl shadow-neutral-950/5 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                    alt="James L." 
                    className="w-16 h-16 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-neutral-900 leading-tight">James L.</h3>
                    <p className="text-[#0445ff] font-medium text-sm mt-0.5">Lifelong Learner</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
                </p>
              </div>
            </div>

            {/* Card 3: Alex B. */}
            <div className="bg-white rounded-[28px] p-8 sm:p-9 border border-neutral-100/80 shadow-xl shadow-neutral-950/5 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" 
                    alt="Alex B." 
                    className="w-16 h-16 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-neutral-900 leading-tight">Alex B.</h3>
                    <p className="text-[#0445ff] font-medium text-sm mt-0.5">Inspired Creator</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- FOOTER COMPONENT (Image 3) --- */}
      <Footer />

    </div>
  );
};

// Reusable Course Card Component
const CourseCard = ({ imageSrc, fallbackImg, title, rating, author, price }) => {
  return (
    <div className="bg-white rounded-[32px] border border-neutral-200 p-4 transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-900/5 cursor-pointer">
      {/* Thumbnail Container */}
      <div className="relative rounded-[24px] overflow-hidden aspect-[16/10] mb-5">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={(e) => e.target.src = fallbackImg}
        />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
           <div className="flex space-x-2">
             <span className="bg-white/80 backdrop-blur-md text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full">
               17 Lessons
             </span>
             <span className="bg-white/80 backdrop-blur-md text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full">
               2 hours 16 mins
             </span>
           </div>
           <span className="bg-white/80 backdrop-blur-md text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full">
             59 Comments
           </span>
        </div>
      </div>

      <div className="px-2">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-poppins font-bold text-[22px] text-neutral-950 leading-tight">
            {title}
          </h3>
          <div className="flex items-center text-neutral-500 font-medium whitespace-nowrap ml-4">
            {rating} <span className="text-neutral-300 ml-1 text-lg">★</span>
          </div>
        </div>

        <p className="text-neutral-500 text-sm mb-6">
          by <span className="text-primary-600 font-medium hover:underline">{author}</span>
        </p>

        <div className="flex items-center justify-between border-t border-neutral-100 pt-5 mt-auto">
          <div className="flex items-center space-x-4">
            {/* Beginner Pill */}
            <div className="flex items-center space-x-1.5 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-100">
              <BarChart2 className="w-4 h-4 text-neutral-500" />
              <span className="text-neutral-600 text-xs font-medium">Beginner</span>
            </div>
            
            {/* Avatars */}
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/100?img=33" className="w-7 h-7 rounded-full border-2 border-white" alt="avatar"/>
              <img src="https://i.pravatar.cc/100?img=34" className="w-7 h-7 rounded-full border-2 border-white" alt="avatar"/>
              <img src="https://i.pravatar.cc/100?img=35" className="w-7 h-7 rounded-full border-2 border-white" alt="avatar"/>
              <div className="w-7 h-7 rounded-full border-2 border-white bg-secondary-500 flex items-center justify-center font-bold text-[10px] text-neutral-900 z-10 relative">
                26+
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline">
            <span className="font-poppins font-bold text-2xl text-primary-600">{price}</span>
            <span className="text-neutral-400 text-xs font-medium ml-1">/lifetime</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


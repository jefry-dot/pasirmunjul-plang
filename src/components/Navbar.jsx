import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, Sun, Moon, AlignJustify, X } from 'lucide-react';

export default function Navbar({ currentView, setView }) {
  const [timeStr, setTimeStr] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Live ticking clock in Indonesian locale
  useEffect(() => {
    const updateTime = () => {
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      
      const now = new Date();
      // Set to match simulated local time if needed, or use device time
      const dayName = days[now.getDay()];
      const day = now.getDate();
      const monthName = months[now.getMonth()];
      const year = now.getFullYear();
      
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      
      setTimeStr(`${day} ${monthName} ${year} ${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Dropdown options
  const profileOptions = [
    { label: 'Profil Singkat & Statistik', viewId: 'profil-singkat' },
    { label: 'Sejarah Desa', viewId: 'sejarah' },
    { label: 'Visi dan Misi', viewId: 'visi-misi' },
    { label: 'Struktur Pemerintahan Desa Pasirmunjul', viewId: 'struktur' },
    { label: 'Monografi', viewId: 'monografi' },
    { label: 'Peta Desa', viewId: 'peta-desa' },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (viewId) => {
    setView(viewId);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full border-b border-stone-250 bg-white">
      {/* 1. Top Blue Bar */}
      <div className="w-full bg-[#004e92] text-white py-2.5 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-semibold tracking-wide">
        <div className="flex items-center space-x-2">
          <span className="text-blue-200">Waktu Server:</span>
          <span>{timeStr || '8 Juli 2026 17:30:57'}</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <span className="bg-blue-900/40 px-2 py-0.5 rounded text-[10px]">KKN Sukatani 2026</span>
          <span className="text-blue-100 text-[10px]">QR Code Portal</span>
        </div>
      </div>

      {/* 2. Main Header Area (Logo, Name, Address) */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        
        {/* Shield Logo SVG - high fidelity representation of Indonesian village emblem */}
        <div className="w-20 h-24 shrink-0 bg-white p-1 select-none">
          <svg viewBox="0 0 100 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Shield Outer Outline */}
            <path d="M10,10 L90,10 L90,60 C90,95 50,115 50,115 C50,115 10,95 10,60 Z" fill="#ffffff" stroke="#1c1917" strokeWidth="2"/>
            {/* Top Red Section */}
            <path d="M11,11 L89,11 L89,35 L11,35 Z" fill="#ef4444"/>
            {/* Banner Text Area */}
            <rect x="22" y="18" width="56" height="10" rx="2" fill="#ffffff" stroke="#1c1917" strokeWidth="1"/>
            <text x="50" y="26" fontFamily="sans-serif" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#1c1917">PASIRMUNJUL</text>
            {/* Yellow Star in red portion */}
            <polygon points="50,4 53,10 60,10 55,14 57,20 50,16 43,20 45,14 40,10 47,10" fill="#facc15" transform="scale(0.5) translate(50, 16)"/>
            
            {/* Bottom Inner Shield */}
            <path d="M15,35 L85,35 L85,60 C85,88 50,108 50,108 C50,108 15,88 15,60 Z" fill="#15803d" opacity="0.1"/>
            
            {/* Crossed Weapons / Rice & Cotton Motifs */}
            {/* Gear in center */}
            <circle cx="50" cy="65" r="14" fill="none" stroke="#1c1917" strokeWidth="2.5" strokeDasharray="3,1.5"/>
            <circle cx="50" cy="65" r="8" fill="#e7e5e4" stroke="#1c1917" strokeWidth="1.5"/>
            
            {/* Rice (Yellow) and Cotton (White) outlines */}
            <path d="M22,78 Q25,50 40,48" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round"/>
            <path d="M78,78 Q75,50 60,48" fill="none" stroke="#f4f4f5" strokeWidth="2" strokeLinecap="round"/>
            
            {/* Crossed bambu runcing/rifle symbol representing community resilience */}
            <line x1="38" y1="78" x2="62" y2="52" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="62" y1="78" x2="38" y2="52" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="50" cy="65" r="3" fill="#ef4444"/>
          </svg>
        </div>

        {/* Brand Information */}
        <div className="text-center md:text-left space-y-1">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-stone-900 leading-none tracking-tight">
            Desa Pasirmunjul
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-medium max-w-2xl leading-relaxed">
            Jl. Raya Pasirmunjul No. 1, Kecamatan Sukatani, Kabupaten Purwakarta, Provinsi Jawa Barat, Kode Pos 41167
          </p>
        </div>
      </div>

      {/* 3. Dark Navigation Menu Bar */}
      <nav className="w-full bg-[#1b1b1b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12">
            
            {/* Left Nav menu items */}
            <div className="flex items-center space-x-1">
              
              {/* Beranda Link */}
              <button
                onClick={() => handleNavClick('home')}
                className={`h-full px-5 text-sm font-bold flex items-center transition-colors cursor-pointer border-b-4 ${
                  currentView === 'home' 
                    ? 'border-blue-500 bg-[#0c0c0c] text-white' 
                    : 'border-transparent text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                Beranda
              </button>

              {/* Profile Desa Dropdown Trigger */}
              <div className="relative h-full" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  className={`h-full px-5 text-sm font-bold flex items-center space-x-1.5 transition-colors cursor-pointer border-b-4 ${
                    ['profil-singkat', 'sejarah', 'visi-misi', 'struktur', 'monografi', 'peta-desa'].includes(currentView)
                      ? 'border-blue-500 bg-[#0c0c0c] text-white'
                      : 'border-transparent text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                >
                  <span>Profile Desa</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu Panel */}
                <div 
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className={`absolute left-0 mt-0 w-80 bg-white text-stone-800 border border-stone-200 rounded-b-xl shadow-lg z-50 transition-all duration-200 ${
                    isDropdownOpen 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  <ul className="py-2 divide-y divide-stone-100">
                    {profileOptions.map((opt, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => handleNavClick(opt.viewId)}
                          className="w-full text-left px-5 py-3 text-xs sm:text-sm font-semibold hover:bg-stone-50 hover:text-blue-700 transition-colors cursor-pointer flex items-center justify-between"
                        >
                          <span>{opt.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side controls (Search & Theme toggles - simulation) */}
            <div className="hidden sm:flex items-center space-x-3 text-stone-400">
              {/* Theme toggle switch simulation */}
              <button 
                className="p-1.5 rounded-full hover:bg-stone-800 hover:text-white transition-colors cursor-pointer"
                title="Ganti Tema"
              >
                <div className="w-9 h-5 bg-stone-700 rounded-full p-0.5 flex items-center justify-start">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <Sun className="h-2.5 w-2.5 text-amber-500" />
                  </div>
                </div>
              </button>
              
              {/* Search Icon simulation */}
              <button 
                className="p-1.5 rounded-full hover:bg-stone-800 hover:text-white transition-colors cursor-pointer"
                title="Pencarian"
              >
                <Search className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Mobile menu burger button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-stone-300 hover:text-white hover:bg-stone-800"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu pane */}
        <div 
          className={`sm:hidden bg-[#242424] text-white border-t border-stone-800 transition-all duration-350 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left block px-4 py-2.5 rounded-lg text-sm font-bold ${
                currentView === 'home' ? 'bg-[#004e92] text-white' : 'text-stone-300 hover:bg-stone-800'
              }`}
            >
              Beranda
            </button>
            
            {/* Header divider for mobile list */}
            <div className="text-[10px] uppercase font-bold text-stone-500 px-4 pt-3 pb-1.5 tracking-wider border-t border-stone-800 mt-2">
              Profile Desa
            </div>
            {profileOptions.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(opt.viewId)}
                className={`w-full text-left block px-6 py-2.5 rounded-lg text-xs font-semibold ${
                  currentView === opt.viewId ? 'bg-[#004e92] text-white' : 'text-stone-400 hover:bg-stone-800 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

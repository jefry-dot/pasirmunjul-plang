import React from 'react';
import { Landmark, Heart, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer({ setView }) {
  const handleNavClick = (viewId) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Landmark className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Desa Pasirmunjul</span>
            </div>
            <p className="text-sm text-stone-400 max-w-sm">
              Sistem Informasi Desa Berbasis QR Code. Memudahkan warga dan pengunjung untuk mengakses potensi pertanian, UMKM, dan kabar terkini langsung lewat pemindaian ponsel.
            </p>
            <div className="text-xs text-stone-500">
              Dikembangkan oleh Tim Mahasiswa KKN Sukatani Purwakarta 2026.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Navigasi Halaman</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('dusun-1')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Dusun 1 (Sentra UMKM)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('dusun-2')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Dusun 2
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('dusun-3')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Dusun 3 (Tani & Alam)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Kabar Desa (Blog)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Kantor Desa</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Jl. Raya Pasirmunjul, Kec. Sukatani, Kabupaten Purwakarta, Jawa Barat 41167</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>info@pasirmunjul.desa.id</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>+62 812-3456-7890 (Kantor Desa)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Pemerintah Desa Pasirmunjul. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Dibuat dengan</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
            <span>untuk Pengabdian Masyarakat KKN Purwakarta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

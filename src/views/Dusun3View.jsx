import React from 'react';
import { ArrowLeft, MapPin, Compass, Landmark, Wind, Trees, Droplet } from 'lucide-react';
import PhotoGallery from '../components/PhotoGallery';

export default function Dusun3View({ data, setView }) {
  // Map icons to features dynamically
  const renderIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Droplet className="h-6 w-6 text-emerald-700" />;
      case 1:
        return <Trees className="h-6 w-6 text-emerald-700" />;
      default:
        return <Compass className="h-6 w-6 text-emerald-700" />;
    }
  };

  return (
    <div className="space-y-10 pb-16 animate-fade-in">
      {/* Header and Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <button 
            onClick={() => setView('home')}
            className="flex items-center space-x-2 text-stone-500 hover:text-emerald-700 font-medium transition-colors cursor-pointer text-sm mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Beranda</span>
          </button>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-stone-900 tracking-tight">
            {data.name}
          </h1>
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mt-1">
            {data.lead}
          </p>
        </div>

        {/* Dynamic Badge */}
        <span className="inline-flex items-center self-start sm:self-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
          📍 Dusun QR Terverifikasi
        </span>
      </div>

      {/* Profile Overview Card */}
      <section className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs">
        <p className="text-stone-600 leading-relaxed text-sm md:text-base">
          {data.profile}
        </p>
      </section>

      {/* Characteristics Section */}
      <section className="space-y-6">
        <div className="border-l-4 border-emerald-600 pl-4">
          <h3 className="font-display font-bold text-stone-900 text-xl">Karakteristik Lingkungan</h3>
          <p className="text-xs text-stone-500 mt-0.5">Keunikan alam dan potensi komoditas tani Dusun 3</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.characteristics.map((char, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs flex items-start space-x-4 hover:border-emerald-200 hover:shadow-xs transition-all duration-300"
            >
              <div className="bg-emerald-50 p-3 rounded-xl shrink-0">
                {renderIcon(idx)}
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-stone-900 text-base">{char.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{char.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Narrative Card */}
      <section className="bg-emerald-800 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-700/30 rounded-full blur-2xl -ml-24 -mb-24"></div>

        <div className="relative space-y-4">
          <h3 className="font-display font-bold text-amber-300 text-lg md:text-xl uppercase tracking-wider flex items-center space-x-2">
            <Wind className="h-5 w-5" />
            <span>Rencana Pengembangan & Eduwisata</span>
          </h3>
          <h4 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl max-w-2xl leading-tight">
            Mewujudkan Konsep Agro-Eduwisata Berkelanjutan
          </h4>
          <p className="text-emerald-100 text-sm md:text-base leading-relaxed max-w-3xl">
            {data.narrative}
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="font-display font-bold text-stone-900 text-xl md:text-2xl mb-1">Galeri Alam & Pertanian</h3>
          <p className="text-xs text-stone-500">Klik salah satu foto untuk memperbesar dan melihat keterangan.</p>
        </div>
        <PhotoGallery photos={data.gallery} />
      </section>
    </div>
  );
}

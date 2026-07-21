import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, PhoneCall, MapPin, Home, Users, Layers, Leaf
} from 'lucide-react';
import { client } from '../data/sanityClient';
import { DUSUN_DATA, VILLAGE_INFO } from '../data/mockData';
import PhotoGallery from '../components/PhotoGallery';

export default function DusunDetailView({ dusunId, setView }) {
  const [dusun, setDusun] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const contentRef = useRef(null);

  // Fetch individual dusun data from Sanity CMS
  useEffect(() => {
    setLoading(true);

    client.fetch(`*[_type == "dusun" && (_id == $dusunId || dusunId.current == $dusunId)][0] {
      name,
      lead,
      subtitle,
      icon,
      profile,
      whatsappContact,
      batas { utara, selatan, timur, barat },
      "coverImageUrl": coverImage.asset->url,
      "umkmImageUrl": umkmImage.asset->url,
      "gallery": gallery[] {
        "src": asset->url,
        "title": title,
        "description": description
      }
    }`, { dusunId })
    .then((data) => {
      if (data) {
        const localFallback = DUSUN_DATA[dusunId];
        const mergedData = {
          ...localFallback,
          name: data.name || localFallback.name,
          lead: data.lead || localFallback.lead,
          subtitle: data.subtitle || localFallback.subtitle,
          icon: data.icon || localFallback.icon,
          profile: data.profile || localFallback.profile,
          whatsappContact: data.whatsappContact || localFallback.whatsappContact,
          coverImageUrl: data.coverImageUrl || null,
          umkmImageUrl: data.umkmImageUrl || null,
          batas: data.batas ? {
            utara: data.batas.utara || localFallback.batas?.utara,
            selatan: data.batas.selatan || localFallback.batas?.selatan,
            timur: data.batas.timur || localFallback.batas?.timur,
            barat: data.batas.barat || localFallback.batas?.barat,
          } : localFallback.batas,
          gallery: (data.gallery && data.gallery.length > 0) ? data.gallery : localFallback.gallery
        };
        setDusun(mergedData);
      } else {
        setDusun(DUSUN_DATA[dusunId]);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Gagal mengambil data Dusun dari Sanity, menggunakan data lokal:", err);
      setDusun(DUSUN_DATA[dusunId]);
      setLoading(false);
    });
  }, [dusunId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-4">
        <div className="w-8 h-8 border-2 border-stone-800 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-stone-400 font-bold text-[10px] uppercase tracking-widest animate-pulse">Loading Page...</p>
      </div>
    );
  }

  if (!dusun) return null;

  const handleContactWhatsApp = () => {
    const waText = encodeURIComponent(`Halo, saya tertarik dengan informasi/produk dari ${dusun.name} Desa Pasirmunjul.`);
    const waUrl = `https://wa.me/${dusun.whatsappContact}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get images for the section contents
  const localFallback = DUSUN_DATA[dusunId];
  
  // Hero Cover Banner Image:
  const heroBgImage = dusun.coverImageUrl 
    ? dusun.coverImageUrl 
    : (localFallback.gallery && localFallback.gallery[0] ? localFallback.gallery[0].src : null);

  // Gallery Photos
  const remainingGalleryPhotos = dusun.gallery || [];

  // Stats data
  const stats = dusun.stats || localFallback.stats;
  const kampungList = dusun.kampungList || localFallback.kampungList || [];
  const komoditas = dusun.komoditas || localFallback.komoditas;

  return (
    <div className="pb-24 animate-fade-in font-sans text-stone-850 w-full">
      
      {/* 1. HERO HEADER BANNER (Full-screen viewport height) */}
      <section 
        className="relative h-screen flex items-center justify-center text-center p-8 sm:p-16 bg-stone-900 overflow-hidden w-full"
        style={heroBgImage ? {
          backgroundImage: `linear-gradient(rgba(4, 47, 31, 0.72), rgba(4, 47, 31, 0.72)), url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {
          background: 'linear-gradient(135deg, #064e3b, #022c22)'
        }}
      >
        {/* Floating Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button 
            onClick={() => setView('home')}
            className="inline-flex items-center space-x-2 text-white/90 hover:text-white font-extrabold transition-colors cursor-pointer text-xs uppercase tracking-widest bg-black/40 hover:bg-black/60 backdrop-blur-xs px-4 py-2 border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>KEMBALI KE BERANDA</span>
          </button>
        </div>

        <div className="space-y-5 text-white max-w-3xl z-10">
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-none uppercase">
            {dusun.name}
          </h1>
          <p className="text-stone-300 text-sm font-medium">Desa Pasirmunjul</p>
          <div className="w-12 h-0.5 bg-white mx-auto"></div>
          {dusun.subtitle && (
            <p className="text-stone-300 text-xs sm:text-sm uppercase tracking-widest font-semibold max-w-xl mx-auto leading-relaxed">
              {dusun.subtitle}
            </p>
          )}
          
          <div className="pt-6">
            <button
              onClick={scrollToContent}
              className="inline-flex py-2.5 px-6 border border-white hover:bg-white hover:text-stone-950 font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all cursor-pointer bg-transparent text-white"
            >
              JELAJAHI DUSUN
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATISTIK MINI DUSUN (4 kartu angka) */}
      {stats && (
        <section ref={contentRef} className="bg-white border-b border-stone-200 py-10 px-4 scroll-mt-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <p className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest">Ringkasan Data</p>
              <h2 className="font-display font-black text-stone-900 text-xl sm:text-2xl uppercase tracking-wider">
                Statistik {dusun.name}
              </h2>
              <div className="w-8 h-0.5 bg-emerald-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Jumlah Kampung */}
              <div className="bg-emerald-50/80 border border-emerald-200/60 rounded-xl p-5 text-center space-y-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <Home className="h-5 w-5 text-emerald-700" />
                </div>
                <p className="font-display font-black text-2xl sm:text-3xl text-stone-900">{stats.kampung}</p>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Kampung</p>
              </div>

              {/* Jumlah RT */}
              <div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-5 text-center space-y-2">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-5 w-5 text-amber-700" />
                </div>
                <p className="font-display font-black text-2xl sm:text-3xl text-stone-900">{stats.rt}</p>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">RT</p>
              </div>

              {/* Jumlah RW */}
              <div className="bg-blue-50/80 border border-blue-200/60 rounded-xl p-5 text-center space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Layers className="h-5 w-5 text-blue-700" />
                </div>
                <p className="font-display font-black text-2xl sm:text-3xl text-stone-900">{stats.rw}</p>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">RW</p>
              </div>

              {/* Komoditas Utama */}
              <div className="bg-green-50/80 border border-green-200/60 rounded-xl p-5 text-center space-y-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="h-5 w-5 text-green-700" />
                </div>
                <p className="font-display font-black text-sm sm:text-base text-stone-900 leading-tight">{stats.komoditas}</p>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Komoditas</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. PROFIL KEPEMIMPINAN KADUS */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <section className="bg-white p-6 sm:p-10 border border-stone-200 shadow-sm rounded-sm">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest">Profil Kepemimpinan</p>
              <h2 className="font-display font-black text-stone-900 text-2xl uppercase tracking-wider">
                Kepala Dusun: {dusun.lead}
              </h2>
              <div className="w-8 h-0.5 bg-emerald-500"></div>
            </div>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-justify">
              {dusun.profile}
            </p>

            <div className="pt-2">
              <button
                onClick={handleContactWhatsApp}
                className="inline-flex py-3 px-6 bg-stone-900 hover:bg-stone-850 text-white font-bold transition-all text-xs uppercase tracking-widest border border-stone-900 cursor-pointer"
              >
                HUBUNGI KEPALA DUSUN
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* 4. WILAYAH KAMPUNG & RT/RW (Tabel) */}
      {kampungList.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <section className="bg-white border border-stone-200 shadow-sm rounded-sm overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-stone-100">
              <div className="space-y-2">
                <p className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest">Pembagian Wilayah</p>
                <h3 className="font-display font-black text-stone-900 text-xl uppercase tracking-wider">
                  Kampung & RT/RW {dusun.name}
                </h3>
                <div className="w-8 h-0.5 bg-emerald-500"></div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left py-3 px-6 font-extrabold text-[10px] uppercase tracking-widest text-stone-500">No</th>
                    <th className="text-left py-3 px-6 font-extrabold text-[10px] uppercase tracking-widest text-stone-500">Nama Kampung</th>
                    <th className="text-left py-3 px-6 font-extrabold text-[10px] uppercase tracking-widest text-stone-500">RT</th>
                    <th className="text-left py-3 px-6 font-extrabold text-[10px] uppercase tracking-widest text-stone-500">RW</th>
                  </tr>
                </thead>
                <tbody>
                  {kampungList.map((kp, idx) => (
                    <tr key={idx} className={`border-b border-stone-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'} hover:bg-emerald-50/50 transition-colors`}>
                      <td className="py-3 px-6 text-stone-400 font-bold text-xs">{String(idx + 1).padStart(2, '0')}</td>
                      <td className="py-3 px-6 font-bold text-stone-800">{kp.nama}</td>
                      <td className="py-3 px-6 text-stone-600">{kp.rt}</td>
                      <td className="py-3 px-6 text-stone-600">{kp.rw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}

      {/* 5. BATAS WILAYAH GEOGRAFIS */}
      {dusun.batas && (
        <section className="bg-stone-50 py-12 px-6 border-y border-stone-200 space-y-8 w-full mt-12">
          <div className="text-center space-y-2">
            <h3 className="text-stone-900 font-black uppercase text-xs sm:text-sm tracking-widest">
              BATAS WILAYAH GEOGRAFIS
            </h3>
            <div className="w-6 h-0.5 bg-stone-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase text-stone-400 tracking-widest">Utara</p>
              <p className="font-bold text-xs sm:text-sm text-stone-800 leading-snug">{dusun.batas.utara}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase text-stone-400 tracking-widest">Selatan</p>
              <p className="font-bold text-xs sm:text-sm text-stone-800 leading-snug">{dusun.batas.selatan}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase text-stone-400 tracking-widest">Timur</p>
              <p className="font-bold text-xs sm:text-sm text-stone-800 leading-snug">{dusun.batas.timur}</p>
            </div>

            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase text-stone-400 tracking-widest">Barat</p>
              <p className="font-bold text-xs sm:text-sm text-stone-800 leading-snug">{dusun.batas.barat}</p>
            </div>
          </div>
        </section>
      )}

      {/* Remaining content blocks (Constrained inside margin) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-16">

        {/* 6. KOMODITAS UNGGULAN */}
        {komoditas && (
          <section className="bg-white p-6 sm:p-10 border border-stone-200 shadow-sm rounded-sm">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest">Potensi Unggulan</p>
                <h3 className="font-display font-black text-stone-900 text-2xl uppercase tracking-wider">
                  {komoditas.name}
                </h3>
                <div className="w-8 h-0.5 bg-emerald-500"></div>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-justify">
                {komoditas.description}
              </p>
            </div>
          </section>
        )}

        {/* 7. DUSUN GALLERY (Photos at the bottom) */}
        {remainingGalleryPhotos.length > 0 && (
          <section className="bg-white p-6 sm:p-10 border border-stone-200 space-y-6">
            <div className="border-b border-stone-150 pb-4">
              <h3 className="font-display font-black text-stone-900 text-lg uppercase tracking-wider">Galeri Visual Dusun</h3>
              <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest font-semibold font-display">Kumpulan Foto & Aktivitas Terkait</p>
            </div>
            <PhotoGallery photos={remainingGalleryPhotos} />
          </section>
        )}
        
      </div>
      
    </div>
  );
}

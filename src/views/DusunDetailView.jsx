import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, PhoneCall, Check, Compass, MapPin, Landmark, Award
} from 'lucide-react';
import { client } from '../data/sanityClient';
import { DUSUN_DATA, VILLAGE_INFO } from '../data/mockData';
import PhotoGallery from '../components/PhotoGallery';

export default function DusunDetailView({ dusunId, setView }) {
  const [dusun, setDusun] = useState(null);
  const [villageAbout, setVillageAbout] = useState(VILLAGE_INFO.about);
  const [loading, setLoading] = useState(true);
  
  const contentRef = useRef(null);

  // Fetch individual dusun data and village about text from Sanity CMS
  useEffect(() => {
    setLoading(true);
    
    // 1. Fetch village info about text for Section 1
    client.fetch(`*[_type == "villageInfo"][0].about`)
      .then((aboutText) => {
        if (aboutText) setVillageAbout(aboutText);
      })
      .catch((err) => console.error("Error fetching village info for dusun view:", err));

    // 2. Fetch dusun info
    client.fetch(`*[_type == "dusun" && (_id == $dusunId || dusunId.current == $dusunId)][0] {
      name,
      lead,
      subtitle,
      icon,
      profile,
      whatsappContact,
      batas { utara, selatan, timur, barat },
      umkm { name, description, steps[] { no, title, desc } },
      characteristics[] { title, desc },
      narrative,
      "coverImageUrl": coverImage.asset->url,
      "profileImageUrl": profileImage.asset->url,
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
          name: data.name || localFallback.name,
          lead: data.lead || localFallback.lead,
          subtitle: data.subtitle || localFallback.subtitle,
          icon: data.icon || localFallback.icon,
          profile: data.profile || localFallback.profile,
          whatsappContact: data.whatsappContact || localFallback.whatsappContact,
          coverImageUrl: data.coverImageUrl || null,
          profileImageUrl: data.profileImageUrl || null,
          umkmImageUrl: data.umkmImageUrl || null,
          batas: data.batas ? {
            utara: data.batas.utara || localFallback.batas?.utara,
            selatan: data.batas.selatan || localFallback.batas?.selatan,
            timur: data.batas.timur || localFallback.batas?.timur,
            barat: data.batas.barat || localFallback.batas?.barat,
          } : localFallback.batas,
          umkm: data.umkm ? {
            name: data.umkm.name || localFallback.umkm?.name,
            description: data.umkm.description || localFallback.umkm?.description,
            steps: (data.umkm.steps && data.umkm.steps.length > 0) ? data.umkm.steps : localFallback.umkm?.steps
          } : localFallback.umkm,
          narrative: data.narrative || localFallback.narrative,
          characteristics: (data.characteristics && data.characteristics.length > 0) ? data.characteristics : localFallback.characteristics,
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

  // Profile image:
  const section1Image = dusun.profileImageUrl 
    ? dusun.profileImageUrl 
    : (localFallback.gallery && localFallback.gallery[0] ? localFallback.gallery[0].src : 'https://via.placeholder.com/600x800');

  // UMKM image:
  const section2Image = dusun.umkmImageUrl 
    ? dusun.umkmImageUrl 
    : (localFallback.gallery && localFallback.gallery[1] ? localFallback.gallery[1].src : 'https://via.placeholder.com/1200x800');

  // Gallery Photos (Additional photos at the bottom)
  const remainingGalleryPhotos = dusun.gallery || [];

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
        {/* Floating Back Button overlaid on top-left of the Hero Banner */}
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
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* 2. PROFILE SECTION (Constrained inside margin, starts directly below the full-screen banner) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <section ref={contentRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center bg-white p-6 sm:p-10 border border-stone-200 scroll-mt-12 shadow-sm rounded-sm">
          {/* Left Column: Portrait Profile Image */}
          <div className="md:col-span-5 aspect-[3/4] sm:aspect-square md:aspect-[3/4] bg-stone-50 border border-stone-200 overflow-hidden">
            <img 
              src={section1Image} 
              alt="Kepala Dusun" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Bio Details & CTA button */}
          <div className="md:col-span-7 space-y-6">
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

      {/* 3. BOUNDARIES SECTION (Full-width horizontal strip stretching to edges of window) */}
      {dusun.batas && (
        <section className="bg-stone-50 py-12 px-6 border-y border-stone-200 space-y-8 w-full mt-16">
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
        
        {/* 4. POTENTIAL / UMKM SECTION (Weebly Alternate Layout Block) */}
        {dusun.umkm && (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center bg-white p-6 sm:p-10 border border-stone-200">
            {/* Left: Info */}
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest">Potensi Unggulan</p>
                <h3 className="font-display font-black text-stone-900 text-2xl uppercase tracking-wider">
                  {dusun.umkm.name}
                </h3>
                <div className="w-8 h-0.5 bg-emerald-500"></div>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-justify">
                {dusun.umkm.description}
              </p>

              {/* List of steps under description */}
              {dusun.umkm.steps && dusun.umkm.steps.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs uppercase tracking-wider font-extrabold text-stone-900">Alur & Proses Pembuatan:</p>
                  <div className="space-y-3">
                    {dusun.umkm.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600">
                        <span className="flex items-center justify-center w-5 h-5 bg-stone-900 text-white font-black text-[9px] shrink-0 mt-0.5">
                          {step.no || `0${idx+1}`}
                        </span>
                        <span><strong>{step.title}:</strong> {step.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Product Image */}
            <div className="md:col-span-5 aspect-[4/3] bg-stone-50 border border-stone-200 overflow-hidden self-start md:self-center">
              <img 
                src={section2Image} 
                alt={dusun.umkm.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        )}

        {/* 5. TIMELINE KKN / NARRATIVE */}
        {dusun.narrative && (
          <section className="bg-stone-50 p-6 sm:p-10 border border-stone-200 space-y-4">
            <h3 className="font-display font-black text-stone-900 text-lg uppercase tracking-wider">Catatan Pengabdian KKN</h3>
            <div className="w-8 h-0.5 bg-emerald-500"></div>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-justify whitespace-pre-line">
              {dusun.narrative}
            </p>
          </section>
        )}

        {/* 6. DUSUN GALLERY (Photos at the bottom) */}
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

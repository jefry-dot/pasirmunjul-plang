import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, PhoneCall, MapPin, Home, Users, Layers, Leaf, X, ChevronLeft, ChevronRight, ZoomIn
} from 'lucide-react';
import { client } from '../data/sanityClient';
import { DUSUN_DATA, VILLAGE_INFO } from '../data/mockData';

// ============================================
// LIGHTBOX GALLERY COMPONENT (Popup Foto)
// ============================================
function LightboxGallery({ photos, isOpen, onClose, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex(prev => (prev + 1) % photos.length);
      if (e.key === 'ArrowLeft') setCurrentIndex(prev => (prev - 1 + photos.length) % photos.length);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, photos.length, onClose]);

  if (!isOpen || !photos || photos.length === 0) return null;

  const current = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
      >
        <X className="h-5 w-5 text-white" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-50 text-white/70 text-xs font-bold uppercase tracking-widest">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Previous Button */}
      {photos.length > 1 && (
        <button 
          onClick={() => setCurrentIndex(prev => (prev - 1 + photos.length) % photos.length)}
          className="absolute left-2 sm:left-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
      )}

      {/* Image */}
      <div className="max-w-5xl max-h-[85vh] px-12 flex flex-col items-center">
        <img 
          src={current.src} 
          alt={current.title || 'Foto Dusun'} 
          className="max-w-full max-h-[75vh] object-contain rounded-sm"
        />
        {(current.title || current.description) && (
          <div className="text-center mt-4 max-w-lg">
            {current.title && <p className="text-white font-bold text-sm">{current.title}</p>}
            {current.description && <p className="text-white/60 text-xs mt-1">{current.description}</p>}
          </div>
        )}
      </div>

      {/* Next Button */}
      {photos.length > 1 && (
        <button 
          onClick={() => setCurrentIndex(prev => (prev + 1) % photos.length)}
          className="absolute right-2 sm:right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      )}

      {/* Thumbnails Strip */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 overflow-x-auto max-w-[90vw] px-4 py-2">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-12 h-12 rounded-sm overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                idx === currentIndex ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={photo.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// MAIN DUSUN DETAIL VIEW
// ============================================
export default function DusunDetailView({ dusunId, setView }) {
  const [dusun, setDusun] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
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
      "mapsImageUrl": mapsImage.asset->url,
      mapsEmbedUrl,
      mapsLinkUrl,
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
          mapsImageUrl: data.mapsImageUrl || null,
          mapsEmbedUrl: data.mapsEmbedUrl || null,
          mapsLinkUrl: data.mapsLinkUrl || null,
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

  // Get images
  const localFallback = DUSUN_DATA[dusunId];
  const heroBgImage = dusun.coverImageUrl 
    ? dusun.coverImageUrl 
    : (localFallback.gallery && localFallback.gallery[0] ? localFallback.gallery[0].src : null);

  const galleryPhotos = dusun.gallery || [];
  const stats = dusun.stats || localFallback.stats;
  const kampungList = dusun.kampungList || localFallback.kampungList || [];
  const komoditas = dusun.komoditas || localFallback.komoditas;
  const mapsImageUrl = dusun.mapsImageUrl || null;

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pb-24 animate-fade-in font-sans text-stone-850 w-full">

      {/* LIGHTBOX POPUP */}
      <LightboxGallery 
        photos={galleryPhotos}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
      
      {/* 1. HERO HEADER BANNER */}
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

      {/* 2. STATISTIK MINI DUSUN */}
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
              <div className="bg-emerald-50/80 border border-emerald-200/60 rounded-xl p-5 text-center space-y-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <Home className="h-5 w-5 text-emerald-700" />
                </div>
                <p className="font-display font-black text-2xl sm:text-3xl text-stone-900">{stats.kampung}</p>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Kampung</p>
              </div>

              <div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-5 text-center space-y-2">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-5 w-5 text-amber-700" />
                </div>
                <p className="font-display font-black text-2xl sm:text-3xl text-stone-900">{stats.rt}</p>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">RT</p>
              </div>

              <div className="bg-blue-50/80 border border-blue-200/60 rounded-xl p-5 text-center space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Layers className="h-5 w-5 text-blue-700" />
                </div>
                <p className="font-display font-black text-2xl sm:text-3xl text-stone-900">{stats.rw}</p>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">RW</p>
              </div>

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

      {/* 4. WILAYAH KAMPUNG & RT/RW */}
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

      {/* 6. POTENSI UNGGULAN (Opsi B: Foto + Teks + Peta) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-16">
        
        {komoditas && (
          <section className="bg-white border border-stone-200 shadow-sm rounded-sm overflow-hidden">
            
            {/* FOTO UTAMA PRODUK (full-width, clickable) */}
            {galleryPhotos.length > 0 && (
              <div className="relative group">
                <button
                  onClick={() => openLightbox(0)}
                  className="w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden cursor-pointer block"
                >
                  <img 
                    src={galleryPhotos[0].src} 
                    alt={galleryPhotos[0].title || komoditas.name} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Overlay hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center space-x-2 text-xs font-bold">
                      <ZoomIn className="h-4 w-4" />
                      <span>Klik untuk lihat semua foto</span>
                    </div>
                  </div>
                </button>

                {/* Photo count badge */}
                {galleryPhotos.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                    📸 +{galleryPhotos.length - 1} foto lainnya
                  </div>
                )}
              </div>
            )}

            {/* Thumbnail strip (mini preview) */}
            {galleryPhotos.length > 1 && (
              <div className="flex items-center space-x-2 px-6 py-3 bg-stone-50 border-b border-stone-100 overflow-x-auto">
                {galleryPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="w-14 h-14 rounded-sm overflow-hidden border-2 border-stone-200 hover:border-emerald-400 shrink-0 transition-all cursor-pointer"
                  >
                    <img src={photo.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Teks Komoditas */}
            <div className="p-6 sm:p-10 space-y-6">
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

            {/* PETA LOKASI (Screenshot Maps + Embed + Link) */}
            {(mapsImageUrl || dusun.mapsEmbedUrl || dusun.mapsLinkUrl) && (
              <div className="border-t border-stone-100">
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-700" />
                    <p className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest">Lokasi di Peta</p>
                  </div>

                  {/* Screenshot Peta */}
                  {mapsImageUrl && (
                    <div className="rounded-lg overflow-hidden border border-stone-200">
                      <img 
                        src={mapsImageUrl} 
                        alt={`Peta Lokasi ${dusun.name}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {/* Google Maps Embed (iframe) */}
                  {dusun.mapsEmbedUrl && (
                    <div className="rounded-lg overflow-hidden border border-stone-200">
                      <iframe
                        src={dusun.mapsEmbedUrl}
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Google Maps - ${dusun.name}`}
                        className="w-full"
                      />
                    </div>
                  )}

                  {/* Tombol Buka di Google Maps */}
                  {dusun.mapsLinkUrl && (
                    <a
                      href={dusun.mapsLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 py-3 px-6 bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition-all text-xs uppercase tracking-widest rounded-sm"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Buka di Google Maps</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </section>
        )}
        
      </div>
      
    </div>
  );
}

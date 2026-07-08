import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function PhotoGallery({ photos }) {
  const [activeIdx, setActiveIdx] = useState(null);

  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-12 bg-stone-100 rounded-2xl border-2 border-dashed border-stone-200">
        <p className="text-stone-400 font-medium">Belum ada foto galeri untuk dusun ini.</p>
      </div>
    );
  }

  const openLightbox = (index) => {
    setActiveIdx(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setActiveIdx(null);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-6">
      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={photo.id || index}
            onClick={() => openLightbox(index)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer border border-stone-200/60"
          >
            {/* Image Wrapper with zoom effect on hover */}
            <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
              <img 
                src={photo.src} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full text-emerald-800 shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Info Text */}
            <div className="p-4">
              <h4 className="font-display font-bold text-stone-800 text-base mb-1">{photo.title}</h4>
              <p className="text-xs text-stone-500 line-clamp-2">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Arrow */}
          <button 
            onClick={showPrev}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-40"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Main Content Area */}
          <div 
            className="max-w-4xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          >
            <div className="relative max-h-[75vh] w-full flex justify-center bg-black/40 rounded-lg overflow-hidden">
              <img 
                src={photos[activeIdx].src} 
                alt={photos[activeIdx].title}
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>
            
            {/* Description Caption */}
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <h3 className="font-display font-bold text-lg md:text-xl text-emerald-400">{photos[activeIdx].title}</h3>
              <p className="mt-1 text-sm text-stone-300">{photos[activeIdx].description}</p>
              <span className="inline-block mt-3 text-xs bg-stone-800 text-stone-400 px-3 py-1 rounded-full font-medium">
                {activeIdx + 1} dari {photos.length}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={showNext}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-40"
            aria-label="Selanjutnya"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}

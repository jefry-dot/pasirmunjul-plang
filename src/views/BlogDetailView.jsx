import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, Bookmark, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function BlogDetailView({ postId, posts, setView }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <p className="text-stone-500 font-medium">Artikel tidak ditemukan.</p>
        <button 
          onClick={() => setView('blog')}
          className="mt-4 px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors text-sm cursor-pointer"
        >
          Kembali ke Kabar Desa
        </button>
      </div>
    );
  }

  // Format the post content text with line breaks
  const paragraphs = (post.content || 'Detail artikel berita belum diisi. Silakan isi konten artikel ini di dashboard Sanity CMS Anda.').split('\n\n');

  // Additional gallery photos from Sanity
  const galleryPhotos = post.gallery || [];

  return (
    <div className="max-w-3xl mx-auto pb-16 animate-fade-in space-y-8">
      
      {/* Lightbox Popup for Gallery Photos */}
      {lightboxOpen && galleryPhotos.length > 0 && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          <div className="absolute top-4 left-4 z-50 text-white/70 text-xs font-bold uppercase tracking-widest">
            {lightboxIndex + 1} / {galleryPhotos.length}
          </div>

          {galleryPhotos.length > 1 && (
            <button 
              onClick={() => setLightboxIndex(prev => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)}
              className="absolute left-2 sm:left-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
          )}

          <div className="max-w-5xl max-h-[85vh] px-12 flex flex-col items-center">
            <img 
              src={galleryPhotos[lightboxIndex].src} 
              alt={galleryPhotos[lightboxIndex].title || 'Dokumentasi Berita'} 
              className="max-w-full max-h-[75vh] object-contain rounded-sm"
            />
            {galleryPhotos[lightboxIndex].title && (
              <p className="text-white font-bold text-sm mt-4 text-center">{galleryPhotos[lightboxIndex].title}</p>
            )}
          </div>

          {galleryPhotos.length > 1 && (
            <button 
              onClick={() => setLightboxIndex(prev => (prev + 1) % galleryPhotos.length)}
              className="absolute right-2 sm:right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          )}
        </div>
      )}

      {/* Back button & Breadcrumbs */}
      <div>
        <button 
          onClick={() => setView('blog')}
          className="flex items-center space-x-2 text-stone-500 hover:text-emerald-700 font-medium transition-colors cursor-pointer text-sm mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Kabar Desa</span>
        </button>
        
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
          <Bookmark className="h-3 w-3" />
          <span>{post.category || 'Berita'}</span>
        </span>
      </div>

      {/* Title */}
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-stone-900 leading-tight tracking-tight">
        {post.title}
      </h1>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-500 font-medium pb-4 border-b border-stone-200">
        <div className="flex items-center space-x-1">
          <User className="h-4 w-4 text-stone-400" />
          <span>Ditulis oleh: {post.author || 'Tim KKN Pasirmunjul 2026'}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4 text-stone-400" />
          <span>{post.date || '8 Juli 2026'}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4 text-stone-400" />
          <span>{post.readTime || '3 Menit Baca'}</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="aspect-video sm:aspect-21/9 rounded-3xl overflow-hidden bg-stone-50 border border-stone-200/50 shadow-sm">
        <img 
          src={post.image || 'https://via.placeholder.com/600x400'} 
          alt={post.title} 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-emerald max-w-none text-stone-600 leading-relaxed text-sm sm:text-base space-y-4">
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>

      {/* Additional Documentation Photos Section */}
      {galleryPhotos.length > 0 && (
        <section className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-4">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-stone-900 text-lg">Dokumentasi Foto Kegiatan</h3>
            <p className="text-xs text-stone-500">Klik foto untuk melihat ukuran penuh</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {galleryPhotos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-200 cursor-pointer bg-white"
              >
                <img 
                  src={photo.src} 
                  alt={photo.title || `Dokumentasi ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Share Info / Invitation */}
      <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 text-center">
        <p className="text-xs text-stone-500 font-medium">
          Punya masukan atau pertanyaan lebih lanjut terkait kabar ini? Silakan kembali ke Beranda untuk informasi lainnya.
        </p>
        <button
          onClick={() => setView('home')}
          className="mt-3 text-xs text-emerald-600 hover:text-emerald-700 font-bold underline transition-colors cursor-pointer"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}

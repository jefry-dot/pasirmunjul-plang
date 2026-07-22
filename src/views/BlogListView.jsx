import React, { useState } from 'react';
import { ArrowLeft, Calendar, User, Clock, Search, MessageSquare, Grid } from 'lucide-react';

export default function BlogListView({ posts, setView, setSelectedPostId }) {
  // Filtering, Search & Pagination states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['Semua', 'KKN Update', 'UMKM', 'Agrowisata'];
  const itemsPerPage = 12;

  const handleReadMore = (postId) => {
    setSelectedPostId(postId);
    setView('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter posts with safe defaults to prevent crashing on missing properties
  const filteredPosts = posts.filter(post => {
    const postCategory = post.category || 'Berita';
    const matchesCategory = selectedCategory === 'Semua' || postCategory === selectedCategory;
    
    const titleText = (post.title || '').toLowerCase();
    const excerptText = (post.excerpt || '').toLowerCase();
    const contentText = (post.content || '').toLowerCase();
    const searchVal = searchTerm.toLowerCase();
    
    const matchesSearch = titleText.includes(searchVal) || 
                          excerptText.includes(searchVal) ||
                          contentText.includes(searchVal);
                          
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination variables
  const totalItems = filteredPosts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Get the absolute latest post title for breaking news ticker
  const latestPostTitle = posts[0] ? posts[0].title : 'Belum ada kabar berita terbaru.';
  const latestPostId = posts[0] ? posts[0].id : null;

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      

      {/* 2. SECOND BAR: Breaking News */}
      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden flex items-center shadow-xs">
        {/* Grid Dot icon wrapper */}
        <div className="bg-[#004e92] p-3 text-white flex items-center justify-center shrink-0">
          <Grid className="h-4.5 w-4.5" />
        </div>
        {/* Breaking News Label */}
        <div className="bg-[#005fb8] text-white font-display font-extrabold text-[11px] uppercase tracking-wider py-3.5 px-4 shrink-0 select-none">
          Breaking News
        </div>
        {/* Ticker Text Link */}
        <div className="px-4 flex-grow overflow-hidden">
          <button
            onClick={() => latestPostId && handleReadMore(latestPostId)}
            className="text-stone-800 text-xs sm:text-sm font-semibold hover:text-emerald-700 transition-colors text-left line-clamp-1 cursor-pointer w-full"
          >
            {latestPostTitle}
          </button>
        </div>
      </div>

      {/* Title block */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 pt-4">
        <div>
          <button 
            onClick={() => setView('profil-singkat')}
            className="flex items-center space-x-2 text-stone-500 hover:text-emerald-700 font-medium transition-colors cursor-pointer text-sm mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Profil Desa</span>
          </button>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-stone-900 tracking-tight">
            Portal Kabar Berita Desa
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Menampilkan berita dan arsip liputan kegiatan KKN serta potensi lokal Pasirmunjul.
          </p>
        </div>
      </div>

      {/* Search & Category Filter Section */}
      <section className="bg-white rounded-3xl border border-stone-250/80 p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-xs">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1); // Reset page on filter
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-55 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset page on search
            }}
            placeholder="Cari kabar berita..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-stone-300 text-xs bg-stone-50/50 text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
          />
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-stone-400" />
        </div>
      </section>

      {/* Newspaper style grid layout (Matching Hanura screenshot but in Pasirmunjul green palette) */}
      {paginatedPosts.length > 0 ? (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <article 
                key={post.id}
                className="flex flex-col bg-white text-stone-800 space-y-4 animate-fade-in group"
              >
                {/* Image with bottom-left category label badge */}
                <div className="aspect-video sm:aspect-[4/3] bg-stone-55 relative overflow-hidden rounded-xs border border-stone-150 shadow-xs">
                  <img 
                    src={post.image || 'https://via.placeholder.com/600x400'} 
                    alt={post.title} 
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 bg-emerald-800/90 text-white font-extrabold text-[9px] px-3 py-1.5 uppercase tracking-wider">
                    {post.category || 'Berita'}
                  </span>
                </div>

                {/* Title & Metadata */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-stone-900 text-base sm:text-lg leading-snug group-hover:text-emerald-750 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-stone-400 font-medium pt-1 pb-2">
                      <div className="flex items-center space-x-1">
                        <User className="h-3.5 w-3.5 text-stone-400" />
                        <span>{post.author || 'Tim KKN Pasirmunjul 2026'}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3.5 w-3.5 text-stone-400" />
                        <span>{post.date || '8 Juli 2026'}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-stone-400" />
                        <span>0</span>
                      </div>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.excerpt || 'Klik Read More untuk membaca detail liputan kabar desa selengkapnya.'}
                    </p>
                  </div>

                  {/* Read More button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleReadMore(post.id)}
                      className="px-4 py-2 border border-stone-300 hover:border-emerald-600 bg-white hover:bg-emerald-50/10 text-stone-850 hover:text-emerald-750 text-xs font-bold transition-all uppercase tracking-wider cursor-pointer"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 pt-8 border-t border-stone-200">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(prev => Math.max(prev - 1, 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3.5 py-2 border border-stone-300 bg-white hover:bg-stone-50 text-stone-750 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Prev
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-9 h-9 border text-xs font-extrabold uppercase rounded-xs transition-colors cursor-pointer flex items-center justify-center ${
                    currentPage === pageNum
                      ? 'bg-emerald-700 border-emerald-700 text-white shadow-xs'
                      : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
              
              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage(prev => Math.min(prev + 1, totalPages));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3.5 py-2 border border-stone-300 bg-white hover:bg-stone-50 text-stone-755 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
          <p className="text-stone-500 font-medium">Tidak ada kabar berita yang cocok dengan kata kunci atau kategori pencarian Anda.</p>
        </div>
      )}
    </div>
  );
}

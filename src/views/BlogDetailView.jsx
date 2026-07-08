import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Bookmark } from 'lucide-react';

export default function BlogDetailView({ postId, posts, setView }) {
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
  const paragraphs = post.content.split('\n\n');

  return (
    <div className="max-w-3xl mx-auto pb-16 animate-fade-in space-y-8">
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
          <span>{post.category}</span>
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
          <span>Ditulis oleh: {post.author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4 text-stone-400" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4 text-stone-400" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="aspect-video sm:aspect-21/9 rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/50 shadow-sm">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-emerald max-w-none text-stone-600 leading-relaxed text-sm sm:text-base space-y-4">
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>

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

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Views
import Dusun1View from './views/Dusun1View';
import Dusun2View from './views/Dusun2View';
import Dusun3View from './views/Dusun3View';
import BlogListView from './views/BlogListView';
import BlogDetailView from './views/BlogDetailView';
import ProfileSubView from './views/ProfileSubView';

// Mock Data
import { VILLAGE_INFO, DUSUN_DATA, BLOG_POSTS, PROFILE_DESA_SUB } from './data/mockData';

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'dusun-1' | 'dusun-2' | 'dusun-3' | 'blog' | 'blog-detail' | 'sejarah' | ...
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Dynamic Blog State so users can add posts locally
  const [posts, setPosts] = useState(BLOG_POSTS);

  // Synchronize URL search parameters with React state
  // This simulates routing and allows QR Codes to directly land on Dusun pages.
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page') || 'home';
      const postId = params.get('post');

      if (['home', 'dusun-1', 'dusun-2', 'dusun-3', 'blog', 'sejarah', 'visi-misi', 'struktur', 'monografi', 'peta-desa', 'profil-singkat'].includes(page)) {
        setView(page);
      } else if (page === 'blog-detail' && postId) {
        setSelectedPostId(postId);
        setView('blog-detail');
      } else {
        setView('home');
      }
    };

    // Run on initial load
    handleUrlChange();

    // Listen to popstate changes (back/forward in browser)
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Update view state and update browser URL without reloading
  const navigateTo = (newView, params = {}) => {
    setView(newView);

    const url = new URL(window.location.href);
    url.searchParams.set('page', newView);

    if (newView === 'blog-detail' && params.postId) {
      setSelectedPostId(params.postId);
      url.searchParams.set('post', params.postId);
    } else {
      url.searchParams.delete('post');
    }

    // Set page parameters, fallback to root if page is home
    if (newView === 'home') {
      url.searchParams.delete('page');
    }

    window.history.pushState(null, '', url.pathname + url.search);
  };

  // Add post locally handler
  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  // Render correct view based on state
  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <BlogListView 
            posts={posts} 
            setView={(target) => navigateTo(target)} 
            setSelectedPostId={setSelectedPostId} 
            onAddPost={handleAddPost}
          />
        );
      case 'dusun-1':
        return (
          <Dusun1View 
            data={DUSUN_DATA['dusun-1']} 
            setView={(target) => navigateTo(target)} 
          />
        );
      case 'dusun-2':
        return (
          <Dusun2View 
            data={DUSUN_DATA['dusun-2']} 
            setView={(target) => navigateTo(target)} 
          />
        );
      case 'dusun-3':
        return (
          <Dusun3View 
            data={DUSUN_DATA['dusun-3']} 
            setView={(target) => navigateTo(target)} 
          />
        );
      case 'blog':
        return (
          <BlogListView 
            posts={posts} 
            setView={(target) => navigateTo(target)} 
            setSelectedPostId={setSelectedPostId} 
            onAddPost={handleAddPost}
          />
        );
      case 'blog-detail':
        return (
          <BlogDetailView 
            postId={selectedPostId} 
            posts={posts} 
            setView={(target) => navigateTo(target)} 
          />
        );
      
      // Profile Sub pages views cases
      case 'sejarah':
      case 'visi-misi':
      case 'struktur':
      case 'monografi':
      case 'peta-desa':
      case 'profil-singkat':
        return (
          <ProfileSubView 
            type={view} 
            data={PROFILE_DESA_SUB}
            googleMapsUrl={VILLAGE_INFO.googleMapsUrl}
            villageInfo={VILLAGE_INFO}
            setView={(target) => navigateTo(target)} 
          />
        );
      default:
        return (
          <BlogListView 
            posts={posts} 
            setView={(target) => navigateTo(target)} 
            setSelectedPostId={setSelectedPostId} 
            onAddPost={handleAddPost}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans selection:bg-emerald-100 selection:text-emerald-800">
      {/* Top Navigation Bar */}
      <Navbar 
        currentView={view} 
        setView={(target) => navigateTo(target)} 
      />

      {/* Main Page Content Wrapper */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {renderView()}
      </main>

      {/* Footer Branding and Contact info */}
      <Footer 
        setView={(target) => navigateTo(target)} 
      />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Views
import DusunDetailView from './views/DusunDetailView';
import BlogListView from './views/BlogListView';
import BlogDetailView from './views/BlogDetailView';
import ProfileSubView from './views/ProfileSubView';

// Mock Data
import { VILLAGE_INFO, DUSUN_DATA, BLOG_POSTS, PROFILE_DESA_SUB } from './data/mockData';
import { client } from './data/sanityClient';

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'dusun-1' | 'dusun-2' | 'dusun-3' | 'blog' | 'blog-detail' | 'sejarah' | ...
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Dynamic state for general village information
  const [villageInfo, setVillageInfo] = useState(VILLAGE_INFO);

  // Dynamic state for separate Profil Singkat & Statistik page content
  const [profilSingkat, setProfilSingkat] = useState({
    about: VILLAGE_INFO.about,
    stats: VILLAGE_INFO.stats,
    quickLinks: null
  });

  // Dynamic state for Visi Misi page content (singleton)
  const [visiMisi, setVisiMisi] = useState({
    title: 'Visi dan Misi Desa Pasirmunjul',
    visi: '',
    misi: []
  });

  // Dynamic state for Monografi page content (singleton)
  const [monografi, setMonografi] = useState(PROFILE_DESA_SUB.monografi);

  // Dynamic state for Sejarah Desa page content (singleton)
  const [sejarah, setSejarah] = useState(PROFILE_DESA_SUB.sejarah);

  // Dynamic state for government officials structure (singleton)
  const [struktur, setStruktur] = useState({
    title: PROFILE_DESA_SUB.struktur.title,
    description: 'Struktur Pemerintahan Periode Jabatan Aktif Desa Pasirmunjul.',
    officials: PROFILE_DESA_SUB.struktur.officials
  });

  // Dynamic Blog State initialized with static posts, loaded from Sanity on mount
  const [posts, setPosts] = useState(BLOG_POSTS);

  // Fetch posts from Sanity CMS on mount
  useEffect(() => {
    client.fetch(`*[_type == "post"] | order(date desc) {
      "id": _id,
      title,
      "slug": slug.current,
      excerpt,
      content,
      date,
      author,
      readTime,
      "image": image.asset->url,
      category,
      "gallery": gallery[] {
        "src": asset->url,
        title
      }
    }`)
    .then((sanityPosts) => {
      if (sanityPosts && sanityPosts.length > 0) {
        // Merge Sanity posts with mock posts, placing Sanity posts first
        setPosts([...sanityPosts, ...BLOG_POSTS]);
      } else {
        setPosts(BLOG_POSTS);
      }
    })
    .catch((err) => {
      console.error("Gagal mengambil data dari Sanity, menggunakan data lokal:", err);
      setPosts(BLOG_POSTS);
    });
  }, []);

  // Fetch village info from Sanity CMS on mount
  useEffect(() => {
    client.fetch(`*[_type == "villageInfo"][0] {
      name,
      district,
      regency,
      tagline,
      address,
      googleMapsUrl
    }`)
    .then((data) => {
      if (data) {
        setVillageInfo(data);
      }
    })
    .catch((err) => {
      console.error("Gagal mengambil data villageInfo dari Sanity, menggunakan data lokal:", err);
    });
  }, []);

  // Fetch profilSingkat from Sanity CMS on mount
  useEffect(() => {
    client.fetch(`*[_type == "profilSingkat"][0] {
      about,
      stats[] { label, value, icon },
      quickLinks[] { linkKey, label, title, description }
    }`)
    .then((data) => {
      if (data && data.about) {
        setProfilSingkat(data);
      }
    })
    .catch((err) => {
      console.error("Gagal mengambil data profilSingkat dari Sanity, menggunakan data lokal:", err);
    });
  }, []);

  // Fetch structure page data from Sanity CMS on mount
  useEffect(() => {
    client.fetch(`*[_type == "struktur"][0] {
      title,
      description,
      officials[] { role, name }
    }`)
    .then((data) => {
      if (data && data.officials) {
        setStruktur(data);
      }
    })
    .catch((err) => {
      console.error("Gagal mengambil data struktur dari Sanity, menggunakan data lokal:", err);
    });
  }, []);

  // Fetch visiMisi page data from Sanity CMS on mount
  useEffect(() => {
    client.fetch(`*[_type == "visiMisi"][0] {
      title,
      visi,
      misi
    }`)
    .then((data) => {
      if (data) {
        setVisiMisi({
          title: data.title || 'Visi dan Misi Desa Pasirmunjul',
          visi: data.visi || '',
          misi: data.misi || []
        });
      }
    })
    .catch((err) => {
      console.error("Gagal mengambil data visiMisi dari Sanity, menggunakan data lokal:", err);
    });
  }, []);

  // Fetch monografi page data from Sanity CMS on mount
  useEffect(() => {
    client.fetch(`*[_type == "monografi"][0] {
      title,
      provinsi,
      kabupaten,
      kecamatan,
      luasWilayah,
      batasUtara,
      batasSelatan,
      batasTimur,
      batasBarat,
      totalPenduduk,
      lakiLaki,
      perempuan,
      jumlahKK,
      petani,
      umkm,
      karyawan,
      pns
    }`)
    .then((data) => {
      if (data) {
        setMonografi({
          title: data.title || 'Monografi Desa Pasirmunjul',
          general: [
            { name: 'Provinsi', value: data.provinsi || '-' },
            { name: 'Kabupaten', value: data.kabupaten || '-' },
            { name: 'Kecamatan', value: data.kecamatan || '-' },
            { name: 'Luas Wilayah', value: data.luasWilayah || '-' },
            { name: 'Batas Wilayah Utara', value: data.batasUtara || '-' },
            { name: 'Batas Wilayah Selatan', value: data.batasSelatan || '-' },
            { name: 'Batas Wilayah Timur', value: data.batasTimur || '-' },
            { name: 'Batas Wilayah Barat', value: data.batasBarat || '-' }
          ],
          population: [
            { category: 'Jumlah Total Penduduk', value: data.totalPenduduk || '-' },
            { category: 'Jumlah Laki-laki', value: data.lakiLaki || '-' },
            { category: 'Jumlah Perempuan', value: data.perempuan || '-' },
            { category: 'Jumlah Kepala Keluarga (KK)', value: data.jumlahKK || '-' }
          ],
          livelihoods: [
            { job: 'Petani & Buruh Tani', count: data.petani || '-' },
            { job: 'Pelaku UMKM / Wiraswasta', count: data.umkm || '-' },
            { job: 'Karyawan Swasta', count: data.karyawan || '-' },
            { job: 'PNS / TNI / POLRI', count: data.pns || '-' }
          ]
        });
      }
    })
    .catch((err) => {
      console.error("Gagal mengambil data monografi dari Sanity, menggunakan data lokal:", err);
    });
  }, []);

  // Fetch sejarah page data from Sanity CMS on mount
  useEffect(() => {
    client.fetch(`*[_type == "sejarah"][0] {
      title,
      "coverImageUrl": coverImage.asset->url,
      content
    }`)
    .then((data) => {
      if (data) {
        setSejarah({
          title: data.title || 'Sejarah Desa Pasirmunjul',
          coverImageUrl: data.coverImageUrl || null,
          content: data.content || PROFILE_DESA_SUB.sejarah.content
        });
      }
    })
    .catch((err) => {
      console.error("Gagal mengambil data sejarah dari Sanity, menggunakan data lokal:", err);
    });
  }, []);

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
          <DusunDetailView 
            dusunId="dusun-1" 
            setView={(target) => navigateTo(target)} 
          />
        );
      case 'dusun-2':
        return (
          <DusunDetailView 
            dusunId="dusun-2" 
            setView={(target) => navigateTo(target)} 
          />
        );
      case 'dusun-3':
        return (
          <DusunDetailView 
            dusunId="dusun-3" 
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
            data={{
              ...PROFILE_DESA_SUB,
              visiMisi: visiMisi,
              monografi: monografi,
              sejarah: sejarah,
              struktur: {
                title: struktur.title,
                description: struktur.description,
                officials: struktur.officials
              }
            }}
            googleMapsUrl={villageInfo.googleMapsUrl}
            villageInfo={{
              ...villageInfo,
              about: profilSingkat.about,
              stats: profilSingkat.stats,
              quickLinks: profilSingkat.quickLinks
            }}
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

  const isFullWidthView = view.startsWith('dusun-');

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans selection:bg-emerald-100 selection:text-emerald-800">
      {/* Top Navigation Bar */}
      {!isFullWidthView && (
        <Navbar 
          currentView={view} 
          setView={(target) => navigateTo(target)} 
        />
      )}

      {/* Main Page Content Wrapper */}
      <main className={isFullWidthView 
        ? "flex-grow" 
        : "flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8"}>
        {renderView()}
      </main>

      {/* Footer Branding and Contact info */}
      <Footer 
        villageInfo={villageInfo}
        setView={(target) => navigateTo(target)} 
      />
    </div>
  );
}

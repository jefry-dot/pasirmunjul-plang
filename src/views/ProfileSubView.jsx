import React from 'react';
import { ArrowLeft, BookOpen, Compass, Award, Users, Landmark, MapPin, Map, Home, ShoppingBag, ArrowRight } from 'lucide-react';
import GoogleMap from '../components/GoogleMap';
import DusunAccordion from '../components/DusunAccordion';

export default function ProfileSubView({ type, data, googleMapsUrl, villageInfo, setView }) {
  // Go back to home
  const handleBack = () => {
    setView('home');
  };

  // Helper to map icon names to Lucide icons
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Map':
        return <Map className="h-5 w-5" />;
      case 'Users':
        return <Users className="h-5 w-5" />;
      case 'Home':
        return <Home className="h-5 w-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="h-5 w-5" />;
      default:
        return <Map className="h-5 w-5" />;
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'sejarah':
        return (
          <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-stone-100">
              <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-700">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-stone-900 text-xl sm:text-2xl">{data.sejarah.title}</h2>
            </div>
            
            <div className="prose prose-emerald max-w-none text-stone-600 leading-relaxed text-sm sm:text-base space-y-4">
              {data.sejarah.content.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        );

      case 'visi-misi':
        return (
          <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-8">
            <div className="flex items-center space-x-3 pb-4 border-b border-stone-100">
              <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-700">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-stone-900 text-xl sm:text-2xl">{data.visiMisi.title}</h2>
            </div>

            {/* Visi */}
            <div className="space-y-3 bg-emerald-50/20 border border-emerald-100/50 p-6 rounded-2xl">
              <h3 className="font-display font-extrabold text-emerald-850 text-sm uppercase tracking-wider">Visi Desa</h3>
              {data.visiMisi.visi ? (
                <p className="font-display font-bold text-stone-800 text-base md:text-lg leading-relaxed">
                  "{data.visiMisi.visi}"
                </p>
              ) : (
                <p className="text-stone-400 text-xs italic">Konten visi desa belum diisi.</p>
              )}
            </div>

            {/* Misi */}
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-stone-900 text-sm uppercase tracking-wider border-b border-stone-100 pb-2">Misi Desa</h3>
              {data.visiMisi.misi && data.visiMisi.misi.length > 0 ? (
                <ol className="space-y-3.5">
                  {data.visiMisi.misi.map((misiStr, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-stone-600">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{misiStr}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-stone-400 text-xs italic">Konten misi desa belum diisi.</p>
              )}
            </div>
          </div>
        );

      case 'struktur':
        return (
          <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-stone-100">
              <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-700">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-stone-900 text-xl sm:text-2xl">{data.struktur.title}</h2>
            </div>

            {/* Clean Vertical list going down (no lines, no tree) */}
            <div className="flex flex-col items-center space-y-4 max-w-md mx-auto py-6">
              {data.struktur.officials.map((official, idx) => (
                <div 
                  key={idx} 
                  className="w-full bg-stone-50 border border-stone-150 rounded-2xl p-4 text-center shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <p className="text-[10px] uppercase font-extrabold text-emerald-800 tracking-wider">
                    {official.role}
                  </p>
                  <p className="font-display font-extrabold text-stone-900 text-base mt-1">
                    {official.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-stone-500">{data.struktur.description || 'Struktur Pemerintahan Periode Jabatan Aktif Desa Pasirmunjul.'}</p>
            </div>
          </div>
        );

      case 'monografi':
        return (
          <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-8">
            <div className="flex items-center space-x-3 pb-4 border-b border-stone-100">
              <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-700">
                <Landmark className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-stone-900 text-xl sm:text-2xl">{data.monografi.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* General Data Table */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-stone-850 text-sm uppercase tracking-wider border-b pb-2">Informasi Umum Wilayah</h3>
                <div className="border border-stone-150 rounded-2xl overflow-hidden shadow-xs">
                  <table className="w-full text-xs sm:text-sm text-left text-stone-600">
                    <tbody className="divide-y divide-stone-100">
                      {data.monografi.general.map((item, idx) => (
                        <tr key={idx} className="bg-white hover:bg-stone-50/50">
                          <td className="px-4 py-3 font-semibold text-stone-500 bg-stone-50/30 w-1/3">{item.name}</td>
                          <td className="px-4 py-3 text-stone-800 font-medium">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-8">
                {/* Population Data Table */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-stone-850 text-sm uppercase tracking-wider border-b pb-2">Demografi & Penduduk</h3>
                  <div className="border border-stone-150 rounded-2xl overflow-hidden shadow-xs">
                    <table className="w-full text-xs sm:text-sm text-left text-stone-600">
                      <tbody className="divide-y divide-stone-100">
                        {data.monografi.population.map((item, idx) => (
                          <tr key={idx} className="bg-white hover:bg-stone-50/50">
                            <td className="px-4 py-3 font-semibold text-stone-500 bg-stone-50/30 w-1/2">{item.category}</td>
                            <td className="px-4 py-3 text-stone-800 font-bold">{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Livelihoods Data Table */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-stone-850 text-sm uppercase tracking-wider border-b pb-2">Mata Pencaharian Utama</h3>
                  <div className="border border-stone-150 rounded-2xl overflow-hidden shadow-xs">
                    <table className="w-full text-xs sm:text-sm text-left text-stone-600">
                      <tbody className="divide-y divide-stone-100">
                        {data.monografi.livelihoods.map((item, idx) => (
                          <tr key={idx} className="bg-white hover:bg-stone-50/50">
                            <td className="px-4 py-3 font-semibold text-stone-500 bg-stone-50/30 w-1/2">{item.job}</td>
                            <td className="px-4 py-3 text-stone-800 font-medium">{item.count}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'peta-desa':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <DusunAccordion setView={setView} />
            </div>
            <div className="lg:col-span-3">
              <GoogleMap embedUrl={googleMapsUrl} />
            </div>
          </div>
        );

      case 'profil-singkat':
        if (!villageInfo) return null;
        return (
          <div className="space-y-12 animate-fade-in">
            {/* Brief Profile & Stats Row */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* About Card */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs">
                  <h2 className="font-display font-bold text-stone-900 text-2xl md:text-3xl mb-4 relative inline-block">
                    Sekilas Profil Desa Pasirmunjul
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-emerald-600 rounded-full"></span>
                  </h2>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                    {villageInfo.about}
                  </p>
                </div>

                {/* Quick-Access Grid Buttons */}
                <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
                  <h3 className="font-display font-bold text-stone-900 text-lg md:text-xl">Akses Cepat Informasi QR Code</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(() => {
                      const defaultQuickLinks = [
                        {
                          linkKey: 'dusun-1',
                          label: 'Dusun 1',
                          title: 'Sentra UMKM Gula Aren',
                          description: 'Edukasi pembuatan gula nira alami & kontak pemasaran warga.'
                        },
                        {
                          linkKey: 'dusun-2',
                          label: 'Dusun 2',
                          title: 'Kawasan Pemukiman',
                          description: 'Profil perumahan warga, tata kelola sanitasi, & program KKN.'
                        },
                        {
                          linkKey: 'dusun-3',
                          label: 'Dusun 3',
                          title: 'Alam & Perkebunan',
                          description: 'Wisata sungai alam, perkebunan pisang subur, & info tani.'
                        },
                        {
                          linkKey: 'blog',
                          label: 'Berita',
                          title: 'Kabar Desa (Blog)',
                          description: 'Update kabar KKN, pengumuman desa, dan kegiatan sosial.'
                        }
                      ];

                      const quickLinks = villageInfo.quickLinks && villageInfo.quickLinks.length === 4 
                        ? villageInfo.quickLinks 
                        : defaultQuickLinks;

                      const getCardStyle = (linkKey) => {
                        switch (linkKey) {
                          case 'dusun-1':
                            return {
                              borderClass: 'border-stone-200 hover:border-emerald-500/50 hover:bg-emerald-50/10',
                              iconBg: 'bg-emerald-100 text-emerald-700',
                              labelBg: 'text-emerald-600 bg-emerald-100/50',
                              IconComponent: ShoppingBag
                            };
                          case 'dusun-2':
                            return {
                              borderClass: 'border-stone-200 hover:border-emerald-500/50 hover:bg-emerald-50/10',
                              iconBg: 'bg-stone-100 text-stone-500',
                              labelBg: 'text-stone-400 bg-stone-100',
                              IconComponent: Home
                            };
                          case 'dusun-3':
                            return {
                              borderClass: 'border-stone-200 hover:border-emerald-500/50 hover:bg-emerald-50/10',
                              iconBg: 'bg-emerald-100 text-emerald-700',
                              labelBg: 'text-emerald-600 bg-emerald-100/50',
                              IconComponent: Map
                            };
                          case 'blog':
                          default:
                            return {
                              borderClass: 'border-amber-200 bg-amber-50/10 hover:border-amber-500 hover:bg-amber-50/30',
                              iconBg: 'bg-amber-100 text-amber-800',
                              labelBg: 'text-amber-800 bg-amber-200',
                              IconComponent: BookOpen
                            };
                        }
                      };

                      return quickLinks.map((link) => {
                        const style = getCardStyle(link.linkKey);
                        const Icon = style.IconComponent;
                        return (
                          <button 
                            key={link.linkKey}
                            onClick={() => setView(link.linkKey)}
                            className={`group p-5 rounded-2xl border text-left transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer ${style.borderClass}`}
                          >
                            <div className="flex items-start justify-between">
                              <div className={`p-2.5 rounded-xl ${style.iconBg}`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${style.labelBg}`}>
                                {link.label || 'LINK'}
                              </span>
                            </div>
                            <h4 className="font-display font-bold text-stone-900 text-base mt-4 group-hover:text-emerald-700 transition-colors">
                              {link.title}
                            </h4>
                            <p className="text-xs text-stone-500 mt-1">
                              {link.description}
                            </p>
                          </button>
                        );
                      });
                    })()}
                  </div>
                </div>
              </div>

              {/* Statistics Columns */}
              <div className="grid grid-cols-2 gap-4 h-full">
                {villageInfo.stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl border border-stone-200/80 p-5 flex flex-col justify-between shadow-xs hover:shadow-sm transition-all text-center sm:text-left"
                  >
                    <div className="mx-auto sm:mx-0 w-10 h-10 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-3">
                      {renderIcon(stat.icon)}
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-display font-black text-stone-900">{stat.value}</p>
                      <p className="text-xs text-stone-500 mt-1 font-medium">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      {/* Header back button */}
      <div>
        <button 
          onClick={handleBack}
          className="flex items-center space-x-2 text-stone-500 hover:text-emerald-700 font-medium transition-colors cursor-pointer text-sm mb-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      {renderContent()}
    </div>
  );
}

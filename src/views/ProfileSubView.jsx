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
              <p className="font-display font-bold text-stone-800 text-base md:text-lg leading-relaxed">
                "{data.visiMisi.visi}"
              </p>
            </div>

            {/* Misi */}
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-stone-900 text-sm uppercase tracking-wider border-b border-stone-100 pb-2">Misi Desa</h3>
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

            {/* Simulated Organization Tree layout */}
            <div className="space-y-6 max-w-2xl mx-auto py-4">
              
              {/* Kades (Top) */}
              <div className="flex flex-col items-center">
                <div className="bg-emerald-600 border border-emerald-500 text-white rounded-2xl py-3.5 px-6 text-center shadow-xs min-w-[220px]">
                  <p className="text-[10px] uppercase font-bold text-emerald-150 tracking-wider">Kepala Desa</p>
                  <p className="font-display font-extrabold text-sm sm:text-base mt-0.5">
                    {data.struktur.officials.find(o => o.role === 'Kepala Desa')?.name}
                  </p>
                </div>
                {/* Vertical Line */}
                <div className="w-0.5 h-6 bg-stone-300"></div>
              </div>

              {/* Sekdes (Middle) */}
              <div className="flex flex-col items-center">
                <div className="bg-stone-850 text-white rounded-2xl py-3 px-5 text-center shadow-xs min-w-[200px]">
                  <p className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Sekretaris Desa</p>
                  <p className="font-display font-extrabold text-sm mt-0.5">
                    {data.struktur.officials.find(o => o.role === 'Sekretaris Desa')?.name}
                  </p>
                </div>
                {/* Vertical Line split */}
                <div className="w-0.5 h-6 bg-stone-300"></div>
                <div className="w-full max-w-md border-t-2 border-stone-300"></div>
                <div className="w-full max-w-md flex justify-between h-6">
                  <div className="w-0.5 h-full bg-stone-300"></div>
                  <div className="w-0.5 h-full bg-stone-300"></div>
                  <div className="w-0.5 h-full bg-stone-300"></div>
                </div>
              </div>

              {/* Staff / Kaurs (Bottom Row) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-3">
                  <p className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Kaur Keuangan</p>
                  <p className="font-bold text-xs text-stone-850 mt-0.5">
                    {data.struktur.officials.find(o => o.role === 'Kaur Keuangan')?.name}
                  </p>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-3">
                  <p className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Kaur Umum & TU</p>
                  <p className="font-bold text-xs text-stone-850 mt-0.5">
                    {data.struktur.officials.find(o => o.role === 'Kaur Umum & Tata Usaha')?.name}
                  </p>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-3">
                  <p className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Kasi Pemerintahan</p>
                  <p className="font-bold text-xs text-stone-850 mt-0.5">
                    {data.struktur.officials.find(o => o.role === 'Kasi Pemerintahan')?.name}
                  </p>
                </div>
              </div>

              <div className="text-center pt-6">
                <p className="text-xs text-stone-500">Struktur Pemerintahan Periode Jabatan Aktif Desa Pasirmunjul.</p>
              </div>

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
                    {/* Dusun 1 Link */}
                    <button 
                      onClick={() => setView('dusun-1')}
                      className="group p-5 rounded-2xl border border-stone-200 hover:border-emerald-500/50 hover:bg-emerald-50/10 text-left transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-700">
                          <ShoppingBag className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-full uppercase tracking-wider">Dusun 1</span>
                      </div>
                      <h4 className="font-display font-bold text-stone-900 text-base mt-4 group-hover:text-emerald-700 transition-colors">Sentra UMKM Gula Aren</h4>
                      <p className="text-xs text-stone-500 mt-1">Edukasi pembuatan gula nira alami & kontak pemasaran warga.</p>
                    </button>

                    {/* Dusun 2 Link */}
                    <button 
                      onClick={() => setView('dusun-2')}
                      className="group p-5 rounded-2xl border border-stone-200 hover:border-emerald-500/50 hover:bg-emerald-50/10 text-left transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="bg-stone-100 p-2.5 rounded-xl text-stone-500">
                          <Home className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full uppercase tracking-wider">Dusun 2</span>
                      </div>
                      <h4 className="font-display font-bold text-stone-900 text-base mt-4 group-hover:text-emerald-700 transition-colors">Kawasan Pemukiman</h4>
                      <p className="text-xs text-stone-500 mt-1">Profil perumahan warga, tata kelola sanitasi, & program KKN.</p>
                    </button>

                    {/* Dusun 3 Link */}
                    <button 
                      onClick={() => setView('dusun-3')}
                      className="group p-5 rounded-2xl border border-stone-200 hover:border-emerald-500/50 hover:bg-emerald-50/10 text-left transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-700">
                          <Map className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-full uppercase tracking-wider">Dusun 3</span>
                      </div>
                      <h4 className="font-display font-bold text-stone-900 text-base mt-4 group-hover:text-emerald-700 transition-colors">Alam & Perkebunan</h4>
                      <p className="text-xs text-stone-500 mt-1">Wisata sungai alam, perkebunan pisang subur, & info tani.</p>
                    </button>

                    {/* Blog Link */}
                    <button 
                      onClick={() => setView('blog')}
                      className="group p-5 rounded-2xl border border-amber-200 bg-amber-50/10 hover:border-amber-500 hover:bg-amber-50/30 text-left transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="bg-amber-100 p-2.5 rounded-xl text-amber-800">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-200 px-2 py-0.5 rounded-full uppercase tracking-wider">Berita</span>
                      </div>
                      <h4 className="font-display font-bold text-stone-900 text-base mt-4 group-hover:text-amber-700 transition-colors">Kabar Desa (Blog)</h4>
                      <p className="text-xs text-stone-500 mt-1">Update kabar KKN, pengumuman desa, dan kegiatan sosial.</p>
                    </button>
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

import React from 'react';
import { Landmark, ArrowLeft, PhoneCall, Check, ShoppingBag, Coffee, HelpCircle, FileText } from 'lucide-react';
import PhotoGallery from '../components/PhotoGallery';

export default function Dusun1View({ data, setView }) {
  const handleContactWhatsApp = () => {
    // Generate WhatsApp text and link
    const waText = encodeURIComponent(`Halo, saya tertarik dengan produk Gula Aren asli dari Dusun 1 Desa Pasirmunjul. Apakah stoknya ready?`);
    const waUrl = `https://wa.me/${data.whatsappContact}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="space-y-10 pb-16 animate-fade-in">
      {/* Header and Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <button 
            onClick={() => setView('home')}
            className="flex items-center space-x-2 text-stone-500 hover:text-emerald-700 font-medium transition-colors cursor-pointer text-sm mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Beranda</span>
          </button>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-stone-900 tracking-tight">
            {data.name}
          </h1>
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mt-1">
            {data.lead}
          </p>
        </div>

        {/* Dynamic Badge */}
        <span className="inline-flex items-center self-start sm:self-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
          📍 Dusun QR Terverifikasi
        </span>
      </div>

      {/* Profile Overview Card */}
      <section className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs">
        <p className="text-stone-600 leading-relaxed text-sm md:text-base">
          {data.profile}
        </p>
      </section>

      {/* Main UMKM Product Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Product Info & WA Contact */}
        <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs lg:col-span-1 space-y-6">
          <div className="aspect-square bg-emerald-50 text-emerald-800 rounded-2xl flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background design */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-emerald-600/10 rounded-full"></div>
            <div className="absolute top-2 left-2 text-xs bg-amber-400 text-stone-900 px-3 py-1 rounded-full font-bold">
              Produk Unggulan
            </div>
            
            <div className="text-center space-y-3 z-10">
              <Coffee className="h-16 w-16 mx-auto text-emerald-700" />
              <h3 className="font-display font-extrabold text-xl text-stone-900">{data.umkm.name}</h3>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-stone-800 text-lg">Tentang Produk</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              {data.umkm.description}
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleContactWhatsApp}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center space-x-2 text-sm"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Hubungi Penjual (WhatsApp)</span>
            </button>
            <p className="text-center text-[11px] text-stone-400 mt-2">
              Tombol di atas akan mengarahkan Anda langsung ke percakapan WhatsApp pengelola UMKM.
            </p>
          </div>
        </div>

        {/* Right Column: Step-by-Step Production Process */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs">
            <h3 className="font-display font-bold text-stone-900 text-xl mb-6 flex items-center space-x-2">
              <span className="bg-amber-100 text-amber-800 p-1.5 rounded-lg">
                <FileText className="h-5 w-5" />
              </span>
              <span>Proses Produksi Tradisional</span>
            </h3>

            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {data.umkm.steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="relative p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200/60 hover:bg-emerald-50/5 transition-all duration-300"
                >
                  {/* Step Badge */}
                  <div className="absolute top-4 right-4 text-xs font-black text-emerald-600/20 text-3xl select-none leading-none font-display">
                    {step.no}
                  </div>
                  
                  {/* Step Icon */}
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <Check className="h-4 w-4" />
                  </div>
                  
                  <h4 className="font-display font-bold text-stone-900 text-base mb-2">{step.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="font-display font-bold text-stone-900 text-xl md:text-2xl mb-1">Galeri Visual Dusun 1</h3>
          <p className="text-xs text-stone-500">Klik salah satu foto untuk memperbesar dan melihat keterangan.</p>
        </div>
        <PhotoGallery photos={data.gallery} />
      </section>
    </div>
  );
}

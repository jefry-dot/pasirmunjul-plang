import React from 'react';
import { ArrowLeft, Clock, RefreshCw, QrCode } from 'lucide-react';

export default function Dusun2View({ data, setView }) {
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
        <span className="inline-flex items-center self-start sm:self-center px-4 py-2 rounded-full bg-stone-100 text-stone-600 border border-stone-200 text-xs font-semibold">
          📍 Dusun QR Terverifikasi
        </span>
      </div>

      {/* Info Card */}
      <section className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs">
        <p className="text-stone-600 leading-relaxed text-sm md:text-base">
          {data.profile}
        </p>
      </section>

      {/* Placeholder Main Body */}
      <section className="bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-12 shadow-xs text-center max-w-2xl mx-auto space-y-6">
        <div className="mx-auto w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center animate-pulse">
          <Clock className="h-8 w-8" />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-display font-bold text-stone-950 text-xl md:text-2xl">Penyusunan Konten Info</h3>
          <p className="text-stone-500 text-sm leading-relaxed max-w-md mx-auto">
            {data.message}
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => setView('home')}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors text-sm shadow-xs hover:shadow-sm cursor-pointer"
          >
            Kembali ke Beranda
          </button>
          
          <div className="flex items-center space-x-2 text-stone-400 bg-stone-50 border border-stone-100 py-2 px-4 rounded-xl text-xs">
            <QrCode className="h-4 w-4 text-emerald-600" />
            <span className="font-medium text-stone-600">Scan QR Code Aktif</span>
          </div>
        </div>
      </section>
    </div>
  );
}

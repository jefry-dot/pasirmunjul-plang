import React from 'react';
import { MapPin } from 'lucide-react';

export default function GoogleMap({ embedUrl }) {
  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md p-6 overflow-hidden animate-fade-in">
      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-stone-900 text-lg">Peta Lokasi Desa Pasirmunjul</h3>
          <p className="text-xs text-stone-500">Kecamatan Sukatani, Kabupaten Purwakarta (Google Maps)</p>
        </div>
      </div>
      
      <div className="relative aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden border border-stone-100 bg-stone-100">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Desa Pasirmunjul"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Eye, Printer, ChevronDown } from 'lucide-react';
import { DUSUN_ACCORDION } from '../data/mockData';
import { client } from '../data/sanityClient';

export default function DusunAccordion({ setView }) {
  const [dusunList, setDusunList] = useState(DUSUN_ACCORDION);
  const [expandedId, setExpandedId] = useState('dusun-1');

  useEffect(() => {
    // Query all three Dusun documents from Sanity, ordered by their ID
    client.fetch(`*[_type == "dusun"] | order(_id asc) {
      "id": _id,
      name,
      lead,
      subtitle,
      icon,
      profile,
      batas { utara, selatan, timur, barat }
    }`)
    .then((data) => {
      if (data && data.length > 0) {
        // Map Sanity fields to structure expected by Accordion
        const mappedList = data.map((item, idx) => {
          const num = idx + 1; // 1, 2, 3
          // Extract default values from mockData matching this dusun number as base fallback
          const localBase = DUSUN_ACCORDION[idx] || {};
          return {
            id: item.id || `dusun-${num}`,
            num: num,
            title: item.name || localBase.title || `Dusun ${num}`,
            subtitle: item.subtitle || localBase.subtitle || '-',
            icon: item.icon || localBase.icon || '🌾',
            lead: item.lead || localBase.lead || '-',
            profile: item.profile || localBase.profile || '-',
            batas: {
              utara: item.batas?.utara || localBase.batas?.utara || '-',
              selatan: item.batas?.selatan || localBase.batas?.selatan || '-',
              timur: item.batas?.timur || localBase.batas?.timur || '-',
              barat: item.batas?.barat || localBase.batas?.barat || '-'
            }
          };
        });
        setDusunList(mappedList);
      }
    })
    .catch((err) => {
      console.error("Gagal mengambil data dusun untuk accordion:", err);
    });
  }, []);

  const toggleAccordion = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleGoToDusun = (dusunId) => {
    setView(dusunId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to map color themes to each Dusun matching their icons
  const getDusunStyles = (num) => {
    switch (num) {
      case 1:
        return {
          badge: 'bg-emerald-100 text-emerald-800',
          subtitle: 'text-emerald-700',
          borderHover: 'hover:border-emerald-400/60'
        };
      case 2:
        return {
          badge: 'bg-green-100 text-green-800',
          subtitle: 'text-green-750',
          borderHover: 'hover:border-green-400/60'
        };
      case 3:
        return {
          badge: 'bg-amber-100 text-amber-800',
          subtitle: 'text-amber-700',
          borderHover: 'hover:border-amber-400/60'
        };
      default:
        return {
          badge: 'bg-emerald-100 text-emerald-800',
          subtitle: 'text-emerald-700',
          borderHover: 'hover:border-emerald-400/60'
        };
    }
  };

  return (
    <div className="space-y-4">
      {dusunList.map((item) => {
        const isExpanded = expandedId === item.id;
        const styles = getDusunStyles(item.num);

        return (
          <div 
            key={item.id}
            className={`bg-white text-stone-700 rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden transition-all duration-300 ${styles.borderHover}`}
          >
            {/* Header Accordion Bar (clickable) */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full text-left p-5 flex items-center justify-between focus:outline-hidden hover:bg-stone-50/50 transition-colors cursor-pointer select-none"
            >
              <div className="flex items-center space-x-4">
                {/* Number Circle Badge */}
                <span className={`w-8 h-8 rounded-full font-display font-bold text-sm flex items-center justify-center shrink-0 ${styles.badge}`}>
                  {item.num}
                </span>
                
                <div>
                  <h4 className="font-display font-extrabold text-stone-900 text-base leading-tight">
                    {item.title}
                  </h4>
                  <p className={`text-xs font-semibold mt-1 flex items-center space-x-1.5 ${styles.subtitle}`}>
                    <span>{item.icon}</span>
                    <span>{item.subtitle}</span>
                  </p>
                </div>
              </div>

              {/* Accordion Arrow Indicator */}
              <ChevronDown 
                className={`h-5 w-5 text-stone-400 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180 text-emerald-600' : ''
                }`} 
              />
            </button>

            {/* Collapsible Content Area */}
            <div 
              className={`transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-[500px] border-t border-stone-100 bg-emerald-50/5' : 'max-h-0 overflow-hidden'
              }`}
            >
              <div className="p-5 space-y-4 text-xs sm:text-sm">
                
                {/* Description */}
                <p className="text-stone-600 leading-relaxed font-medium">
                  {item.profile}
                </p>

                {/* Boundaries list */}
                <div className="space-y-1 text-stone-500 border-l-2 border-emerald-100 pl-4 py-0.5">
                  <p><span className="font-bold text-stone-400">Batas Utara:</span> {item.batas.utara}</p>
                  <p><span className="font-bold text-stone-400">Batas Selatan:</span> {item.batas.selatan}</p>
                  <p><span className="font-bold text-stone-400">Batas Timur:</span> {item.batas.timur}</p>
                  <p><span className="font-bold text-stone-400">Batas Barat:</span> {item.batas.barat}</p>
                </div>

                {/* Lead Name (Green text) */}
                <p className="text-stone-600">
                  <span>Kepala Dusun: </span>
                  <span className="font-bold text-emerald-650">{item.lead}</span>
                </p>

                {/* Footer buttons links */}
                <div className="pt-3 border-t border-stone-100 flex items-center space-x-5 text-xs">
                  {/* Halaman Dusun Link */}
                  <button
                    onClick={() => handleGoToDusun(item.id)}
                    className="flex items-center space-x-1.5 font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer border-b border-emerald-600 pb-0.5"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Halaman Dusun ➜</span>
                  </button>

                  {/* Simulated Print QR Badge link */}
                  <button
                    onClick={() => alert(`Cetak Plang QR untuk ${item.title} Pasirmunjul siap diunduh.`)}
                    className="flex items-center space-x-1.5 font-bold text-stone-400 hover:text-stone-500 transition-colors cursor-pointer"
                  >
                    <Printer className="h-3.5 w-3.5" />
                    <span>Plang QR</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}

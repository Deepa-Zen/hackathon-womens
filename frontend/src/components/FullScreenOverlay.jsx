import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function FullScreenOverlay({ children, onClose, title, bgColor = 'bg-white' }) {
  return (
    <div className={`absolute inset-0 ${bgColor} z-20 flex flex-col animate-in slide-in-from-right-8 duration-300`}>
      <div className={`px-5 lg:px-8 py-3.5 lg:py-4 flex items-center justify-between border-b transition-all duration-200 ${bgColor === 'bg-slate-900' ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-gray-900 border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="p-1.5 -ml-1.5 rounded-lg hover:bg-gray-100/40 transition-colors duration-200 active:scale-90">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <h2 className="font-bold text-base lg:text-lg tracking-tight">{title}</h2>
        </div>
        <button onClick={onClose} className="text-xs lg:text-sm uppercase font-bold tracking-wide text-gray-500 hover:text-gray-700 transition-colors duration-200 px-2.5 py-1.5 rounded-lg hover:bg-gray-100/50">
          Close
        </button>
      </div>
      <div className="flex-1 overflow-y-auto scroll-smooth">
        {children}
      </div>
    </div>
  );
}

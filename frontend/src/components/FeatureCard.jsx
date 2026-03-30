import React from 'react';

export default function FeatureCard({ icon, title, subtitle, color, onClick }) {
  return (
    <div onClick={onClick} className="bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-6 cursor-pointer transition-all duration-300 active:scale-[0.97] group border border-gray-100 hover:border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className={`${color} text-white w-12 h-12 lg:w-14 lg:h-14 rounded-[14px] lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 shadow-sm group-hover:scale-110 transition-all duration-300`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-sm lg:text-base leading-tight">{title}</h3>
      <p className="text-xs lg:text-sm text-gray-500 mt-1.5 lg:mt-2 font-medium">{subtitle}</p>
      <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/0 via-white/0 to-gray-50/0 group-hover:to-gray-50/40 pointer-events-none transition-all duration-300"></div>
    </div>
  );
}

import React from 'react';

export default function TipRow({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 lg:gap-5 group hover:bg-gray-50 p-2.5 lg:p-3.5 rounded-xl lg:rounded-2xl transition-colors duration-200">
      <div className="text-gray-400 group-hover:text-gray-600 transition-colors shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1">
        <h5 className="text-sm lg:text-base font-semibold text-gray-900 leading-snug">{title}</h5>
        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mt-1 lg:mt-1.5">{desc}</p>
      </div>
    </div>
  );
}

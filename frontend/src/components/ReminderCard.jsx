import React, { useState } from 'react';
import { Trash2, CheckCircle2 } from 'lucide-react';

export default function ReminderCard({ icon, title, time, bg, color, onDelete }) {
  const [completed, setCompleted] = useState(false);
  
  const handleDone = () => {
    if(!completed) setCompleted(true);
  }

  return (
    <div 
      onClick={handleDone}
      className={`relative bg-white p-4 lg:p-5 rounded-2xl lg:rounded-3xl border transition-all duration-300 cursor-pointer group active:scale-[0.98] overflow-hidden ${completed ? 'border-emerald-300/50 bg-emerald-50/40 shadow-sm' : 'border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'}`}
    >
      <div className={`flex items-center gap-3 lg:gap-4 ${completed ? 'opacity-60' : ''}`}>
        <div className={`${bg} ${color} w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm shrink-0`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold transition-all text-sm lg:text-base ${completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>{title}</h4>
          <p className="text-xs lg:text-sm text-gray-500 font-medium mt-0.5">{time}</p>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg lg:rounded-xl transition-all duration-200 z-10 shrink-0"
          title="Delete Reminder"
        >
          <Trash2 size={18}/>
        </button>
      </div>
      
      {/* Completion Stamp */}
      {completed && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-in zoom-in-75 duration-300">
          <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-lg flex items-center">
            <CheckCircle2 size={12} className="mr-1.5" /> Completed
          </div>
        </div>
      )}
    </div>
  )
}

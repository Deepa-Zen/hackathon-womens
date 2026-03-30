import React from 'react';
import { ShieldCheck, Moon, Dumbbell, Apple, Ban, Activity, Stethoscope, AlertTriangle, Info } from 'lucide-react';
import FullScreenOverlay from '../components/FullScreenOverlay';
import TipRow from '../components/TipRow';

export default function Education({ navigateTo, t }) {
  return (
    <FullScreenOverlay onClose={() => navigateTo('dashboard', 'Going to Home...')} title={t.education}>
      <div className="p-5 lg:p-8 space-y-5 lg:space-y-6">
        {/* Two Column Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* DO'S SECTION */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 lg:p-5 flex items-center gap-3 text-white">
              <ShieldCheck size={22} strokeWidth={2} />
              <h4 className="font-bold text-base lg:text-lg">Essential Do's</h4>
            </div>
            <div className="p-5 lg:p-6 space-y-4 lg:space-y-5">
              <TipRow icon={<Moon className="text-emerald-500" size={20}/>} title="Sleep Position" desc="Sleep on your left side to improve blood flow to the heart and baby." />
              <TipRow icon={<Dumbbell className="text-emerald-500" size={20}/>} title="Stay Active" desc="Gentle walking or prenatal yoga for 30 mins daily is highly recommended." />
              <TipRow icon={<Apple className="text-emerald-500" size={20}/>} title="Eat Well" desc="Increase intake of iron, calcium, and folic acid rich foods." />
            </div>
          </div>

          {/* DON'TS SECTION */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-sm border border-rose-100 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-4 lg:p-5 flex items-center gap-3 text-white">
              <Ban size={22} strokeWidth={2} />
              <h4 className="font-bold text-base lg:text-lg">Important Don'ts</h4>
            </div>
            <div className="p-5 lg:p-6 space-y-4 lg:space-y-5">
              <TipRow icon={<Activity className="text-rose-500" size={20}/>} title="Heavy Lifting" desc="Avoid lifting objects heavier than 5kg to prevent strain." />
              <TipRow icon={<Stethoscope className="text-rose-500" size={20}/>} title="Skip Meds" desc="Never skip your prenatal vitamins or prescribed checkups." />
              <TipRow icon={<AlertTriangle className="text-rose-500" size={20}/>} title="Raw Foods" desc="Avoid unpasteurized milk or raw eggs/meat to prevent infection." />
            </div>
          </div>
        </div>

        {/* DISCLAIMER CARD */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 lg:p-6 rounded-2xl lg:rounded-3xl flex items-start gap-3 border border-indigo-200 shadow-sm">
          <Info className="text-indigo-600 shrink-0 mt-0.5" size={20} />
          <p className="text-xs lg:text-sm text-indigo-700 font-medium leading-relaxed">Always consult your doctor before starting any new exercise or diet during pregnancy. This information is for reference only.</p>
        </div>
      </div>
    </FullScreenOverlay>
  );
}

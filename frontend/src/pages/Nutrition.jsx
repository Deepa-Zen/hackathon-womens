import React, { useState } from 'react';
import { Apple, Plus, Trash2 } from 'lucide-react';
import FullScreenOverlay from '../components/FullScreenOverlay';

export default function Nutrition({ 
  navigateTo, 
  t, 
  nutrientValues, 
  nutritionCategory, 
  setNutritionCategory, 
  addNutrient, 
  intakeLog, 
  removeIntake,
  weight,
  height
}) {
  const [customFood, setCustomFood] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Personalized logic
  const bmi = (Number(weight) / ((Number(height)/100) ** 2)).toFixed(1);
  const getGoalInfo = () => {
    if (bmi < 18.5) return { label: "Underweight (மெலிந்த உடல்)", advice: "கலோரி மற்றும் புரதம் அதிகம் உள்ள உணவுகளைச் சேர்க்கவும்.", color: "text-amber-600", bg: "bg-amber-50" };
    if (bmi > 25) return { label: "Overweight (அதிக எடை)", advice: "நார்ச்சத்து மற்றும் சரிவிகித உணவில் கவனம் செலுத்தவும்.", color: "text-rose-600", bg: "bg-rose-50" };
    return { label: "Healthy Weight (சரியான எடை)", advice: "இதே போன்ற சத்தான உணவைத் தொடரவும்.", color: "text-emerald-600", bg: "bg-emerald-50" };
  };
  const goal = getGoalInfo();

  const analyzeFood = () => {
    if (!customFood.trim()) return;
    setIsAnalyzing(true);
    
    // Simulate an AI parsing layer for instant offline capability during presentation
    setTimeout(() => {
      let type = 'protein'; // default
      let amount = Math.floor(Math.random() * 8) + 5; // 5 to 12%
      
      const text = customFood.toLowerCase();
      if (text.includes('apple') || text.includes('date') || text.includes('spinach') || text.includes('pomegranate') || text.includes('iron') || text.includes('மாதுளை') || text.includes('பேரிச்சை') || text.includes('ஆப்பிள்')) {
        type = 'iron';
        amount += 5;
      } else if (text.includes('milk') || text.includes('egg') || text.includes('cheese') || text.includes('paneer') || text.includes('ragi') || text.includes('பால்') || text.includes('முட்டை')) {
        type = 'calcium';
        amount += 10;
      } else if (text.includes('meat') || text.includes('chicken') || text.includes('dal') || text.includes('fish') || text.includes('மீன்') || text.includes('கறி') || text.includes('பருப்பு')) {
        type = 'protein';
        amount += 8;
      }

      addNutrient(type, amount, customFood);
      setCustomFood('');
      setIsAnalyzing(false);
    }, 1200); // UI illusion of connecting to AI
  };

  return (
    <FullScreenOverlay onClose={() => navigateTo('dashboard', 'Going to Home...')} title={t.nutrition}>
      <div className="p-5 space-y-6 pb-32">
        
        {/* PERSONALIZED GOAL CARD */}
        <div className={`${goal.bg} p-6 rounded-2xl border border-opacity-60 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300`}>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm flex-shrink-0">
            <span className="text-2xl font-black text-gray-800">{bmi}</span>
            <p className="text-[8px] font-bold uppercase text-gray-500 text-center tracking-tight mt-1">BMI</p>
          </div>
          <div className="flex-1">
            <h4 className={`text-xs font-bold uppercase tracking-widest ${goal.color}`}>{goal.label}</h4>
            <p className="text-sm font-semibold text-gray-700 leading-snug mt-1.5">{goal.advice}</p>
          </div>
        </div>

        {/* NUTRITION TRACKER */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 p-6 rounded-2xl shadow-sm">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2 mb-1">
            <Apple className="text-emerald-600" size={20} /> Today's Nutrition
          </h3>
          <p className="text-xs text-emerald-700 font-medium mb-5">Daily Nutrition Value Tracker</p>
          
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-4">
            <div className="group">
              <p className="text-[9px] uppercase font-bold text-gray-600 tracking-tight">Iron</p>
              <div className="relative mt-2 h-2 bg-white/40 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full transition-all duration-500" style={{width: `${Math.min(nutrientValues.iron, 100)}%`}}></div>
              </div>
              <p className="text-sm font-black text-rose-600 mt-2">{nutrientValues.iron}%</p>
            </div>
            <div className="group">
              <p className="text-[9px] uppercase font-bold text-gray-600 tracking-tight">Calcium</p>
              <div className="relative mt-2 h-2 bg-white/40 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{width: `${Math.min(nutrientValues.calcium, 100)}%`}}></div>
              </div>
              <p className="text-sm font-black text-blue-600 mt-2">{nutrientValues.calcium}%</p>
            </div>
            <div className="group">
              <p className="text-[9px] uppercase font-bold text-gray-600 tracking-tight">Protein</p>
              <div className="relative mt-2 h-2 bg-white/40 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{width: `${Math.min(nutrientValues.protein, 100)}%`}}></div>
              </div>
              <p className="text-sm font-black text-emerald-600 mt-2">{nutrientValues.protein}%</p>
            </div>
          </div>
        </div>

        {/* SMART AI FOOD ANALYZER */}
        <div className="bg-white border border-indigo-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">{"\n"}
          <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span> AI Food Scanner
          </h4>
          <div className="flex bg-gray-100 rounded-xl border border-gray-200 p-1 focus-within:ring-2 focus-within:ring-indigo-400 transition-all">
            <input 
              type="text" 
              value={customFood}
              onChange={(e) => setCustomFood(e.target.value)}
              placeholder="What did you eat? (e.g. 2 Apples)"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm font-semibold outline-none placeholder:font-normal placeholder:text-gray-400"
              onKeyDown={(e) => e.key === 'Enter' && analyzeFood()}
            />
            <button 
              onClick={analyzeFood}
              disabled={!customFood.trim() || isAnalyzing}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 rounded-lg text-xs font-bold uppercase tracking-tight transition-all disabled:opacity-50 active:scale-95"
            >
              {isAnalyzing ? '...' : "Add"}
            </button>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
          {['all', 'iron', 'calcium', 'protein'].map(cat => (
            <button 
              key={cat}
              onClick={() => setNutritionCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${nutritionCategory === cat ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="font-black text-slate-400 text-[10px] uppercase tracking-widest px-1">Healthy Food Ideas</h4>
          
          <div className="space-y-3">
            {[
              { name: "முருங்கை கீரை", en: "Drumstick Leaves", icon: "🌿", stats: "Iron 28mg • Vit C", type: 'iron', amount: 8 },
              { name: "கொள்ளு", en: "Horse Gram", icon: "🫘", stats: "Iron 7mg • Protein 22g", type: 'protein', amount: 12 },
              { name: "ராகி கஞ்சி", en: "Ragi Porridge", icon: "🌾", stats: "Calcium 344mg • Iron 3.9mg", type: 'calcium', amount: 15 },
              { name: "சோழி மீன்", en: "Anchovies", icon: "🐟", stats: "Protein 17g • Omega-3", type: 'protein', amount: 10 },
              { name: "பேரிச்சை", en: "Dates", icon: "🌴", stats: "High Iron • Energy", type: 'iron', amount: 5 },
              { name: "மாதுளை", en: "Pomegranate", icon: "🍎", stats: "Blood Purifier • Iron", type: 'iron', amount: 6 },
            ].filter(item => nutritionCategory === 'all' || item.type === nutritionCategory).map((item, id) => (
              <div key={id} onClick={() => addNutrient(item.type, item.amount, item.name)} className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center justify-between shadow-sm active:scale-[0.98] transition-all cursor-pointer hover:border-indigo-100 hover:shadow-md group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm">{item.name}</h5>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide leading-none my-1">{item.en}</p>
                    <p className={`text-[10px] font-black uppercase tracking-tight ${item.type === 'iron' ? 'text-rose-500' : item.type === 'calcium' ? 'text-blue-500' : 'text-emerald-500'}`}>
                      {item.stats}
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50 text-emerald-600 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Plus size={18} />
                </div>
              </div>
            ))}
          </div>

          {/* NEW: INTAKE LOG WITH DELETE OPTION */}
          {intakeLog.length > 0 && (
            <div className="pt-6 pb-24">
              <h4 className="font-black text-rose-400 text-[10px] uppercase tracking-widest px-1 mb-4">Today's Intake Log</h4>
              <div className="space-y-2">
                {intakeLog.map(log => (
                  <div key={log.id} className="bg-rose-50/30 border border-rose-100/50 p-3 rounded-xl flex items-center justify-between animate-in slide-in-from-left-4 duration-300">
                    <div className="flex items-center space-x-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${log.type === 'iron' ? 'bg-rose-500' : log.type === 'calcium' ? 'bg-blue-500' : 'bg-emerald-500'}`}></span>
                      <span className="text-xs font-bold text-slate-700">{log.name}</span>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">+{log.amount}% {log.type}</span>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); removeIntake(log.id, log.type, log.amount, log.name); }} className="p-1.5 text-rose-300 hover:text-rose-600 hover:bg-rose-100/50 rounded-lg transition-all">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </FullScreenOverlay>
  );
}

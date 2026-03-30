import React, { useState } from 'react';
import { Baby, ChevronDown, AlertTriangle, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import FullScreenOverlay from '../components/FullScreenOverlay';

const GROWTH_DATA = {
  1: {
    icon: '🌱',
    tamizh: 'முதல் மாதம்',
    english: '1st Month',
    size: 'Raspberry Seed (2–4 mm)',
    sizeEmoji: '🍓',
    weight: '< 1g',
    color: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    details: [
      'கரு (Embryo) உருவாகத் தொடங்கும்.',
      'இதய குழாய் (Heart tube) வேலை செய்யத் தொடங்கும்.',
      'மூளை மற்றும் முதுகுத் தண்டு (Neural tube) உருவாகும்.',
      'ரத்த ஓட்டம் ஆரம்பமாகும்!',
    ],
    tip: 'Folic Acid தினமும் எடுத்துக்கொள்ளவும். மது, புகையிலை முற்றிலும் தவிர்க்கவும்.',
    voiceText: 'முதல் மாதத்தில் கரு ஒரு ராஸ்பெர்ரி விதை அளவு இருக்கும். இதயம் துடிக்கத் தொடங்கும். ஃபோலிக் ஆசிட் மாத்திரை தினமும் சாப்பிடவும்.',
  },
  2: {
    icon: '🫘',
    tamizh: 'இரண்டாவது மாதம்',
    english: '2nd Month',
    size: 'Bean / Grape (1–2 cm)',
    sizeEmoji: '🍇',
    weight: '~ 1g',
    color: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    details: [
      'கை, கால் முளைகள் (limb buds) தெரியத் தொடங்கும்.',
      'இதயம் துடிக்கும் (~ 110 bpm).',
      'கண், காது, வாய் shape ஆகும்.',
      'குழந்தை Ultrasound-ல் தெரியும்!',
    ],
    tip: 'Morning sickness இருந்தால் சிறிய, அடிக்கடி உணவு சாப்பிடவும். நிறைய தண்ணீர் குடிக்கவும்.',
    voiceText: 'இரண்டாவது மாதத்தில் குழந்தை ஒரு பீன்ஸ் அளவு இருக்கும். கை கால் முளைகள் வளரும். இதயம் துடிக்கும். காலை சோர்வு இருந்தால் அடிக்கடி சாப்பிடவும்.',
  },
  3: {
    icon: '🍋',
    tamizh: 'மூன்றாவது மாதம்',
    english: '3rd Month',
    size: 'Lemon (5–8 cm)',
    sizeEmoji: '🍋',
    weight: '~ 50g',
    color: 'from-yellow-400 to-amber-500',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    details: [
      'விரல்கள், நகங்கள் உருவாகும்.',
      'அனைத்து உறுப்புகளும் (Organs) form ஆகும்.',
      'குழந்தை அசைவு தொடங்கும் (உணர மாட்டோம்).',
      'First Trimester முடியும் — ஆபத்து குறையும்!',
    ],
    tip: 'முதல் மூன்று மாத Scan (NT Scan) முக்கியம். Doctor-ஐ சந்திக்கவும்.',
    voiceText: 'மூன்றாவது மாதத்தில் குழந்தை எலுமிச்சை அளவு. விரல்கள் நகங்கள் உருவாகும். முதல் ட்ரைமஸ்டர் முடிவடையும்.',
  },
  4: {
    icon: '🥑',
    tamizh: 'நான்காவது மாதம்',
    english: '4th Month',
    size: 'Avocado (10–12 cm)',
    sizeEmoji: '🥑',
    weight: '~ 100g',
    color: 'from-green-400 to-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    details: [
      'குழந்தை kick செய்யத் தொடங்கும் (சில மாதாக்கள் உணர்வார்கள்).',
      'எலும்புகள் கடினமாகும் (Ossification).',
      'Boy/Girl identify (Anomaly scan).',
      'தோல் (skin) மெலிதாக தெரியும்.',
    ],
    tip: 'Iron & Calcium supplement தொடரவும். Anomaly scan book செய்யவும்.',
    voiceText: 'நான்காவது மாதத்தில் குழந்தை அவகேடோ அளவு. கிக் செய்யத் தொடங்கும். ஐரன் மற்றும் கால்சியம் சாப்பிடவும்.',
  },
  5: {
    icon: '🍌',
    tamizh: 'ஐந்தாவது மாதம்',
    english: '5th Month',
    size: 'Banana (17–20 cm)',
    sizeEmoji: '🍌',
    weight: '~ 300g',
    color: 'from-yellow-300 to-yellow-500',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    details: [
      'குழந்தை kicks தெளிவாக உணரலாம்.',
      'தலை முடி (hair), புருவம் வளரும்.',
      'கேட்கும் திறன் (Hearing) வளரும் — பாட்டு பாடலாம்!',
      'குழந்தை தூங்கவும் விழிக்கவும் செய்யும்.',
    ],
    tip: 'குழந்தையிடம் பேசவும், பக்தி பாடல்கள் வையவும். Kick Counter use செய்யவும்.',
    voiceText: 'ஐந்தாவது மாதத்தில் குழந்தை வாழைப்பழம் அளவு. கிக் தெளிவாக உணரலாம். குழந்தை பாட்டு கேட்கும்.',
  },
  6: {
    icon: '🌽',
    tamizh: 'ஆறாவது மாதம்',
    english: '6th Month',
    size: 'Corn Cob (27–30 cm)',
    sizeEmoji: '🌽',
    weight: '~ 600g',
    color: 'from-orange-400 to-amber-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    details: [
      'நுரையீரல் (Lungs) வளரும் — சுவாசம் கற்கும்.',
      'கண்கள் திறக்கும்.',
      'குழந்தை 2nd Trimester முடிக்கும்.',
      'தசைகள் வலுவாகும்.',
    ],
    tip: 'Glucose Test (GDM screening) இந்த மாதம். BP சரியாக இருக்கட்டும். சர்க்கரை குறைக்கவும்.',
    voiceText: 'ஆறாவது மாதத்தில் குழந்தை சோளக்கதிர் அளவு. நுரையீரல் வளரும். குளுக்கோஸ் டெஸ்ட் செய்யவும்.',
  },
  7: {
    icon: '🥦',
    tamizh: 'ஏழாவது மாதம்',
    english: '7th Month',
    size: 'Cauliflower (35–38 cm)',
    sizeEmoji: '🥦',
    weight: '~ 1 kg',
    color: 'from-teal-400 to-cyan-500',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    details: [
      'குழந்தை 1 கிலோ ஆகும் — Big milestone!',
      'Third Trimester தொடங்கும்.',
      'Taste buds (சுவை அரும்புகள்) உருவாகும்.',
      'Premature birth survive rate ~ 90%.',
    ],
    tip: 'Prenatal Yoga தொடரவும். அதிக நேரம் ஒரே இடத்தில் நிற்காதீர்கள். கால் வீக்கம் கவனியுங்கள்.',
    voiceText: 'ஏழாவது மாதத்தில் குழந்தை ஒரு கிலோ ஆகும். மூன்றாவது மூன்று மாதம் தொடங்கும். யோகா பயிற்சி தொடரவும்.',
  },
  8: {
    icon: '🥥',
    tamizh: 'எட்டாவது மாதம்',
    english: '8th Month',
    size: 'Coconut (42–45 cm)',
    sizeEmoji: '🥥',
    weight: '~ 2.2 kg',
    color: 'from-indigo-400 to-blue-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    details: [
      'குழந்தை தலைகீழாக (head-down) திரும்பும்.',
      'நுரையீரல் முதிர்ச்சி அடையும்.',
      'கொழுப்பு நிறைய சேரும் (chubby cheeks!).',
      'தாய் சோர்வு, மூச்சிரைக்கும் — இயல்பானது.',
    ],
    tip: 'தினமும் 6–7 Dates சாப்பிடவும். Hospital bag pack ready வையுங்கள். Birth plan discuss செய்யுங்கள்.',
    voiceText: 'எட்டாவது மாதத்தில் குழந்தை தேங்காய் அளவு. தலைகீழாக திரும்பும். தினமும் ஆறு ஏழு பேரீட்டை சாப்பிடவும்.',
  },
  9: {
    icon: '🍉',
    tamizh: 'ஒன்பதாவது மாதம்',
    english: '9th Month',
    size: 'Watermelon (48–52 cm)',
    sizeEmoji: '🍉',
    weight: '~ 3–3.5 kg',
    color: 'from-rose-500 to-red-500',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    details: [
      'குழந்தை Delivery-க்கு Ready!',
      'அனைத்து உறுப்புகளும் முதிர்ச்சி.',
      'Lightening (குழந்தை கீழே இறங்கும்) உணரலாம்.',
      'Contractions கவனிக்கவும் — Hospital ready!',
    ],
    tip: 'Bag ready. Doctor number save. Contraction Timer use செய்யவும். நம்பிக்கையுடன் இருங்கள்! 💪',
    voiceText: 'ஒன்பதாவது மாதத்தில் குழந்தை தர்பூசணி அளவு. பிரசவத்திற்கு தயாராகிவிட்டது. நம்பிக்கையுடன் இருங்கள்.',
  },
};

const MONTH_LABELS = {
  1: '1st', 2: '2nd', 3: '3rd', 4: '4th', 5: '5th',
  6: '6th', 7: '7th', 8: '8th', 9: '9th',
};

export default function BabyGrowth({ navigateTo, t, speak }) {
  const [month, setMonth] = useState(null);
  const data = month ? GROWTH_DATA[month] : null;

  const goNext = () => setMonth(m => Math.min(9, (m || 0) + 1));
  const goPrev = () => setMonth(m => Math.max(1, (m || 2) - 1));

  return (
    <FullScreenOverlay
      onClose={() => navigateTo('dashboard', 'Going to Home...')}
      title="Baby Growth Tracker"
      bgColor="bg-slate-50"
    >
      <div className="p-4 space-y-5 pb-16">

        {/* Header Card */}
        <div className="bg-gradient-to-br from-rose-500 to-indigo-500 rounded-[28px] p-6 text-white shadow-xl shadow-rose-200 relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 text-white/10 text-[120px] leading-none select-none">👶</div>
          <p className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-1">Month-by-Month</p>
          <h2 className="text-2xl font-black">Baby Growth Tracker</h2>
          <p className="text-xs text-white/80 mt-1 font-semibold">ஒவ்வொரு மாதமும் குழந்தை எப்படி வளருகிறது?</p>
        </div>

        {/* Month Selector */}
        <div className="bg-white rounded-[28px] p-5 shadow-sm border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">கர்ப்ப கால மாதம் தேர்ந்தெடுக்கவும்</p>
          <div className="relative">
            <select
              value={month || ''}
              onChange={e => setMonth(Number(e.target.value))}
              className="w-full bg-slate-50 border-2 border-rose-100 rounded-2xl px-5 py-4 text-sm font-black text-slate-800 outline-none focus:border-rose-400 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>--- Select Month ---</option>
              {[1,2,3,4,5,6,7,8,9].map(m => (
                <option key={m} value={m}>{MONTH_LABELS[m]} Month — {GROWTH_DATA[m].english}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-rose-400 pointer-events-none" size={20} />
          </div>
        </div>

        {/* Empty State */}
        {!month && (
          <div className="flex flex-col items-center justify-center py-16 space-y-4 animate-in fade-in duration-500">
            <div className="text-7xl animate-bounce">👶</div>
            <p className="text-sm font-black text-slate-700">மாதம் தேர்வு செய்யுங்கள்</p>
            <p className="text-xs text-slate-400 font-semibold text-center px-8">Select a month above to see how your baby is growing week by week!</p>
          </div>
        )}

        {/* Growth Details Card */}
        {data && (
          <div className="animate-in slide-in-from-bottom-8 fade-in duration-400 space-y-4">

            {/* Month Hero */}
            <div className={`bg-white rounded-[28px] p-6 shadow-sm border ${data.border} relative overflow-hidden`}>
              {/* Navigation arrows */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={goPrev}
                  disabled={month <= 1}
                  className="p-2 rounded-full bg-slate-100 text-slate-500 disabled:opacity-30 active:scale-90 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex flex-col items-center">
                  <div className="text-5xl mb-2">{data.icon}</div>
                  <h3 className="text-lg font-black text-slate-800">{data.tamizh}</h3>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{data.english}</p>
                </div>

                <button
                  onClick={goNext}
                  disabled={month >= 9}
                  className="p-2 rounded-full bg-slate-100 text-slateset-500 disabled:opacity-30 active:scale-90 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Size Pill */}
              <div className={`${data.bg} border ${data.border} rounded-2xl p-4 flex items-center justify-between`}>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Baby Size</p>
                  <p className="text-sm font-black text-slate-800">{data.size}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Weight</p>
                  <p className="text-sm font-black text-slate-800">{data.weight}</p>
                </div>
                <span className="text-4xl">{data.sizeEmoji}</span>
              </div>
            </div>

            {/* Development Details */}
            <div className="bg-white rounded-[28px] p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Baby size={18} className="text-indigo-500" />
                  <h4 className="text-xs font-black text-slate-700 uppercase tracking-widest">இம்மாதம் வளர்ச்சி</h4>
                </div>
                <button
                  onClick={() => speak(data.voiceText, 'ta')}
                  className="bg-indigo-50 p-2 rounded-full text-indigo-600 active:scale-90 transition-transform hover:bg-indigo-100"
                >
                  <Play size={14} className="fill-current" />
                </button>
              </div>
              <div className="space-y-3">
                {data.details.map((point, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">{i + 1}</div>
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tip Card */}
            <div className="bg-amber-50 border border-amber-200 rounded-[24px] p-5 flex items-start space-x-3">
              <div className="shrink-0 bg-amber-100 p-2 rounded-xl">
                <AlertTriangle size={18} className="text-amber-600" />
              </div>
              <div>
                <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">இம்மாதம் கவனிக்கவும்</p>
                <p className="text-xs font-semibold text-amber-800 leading-relaxed">{data.tip}</p>
              </div>
            </div>

            {/* Month Dots Progress */}
            <div className="bg-white rounded-[24px] p-5 shadow-sm border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 text-center">Progress</p>
              <div className="flex items-center justify-center space-x-2">
                {[1,2,3,4,5,6,7,8,9].map(m => (
                  <button
                    key={m}
                    onClick={() => setMonth(m)}
                    className={`transition-all active:scale-90 font-black text-[9px] uppercase rounded-full flex items-center justify-center ${
                      m === month
                        ? 'w-8 h-8 bg-rose-500 text-white shadow-lg shadow-rose-200'
                        : m < month
                        ? 'w-6 h-6 bg-emerald-100 text-emerald-600'
                        : 'w-5 h-5 bg-slate-100 text-slate-300'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 text-center">
              <p className="text-[10px] text-rose-600 font-bold leading-relaxed">
                ⚠️ இந்த தகவல்கள் பொதுவான வழிகாட்டலுக்கு மட்டுமே. Doctor Scan மற்றும் ஆலோசனை கட்டாயம்.
              </p>
            </div>

          </div>
        )}

      </div>
    </FullScreenOverlay>
  );
}

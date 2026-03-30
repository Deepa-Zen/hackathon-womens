import React from 'react';
import { Home, Award, Search, ShoppingBag, User } from 'lucide-react';

export default function BottomNav({ screen, navigateTo }) {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'schemes', label: 'Schemes', icon: Award },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'family', label: 'Profile', icon: User },
  ];

  // Only show on these screens
  const visibleScreens = ['dashboard', 'schemes', 'shop', 'family', 'search'];
  if (!visibleScreens.includes(screen)) return null;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] px-3 pt-3 pb-[env(safe-area-inset-bottom,10px)] flex items-center justify-around gap-1">
        {tabs.map(tab => {
          const isActive = screen === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.id === 'search') return; // search handled inline
                navigateTo(tab.id, `Loading ${tab.label}...`);
              }}
              className={`flex flex-col items-center justify-center py-2 px-4 rounded-xl transition-all duration-300 active:scale-90 min-h-[60px] group relative`}
            >
              <div className={`p-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-indigo-100' : 'group-hover:bg-gray-100'}`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={`transition-colors duration-300 ${isActive ? 'text-indigo-600' : 'text-gray-500 group-hover:text-gray-700'}`} />
              </div>
              <span className={`text-[9px] mt-1.5 font-bold uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-indigo-600' : 'text-gray-500 group-hover:text-gray-700'}`}>
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 h-1 w-6 bg-indigo-500 rounded-full animate-in fade-in duration-300"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutGrid, 
  Share2, 
  ShoppingBag, 
  User, 
  Menu, 
  Bell, 
  Settings,
  Tv
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

import { useLanguage } from '../contexts/LanguageContext';

export default function Layout() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col h-screen border-r border-outline-variant/10 bg-slate-950 w-64 fixed left-0 top-0 z-50">
        <div className="px-6 py-8">
          <span className="text-xl font-black tracking-tighter text-slate-50">FlowCraft AI</span>
        </div>
        
        <div className="flex-1 space-y-1">
          <NavItem to="/dashboard" icon={<LayoutGrid size={20} />} label={t('nav.dashboard')} />
          <NavItem to="/workflows" icon={<Share2 size={20} />} label={t('nav.workflows')} />
          <NavItem to="/marketplace" icon={<ShoppingBag size={20} />} label={t('nav.marketplace')} />
          <NavItem to="/studio" icon={<Tv size={20} />} label={t('nav.studio')} />
        </div>

        <div className="p-6 bg-slate-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/10">
              <img 
                src="https://picsum.photos/seed/director/100/100" 
                alt="Profile" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-100 font-bold text-xs">Creative Director</span>
              <span className="text-slate-500 text-[10px] uppercase tracking-widest">Enterprise Tier</span>
            </div>
          </div>
          <NavItem to="/settings" icon={<Settings size={20} />} label={t('nav.settings')} />
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Top App Bar */}
        <header className="bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40 flex justify-between items-center w-full px-6 py-3 border-b border-outline-variant/5">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-primary">
              <Menu size={24} />
            </button>
            <span className="md:hidden text-xl font-black tracking-tighter text-slate-50">FlowCraft AI</span>
            <div className="hidden md:block">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">System Online</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/10">
              <img 
                src="https://picsum.photos/seed/user/100/100" 
                alt="User" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 pb-24 md:pb-8">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 bg-slate-950/90 backdrop-blur-lg border border-outline-variant/10 rounded-2xl shadow-2xl flex justify-around items-center py-3">
          <MobileNavItem to="/dashboard" icon={<LayoutGrid size={20} />} label={t('nav.dashboard')} />
          <MobileNavItem to="/workflows" icon={<Share2 size={20} />} label={t('nav.workflows')} />
          <MobileNavItem to="/marketplace" icon={<ShoppingBag size={20} />} label={t('nav.marketplace')} />
          <MobileNavItem to="/settings" icon={<Settings size={20} />} label={t('nav.settings')} />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => cn(
        "flex items-center px-6 py-3 transition-all duration-200",
        isActive 
          ? "text-primary border-l-4 border-primary bg-primary/5 font-semibold" 
          : "text-slate-500 hover:text-slate-200 hover:bg-slate-900/50"
      )}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}

function MobileNavItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => cn(
        "flex flex-col items-center justify-center transition-all duration-300",
        isActive ? "text-primary scale-110" : "text-slate-500"
      )}
    >
      {React.cloneElement(icon as React.ReactElement<any>, { 
        strokeWidth: 2 
      })}
      <span className="text-[10px] font-bold uppercase tracking-widest mt-1">{label}</span>
    </NavLink>
  );
}

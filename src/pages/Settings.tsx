import { 
  Settings as SettingsIcon, 
  Globe, 
  Bell, 
  Shield, 
  User, 
  Palette, 
  ChevronRight,
  Database,
  Lock,
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Settings() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="px-6 py-12 lg:px-12 max-w-5xl mx-auto space-y-12">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-3 text-primary mb-2">
           <SettingsIcon size={20} className="animate-spin-slow" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em]">{t('settings.subtitle')}</span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white font-display">{t('settings.title')}</h1>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Navigation Rail */}
        <aside className="lg:col-span-1 space-y-2">
          <SettingsTab icon={<Globe />} label={t('settings.language')} active />
          <SettingsTab icon={<Palette />} label={t('settings.appearance')} />
          <SettingsTab icon={<Bell />} label={t('settings.notifications')} />
          <SettingsTab icon={<Shield />} label={t('settings.security')} />
          <SettingsTab icon={<User />} label={t('nav.me') || 'Account'} />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
          {/* Language Selection */}
          <section className="glass-card rounded-[40px] p-10 space-y-8">
            <header className="space-y-1">
              <h2 className="text-xl font-bold text-white font-display">{t('settings.language')}</h2>
              <p className="text-sm text-slate-500 font-medium italic">{t('settings.language.desc')}</p>
            </header>

            <div className="grid grid-cols-2 gap-6">
              <LanguageOption 
                active={language === 'en'} 
                onClick={() => setLanguage('en')}
                label="English"
                code="EN-US"
                desc="International Standard"
              />
              <LanguageOption 
                active={language === 'es'} 
                onClick={() => setLanguage('es')}
                label="Español"
                code="ES-ES"
                desc="Configuración Nativa"
              />
            </div>
          </section>

          {/* Infrastructure Stats (Visual Only) */}
          <section className="glass-card rounded-[40px] p-10 space-y-8">
            <header className="space-y-1">
              <h2 className="text-xl font-bold text-white font-display">System Integrity</h2>
              <p className="text-sm text-slate-500 font-medium italic">Environmental health and synchronization status.</p>
            </header>
            
            <div className="space-y-4">
              <IntegrityRow icon={<Database />} label="Database Engine" value="Optimized" />
              <IntegrityRow icon={<Lock />} label="Security Protocol" value="AES-256 Validated" />
              <IntegrityRow icon={<Cloud />} label="Cloud Latency" value="12ms" />
            </div>

            <button className="w-full kinetic-gradient py-5 rounded-[24px] text-slate-950 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/10 hover:shadow-primary/30 transition-all active:scale-95">
               <CheckCircle2 size={18} strokeWidth={3} />
               {t('settings.save')}
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}

function SettingsTab({ icon, label, active }: any) {
  return (
    <button className={`w-full flex items-center justify-between p-5 rounded-[24px] transition-all group ${
      active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-slate-500 hover:text-slate-300 hover:bg-surface-container'
    }`}>
      <div className="flex items-center gap-4">
        <span className={`${active ? 'text-primary' : 'text-slate-600 group-hover:text-primary transition-colors'}`}>{icon}</span>
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      <ChevronRight size={14} className={active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-all'} />
    </button>
  );
}

function LanguageOption({ active, onClick, label, code, desc }: any) {
  return (
    <button 
      onClick={onClick}
      className={`relative p-8 rounded-[32px] border-2 text-left transition-all group overflow-hidden ${
        active 
          ? 'bg-primary/5 border-primary shadow-2xl shadow-primary/10 scale-102' 
          : 'bg-surface-container border-outline-variant/10 hover:border-slate-700'
      }`}
    >
      <div className="relative z-10 space-y-4">
        <div className="flex justify-between items-start">
          <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${active ? 'text-primary' : 'text-slate-600'}`}>
            {code}
          </span>
          {active && <CheckCircle2 size={24} className="text-primary" />}
        </div>
        <div>
          <h4 className="text-xl font-bold text-white font-display mb-1">{label}</h4>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{desc}</p>
        </div>
      </div>
      {active && (
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      )}
    </button>
  );
}

function IntegrityRow({ icon, label, value }: any) {
  return (
    <div className="flex items-center justify-between p-5 rounded-2xl bg-surface-container-low/30 border border-outline-variant/5">
      <div className="flex items-center gap-4 text-slate-400">
        {icon}
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">{value}</span>
    </div>
  );
}

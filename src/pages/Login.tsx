import { 
  Mail, 
  Lock, 
  Eye, 
  ArrowRight,
  Check,
  Github
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-secondary-container/10 rounded-full blur-[100px]"></div>
      </div>

      <main className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-700">
        <div className="text-center space-y-6 mb-12">
          <div className="mx-auto w-20 h-20 rounded-3xl bg-surface-container-high border border-outline-variant/10 shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-500">
            <span className="text-4xl font-black text-primary">F</span>
          </div>
          <div className="space-y-1">
            <h1 className="text-4xl font-black tracking-tighter text-slate-50">Bienvenido de nuevo</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">FlowCraft AI Kinetic Engine</p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <InputGroup label="Email" icon={<Mail size={18} />} placeholder="nombre@estudio.ai" type="email" />
            <InputGroup label="Contraseña" icon={<Lock size={18} />} placeholder="••••••••" type="password" hasToggle iconSecondary={<Eye size={18} />} />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 rounded-lg border-2 border-outline-variant/20 bg-surface-container-high transition-all peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center">
                  <Check size={12} className="text-slate-950 opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">Recordarme</span>
            </label>
            <button type="button" className="text-xs font-bold text-primary hover:underline underline-offset-4">¿Olvidaste tu contraseña?</button>
          </div>

          <NavLink 
            to="/dashboard"
            className="w-full py-5 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-slate-950 font-black text-sm tracking-widest shadow-xl shadow-primary/10 hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            Iniciar Sesión
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </NavLink>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/10"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.2em]">
              <span className="bg-background px-4 text-slate-700">O continuar con</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SocialButton icon={<span className="font-bold">G</span>} label="Google" />
            <SocialButton icon={<Github size={18} />} label="GitHub" />
          </div>
        </form>

        <footer className="mt-16 text-center space-y-8">
          <p className="text-sm font-bold text-slate-500">
            ¿No tienes acceso? 
            <button className="text-primary hover:underline ml-2">Contactar soporte</button>
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800">
            © 2024 FlowCraft AI. Kinetic Engine Architecture.
          </p>
        </footer>
      </main>
    </div>
  );
}

function InputGroup({ label, icon, placeholder, type, hasToggle, iconSecondary }: any) {
  return (
    <div className="group space-y-1.5 px-1">
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-focus-within:text-primary transition-colors">{label}</label>
      <div className="relative flex items-center bg-surface-container-high/40 rounded-2xl border border-outline-variant/10 focus-within:border-primary/40 focus-within:bg-surface-container-high/70 transition-all px-5 py-4">
        <span className="text-slate-600 mr-4 group-focus-within:text-primary transition-colors">{icon}</span>
        <input 
          type={type} 
          placeholder={placeholder} 
          className="flex-1 bg-transparent border-none p-0 text-sm font-bold text-slate-100 placeholder:text-slate-700 focus:ring-0"
        />
        {hasToggle && (
          <button type="button" className="text-slate-600 hover:text-white transition-colors">
            {iconSecondary || <span className="text-xs font-black uppercase tracking-tighter">Ver</span>}
          </button>
        )}
      </div>
    </div>
  );
}

function SocialButton({ icon, label }: any) {
  return (
    <button className="flex items-center justify-center gap-3 py-4 rounded-xl bg-surface-container-low border border-outline-variant/5 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95 group">
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </button>
  );
}

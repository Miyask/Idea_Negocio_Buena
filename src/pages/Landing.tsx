import { 
  ArrowRight, 
  Play, 
  Shield, 
  Brain, 
  Zap, 
  Users,
  ChevronRight,
  Globe,
  Layers,
  Cpu
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Landing() {
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary/30 font-sans overflow-x-hidden relative">
      {/* Dynamic Animated Background */}
      <div className="mesh-container">
        <div className="mesh-gradient" />
      </div>
      <div className="noise-overlay" />

      {/* Floating Light Spots */}
      <div className="glow-spot w-[600px] h-[600px] bg-primary/10 top-[-10%] right-[-10%]" />
      <div className="glow-spot w-[500px] h-[500px] bg-secondary/10 bottom-[-10%] left-[-10%] animate-pulse" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-outline-variant/5 bg-background/60 backdrop-blur-md px-6 lg:px-12 py-5 flex justify-between items-center transition-all">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-slate-950 font-black">F</div>
          <span className="text-xl font-bold tracking-tight text-white font-display">FlowCraft AI</span>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-8 items-center">
          <div className="hidden lg:flex gap-10">
            {['Platforms', 'Solutions', 'Enterprise', 'Docs'].map((link) => (
              <a key={link} href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
          <div className="h-4 w-[1px] bg-outline-variant/20 hidden lg:block" />
          <NavLink to="/login" className="bg-white text-slate-950 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all active:scale-95 shadow-lg">Login</NavLink>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 lg:px-12 max-w-7xl mx-auto z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <motion.div variants={item} className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card text-primary mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] font-display">System v2.0 Kinetic Engine</span>
          </motion.div>

          <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-[120px] font-black tracking-tight text-white leading-[0.85] max-w-5xl mx-auto font-display">
            Automate the boring. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x grayscale-[0.2] hover:grayscale-0 transition-all duration-700">Focus on the Art.</span>
          </motion.h1>

          <motion.p variants={item} className="text-slate-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            The professional orchestration engine for digital production. Seamlessly integrate your tools, automate manual pipelines, and scale without friction.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NavLink to="/login" className="w-full sm:w-auto kinetic-gradient text-slate-950 px-10 py-5 rounded-full font-bold uppercase text-sm tracking-widest shadow-[0_20px_50px_rgba(76,215,246,0.2)] hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
              Access Dashboard
            </NavLink>
            <button className="w-full sm:w-auto bg-surface-container/50 backdrop-blur-md border border-outline-variant/10 text-white px-10 py-5 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-surface-container-high transition-all flex items-center justify-center gap-3 group">
              <Play size={18} fill="white" />
              Watch Keynote
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 relative rounded-[60px] p-2 glass-card overflow-hidden group"
        >
          <div className="rounded-[52px] overflow-hidden relative aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=2000" 
              alt="Dashboard" 
              className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            
            {/* Overlay UI Elements */}
            <div className="absolute bottom-10 left-10 p-6 glass-card rounded-2xl animate-float max-w-xs">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-slate-500">Processing</p>
                  <p className="text-lg font-bold text-white">4.2 TB/s Synced</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-y border-outline-variant/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 text-center mb-12">Trusted by technical pioneers</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
            {['SONY', 'UBISOFT', 'EPIC GAMES', 'DISNEY', 'ADOBE'].map((brand) => (
              <span key={brand} className="text-2xl font-black tracking-tighter text-white font-display italic">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto space-y-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-primary text-[11px] font-black uppercase tracking-[.3em] font-display">Expert Systems</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">Infrastructure for the next generation of art.</h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              We built FlowCraft for studios that need ironclad reliability and infinite scalability. No boilerplate, just pure performance.
            </p>
            <div className="pt-8 space-y-6">
              <FeatureItem text="Distributed engine nodes across 12 countries" />
              <FeatureItem text="Native integration with USD & Hydra" />
              <FeatureItem text="Zero-latency collaborative previews" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="space-y-6 pt-12">
              <BentoCard icon={<Globe className="text-primary" />} title="Edge Sync" delay={0.2} />
              <BentoCard icon={<Layers className="text-secondary" />} title="Fluid Layers" delay={0.3} />
            </div>
            <div className="space-y-6">
              <BentoCard icon={<Shield className="text-emerald-400" />} title="Iron Vault" delay={0.4} />
              <BentoCard icon={<Brain className="text-tertiary" />} title="AI Audit" delay={0.5} />
            </div>
            <div className="absolute -z-10 w-full h-full bg-primary/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-40 mx-4 lg:mx-12 rounded-[60px] bg-surface-container relative overflow-hidden group">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10 py-12">
          <h2 className="text-5xl md:text-8xl font-black tracking-tight text-white font-display leading-[0.85]">Ready to craft <br /><span className="text-primary italic">reality?</span></h2>
          <NavLink to="/login" className="inline-flex items-center gap-4 bg-white text-slate-950 px-12 py-6 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-primary transition-all active:scale-95 group">
            Request Internal Access
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </NavLink>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -mr-[400px] -mt-[400px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[80px] -ml-[300px] -mb-[300px]" />
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-16 lg:gap-8 pb-20 border-b border-outline-variant/5">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-950 font-black">F</div>
              <span className="text-2xl font-bold tracking-tight text-white font-display">FlowCraft AI</span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed font-medium">
              Building the kinetic backbone for digital production worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-8">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compute Nodes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">© 2024 FLOWCRAFT AI LABORATORY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            {['Twitter', 'GitHub', 'LinkedIn', 'Instagram'].map(social => (
              <a key={social} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-700">
      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <CheckCircle className="w-3 h-3" />
      </div>
      <span className="text-slate-200 font-medium">{text}</span>
    </div>
  );
}

function BentoCard({ icon, title, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass-card p-8 rounded-3xl space-y-4 group hover:bg-surface-container-high transition-all"
    >
      <div className="w-12 h-12 rounded-2xl bg-background border border-outline-variant/10 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <div className="h-1 w-8 bg-outline-variant/20 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
    </motion.div>
  );
}

function CheckCircle({ className, ...props }: any) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

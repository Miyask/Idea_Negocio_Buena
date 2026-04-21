import { 
  Search, 
  Filter, 
  Star,
  ArrowRight,
  CheckCircle,
  ShoppingBag,
  Zap,
  Globe,
  Plus
} from 'lucide-react';
import { MARKETPLACE_ITEMS } from '../constants';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Marketplace() {
  return (
    <div className="px-6 py-12 lg:px-12 max-w-7xl mx-auto space-y-16 relative">
      {/* Immersive Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
      >
        <div className="space-y-4">
          <span className="text-secondary text-[11px] font-black tracking-[0.4em] uppercase font-display italic">Node Ecosystem</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-display">Marketplace</h1>
          <p className="text-slate-500 max-w-xl font-medium leading-relaxed italic">
            Discover community-built kinetic nodes and industrial automatons.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div className="relative group flex-1 lg:flex-none">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="w-full lg:w-96 bg-surface-container-low border border-outline-variant/10 rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-surface-container transition-all placeholder:text-slate-700 font-bold"
            />
          </div>
          <button className="bg-surface-container hover:bg-surface-container-high px-6 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all border border-outline-variant/10 active:scale-95">
            <Filter size={18} className="text-slate-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Filters</span>
          </button>
        </div>
      </motion.header>

      {/* Featured Banner */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-[400px] rounded-[48px] overflow-hidden group shadow-2xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2000" 
          alt="Featured" 
          className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-12 space-y-6 max-w-2xl">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-slate-950"><Zap size={20} /></div>
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Featured Release</span>
          </div>
          <h2 className="text-5xl font-bold text-white font-display tracking-tight">Kinetic VFX Suite v4.0</h2>
          <p className="text-slate-300 text-lg font-medium leading-relaxed italic">The ultimate collection of procedural destruction and fluid nodes.</p>
          <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-primary transition-all shadow-xl">Explore Collection</button>
        </div>
      </motion.section>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 pt-4 border-y border-outline-variant/5">
        {['All Assets', 'Generative AI', 'VFX Pipeline', 'Data Sync', 'UE5 Tools', 'Asset Ops'].map((cat, i) => (
          <button 
            key={cat}
            className={`whitespace-nowrap px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
              i === 0 
                ? "bg-primary text-slate-950 shadow-lg shadow-primary/20" 
                : "bg-surface-container-low text-slate-500 hover:text-white border border-outline-variant/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {MARKETPLACE_ITEMS.map((item) => (
          <StoreCard key={item.id} item={item} />
        ))}
        
        {/* Placeholder Post */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-1 glass-card rounded-[40px] p-12 border-dashed border-2 flex flex-col items-center justify-center text-center gap-8 group cursor-pointer hover:bg-surface-container-high transition-all"
        >
          <div className="w-20 h-20 rounded-full border border-outline-variant/10 flex items-center justify-center text-slate-700 group-hover:text-primary group-hover:scale-110 transition-all">
            <Plus size={40} strokeWidth={1} />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-display">Submit Node</h3>
            <p className="text-slate-500 text-sm italic">Share your custom automatons and earn revenue.</p>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.3em] text-primary border border-primary/20 px-6 py-2 rounded-full group-hover:bg-primary group-hover:text-slate-950 transition-all">Become a Seller</button>
        </motion.div>
      </motion.div>
    </div>
  );
}

function StoreCard({ item }: any) {
  return (
    <motion.div 
      variants={itemVariants}
      className="group glass-card rounded-[40px] overflow-hidden hover:bg-surface-container-highest transition-all duration-500 shadow-xl"
    >
      <div className="aspect-[16/11] w-full relative overflow-hidden p-3 pb-0">
        <div className="w-full h-full rounded-[32px] overflow-hidden relative">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
          <span className="absolute top-6 left-6 px-4 py-2 bg-slate-950/40 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest rounded-xl border border-primary/20">
            {item.category}
          </span>
        </div>
      </div>
      
      <div className="p-10 space-y-8">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-primary transition-colors font-display">
              {item.name}
            </h3>
            <div className="flex items-center gap-1.5 text-secondary">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-bold">{item.rating}</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm font-medium leading-relaxed italic line-clamp-2">
            "{item.description}"
          </p>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-outline-variant/10">
          <div className="flex flex-col">
            <p className="text-[10px] text-slate-600 uppercase font-black tracking-widest mb-1 leading-none">
              {item.type === 'subscription' ? 'Subscription' : 'One-time Entry'}
            </p>
            <p className="text-4xl font-bold text-white font-display tracking-tight">
              {item.price === 'Free' ? '$0' : item.price}
              {item.type === 'subscription' && <span className="text-xs font-bold text-slate-700 ml-1">/ mo</span>}
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-slate-950 p-5 rounded-[24px] shadow-xl group-hover:bg-primary transition-colors duration-300"
          >
            <ShoppingBag size={24} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

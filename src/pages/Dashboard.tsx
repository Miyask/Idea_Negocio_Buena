import { 
  Zap, 
  Timer, 
  Cpu, 
  RefreshCcw, 
  ChevronRight,
  Plus,
  ArrowUpRight,
  Activity as ActivityIcon,
  Search,
  Bell,
  Settings
} from 'lucide-react';
import { ACTIVITIES } from '../constants';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export default function Dashboard() {
  return (
    <div className="px-6 py-12 lg:px-12 max-w-7xl mx-auto space-y-12 overflow-hidden relative">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4 border-b border-outline-variant/10"
      >
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Operative Overview</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-display">Command Center</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-3 rounded-xl bg-surface-container border border-outline-variant/10 text-slate-400 hover:text-white transition-all"><Search size={20} /></button>
          <button className="p-3 rounded-xl bg-surface-container border border-outline-variant/10 text-slate-400 hover:text-white transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-4 ring-background" />
          </button>
          <button className="kinetic-gradient px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-slate-950 font-bold shadow-xl shadow-primary/10 hover:shadow-primary/30 transition-all active:scale-95">
            <Plus size={18} strokeWidth={3} />
            <span className="text-xs uppercase tracking-widest">New Engine</span>
          </button>
        </div>
      </motion.header>

      {/* Main Bento Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {/* Primary Stat Card */}
        <motion.div variants={item} className="md:col-span-2 lg:col-span-3 glass-card rounded-[32px] p-8 space-y-6 relative group overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
            <div className="p-4 rounded-2xl bg-primary/10 text-primary">
              <Zap size={24} />
            </div>
            <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
              <ArrowUpRight size={14} /> +12%
            </span>
          </div>
          <div className="space-y-1 relative z-10">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Total Active Flows</h3>
            <p className="text-6xl font-black text-white font-display tracking-tighter">428</p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
        </motion.div>

        {/* Secondary Stats */}
        <motion.div variants={item} className="lg:col-span-3 glass-card rounded-[32px] p-8 flex flex-col justify-between group">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Time Efficiency</h3>
            <Timer size={18} className="text-secondary" />
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-white font-display">1,240h</p>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-secondary shadow-[0_0_10px_rgba(173,198,255,0.5)]" 
              />
            </div>
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Target: 2,000h saving / q2</p>
          </div>
        </motion.div>

        {/* Big Layout Sections */}
        <motion.div variants={item} className="md:col-span-4 lg:col-span-4 glass-card rounded-[40px] overflow-hidden flex flex-col">
          <div className="p-8 border-b border-outline-variant/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ActivityIcon size={18} className="text-primary" />
              <h2 className="text-lg font-bold text-white font-display uppercase tracking-tight">Active Transmissions</h2>
            </div>
            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors">View Logs</button>
          </div>
          <div className="p-2 space-y-1">
            {ACTIVITIES.map((activity, i) => (
              <motion.div 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                key={activity.id} 
                className="flex items-center justify-between p-6 rounded-[24px] group transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    <RefreshCcw size={18} className={activity.status === 'processing' ? 'animate-spin' : ''} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:translate-x-1 transition-transform">{activity.name}</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{activity.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    activity.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-primary/10 text-primary'
                  }`}>
                    {activity.status}
                  </div>
                  <ChevronRight size={16} className="text-slate-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mini Actions Grid */}
        <div className="md:col-span-4 lg:col-span-2 grid grid-cols-2 gap-6">
          <ActionTile icon={<Cpu />} title="Nodes" count="24 Active" className="bg-primary/5 text-primary" />
          <ActionTile icon={<Settings />} title="Core" count="Optimum" className="bg-secondary/5 text-secondary" />
          <div className="col-span-2 glass-card rounded-[32px] p-8 flex flex-col items-center justify-center text-center gap-4 border-dashed border-2 hover:border-primary/40 transition-all cursor-pointer group">
            <div className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-slate-950 transition-all">
              <Plus size={24} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white">Expand Infrastructure</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ActionTile({ icon, title, count, className }: any) {
  return (
    <motion.div variants={item} className={`glass-card rounded-[32px] p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer group`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${className}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{title}</h4>
        <p className="text-sm font-bold text-white mt-1">{count}</p>
      </div>
    </motion.div>
  );
}

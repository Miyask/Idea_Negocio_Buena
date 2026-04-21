import { 
  PlusCircle, 
  Search, 
  Filter,
  MoreVertical,
  Video,
  Network,
  Zap,
  Edit2,
  FileText,
  Copy,
  Trash2,
  ArrowRight
} from 'lucide-react';
import { WORKFLOWS } from '../constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Workflows() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredWorkflows = WORKFLOWS.filter(w => {
    if (activeFilter === 'Todos') return true;
    if (activeFilter === 'Activos') return w.status === 'active';
    if (activeFilter === 'Pausados') return w.status === 'paused';
    return true;
  });

  return (
    <div className="px-6 py-12 lg:px-12 max-w-7xl mx-auto space-y-12 relative">
      {/* Immersive Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none animate-pulse" />
      
      <motion.section 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
      >
        <div className="space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Workflow Architect</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white font-display">Automations</h1>
          <p className="text-slate-500 max-w-xl font-medium leading-relaxed">
            Manage your kinetic engines and real-time rendering pipelines with industrial-grade precision.
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="kinetic-gradient px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-slate-950 font-bold shadow-2xl shadow-primary/10 hover:shadow-primary/30 transition-all"
        >
          <PlusCircle size={22} strokeWidth={2.5} />
          <span className="text-xs uppercase tracking-widest">New Engine Node</span>
        </motion.button>
      </motion.section>

      <section className="flex flex-wrap items-center gap-6">
        <div className="bg-surface-container-low/50 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-6 border border-outline-variant/10">
          <div className="flex items-center gap-2">
            {['Todos', 'Activos', 'Pausados'].map((f) => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${
                  activeFilter === f 
                    ? "bg-white text-slate-950 shadow-lg" 
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low/50 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-4 ml-auto border border-outline-variant/10 focus-within:border-primary/40 transition-all group">
          <Search size={18} className="text-slate-600 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search engines..." 
            className="bg-transparent border-none focus:ring-0 text-sm text-slate-100 placeholder:text-slate-700 w-48 md:w-80"
          />
        </div>
      </section>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredWorkflows.map((workflow) => (
            <WorkflowCard key={workflow.id} workflow={workflow} />
          ))}
        </AnimatePresence>
        
        {/* Empty/Add Slot */}
        <motion.div 
          variants={item}
          className="group glass-card rounded-[40px] p-12 border-dashed border-2 flex flex-col items-center justify-center text-center gap-6 cursor-pointer hover:bg-surface-container-high transition-all"
        >
          <div className="w-20 h-20 rounded-3xl bg-surface-container border border-outline-variant/10 flex items-center justify-center text-slate-700 group-hover:text-primary group-hover:scale-110 group-hover:rotate-12 transition-all">
            <PlusCircle size={40} strokeWidth={1} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-400 group-hover:text-white font-display">Initialize Engine</h3>
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed">Bootstrap a fresh automated pipeline</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function WorkflowCard({ workflow }: any) {
  const Icon = workflow.icon === 'Movie' ? Video : workflow.icon === 'Hub' ? Network : Zap;
  const isActive = workflow.status === 'active';

  return (
    <motion.div 
      variants={item}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group glass-card rounded-[40px] p-10 hover:bg-surface-container-highest transition-all duration-500 relative flex flex-col justify-between min-h-[380px]"
    >
      <div className="absolute top-10 right-10">
        <div className={`px-3 py-1 rounded-full flex items-center gap-2 border ${isActive ? 'bg-primary/5 border-primary/20 text-primary' : 'bg-slate-900 border-outline-variant/10 text-slate-500'}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-primary animate-pulse' : 'bg-slate-600'}`} />
          <span className="text-[9px] font-black uppercase tracking-widest">{isActive ? 'Flowing' : 'Idle'}</span>
        </div>
      </div>

      <div className="space-y-8">
        <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${
          isActive ? 'bg-primary/10 text-primary shadow-[0_0_30px_rgba(76,215,246,0.15)]' : 'bg-slate-900 text-slate-600'
        }`}>
          <Icon size={34} />
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-white tracking-tight font-display">{workflow.name}</h3>
          <p className="text-slate-400 text-sm font-medium leading-relaxed italic">
            "{workflow.description}"
          </p>
        </div>
      </div>

      <div className="space-y-8 pt-8">
        <div className="flex justify-between items-end border-t border-outline-variant/10 pt-8">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">Efficiency Rating</span>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-white font-display tracking-tighter">{workflow.savedHours}h</span>
              <span className="text-[10px] text-emerald-400 font-bold">+18%</span>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
            <CircularAction icon={<Edit2 size={12} />} />
            <CircularAction icon={<Trash2 size={12} />} className="hover:text-red-400" />
          </div>
        </div>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full ${i < 3 ? 'bg-primary' : 'bg-slate-800'}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CircularAction({ icon, className }: any) {
  return (
    <button className={`w-8 h-8 rounded-full bg-slate-900 border border-outline-variant/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-800 transition-all ${className}`}>
      {icon}
    </button>
  );
}

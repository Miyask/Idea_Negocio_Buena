import { 
  Box, 
  Database, 
  Cpu, 
  Play, 
  Save, 
  Plus, 
  Layers,
  Settings,
  Terminal,
  Search,
  ChevronRight,
  Maximize2,
  Share2,
  GitBranch,
  Activity,
  Zap,
  Layout
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const NODES = [
  { id: 1, type: 'Input', title: 'Data Stream', x: 100, y: 150, status: 'synced' },
  { id: 2, type: 'Engine', title: 'Gemini Analysis', x: 400, y: 200, status: 'processing' },
  { id: 3, type: 'Filter', title: 'Safety Guard', x: 400, y: 350, status: 'ready' },
  { id: 4, type: 'Output', title: 'Cloud Sync', x: 750, y: 280, status: 'idle' },
];

export default function Studio() {
  const [selectedNode, setSelectedNode] = useState<number | null>(2);

  return (
    <div className="h-[calc(100vh-64px)] md:h-full flex flex-col bg-background overflow-hidden relative">
      {/* Top Bar */}
      <header className="h-16 border-b border-outline-variant/10 bg-surface-container/50 backdrop-blur-md flex items-center justify-between px-6 z-20">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-white font-display">Quantum Pipeline v4.0</h2>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 italic">Connected & Live</span>
            </div>
          </div>
          <div className="h-6 w-[1px] bg-outline-variant/20" />
          <nav className="flex items-center gap-2">
            <ToolbarButton icon={<Save size={16} />} label="Save" />
            <ToolbarButton icon={<Share2 size={16} />} label="Share" />
            <ToolbarButton icon={<Maximize2 size={16} />} label="Focus" />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-slate-900 rounded-xl border border-outline-variant/10 px-3 py-1.5 gap-3">
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Version Control</span>
             <div className="flex items-center gap-1.5 text-primary">
                <GitBranch size={12} />
                <span className="text-xs font-bold">master*</span>
             </div>
          </div>
          <button className="bg-primary text-slate-950 px-6 py-2 rounded-xl font-bold uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-lg shadow-primary/10">
            <Play size={14} fill="currentColor" />
            Live Deploy
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Library */}
        <aside className="w-64 border-r border-outline-variant/10 bg-surface-container-low/30 backdrop-blur-sm flex flex-col z-10">
          <div className="p-4 border-b border-outline-variant/10">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 transition-colors group-focus-within:text-primary" size={14} />
              <input 
                type="text" 
                placeholder="Search nodes..." 
                className="w-full bg-surface-container text-xs rounded-lg pl-9 pr-4 py-2 border border-outline-variant/10 focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all font-medium"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <NodeLibrarySet title="Core Engines" items={[
              { icon: <Cpu />, label: 'Text Processing' },
              { icon: <Zap />, label: 'Event Trigger' },
              { icon: <Database />, label: 'Vault Connection' },
            ]} />
            <NodeLibrarySet title="IA Modules" items={[
              { icon: <Activity />, label: 'Sentiment' },
              { icon: <Layers />, label: 'Vector DB' },
              { icon: <Settings />, label: 'Config' },
            ]} />
          </div>
        </aside>

        {/* Canvas Area */}
        <main className="flex-1 relative overflow-hidden bg-background group">
          {/* Dot Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
          />
          
          {/* Animated Background Atmosphere */}
          <div className="glow-spot w-[800px] h-[800px] bg-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Connection Lines (Simulated with SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <path d="M 180 170 Q 250 170 400 220" stroke="rgba(76, 215, 246, 0.2)" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M 400 220 Q 550 220 550 220" stroke="rgba(76, 215, 246, 0.4)" strokeWidth="2" fill="none" strokeDasharray="10 5" />
            <path d="M 400 370 Q 550 370 750 300" stroke="rgba(192, 193, 255, 0.2)" strokeWidth="2" fill="none" />
          </svg>

          {/* Interactive Nodes */}
          {NODES.map((node) => (
            <motion.div
              key={node.id}
              initial={false}
              drag
              dragMomentum={false}
              onClick={() => setSelectedNode(node.id)}
              className={`absolute cursor-grab active:cursor-grabbing z-10 glass-card rounded-2xl p-4 min-w-[200px] border-l-4 transition-all duration-300 ${
                selectedNode === node.id ? 'border-primary scale-105 shadow-primary/20 ring-1 ring-primary/20' : 'border-slate-800'
              }`}
              style={{ left: node.x, top: node.y }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-xl ${selectedNode === node.id ? 'bg-primary/10 text-primary' : 'bg-slate-900 text-slate-500'}`}>
                  {node.type === 'Input' && <Box size={18} />}
                  {node.type === 'Engine' && <Cpu size={18} />}
                  {node.type === 'Filter' && <Layers size={18} />}
                  {node.type === 'Output' && <Database size={18} />}
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  node.status === 'synced' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' :
                  node.status === 'processing' ? 'bg-primary animate-pulse' :
                  'bg-slate-700'
                }`} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{node.type}</p>
                <h4 className="text-sm font-bold text-white">{node.title}</h4>
              </div>
            </motion.div>
          ))}
          
          <button className="absolute bottom-8 left-1/2 -translate-x-1/2 kinetic-gradient text-slate-950 px-6 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-2xl transition-all hover:scale-105 active:scale-95">
             <Plus size={16} strokeWidth={3} />
             Add Node
          </button>
        </main>

        {/* Right Sidebar - Properties */}
        <aside className="w-80 border-l border-outline-variant/10 bg-surface-container/50 backdrop-blur-sm flex flex-col z-10">
          <div className="p-6 border-b border-outline-variant/10">
             <div className="flex items-center gap-2 text-slate-500 mb-2">
                <Settings size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Node Inspector</span>
             </div>
             {selectedNode ? (
               <div className="space-y-1">
                 <h3 className="text-xl font-bold text-white font-display">{NODES.find(n => n.id === selectedNode)?.title}</h3>
                 <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">{NODES.find(n => n.id === selectedNode)?.type} Node v2.0</p>
               </div>
             ) : (
               <p className="text-xs text-slate-600">Select a node to inspect</p>
             )}
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {selectedNode ? (
              <>
                <section className="space-y-4">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-white">Execution Logic</h4>
                  <div className="space-y-3">
                    <PropertyRow label="Retries" value="3" />
                    <PropertyRow label="Timeout" value="5000ms" />
                    <PropertyRow label="Parallel" value="True" />
                  </div>
                </section>
                <section className="space-y-4">
                   <div className="flex justify-between items-center">
                     <h4 className="text-[11px] font-black uppercase tracking-widest text-white">Data Output</h4>
                     <button className="text-[10px] text-primary font-bold hover:underline">Copy Schema</button>
                   </div>
                   <div className="bg-slate-950 rounded-xl p-4 border border-outline-variant/10">
                      <pre className="text-[10px] font-mono text-emerald-500 overflow-x-auto">
                        {`{
  "id": "node_742",
  "data": "raw_stream",
  "format": "json_optimized"
}`}
                      </pre>
                   </div>
                </section>
                <button className="w-full py-4 rounded-2xl bg-surface-container border border-outline-variant/10 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2 font-display">
                  <Layout size={14} />
                  Change Visualization
                </button>
              </>
            ) : null}
          </div>
          <div className="p-4 bg-slate-900 border-t border-outline-variant/10">
             <div className="flex items-center gap-3 text-xs font-bold text-slate-600 mb-2">
                <Terminal size={14} />
                CONSOLE
             </div>
             <div className="text-[9px] font-mono text-slate-500 leading-tight">
                [SYSTEM] Node 42 initialized...<br />
                [STUDIO] Grid alignment: optimal<br />
                [AUTH] Handshake success
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ToolbarButton({ icon, label }: any) {
  return (
    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all group">
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-[10px] font-bold uppercase tracking-widest hidden lg:inline">{label}</span>
    </button>
  );
}

function NodeLibrarySet({ title, items }: any) {
  return (
    <div className="space-y-3">
      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-600 px-1">{title}</h4>
      <div className="space-y-1">
        {items.map((item: any) => (
          <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-surface-container/30 border border-outline-variant/5 hover:bg-surface-container-high cursor-pointer group transition-all">
            <div className="flex items-center gap-3">
              <span className="text-slate-500 group-hover:text-primary transition-colors">{item.icon}</span>
              <span className="text-[11px] font-medium text-slate-300">{item.label}</span>
            </div>
            <ChevronRight size={12} className="text-slate-700 opacity-0 group-hover:opacity-100 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PropertyRow({ label, value }: any) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-outline-variant/5">
      <span className="text-[10px] font-medium text-slate-500">{label}</span>
      <span className="text-[10px] font-bold text-slate-300">{value}</span>
    </div>
  );
}

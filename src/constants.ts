import { Workflow, MarketplaceItem, Activity } from './types';

export const WORKFLOWS: Workflow[] = [
  {
    id: '1',
    name: 'Auto-Render Frames',
    description: 'Optimización automática de secuencias de frames para motores Unreal Engine 5.',
    status: 'active',
    savedHours: 142,
    lastRun: 'Hoy, 14:20',
    nextRun: 'En 2 horas',
    category: 'Unreal Engine',
    icon: 'Movie'
  },
  {
    id: '2',
    name: 'Node Sync Alpha',
    description: 'Sincronización de grafos de nodos entre múltiples instancias de producción.',
    status: 'paused',
    savedHours: 28,
    lastRun: 'Hace 3 días',
    nextRun: 'Pausado',
    category: 'Data Pipeline',
    icon: 'Hub'
  },
  {
    id: '3',
    name: 'Kinetic Interpolator',
    description: 'Generación de fotogramas intermedios mediante IA para animaciones fluidas de 60fps.',
    status: 'active',
    savedHours: 512,
    lastRun: 'Ayer, 23:10',
    nextRun: 'Hoy, 23:00',
    category: 'VFX Automation',
    icon: 'Zap'
  }
];

export const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  {
    id: 'm1',
    name: 'Neural Scene Generator v2',
    description: 'Automatización completa de creación de entornos 3D mediante prompts naturales.',
    category: 'IA Generativa',
    price: '$49.00',
    type: 'subscription',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'm2',
    name: 'Asset Vault Sync Pro',
    description: 'Gestión y versionado automático de assets pesados entre equipos remotos.',
    category: 'Data Pipeline',
    price: '$129.00',
    type: 'one-time',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'm3',
    name: 'Chroma Automata Elite',
    description: 'Motor de rotoscopia y keying impulsado por redes neuronales.',
    category: 'VFX Automation',
    price: '$85.00',
    type: 'subscription',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800'
  }
];

export const ACTIVITIES: Activity[] = [
  { id: 'a1', name: 'Asset Pipeline Sync', status: 'completed', time: '2m ago' },
  { id: 'a2', name: 'Neural Mesh Render', status: 'processing', time: 'Processing batch #42...' },
  { id: 'a3', name: 'API Latency Spike', status: 'warning', time: 'Optimization required' },
  { id: 'a4', name: 'Cloudflare Tunnel', status: 'failed', time: 'Handshake failed (502)' }
];

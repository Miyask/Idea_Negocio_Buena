export interface Workflow {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'failed';
  savedHours: number;
  lastRun: string;
  nextRun: string;
  category: string;
  icon: string;
}

export interface MarketplaceItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  type: 'subscription' | 'one-time';
  rating: number;
  image: string;
  badge?: string;
}

export interface Activity {
  id: string;
  name: string;
  status: 'completed' | 'processing' | 'warning' | 'failed';
  time: string;
}

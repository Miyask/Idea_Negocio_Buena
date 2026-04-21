/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Workflows from './pages/Workflows';
import Marketplace from './pages/Marketplace';
import Studio from './pages/Studio';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Landing from './pages/Landing';

import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Landing />} />
          
          {/* Auth */}
          <Route path="/login" element={<Login />} />

          {/* Protected App Routes */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/me" element={<div className="p-12 text-center text-slate-500 font-black uppercase tracking-[0.2em]">Profile Module Loading...</div>} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

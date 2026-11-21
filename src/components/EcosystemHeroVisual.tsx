import React, { useState } from 'react';
import { ECOSYSTEMS, EcosystemProfile } from '../data/ecosystems';
import { Monitor, Smartphone, Package, Layers, ArrowRight } from 'lucide-react';

interface EcosystemHeroVisualProps {
  onSelectEcosystem?: (ecosystemId: 'windows' | 'android' | 'linux') => void;
  activeEcosystemId?: 'windows' | 'android' | 'linux';
  navigate?: (path: string) => void;
}

export const EcosystemHeroVisual: React.FC<EcosystemHeroVisualProps> = ({
  onSelectEcosystem,
  activeEcosystemId = 'windows',
  navigate
}) => {
  const [selectedId, setSelectedId] = useState<'windows' | 'android' | 'linux'>(activeEcosystemId);

  const handleSelect = (id: 'windows' | 'android' | 'linux') => {
    setSelectedId(id);
    if (onSelectEcosystem) {
      onSelectEcosystem(id);
    }
  };

  const activeEcosystem: EcosystemProfile = ECOSYSTEMS[selectedId];

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto py-8 px-4 flex flex-col items-center"
      role="region"
      aria-label="Interactive Three-Product Ecosystem Visualization"
    >
      {/* Visual Canvas Diagram */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[500px] flex items-center justify-center select-none">
        {/* Ambient Glows */}
        <div 
          className="absolute inset-0 rounded-full blur-[90px] opacity-20 transition-all duration-700 pointer-events-none"
          style={{
            background: selectedId === 'windows' 
              ? 'radial-gradient(circle, #2563EB 0%, transparent 70%)'
              : selectedId === 'android'
              ? 'radial-gradient(circle, #10B981 0%, transparent 70%)'
              : 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)'
          }}
        />

        {/* SVG Conduits & Orbital Paths */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients for Conduits */}
            <linearGradient id="grad-win" x1="400" y1="250" x2="160" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="grad-android" x1="400" y1="250" x2="640" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="grad-linux" x1="400" y1="250" x2="400" y2="420" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.4" />
            </linearGradient>

            {/* Glowing filter */}
            <filter id="glow-effect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Concentric Orbital Rings */}
          <circle cx="400" cy="250" r="140" stroke="currentColor" className="text-slate-300/30 dark:text-slate-700/40" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="400" cy="250" r="220" stroke="currentColor" className="text-slate-300/20 dark:text-slate-700/20" strokeWidth="1" strokeDasharray="6 8" />

          {/* Conduit 1: Center to Giri Bridge (Top-Left) */}
          <path
            d="M 400 250 Q 280 200 160 120"
            stroke={selectedId === 'windows' ? 'url(#grad-win)' : 'currentColor'}
            className={selectedId === 'windows' ? '' : 'text-slate-300/30 dark:text-slate-700/30'}
            strokeWidth={selectedId === 'windows' ? 3 : 1.5}
            fill="none"
            filter={selectedId === 'windows' ? 'url(#glow-effect)' : undefined}
          />
          {/* Conduit 2: Center to Giri Mobile (Top-Right) */}
          <path
            d="M 400 250 Q 520 200 640 120"
            stroke={selectedId === 'android' ? 'url(#grad-android)' : 'currentColor'}
            className={selectedId === 'android' ? '' : 'text-slate-300/30 dark:text-slate-700/30'}
            strokeWidth={selectedId === 'android' ? 3 : 1.5}
            fill="none"
            filter={selectedId === 'android' ? 'url(#glow-effect)' : undefined}
          />
          {/* Conduit 3: Center to Giri Store (Bottom-Center) */}
          <path
            d="M 400 250 Q 400 340 400 420"
            stroke={selectedId === 'linux' ? 'url(#grad-linux)' : 'currentColor'}
            className={selectedId === 'linux' ? '' : 'text-slate-300/30 dark:text-slate-700/30'}
            strokeWidth={selectedId === 'linux' ? 3 : 1.5}
            fill="none"
            filter={selectedId === 'linux' ? 'url(#glow-effect)' : undefined}
          />

          {/* Active Flow Pulse Marker */}
          {selectedId === 'windows' && (
            <circle cx="280" cy="185" r="4" fill="#38BDF8" className="animate-ping" />
          )}
          {selectedId === 'android' && (
            <circle cx="520" cy="185" r="4" fill="#34D399" className="animate-ping" />
          )}
          {selectedId === 'linux' && (
            <circle cx="400" cy="335" r="4" fill="#A78BFA" className="animate-ping" />
          )}
        </svg>

        {/* Central Core: Giri OS Orbital Emblem */}
        <div 
          className="absolute z-20 flex flex-col items-center justify-center cursor-default group"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/95 dark:bg-slate-900/95 border-2 border-giri-blue/40 shadow-2xl flex items-center justify-center p-3 backdrop-blur-xl group-hover:scale-105 transition-transform duration-300">
            {/* Spinning decorative ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-giri-blue/30 dark:border-cyan-400/30 animate-[spin_30s_linear_infinite]" />
            <img 
              src="/logo/giri-os-icon.png" 
              alt="Giri OS Official Emblem" 
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_2px_10px_rgba(37,99,235,0.3)]"
              decoding="async"
            />
          </div>
          <span className="mt-2 text-xs font-bold tracking-widest  text-giri-text font-mono bg-white/80 dark:bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-giri-border backdrop-blur-md">
            Giri OS Core
          </span>
        </div>

        {/* Node 1: Giri Bridge (Top-Left) */}
        <div 
          className="absolute z-30"
          style={{ left: '20%', top: '24%', transform: 'translate(-50%, -50%)' }}
        >
          <button
            onClick={() => handleSelect('windows')}
            className={`group flex flex-col items-center p-3 sm:p-4 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              selectedId === 'windows'
                ? 'bg-white dark:bg-slate-900 border-2 border-blue-500 shadow-xl shadow-blue-500/10 scale-105'
                : 'bg-white/80 dark:bg-slate-900/80 border border-giri-border hover:border-blue-400/60 shadow-md'
            }`}
            aria-pressed={selectedId === 'windows'}
            aria-label="Select Giri Bridge Product"
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-md flex items-center justify-center transition-colors ${
              selectedId === 'windows' ? 'bg-blue-600 text-white' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
            }`}>
              <Monitor className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="mt-2 text-center">
              <span className="block text-xs sm:text-sm font-bold text-giri-text">Giri Bridge</span>
              <span className="block text-xs font-mono text-giri-muted">Compatibility Platform</span>
            </div>
            <div className="flex gap-1 mt-1.5">
              <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">EXE</span>
              <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">MSI</span>
            </div>
          </button>
        </div>

        {/* Node 2: Giri Mobile (Top-Right) */}
        <div 
          className="absolute z-30"
          style={{ left: '80%', top: '24%', transform: 'translate(-50%, -50%)' }}
        >
          <button
            onClick={() => handleSelect('android')}
            className={`group flex flex-col items-center p-3 sm:p-4 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              selectedId === 'android'
                ? 'bg-white dark:bg-slate-900 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 scale-105'
                : 'bg-white/80 dark:bg-slate-900/80 border border-giri-border hover:border-emerald-400/60 shadow-md'
            }`}
            aria-pressed={selectedId === 'android'}
            aria-label="Select Giri Mobile Product"
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-md flex items-center justify-center transition-colors ${
              selectedId === 'android' ? 'bg-emerald-600 text-white' : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white'
            }`}>
              <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="mt-2 text-center">
              <span className="block text-xs sm:text-sm font-bold text-giri-text">Giri Mobile</span>
              <span className="block text-xs font-mono text-giri-muted">Mobile Runtime</span>
            </div>
            <div className="flex gap-1 mt-1.5">
              <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">APK</span>
            </div>
          </button>
        </div>

        {/* Node 3: Giri Store (Bottom-Center) */}
        <div 
          className="absolute z-30"
          style={{ left: '50%', top: '84%', transform: 'translate(-50%, -50%)' }}
        >
          <button
            onClick={() => handleSelect('linux')}
            className={`group flex flex-col items-center p-3 sm:p-4 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 ${
              selectedId === 'linux'
                ? 'bg-white dark:bg-slate-900 border-2 border-violet-500 shadow-xl shadow-violet-500/10 scale-105'
                : 'bg-white/80 dark:bg-slate-900/80 border border-giri-border hover:border-violet-400/60 shadow-md'
            }`}
            aria-pressed={selectedId === 'linux'}
            aria-label="Select Giri Store Product"
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-md flex items-center justify-center transition-colors ${
              selectedId === 'linux' ? 'bg-violet-600 text-white' : 'bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white'
            }`}>
              <Package className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="mt-2 text-center">
              <span className="block text-xs sm:text-sm font-bold text-giri-text">Giri Store</span>
              <span className="block text-xs font-mono text-giri-muted">Unified Marketplace</span>
            </div>
            <div className="flex gap-1 mt-1.5">
              <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">DEB</span>
              <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">Flatpak</span>
            </div>
          </button>
        </div>
      </div>

      {/* Dynamic Detail Card for Selected Product */}
      <div className="w-full mt-6 bg-white/90 dark:bg-slate-900/90 border border-giri-border rounded-md p-6 sm:p-8 backdrop-blur-xl shadow-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-giri-border">
          <div className="flex items-center gap-4">
            <div 
              className="w-12 h-12 rounded-md flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: activeEcosystem.accentColor }}
            >
              {selectedId === 'windows' && <Monitor className="w-6 h-6" />}
              {selectedId === 'android' && <Smartphone className="w-6 h-6" />}
              {selectedId === 'linux' && <Package className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-giri-text">{activeEcosystem.name}</h3>
                <span className="badge-primary">
                  {activeEcosystem.subtitle}
                </span>
              </div>
              <p className="text-xs text-giri-muted mt-1 max-w-xl">{activeEcosystem.tagline}</p>
            </div>
          </div>

          {/* Formats Pills & Product Link */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {activeEcosystem.formats.map((fmt) => (
                <span 
                  key={fmt.format}
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${fmt.color}`}
                >
                  .{fmt.format.toLowerCase()}
                </span>
              ))}
            </div>

            {navigate && (
              <button
                onClick={() => navigate(activeEcosystem.productPath)}
                className="btn-primary"
              >
                <span>Product Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Engine and Architecture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {activeEcosystem.architectureHighlights.map((arch, idx) => (
            <div key={idx} className="p-4 rounded-md bg-giri-surface/50 border border-giri-border/70">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-giri-blue dark:text-cyan-400" />
                <h3 className="text-xs font-bold text-giri-text">{arch.title}</h3>
              </div>
              <p className="text-xs text-giri-muted leading-relaxed">{arch.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Layers, 
  Search, 
  Sliders, 
  Terminal, 
  Sparkles, 
  Monitor, 
  Volume2, 
  Wifi, 
  Battery, 
  Maximize2, 
  X, 
  Minus,
  Folder,
  Globe,
  Settings,
  Cpu
} from 'lucide-react';

interface ShowcaseTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  badge: 'Conceptual Interface Mockup' | 'Verified System Asset';
  description: string;
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'desktop',
    name: 'Giri Space',
    icon: <LayoutGrid className="w-4 h-4" />,
    title: 'Giri Space Desktop & Workspace Orchestration',
    badge: 'Conceptual Interface Mockup',
    description: 'A distraction-free computing canvas with clean spatial typography, top telemetry status bar, and composited application windows powered by Openbox.'
  },
  {
    id: 'dock',
    name: 'Giri Dock',
    icon: <Layers className="w-4 h-4" />,
    title: 'Fluid Glassmorphic Application Shelf',
    badge: 'Conceptual Interface Mockup',
    description: 'Intelligent desktop shelf featuring smooth magnification, active application status dots, dynamic pinning, and quick workspace window switching.'
  },
  {
    id: 'launcher',
    name: 'Quick Launcher',
    icon: <Search className="w-4 h-4" />,
    title: 'Instant Fuzzy-Search Application Grid',
    badge: 'Conceptual Interface Mockup',
    description: 'Keyboard-first application launcher providing instant search, category filtering, terminal command execution, and immediate calculation answers.'
  },
  {
    id: 'control',
    name: 'Control Center',
    icon: <Sliders className="w-4 h-4" />,
    title: 'Unified Hardware & Settings Flyout',
    badge: 'Conceptual Interface Mockup',
    description: 'Consolidated quick-toggle drawer for PipeWire audio routing, NetworkManager Wi-Fi selection, Bluetooth connectivity, and display brightness.'
  },
  {
    id: 'windows',
    name: 'Multi-Windowing',
    icon: <Monitor className="w-4 h-4" />,
    title: 'Composited Window Management Workflow',
    badge: 'Conceptual Interface Mockup',
    description: 'Snappable, hardware-accelerated application windows with subtle drop shadows, custom window controls, and side-by-side productivity layouts.'
  }
];

export const DesktopShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('desktop');
  const [launcherSearch, setLauncherSearch] = useState<string>('');
  const [volumeLevel, setVolumeLevel] = useState<number>(75);
  const [brightnessLevel, setBrightnessLevel] = useState<number>(90);
  const [wifiEnabled, setWifiEnabled] = useState<boolean>(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState<boolean>(true);

  const current = SHOWCASE_TABS.find(t => t.id === activeTab) || SHOWCASE_TABS[0];

  return (
    <section className="relative my-24 overflow-hidden" aria-label="Giri OS Desktop Interface Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-giri-blue/10 border border-giri-blue/20 text-giri-blue text-xs font-semibold  tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Desktop Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text">
            A New Way to Experience Your Desktop
          </h2>
          <p className="mt-4 text-sm sm:text-base text-giri-muted leading-relaxed">
            Crafted with an uncompromising focus on ergonomics, speed, and visual tranquility. Explore the core interface components below.
          </p>

          {/* Tab Selector Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-md bg-giri-surface border border-giri-border backdrop-blur-xl shadow-sm">
            {SHOWCASE_TABS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-giri-blue text-white shadow-md shadow-giri-blue/20 scale-[1.02]'
                      : 'text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Display Frame / Device Mockup */}
        <div className="relative mx-auto max-w-5xl rounded-3xl bg-slate-900 p-2 sm:p-4 shadow-2xl ring-1 ring-slate-800">
          {/* Laptop/Monitor Bezel Top Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-slate-400 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-slate-400 font-medium">Giri Space 0.1 &bull; 1920&times;1080 @ 120Hz</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                {current.badge}
              </span>
            </div>
          </div>

          {/* Interactive Desktop Canvas */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-md overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 select-none border border-slate-800">
            {/* Top Telemetry Panel (Giri Space Top Bar) */}
            <header className="absolute top-0 left-0 right-0 h-8 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-4 flex items-center justify-between z-30 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img src="/logo/giri-os-icon.png" alt="Giri OS" decoding="async" className="w-4 h-4 object-contain" />
                  <span className="font-bold tracking-wider text-white text-xs">Giri Space</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>Workspace 1</span>
                  <span className="text-slate-600">&bull;</span>
                  <span>Terminal</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <div className="hidden sm:flex items-center gap-1.5 text-emerald-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>RAM: 312 MB</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Wifi className="w-3.5 h-3.5" />
                  <Volume2 className="w-3.5 h-3.5" />
                  <Battery className="w-3.5 h-3.5" />
                  <span className="font-semibold ml-1">10:45 AM</span>
                </div>
              </div>
            </header>

            {/* View 1: Default Desktop Environment */}
            {activeTab === 'desktop' && (
              <div className="relative w-full h-full pt-8 flex flex-col justify-between p-6">
                {/* Desktop Icons */}
                <div className="grid grid-cols-1 gap-4 w-20">
                  <div className="flex flex-col items-center gap-1 p-2 rounded-md hover:bg-white/10 cursor-pointer text-slate-200 text-center transition-colors">
                    <Folder className="w-8 h-8 text-blue-400" />
                    <span className="text-xs font-medium drop-shadow">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-md hover:bg-white/10 cursor-pointer text-slate-200 text-center transition-colors">
                    <Terminal className="w-8 h-8 text-emerald-400" />
                    <span className="text-xs font-medium drop-shadow">Terminal</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-md hover:bg-white/10 cursor-pointer text-slate-200 text-center transition-colors">
                    <Settings className="w-8 h-8 text-slate-400" />
                    <span className="text-xs font-medium drop-shadow">Settings</span>
                  </div>
                </div>

                {/* Center subtle welcome watermark */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-20">
                  <img src="/logo/giri-os-icon.png" alt="Giri OS Watermark" decoding="async" className="w-32 h-32 object-contain" />
                  <span className="mt-4 text-xs font-mono tracking-widest text-white ">ONE SYSTEM. INFINITE POSSIBILITIES.</span>
                </div>
              </div>
            )}

            {/* View 2: Giri Dock Focus */}
            {activeTab === 'dock' && (
              <div className="relative w-full h-full pt-8 flex flex-col justify-end p-6">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="max-w-md bg-slate-900/90 border border-slate-700/80 rounded-md p-6 backdrop-blur-xl shadow-2xl text-left">
                    <span className="text-xs font-mono font-semibold  tracking-wider text-cyan-400 block mb-1">
                      Adaptive Glassmorphism
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">Giri Dock Application Shelf</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Positioned seamlessly along the bottom display edge. Provides running instance indicators, fluid icon hover magnification, and workspace grouping.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span>FPS: 120</span>
                      <span>&bull;</span>
                      <span>CPU: 0.2%</span>
                      <span>&bull;</span>
                      <span>Memory: 18 MB</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 3: Giri Launcher Focus */}
            {activeTab === 'launcher' && (
              <div className="relative w-full h-full pt-8 flex items-center justify-center p-4">
                <div className="w-full max-w-lg bg-slate-900/95 border border-blue-500/40 rounded-md p-5 shadow-2xl backdrop-blur-2xl">
                  {/* Search Bar */}
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200 mb-4">
                    <Search className="w-4 h-4 text-cyan-400" />
                    <input
                      type="text"
                      placeholder="Type to search apps, commands, or calculate (e.g. 'code', '42 * 8')..."
                      value={launcherSearch}
                      onChange={(e) => setLauncherSearch(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none"
                    />
                    <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">ESC</span>
                  </div>

                  {/* App Grid */}
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div className="p-2.5 rounded-md bg-blue-500/10 border border-blue-500/30 flex flex-col items-center gap-1.5 text-white cursor-pointer hover:scale-105 transition-transform">
                      <Terminal className="w-6 h-6 text-cyan-400" />
                      <span className="text-xs font-medium">Terminal</span>
                    </div>
                    <div className="p-2.5 rounded-md bg-slate-800/60 border border-slate-700/60 flex flex-col items-center gap-1.5 text-slate-200 cursor-pointer hover:scale-105 transition-transform">
                      <Folder className="w-6 h-6 text-blue-400" />
                      <span className="text-xs font-medium">Files</span>
                    </div>
                    <div className="p-2.5 rounded-md bg-slate-800/60 border border-slate-700/60 flex flex-col items-center gap-1.5 text-slate-200 cursor-pointer hover:scale-105 transition-transform">
                      <Globe className="w-6 h-6 text-emerald-400" />
                      <span className="text-xs font-medium">Browser</span>
                    </div>
                    <div className="p-2.5 rounded-md bg-slate-800/60 border border-slate-700/60 flex flex-col items-center gap-1.5 text-slate-200 cursor-pointer hover:scale-105 transition-transform">
                      <Settings className="w-6 h-6 text-purple-400" />
                      <span className="text-xs font-medium">Settings</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Control Center Focus */}
            {activeTab === 'control' && (
              <div className="relative w-full h-full pt-8 flex items-start justify-end p-6">
                <div className="w-72 bg-slate-900/95 border border-slate-700/80 rounded-md p-4 shadow-2xl backdrop-blur-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-bold text-white mb-3">
                    <span>Control Center</span>
                    <span className="text-xs text-slate-400 font-mono">Genesis 0.1</span>
                  </div>

                  {/* Quick Toggles */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <button 
                      onClick={() => setWifiEnabled(!wifiEnabled)}
                      className={`p-3 rounded-md flex items-center gap-2 text-xs font-semibold transition-colors ${
                        wifiEnabled ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Wifi className="w-4 h-4" />
                      <span>{wifiEnabled ? 'Wi-Fi: On' : 'Wi-Fi: Off'}</span>
                    </button>
                    <button 
                      onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
                      className={`p-3 rounded-md flex items-center gap-2 text-xs font-semibold transition-colors ${
                        bluetoothEnabled ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{bluetoothEnabled ? 'BT: On' : 'BT: Off'}</span>
                    </button>
                  </div>

                  {/* Sliders */}
                  <div className="space-y-3 text-xs text-slate-300">
                    <div>
                      <div className="flex justify-between mb-1 text-xs">
                        <span>Volume (PipeWire)</span>
                        <span className="font-mono text-cyan-400">{volumeLevel}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={volumeLevel} 
                        onChange={(e) => setVolumeLevel(Number(e.target.value))}
                        className="w-full accent-blue-500 h-1.5 bg-slate-700 rounded-md cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-xs">
                        <span>Display Brightness</span>
                        <span className="font-mono text-amber-400">{brightnessLevel}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="100" 
                        value={brightnessLevel} 
                        onChange={(e) => setBrightnessLevel(Number(e.target.value))}
                        className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-md cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 5: Multi-Windowing Focus */}
            {activeTab === 'windows' && (
              <div className="relative w-full h-full pt-10 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Window 1: Terminal */}
                <div className="rounded-md bg-slate-950/90 border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-mono">bash &bull; ~</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Minus className="w-3 h-3 text-slate-500" />
                      <Maximize2 className="w-3 h-3 text-slate-500" />
                      <X className="w-3 h-3 text-slate-500" />
                    </div>
                  </div>
                  <div className="p-3 font-mono text-xs text-slate-300 space-y-1">
                    <p className="text-emerald-400">$ uname -a</p>
                    <p className="text-slate-400">Linux giri-genesis 6.1.0-28-amd64 #1 SMP PREEMPT_DYNAMIC</p>
                    <p className="text-emerald-400">$ free -h</p>
                    <p className="text-slate-400">Mem: 15Gi total, 312Mi used, 14Gi free</p>
                    <p className="text-cyan-400">$ echo &quot;One System. Infinite Possibilities.&quot;</p>
                  </div>
                </div>

                {/* Window 2: Giri Store Preview */}
                <div className="rounded-md bg-slate-900/90 border border-purple-500/30 shadow-2xl overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800/90 border-b border-slate-700 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span className="font-semibold">Giri Store &bull; Discover</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Minus className="w-3 h-3 text-slate-500" />
                      <Maximize2 className="w-3 h-3 text-slate-500" />
                      <X className="w-3 h-3 text-slate-500" />
                    </div>
                  </div>
                  <div className="p-3 text-xs space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-md bg-slate-800/60 border border-slate-700/60">
                      <div>
                        <div className="font-bold text-white text-xs">Blender 3D</div>
                        <div className="text-xs text-slate-400">Debian APT &bull; Verified</div>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Installed</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-md bg-slate-800/60 border border-slate-700/60">
                      <div>
                        <div className="font-bold text-white text-xs">Visual Studio Code</div>
                        <div className="text-xs text-slate-400">Flatpak Sandboxed</div>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Persistent Glassmorphic Giri Dock at Bottom */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30">
              <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900/80 backdrop-blur-2xl border border-slate-700/60 shadow-2xl">
                <button 
                  onClick={() => setActiveTab('launcher')}
                  className="btn-primary"
                  title="Giri Launcher"
                >
                  <img src="/logo/giri-os-icon.png" alt="Giri Launcher Icon" decoding="async" className="w-5 h-5 object-contain" />
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-cyan-400" />
                </button>
                <button 
                  onClick={() => setActiveTab('windows')}
                  className="w-9 h-9 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center text-emerald-400 hover:scale-110 transition-transform group relative"
                  title="Terminal"
                >
                  <Terminal className="w-5 h-5" />
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-emerald-400" />
                </button>
                <button 
                  onClick={() => setActiveTab('windows')}
                  className="w-9 h-9 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center text-blue-400 hover:scale-110 transition-transform group relative"
                  title="File Manager"
                >
                  <Folder className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveTab('windows')}
                  className="w-9 h-9 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center text-purple-400 hover:scale-110 transition-transform group relative"
                  title="Giri Store"
                >
                  <Sparkles className="w-5 h-5" />
                </button>
                <div className="w-[1px] h-6 bg-slate-700 mx-1" />
                <button 
                  onClick={() => setActiveTab('control')}
                  className="w-9 h-9 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:scale-110 transition-transform"
                  title="Control Center"
                >
                  <Sliders className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Detail Callout Below Showcase */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-md bg-giri-surface border border-giri-border">
            <span className="text-xs font-mono font-bold text-giri-blue ">01 &bull; Minimal Overhead</span>
            <h3 className="text-sm font-bold text-giri-text mt-1">Under 350 MB Idle Footprint</h3>
            <p className="text-xs text-giri-muted mt-1 leading-relaxed">
              Openbox window manager and optimized Giri Space shell preserve 90%+ of hardware resources for user workloads.
            </p>
          </div>
          <div className="p-5 rounded-md bg-giri-surface border border-giri-border">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 ">02 &bull; Fluid Compositing</span>
            <h3 className="text-sm font-bold text-giri-text mt-1">Tear-Free Hardware Rendering</h3>
            <p className="text-xs text-giri-muted mt-1 leading-relaxed">
              Picom GLX backend provides smooth window dragging, rounded corners, and drop shadows without micro-stutters.
            </p>
          </div>
          <div className="p-5 rounded-md bg-giri-surface border border-giri-border">
            <span className="text-xs font-mono font-bold text-giri-violet ">03 &bull; Modular Control</span>
            <h3 className="text-sm font-bold text-giri-text mt-1">Configurable Architecture</h3>
            <p className="text-xs text-giri-muted mt-1 leading-relaxed">
              Every panel, keybinding, and dock configuration is plain text, giving developers full ownership over their workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

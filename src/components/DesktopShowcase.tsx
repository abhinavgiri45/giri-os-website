import React, { useState } from 'react';
import { StatusBadge } from './StatusBadge';
import { LayoutGrid, Layers, Search, Sliders, Terminal, Sparkles } from 'lucide-react';

interface ShowcaseTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  badge: 'Verified OS Asset' | 'Design Preview';
  description: string;
  imageSrc: string;
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'desktop',
    name: 'Giri Space',
    icon: <LayoutGrid className="w-4 h-4" />,
    title: 'Giri Space Desktop & Workspace Orchestration',
    badge: 'Design Preview',
    description: 'Clean, distraction-free desktop featuring the top telemetry panel, Openbox composited windows with subtle drop shadows, and Giri Dock application shelf.',
    imageSrc: '/wallpapers/giri-origin.png'
  },
  {
    id: 'dock',
    name: 'Giri Dock',
    icon: <Layers className="w-4 h-4" />,
    title: 'Elevated Glassmorphic Dock',
    badge: 'Design Preview',
    description: 'Fluid application shelf with active application dot indicators, dynamic magnification, and seamless window switching.',
    imageSrc: '/wallpapers/electric-geometry.png'
  },
  {
    id: 'launcher',
    name: 'Quick Launcher',
    icon: <Search className="w-4 h-4" />,
    title: 'Fuzzy-Search Application Grid',
    badge: 'Design Preview',
    description: 'Sub-5ms keyboard launcher supporting application categorization, terminal command execution, and quick calculations.',
    imageSrc: '/wallpapers/midnight-architecture.png'
  },
  {
    id: 'control',
    name: 'Control Center',
    icon: <Sliders className="w-4 h-4" />,
    title: 'Unified Hardware & Settings Flyout',
    badge: 'Design Preview',
    description: 'Consolidated quick-toggle drawer for PipeWire audio routing, NetworkManager Wi-Fi selection, Bluetooth pairing, and brightness.',
    imageSrc: '/wallpapers/violet-dimension.png'
  },
  {
    id: 'plymouth',
    name: 'Boot Engine',
    icon: <Sparkles className="w-4 h-4" />,
    title: 'Giri Genesis Plymouth Boot Theme',
    badge: 'Verified OS Asset',
    description: 'Genuine system boot splash asset featuring the illuminated orbital emblem during live Linux kernel handoff.',
    imageSrc: '/images/plymouth/logo.png'
  },
  {
    id: 'grub',
    name: 'GRUB2 Menu',
    icon: <Terminal className="w-4 h-4" />,
    title: 'HiDPI GRUB2 Bootloader Theme',
    badge: 'Verified OS Asset',
    description: 'Genuine high-resolution boot selection menu configured with subtle cyan accents and automated UEFI resolution detection.',
    imageSrc: '/images/grub/background.png'
  }
];

export const DesktopShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('desktop');
  const current = SHOWCASE_TABS.find(t => t.id === activeTab) || SHOWCASE_TABS[0];

  return (
    <section className="relative my-20">
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase mb-2">
          Interface Showcase
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-giri-text">
          A New Way to Experience Your Desktop
        </h2>
        <p className="mt-3 text-sm sm:text-base text-giri-muted max-w-2xl">
          Crafted with an uncompromising focus on ergonomics, speed, and visual tranquility. Explore the core interface components below.
        </p>

        {/* Tab Selector Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-giri-surface border border-giri-border backdrop-blur-xl shadow-sm">
          {SHOWCASE_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-giri-blue/15 text-giri-blue dark:text-cyan-300 border border-giri-blue/30 shadow-sm'
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

      {/* Main Showcase Stage */}
      <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-giri-border bg-giri-surface shadow-2xl">
        {/* Synthetic OS Titlebar */}
        <div className="flex items-center justify-between px-5 py-3 bg-giri-surface2 border-b border-giri-border backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-xs font-medium text-giri-muted font-mono hidden sm:inline-block">
              {current.title}
            </span>
          </div>

          <StatusBadge status={current.badge} />
        </div>

        {/* Viewport Frame */}
        <div className="relative aspect-[16/9] w-full bg-black/5 dark:bg-black/40 flex items-center justify-center overflow-hidden group">
          <img
            src={current.imageSrc}
            alt={`Giri OS Interactive Preview — ${current.title}`}
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              current.id === 'plymouth' ? 'object-contain max-h-[300px] p-8' : ''
            }`}
          />

          {/* Simulated Giri Space UI Overlay when on desktop tab */}
          {activeTab === 'desktop' && (
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
              {/* Top Panel Simulation */}
              <div className="w-full flex items-center justify-between px-4 py-1.5 rounded-lg bg-giri-surface/90 border border-giri-border backdrop-blur-md text-xs text-giri-text shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-giri-blue/20 text-giri-blue dark:text-cyan-300 font-mono text-[10px] font-bold">1</span>
                    <span className="px-2 py-0.5 rounded text-giri-muted font-mono text-[10px]">2</span>
                    <span className="px-2 py-0.5 rounded text-giri-muted font-mono text-[10px]">3</span>
                  </div>
                  <span className="text-giri-muted hidden sm:inline">Workspace 1</span>
                </div>
                <div className="font-mono text-xs font-semibold">12:45 PM</div>
                <div className="flex items-center gap-3 text-giri-muted text-[11px]">
                  <span>Wi-Fi: Connected</span>
                  <span>Battery: 98%</span>
                </div>
              </div>

              {/* Bottom Simulated Dock */}
              <div className="self-center flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-giri-surface/90 border border-giri-border backdrop-blur-xl shadow-2xl">
                {['LayoutGrid', 'FolderTree', 'Terminal', 'Search', 'Sliders'].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-xl bg-giri-surface2 border border-giri-border flex items-center justify-center p-2 text-giri-blue dark:text-cyan-400 relative"
                  >
                    <div className="w-4 h-4 rounded bg-gradient-to-tr from-cyan-400 to-blue-600" />
                    {idx < 3 && (
                      <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtitle Card Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md p-4 rounded-xl bg-giri-surface/95 border border-giri-border backdrop-blur-xl shadow-2xl">
            <h4 className="text-sm font-bold text-giri-text">{current.title}</h4>
            <p className="mt-1 text-xs text-giri-muted leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

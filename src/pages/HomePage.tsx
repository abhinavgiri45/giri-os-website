import React from 'react';
import { ThreeHero } from '../components/ThreeHero';
import { DesktopShowcase } from '../components/DesktopShowcase';
import { EcosystemHeroVisual } from '../components/EcosystemHeroVisual';
import { StatusBadge } from '../components/StatusBadge';
import { GIRI_FEATURES } from '../data/features';
import { GIRI_EDITIONS } from '../data/editions';
import { ECOSYSTEMS } from '../data/ecosystems';
import { 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Gauge, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Monitor,
  Smartphone,
  Package
} from 'lucide-react';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="relative">
      {/* 4.2 Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] ambient-glow-blue blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-giri-surface border border-giri-border backdrop-blur-md mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-giri-blue dark:bg-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold text-giri-muted">
                  Giri OS Genesis 0.1 <span className="text-giri-blue dark:text-cyan-400">&bull;</span> Active Stabilization
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-giri-text leading-[1.08]">
                ONE SYSTEM. <br />
                <span className="text-gradient">INFINITE POSSIBILITIES.</span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-6 text-base sm:text-lg text-giri-muted max-w-xl leading-relaxed">
                Meet Giri OS — an independent Linux-based operating system built around a refined desktop experience, thoughtful functionality, and limitless possibilities.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <button
                  onClick={() => navigate('/features')}
                  className="aureon-button text-sm py-3 px-6"
                >
                  <span>Explore Giri OS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/docs')}
                  className="umbra-button text-sm py-3 px-6"
                >
                  <span>Discover Features</span>
                </button>

                <a
                  href="https://github.com/abhinavgiri45/giri-os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold text-giri-muted hover:text-giri-text transition-colors"
                >
                  <Terminal className="w-4 h-4 text-giri-blue dark:text-cyan-400" />
                  <span>View Source Code</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-10 mt-8 border-t border-giri-border w-full max-w-lg">
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-giri-blue dark:text-cyan-400">&lt;350 MB</div>
                  <div className="text-xs text-giri-muted mt-0.5">Idle Memory Footprint</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-giri-text">Debian 12</div>
                  <div className="text-xs text-giri-muted mt-0.5">Rock-Solid Foundation</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-giri-violet">0%</div>
                  <div className="text-xs text-giri-muted mt-0.5">Telemetry or Adware</div>
                </div>
              </div>
            </div>

            {/* Right Hero: ThreeUI-Inspired 3D Emblem Canvas */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <ThreeHero />
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 Product Introduction */}
      <section className="py-20 relative border-t border-giri-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase">
              Vision & Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-3">
              A New Way to Experience Your Desktop
            </h2>
            <p className="mt-4 text-base text-giri-muted leading-relaxed">
              Operating systems shouldn&apos;t wrestle with your hardware or impose artificial barriers. Giri OS is designed from first principles: an uncluttered shell, predictable responsiveness, and authentic respect for user autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-giri-blue/10 border border-giri-blue/20 flex items-center justify-center text-giri-blue dark:text-cyan-400 mb-6">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-giri-text mb-2">Uncompromising Performance</h3>
              <p className="text-sm text-giri-muted leading-relaxed">
                By shedding multi-gigabyte monolithic desktop background daemons, Giri OS boots rapidly and leaves CPU cycles and RAM dedicated to your IDEs, browsers, and creative pipelines.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-giri-blue/10 border border-giri-blue/20 flex items-center justify-center text-giri-blue mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-giri-text mb-2">Debian Rock Stability</h3>
              <p className="text-sm text-giri-muted leading-relaxed">
                Inherits Debian 12 (Bookworm)&apos;s battle-tested security updates and package integrity. Benefit from tens of thousands of audited open-source binaries with zero fear of breaking ABI updates.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-giri-violet/10 border border-giri-violet/20 flex items-center justify-center text-giri-violet mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-giri-text mb-2">Cohesive Visual Harmony</h3>
              <p className="text-sm text-giri-muted leading-relaxed">
                From the moment your BIOS relinquishes control to Plymouth, through the GRUB bootloader, to the final Giri Space desktop session, every font, border, and color token belongs to a unified system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.4 Desktop Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DesktopShowcase />
      </div>

      {/* 4.4B One OS. Three Worlds Section */}
      <section className="py-24 border-t border-giri-border relative bg-giri-surface/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase font-mono">
              Giri OS Ecosystem
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-3">
              ONE OS. THREE WORLDS.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-giri-muted leading-relaxed">
              Discover three original Giri products designed to bring your applications together.
            </p>
          </div>

          {/* Interactive Ecosystem Visualization */}
          <div className="mb-16">
            <EcosystemHeroVisual navigate={navigate} />
          </div>

          {/* Three Major Interactive Product Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Giri Bridge */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between border-t-4 border-t-blue-500">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">EXE</span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">MSI</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-giri-text mb-1">{ECOSYSTEMS.windows.name}</h3>
                <p className="text-xs text-giri-muted leading-relaxed mb-6">
                  Bring supported desktop applications into your Giri OS experience.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-giri-border">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-giri-muted block mb-2">
                    Product Capabilities:
                  </span>
                  {ECOSYSTEMS.windows.capabilities.slice(0, 5).map((cap) => (
                    <div key={cap.id} className="flex items-center justify-between text-xs py-1">
                      <span className="text-giri-text font-medium">{cap.name}</span>
                      <StatusBadge status={cap.status} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-giri-border">
                <button
                  onClick={() => navigate('/products/giri-bridge')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold transition-colors"
                >
                  <span>Explore Giri Bridge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Giri Mobile */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between border-t-4 border-t-emerald-500">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">APK</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-giri-text mb-1">{ECOSYSTEMS.android.name}</h3>
                <p className="text-xs text-giri-muted leading-relaxed mb-6">
                  Extend your desktop experience with supported mobile applications.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-giri-border">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-giri-muted block mb-2">
                    Product Capabilities:
                  </span>
                  {ECOSYSTEMS.android.capabilities.slice(0, 5).map((cap) => (
                    <div key={cap.id} className="flex items-center justify-between text-xs py-1">
                      <span className="text-giri-text font-medium">{cap.name}</span>
                      <StatusBadge status={cap.status} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-giri-border">
                <button
                  onClick={() => navigate('/products/giri-mobile')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold transition-colors"
                >
                  <span>Explore Giri Mobile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Giri Store */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between border-t-4 border-t-violet-500">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                    <Package className="w-6 h-6" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">DEB</span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">Flatpak</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-giri-text mb-1">{ECOSYSTEMS.linux.name}</h3>
                <p className="text-xs text-giri-muted leading-relaxed mb-6">
                  Discover, install and manage applications through one unified marketplace.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-giri-border">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-giri-muted block mb-2">
                    Product Capabilities:
                  </span>
                  {ECOSYSTEMS.linux.capabilities.slice(0, 5).map((cap) => (
                    <div key={cap.id} className="flex items-center justify-between text-xs py-1">
                      <span className="text-giri-text font-medium">{cap.name}</span>
                      <StatusBadge status={cap.status} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-giri-border">
                <button
                  onClick={() => navigate('/products/giri-store')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold transition-colors"
                >
                  <span>Explore Giri Store</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Deep Dive Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-violet-500/10 border border-giri-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-giri-text">
                One OS. Three Worlds. Unified Desktop Architecture.
              </h4>
              <p className="text-xs text-giri-muted mt-0.5">
                Explore how Giri Bridge, Giri Mobile, and Giri Store bring your applications together without vendor lock-in.
              </p>
            </div>
            <button
              onClick={() => navigate('/features/application-ecosystem')}
              className="aureon-button text-xs py-2.5 px-5 flex-shrink-0"
            >
              <span>View Ecosystem Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4.5 Features Overview Grid */}
      <section className="py-24 border-t border-giri-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase">
                Core Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2">
                Engineered Components
              </h2>
            </div>
            <button
              onClick={() => navigate('/features')}
              className="mt-4 md:mt-0 flex items-center gap-1.5 text-xs font-semibold text-giri-blue dark:text-cyan-400 hover:text-giri-text transition-colors"
            >
              <span>Explore All 13 Components</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GIRI_FEATURES.slice(0, 6).map((feat) => (
              <div key={feat.id} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-giri-muted font-medium">{feat.category}</span>
                    <StatusBadge status={feat.status} />
                  </div>
                  <h3 className="text-lg font-bold text-giri-text mb-1">{feat.name}</h3>
                  <p className="text-xs font-medium text-giri-blue dark:text-cyan-400/90 mb-3">{feat.tagline}</p>
                  <p className="text-xs text-giri-muted leading-relaxed mb-4">{feat.description}</p>
                </div>
                <ul className="space-y-1.5 pt-4 border-t border-giri-border text-xs text-giri-muted">
                  {feat.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-giri-blue dark:bg-cyan-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.6 Editions Overview */}
      <section className="py-20 border-t border-giri-border relative bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase">
              Distribution Profiles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2">
              Editions for Every Workflow
            </h2>
            <p className="mt-3 text-sm text-giri-muted">
              Choose the exact Giri OS profile tailored for your hardware tier and operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {GIRI_EDITIONS.map((ed) => (
              <div key={ed.id} className="glass-card p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-giri-blue dark:text-cyan-400 uppercase tracking-wider">{ed.badge}</span>
                    <span className="text-xs font-mono text-giri-muted">{ed.version}</span>
                  </div>
                  <h3 className="text-xl font-bold text-giri-text mb-2">{ed.name}</h3>
                  <p className="text-xs text-giri-muted leading-relaxed mb-6">{ed.description}</p>

                  <div className="space-y-2 text-xs py-4 border-y border-giri-border">
                    <div className="flex justify-between">
                      <span className="text-giri-muted">Architecture:</span>
                      <span className="font-mono text-giri-text">{ed.architecture}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-giri-muted">Base:</span>
                      <span className="text-giri-text">{ed.baseDistribution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-giri-muted">Min RAM:</span>
                      <span className="font-mono text-giri-blue dark:text-cyan-400 font-semibold">{ed.minimumRequirements.ram}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => navigate('/editions')}
                    className="w-full umbra-button text-xs py-2.5"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.7 Technical Foundation Section */}
      <section className="py-20 border-t border-giri-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase">
                  Open Source Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-giri-text mt-2">
                  Debian Upstream Foundation & Independent Identity
                </h3>
                <p className="mt-4 text-sm text-giri-muted leading-relaxed">
                  Giri OS uses Debian 12 (Bookworm) as its verified root foundation, providing proven kernel engineering, GNU core utilities, and cryptographic package signatures. Over this foundation, Giri OS implements its original desktop shell (Giri Space), bootloader theming, custom installer profiles, and bespoke design language.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-3 py-1 rounded-full text-xs bg-giri-surface2 text-giri-text border border-giri-border">
                    Linux 6.1 LTS Kernel
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-giri-surface2 text-giri-text border border-giri-border">
                    Debian Live-Build Toolchain
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-giri-surface2 text-giri-text border border-giri-border">
                    Openbox + Compositor
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-giri-surface2 text-giri-text border border-giri-border">
                    Calamares OEM Installer
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-center">
                <div className="p-6 rounded-2xl bg-giri-surface border border-giri-border shadow-xl text-center w-full">
                  <Cpu className="w-10 h-10 text-giri-blue dark:text-cyan-400 mx-auto mb-3" />
                  <div className="text-sm font-bold text-giri-text">Full Hardware Sovereignty</div>
                  <div className="text-xs text-giri-muted mt-1">
                    No vendor lock-in, no telemetry callbacks, full root authority in your hands.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.8 Closing CTA */}
      <section className="py-24 border-t border-giri-border relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase">
            Get Involved
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-3">
            Your Next Desktop Starts Here
          </h2>
          <p className="mt-4 text-base text-giri-muted max-w-xl mx-auto">
            Experience the future of focused computing. Explore the project roadmap, inspect the source code, or prepare your virtual test bench.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate('/downloads')}
              className="aureon-button text-sm py-3 px-8"
            >
              <span>Download Centre</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/developers')}
              className="umbra-button text-sm py-3 px-8"
            >
              <Terminal className="w-4 h-4 text-giri-blue dark:text-cyan-400" />
              <span>Developer Portal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

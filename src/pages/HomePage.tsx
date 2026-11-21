import React, { useState } from 'react';
import { ThreeHero } from '../components/ThreeHero';
import { DesktopShowcase } from '../components/DesktopShowcase';
import { EcosystemHeroVisual } from '../components/EcosystemHeroVisual';
import { StatusBadge } from '../components/StatusBadge';
import { GIRI_EDITIONS } from '../data/editions';
import { 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Gauge, 
  ExternalLink,
  Monitor, 
  Smartphone, 
  Package, 
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [activeEcosystemTab, setActiveEcosystemTab] = useState<'bridge' | 'mobile' | 'store'>('bridge');

  return (
    <div className="relative">
      {/* 5.1 Hero Section — Meet Giri OS */}
      <section className="relative pt-32 pb-24 overflow-hidden" aria-label="Giri OS Overview">
        {/* Ambient Subtle Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] ambient-glow-blue blur-3xl pointer-events-none opacity-40 dark:opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Status Pill with Official Emblem Mark */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-giri-surface border border-giri-border backdrop-blur-md mb-6 shadow-sm">
                <img 
                  src="/logo/giri-os-icon.png" 
                  alt="Giri OS Emblem" 
                  decoding="async"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-xs font-semibold text-giri-muted">
                  Giri OS Genesis 0.1 <span className="text-giri-blue">&bull;</span> Active Stabilization
                </span>
              </div>

              {/* Main Heading: Meet Giri OS. */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-giri-text leading-[1.06]">
                Meet <span className="text-gradient">Giri OS.</span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-6 text-base sm:text-xl text-giri-muted max-w-xl leading-relaxed">
                An independent computing experience built around simplicity, flexibility and possibility.
              </p>

              {/* Primary & Secondary Hero CTAs */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <button
                  onClick={() => navigate('/features')}
                  className="aureon-button text-sm py-3 px-7"
                >
                  <span>Explore Giri OS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/features/application-ecosystem')}
                  className="umbra-button text-sm py-3 px-7"
                >
                  <span>Explore the Ecosystem</span>
                </button>

                <a
                  href="https://github.com/abhinavgiri45/giri-os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold text-giri-muted hover:text-giri-text transition-colors"
                >
                  <Terminal className="w-4 h-4 text-giri-blue dark:text-cyan-400" />
                  <span>View Source</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-giri-border w-full max-w-lg">
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

            {/* Right Hero: ThreeUI-Inspired 3D Interactive Emblem Stage */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <ThreeHero />
            </div>
          </div>
        </div>
      </section>

      {/* 5.2 Desktop Showcase Section */}
      <DesktopShowcase />

      {/* 5.2a Meet the Giri Desktop Section */}
      <section className="py-24 bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text">Meet the Giri Desktop</h2>
          <p className="mt-6 text-base sm:text-lg text-giri-muted max-w-2xl mx-auto">
            A new desktop experience built around the vision of Giri OS. From its streamlined interface and floating Dock to its integrated applications and system controls, Giri OS brings together the essentials of a desktop in one cohesive environment.
          </p>
          <p className="mt-2 text-sm text-giri-muted">One system. Infinite possibilities.</p>
          <div className="mt-8 flex justify-center">
            <img
              src="/images/giri-desktop.jpg"
              alt="Giri OS desktop — development build"
              className="rounded-lg shadow-lg max-w-full w-auto object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-xs text-giri-muted">Giri OS desktop — development build</p>
        </div>
      </section>

      {/* 5.3 Editorial Features Section — ThreeUI Asymmetric Pacing */}
      <section className="py-24 border-t border-giri-border relative bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-widest text-giri-blue uppercase">
              System Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-3">
              Engineered for Focused Computing
            </h2>
            <p className="mt-4 text-sm sm:text-base text-giri-muted leading-relaxed">
              Operating systems shouldn&apos;t wrestle with your hardware or impose artificial barriers. Giri OS is designed from first principles: an uncluttered shell, predictable responsiveness, and authentic respect for user autonomy.
            </p>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Feature 1: Large Asymmetric Hero Block */}
            <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between border-l-4 border-l-giri-blue">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-giri-blue/10 border border-giri-blue/20 text-giri-blue flex items-center justify-center shadow-sm">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-giri-blue/10 text-giri-blue font-bold border border-giri-blue/20">
                    &lt;350 MB RAM
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-giri-text mb-3">
                  Giri Space Desktop Shell
                </h3>
                <p className="text-sm text-giri-muted leading-relaxed mb-6">
                  By eliminating heavy monolithic desktop frameworks, Giri Space achieves exceptional boot speeds and preserves 90%+ of hardware memory for developer tools, media editing, and computational workflows.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-giri-border text-xs text-giri-muted">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-giri-blue flex-shrink-0 mt-0.5" />
                    <span>Openbox window compositor with custom drop shadows and snap zones.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-giri-blue flex-shrink-0 mt-0.5" />
                    <span>Plaintext XML configuration for complete user customizability.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => navigate('/features')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-giri-blue hover:underline"
                >
                  <span>Explore Desktop Components</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Feature 2: Zero Telemetry Block */}
            <div className="lg:col-span-5 glass-card p-8 rounded-3xl flex flex-col justify-between border-l-4 border-l-emerald-500">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-sm mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-giri-text mb-2">
                  Zero Telemetry &amp; Absolute Privacy
                </h3>
                <p className="text-xs sm:text-sm text-giri-muted leading-relaxed mb-4">
                  No tracking scripts, no background analytics beacons, and no mandatory cloud account logins. What runs on your machine stays on your machine.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-900/90 text-emerald-400 font-mono text-[11px] space-y-1">
                  <div>$ journalctl -u giri-telemetry</div>
                  <div className="text-slate-400">Unit giri-telemetry.service could not be found.</div>
                </div>
              </div>
            </div>

            {/* Feature 3: Debian 12 Stability */}
            <div className="lg:col-span-5 glass-card p-8 rounded-3xl flex flex-col justify-between border-l-4 border-l-purple-500">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-sm mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-giri-text mb-2">
                  Rock-Solid Debian 12 Core
                </h3>
                <p className="text-xs sm:text-sm text-giri-muted leading-relaxed">
                  Powered by the battle-tested Debian 12 Bookworm repository and Linux 6.1 LTS kernel. Access over 64,000 cryptographically signed, upstream packages without breakage.
                </p>
              </div>
            </div>

            {/* Feature 4: Display & Workspaces */}
            <div className="lg:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between border-l-4 border-l-cyan-500">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shadow-sm">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                    4K / HiDPI Ready
                  </span>
                </div>
                <h3 className="text-xl font-bold text-giri-text mb-2">
                  Adaptive Display &amp; Multi-Monitor Workspaces
                </h3>
                <p className="text-xs sm:text-sm text-giri-muted leading-relaxed">
                  Automatic resolution negotiation with fractional scaling support across laptops, ultrawide monitors, and 4K displays. Smooth multi-monitor workspace switching with dedicated per-screen panel bars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 Three-Product Ecosystem: ONE OS. THREE WORLDS. */}
      <section className="py-24 border-t border-giri-border relative overflow-hidden" aria-label="Giri OS Three-Product Ecosystem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-giri-blue uppercase">
              Unified Platform
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-3">
              ONE OS. THREE WORLDS.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-giri-muted leading-relaxed">
              Three original application platforms. One unified Giri OS experience.
            </p>

            {/* Interactive Switcher Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveEcosystemTab('bridge')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeEcosystemTab === 'bridge'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-[1.03]'
                    : 'bg-giri-surface border border-giri-border text-giri-muted hover:text-giri-text'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Giri Bridge (Desktop)</span>
              </button>

              <button
                onClick={() => setActiveEcosystemTab('mobile')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeEcosystemTab === 'mobile'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 scale-[1.03]'
                    : 'bg-giri-surface border border-giri-border text-giri-muted hover:text-giri-text'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Giri Mobile (Android)</span>
              </button>

              <button
                onClick={() => setActiveEcosystemTab('store')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeEcosystemTab === 'store'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25 scale-[1.03]'
                    : 'bg-giri-surface border border-giri-border text-giri-muted hover:text-giri-text'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>Giri Store (Marketplace)</span>
              </button>
            </div>
          </div>

          {/* Interactive Ecosystem Visual Stage */}
          <div className="mb-16">
            <EcosystemHeroVisual 
              activeEcosystemId={
                activeEcosystemTab === 'bridge' ? 'windows' : activeEcosystemTab === 'mobile' ? 'android' : 'linux'
              }
              navigate={navigate}
            />
          </div>

          {/* Three Connected Product Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product 1: Giri Bridge */}
            <div className={`glass-card p-8 rounded-3xl flex flex-col justify-between border-t-4 transition-all duration-300 ${
              activeEcosystemTab === 'bridge' 
                ? 'border-t-blue-600 ring-2 ring-blue-500/20 shadow-xl' 
                : 'border-t-blue-500/40'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">EXE</span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">MSI</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-giri-text mb-2">Giri Bridge</h3>
                <p className="text-xs text-giri-muted leading-relaxed mb-6">
                  Bring supported desktop applications into your Giri OS experience.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-giri-border">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-giri-muted block mb-1">
                    Subsystem Architecture:
                  </span>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">EXE/MSI Execution</span>
                    <StatusBadge status="Verified" />
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">Wine 9.0+ Staging</span>
                    <StatusBadge status="Verified" />
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">DXVK Vulkan Graphics</span>
                    <StatusBadge status="Verified" />
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">Isolated Prefixes</span>
                    <StatusBadge status="Verified" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-giri-border">
                <button
                  onClick={() => navigate('/products/giri-bridge')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-md shadow-blue-600/20"
                >
                  <span>Explore Giri Bridge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Product 2: Giri Mobile */}
            <div className={`glass-card p-8 rounded-3xl flex flex-col justify-between border-t-4 transition-all duration-300 ${
              activeEcosystemTab === 'mobile' 
                ? 'border-t-emerald-600 ring-2 ring-emerald-500/20 shadow-xl' 
                : 'border-t-emerald-500/40'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">APK</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-giri-text mb-2">Giri Mobile</h3>
                <p className="text-xs text-giri-muted leading-relaxed mb-6">
                  Extend your desktop experience with supported mobile applications.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-giri-border">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-giri-muted block mb-1">
                    Subsystem Architecture:
                  </span>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">APK Package Runtime</span>
                    <StatusBadge status="Verified" />
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">Waydroid AOSP Container</span>
                    <StatusBadge status="Verified" />
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">DRI3 Mesa GPU Passthrough</span>
                    <StatusBadge status="Verified" />
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">Giri Smart Input Mapping</span>
                    <StatusBadge status="In Development" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-giri-border">
                <button
                  onClick={() => navigate('/products/giri-mobile')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-md shadow-emerald-600/20"
                >
                  <span>Explore Giri Mobile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Product 3: Giri Store */}
            <div className={`glass-card p-8 rounded-3xl flex flex-col justify-between border-t-4 transition-all duration-300 ${
              activeEcosystemTab === 'store' 
                ? 'border-t-purple-600 ring-2 ring-purple-500/20 shadow-xl' 
                : 'border-t-purple-500/40'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 flex items-center justify-center">
                    <Package className="w-6 h-6" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20">DEB</span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20">Flatpak</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-giri-text mb-2">Giri Store</h3>
                <p className="text-xs text-giri-muted leading-relaxed mb-6">
                  Discover, install and manage applications through one unified marketplace.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-giri-border">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-giri-muted block mb-1">
                    Subsystem Architecture:
                  </span>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">Dual-Source Catalog</span>
                    <StatusBadge status="Verified" />
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">APT + Flatpak Transparency</span>
                    <StatusBadge status="Verified" />
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">Zero Telemetry</span>
                    <StatusBadge status="Verified" />
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-giri-text font-medium">Automated Dependency Trees</span>
                    <StatusBadge status="Verified" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-giri-border">
                <button
                  onClick={() => navigate('/products/giri-store')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors shadow-md shadow-purple-600/20"
                >
                  <span>Explore Giri Store</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 Editions Overview */}
      <section className="py-20 border-t border-giri-border relative bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-giri-blue uppercase">
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
              <div key={ed.id} className="glass-card p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-giri-blue uppercase tracking-wider">{ed.badge}</span>
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
                      <span className="font-mono text-giri-blue font-semibold">{ed.minimumRequirements.ram}</span>
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

      {/* 5.6 Closing CTA */}
      <section className="py-24 border-t border-giri-border relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest text-giri-blue uppercase">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-3">
            Your Next Desktop Starts Here
          </h2>
          <p className="mt-4 text-base text-giri-muted max-w-xl mx-auto leading-relaxed">
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
              <Terminal className="w-4 h-4 text-giri-blue" />
              <span>Developer Portal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

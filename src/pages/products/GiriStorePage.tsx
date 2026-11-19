import React, { useState } from 'react';
import { ECOSYSTEMS, PRODUCT_WORKFLOWS, WorkflowStep } from '../../data/ecosystems';
import { StatusBadge } from '../../components/StatusBadge';
import { 
  Package, 
  Terminal, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  FileCode, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Info, 
  ChevronDown, 
  ArrowRight, 
  AlertTriangle,
  HardDrive,
  Search
} from 'lucide-react';

interface GiriStorePageProps {
  navigate?: (path: string) => void;
}

export const GiriStorePage: React.FC<GiriStorePageProps> = ({ navigate }) => {
  const profile = ECOSYSTEMS.linux;
  const workflow = PRODUCT_WORKFLOWS.find(w => w.productId === 'giri-store')!;
  
  const [simulatedStep, setSimulatedStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('blender');
  const [selectedSource, setSelectedSource] = useState<'all' | 'deb' | 'flatpak'>('all');

  const handleRunSimulation = () => {
    setIsRunning(true);
    setSimulatedStep(1);

    const stepInterval = setInterval(() => {
      setSimulatedStep(prev => {
        if (prev >= workflow.steps.length) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return workflow.steps.length;
        }
        return prev + 1;
      });
    }, 1100);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSimulatedStep(0);
  };

  const renderIcon = (type: string, isCurrent: boolean, isCompleted: boolean) => {
    const baseClass = "w-5 h-5";
    if (isCompleted) return <CheckCircle2 className={`${baseClass} text-emerald-500`} />;
    switch (type) {
      case 'detect':
        return <FileCode className={`${baseClass} ${isCurrent ? 'text-violet-500' : 'text-giri-muted'}`} />;
      case 'inspect':
        return <ShieldCheck className={`${baseClass} ${isCurrent ? 'text-indigo-500' : 'text-giri-muted'}`} />;
      case 'sandbox':
        return <Cpu className={`${baseClass} ${isCurrent ? 'text-violet-500' : 'text-giri-muted'}`} />;
      case 'integrate':
        return <Sparkles className={`${baseClass} ${isCurrent ? 'text-amber-500' : 'text-giri-muted'}`} />;
      default:
        return <Sparkles className={baseClass} />;
    }
  };

  const storeFaqs = [
    {
      q: 'What is Giri Store?',
      a: 'Giri Store is the unified application marketplace of Giri OS, designed to help users discover, install and manage applications through one interface. It bridges native Debian package repositories and Flathub universal Flatpak containers.'
    },
    {
      q: 'Do APT and Flatpak combine into one package system?',
      a: 'No. Debian APT and Flatpak remain separate, independent underlying package-management systems to guarantee rock-solid OS stability. Giri Store provides a unified discovery interface while transparently indicating the origin format of each package.'
    },
    {
      q: 'Does Giri Store contain telemetry or advertisements?',
      a: 'Zero. Giri Store is 100% free and open-source software. It contains no sponsored placements, advertising trackers, user telemetry beacons, or mandatory account logins.'
    },
    {
      q: 'Can I install applications while offline?',
      a: 'Yes. Giri Store provides full offline visibility of all locally installed software, and allows direct installation of offline .deb packages without an active internet connection.'
    }
  ];

  return (
    <div className="relative py-24 sm:py-32">
      {/* 1. Hero Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-md mb-6 shadow-sm">
          <Package className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 font-mono">
            Official Giri Product &bull; Giri Store
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-giri-text leading-[1.08] max-w-4xl mx-auto">
          GIRI STORE
        </h1>
        <p className="mt-3 text-xl sm:text-2xl font-bold text-gradient max-w-2xl mx-auto">
          {profile.tagline}
        </p>

        <p className="mt-6 text-base sm:text-lg text-giri-muted max-w-2xl mx-auto leading-relaxed">
          {profile.description}
        </p>

        {/* Format Badges */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {profile.formats.map((fmt) => (
            <span 
              key={fmt.format}
              className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg border ${fmt.color}`}
            >
              .{fmt.format.toLowerCase()} &bull; {fmt.label}
            </span>
          ))}
        </div>
      </section>

      {/* 2. Package Ecosystem Transparency: APT vs Flatpak */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-widest text-violet-600 dark:text-violet-400 uppercase font-mono">
              Transparent Multi-Source Packaging
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2 mb-4">
              Two Battle-Tested Technologies. One Seamless Interface.
            </h2>
            <p className="text-sm text-giri-muted leading-relaxed mb-6">
              In Giri OS, Debian APT and Flatpak remain separate underlying package-management systems. APT provides the stable, audited operating-system foundation, while Flatpak provides sandboxed, bleeding-edge desktop applications.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-giri-text">Debian APT (Native DEB)</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">60,000+ Packages</span>
                </div>
                <p className="text-xs text-giri-muted leading-relaxed">
                  Cryptographically signed binaries compiled specifically for Debian 12 Bookworm. Rock-solid stability, zero runtime bloat, and unified system library sharing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-giri-text">Flathub Flatpak (Sandboxed)</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">Universal Runtimes</span>
                </div>
                <p className="text-xs text-giri-muted leading-relaxed">
                  Self-contained application runtimes isolated with Bubblewrap namespaces and XDG Desktop Portals. Receive upstream releases of creative and productivity apps safely.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                <h4 className="text-sm font-bold text-giri-text mb-1">Package-Source Transparency</h4>
                <p className="text-xs text-giri-muted leading-relaxed">
                  Giri Store never obscures where a binary originates. Inspect package maintainers, build hashes, permissions, and licenses before installing.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Store Mockup */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-300">
            {/* Search Input Bar Mockup */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800 mb-6">
              <Search className="w-4 h-4 text-violet-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 60,000+ packages..."
                className="bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none flex-grow"
              />
              <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-400">Ctrl + K</span>
            </div>

            {/* Source Filter Switcher */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedSource('all')}
                className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                  selectedSource === 'all' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                All Sources
              </button>
              <button
                onClick={() => setSelectedSource('deb')}
                className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                  selectedSource === 'deb' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                Debian APT (.deb)
              </button>
              <button
                onClick={() => setSelectedSource('flatpak')}
                className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                  selectedSource === 'flatpak' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                Flathub (Flatpak)
              </button>
            </div>

            {/* Package Search Results Preview */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-white">Blender</h5>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Flatpak 4.2</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">3D creation suite: modeling, animation, rendering, and compositing</p>
                </div>
                <button className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold transition-colors">
                  Install
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-white">GIMP</h5>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Debian 12 &bull; DEB</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">GNU Image Manipulation Program for photo retouching and graphic design</p>
                </div>
                <button className="px-3 py-1.5 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 text-xs font-bold">
                  Installed
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-white">VLC Media Player</h5>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Debian 12 &bull; DEB</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Universal multimedia player and streaming media server</p>
                </div>
                <button className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold transition-colors">
                  Install
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Installation Workflow Demonstration */}
      <section className="py-20 border-t border-giri-border bg-giri-surface/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-giri-border mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-semibold mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Interactive Pipeline Demonstration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-giri-text tracking-tight">
                Giri Store Installation Workflow
              </h2>
              <p className="text-xs sm:text-sm text-giri-muted mt-1">
                Visual demonstration: Search application &rarr; Choose package source &rarr; Install &rarr; Launch.
              </p>
            </div>

            {/* Honest Disclosure Tag */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs max-w-xs">
              <Info className="w-4 h-4 flex-shrink-0" />
              <span>
                <strong>Demonstration Only:</strong> Illustrative interface simulation of the Giri Store package manager.
              </span>
            </div>
          </div>

          {/* Workflow Simulation Controls */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning || simulatedStep === workflow.steps.length}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isRunning || simulatedStep === workflow.steps.length
                  ? 'bg-giri-surface text-giri-muted cursor-not-allowed border border-giri-border'
                  : 'bg-violet-600 text-white hover:bg-violet-700 shadow-md'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Executing Steps...' : simulatedStep === workflow.steps.length ? 'Workflow Completed' : 'Simulate Workflow'}</span>
            </button>

            {simulatedStep > 0 && (
              <button
                onClick={handleReset}
                className="p-2.5 rounded-xl border border-giri-border hover:bg-giri-surface text-giri-muted transition-colors"
                title="Reset Simulation"
                aria-label="Reset Simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Progress Bar */}
          <div className="relative w-full mb-8">
            <div className="h-2 w-full bg-giri-surface rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 via-purple-400 to-indigo-600 transition-all duration-700 ease-out"
                style={{ width: `${(simulatedStep / workflow.steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* 4-Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.steps.map((step: WorkflowStep) => {
              const isCompleted = simulatedStep > step.stepNumber || simulatedStep === workflow.steps.length;
              const isCurrent = simulatedStep === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white dark:bg-slate-900 border-violet-500 ring-2 ring-violet-500/20 shadow-lg scale-[1.02]'
                      : isCompleted
                      ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-500/40'
                      : 'bg-giri-surface/30 border-giri-border'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : isCurrent
                          ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
                          : 'bg-giri-surface text-giri-muted'
                      }`}>
                        STEP 0{step.stepNumber}
                      </span>
                      <div className="w-6 h-6 rounded-lg bg-giri-surface border border-giri-border flex items-center justify-center">
                        {renderIcon(step.iconType, isCurrent, isCompleted)}
                      </div>
                    </div>

                    <div className="text-[11px] font-mono font-semibold text-violet-600 dark:text-violet-400 mb-1">
                      {step.phase}
                    </div>
                    <h4 className="text-xs font-bold text-giri-text mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-giri-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-giri-border/60">
                    <code className="block text-[10px] font-mono text-giri-text bg-giri-surface p-1.5 rounded overflow-x-auto border border-giri-border/50">
                      {step.subsystemAction}
                    </code>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Complete Capability Checklist */}
      <section className="py-20 border-t border-giri-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-violet-600 dark:text-violet-400 uppercase font-mono">
              Product Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2">
              Engineered for Open-Source Security
            </h2>
            <p className="mt-3 text-sm text-giri-muted">
              Every capability is developed and tested against real-world compatibility benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.capabilities.map((cap) => (
              <div key={cap.id} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-giri-muted font-medium">Giri Store</span>
                    <StatusBadge status={cap.status} />
                  </div>
                  <h3 className="text-base font-bold text-giri-text mb-1.5">{cap.name}</h3>
                  <p className="text-xs text-giri-muted leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. System Requirements & Known Limitations */}
      <section className="py-20 border-t border-giri-border bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* System Requirements */}
            <div className="lg:col-span-6 glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-giri-border">
                <HardDrive className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <h3 className="text-lg font-bold text-giri-text">System Requirements</h3>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="block text-giri-muted font-semibold uppercase font-mono text-[10px]">Minimum Hardware</span>
                  <p className="text-giri-text mt-1">{profile.systemRequirements.minimum}</p>
                </div>
                <div>
                  <span className="block text-giri-muted font-semibold uppercase font-mono text-[10px]">Recommended Hardware</span>
                  <p className="text-giri-text mt-1 font-semibold text-violet-600 dark:text-violet-400">{profile.systemRequirements.recommended}</p>
                </div>
                <div className="p-3 rounded-xl bg-giri-surface border border-giri-border text-giri-muted text-[11px] leading-relaxed">
                  <span className="font-bold text-giri-text block mb-1">Architecture Notes:</span>
                  {profile.systemRequirements.notes}
                </div>
              </div>
            </div>

            {/* Known Limitations */}
            <div className="lg:col-span-6 glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-giri-border">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-giri-text">Known Limitations</h3>
              </div>

              <ul className="space-y-3 text-xs text-giri-muted">
                {profile.knownLimitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-giri-surface border border-giri-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Product FAQ */}
      <section className="py-20 border-t border-giri-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-violet-600 dark:text-violet-400 uppercase font-mono">
              Product Questions
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-giri-text mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {storeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-giri-border bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-giri-text">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-giri-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-giri-muted leading-relaxed border-t border-giri-border/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-20 border-t border-giri-border text-center bg-giri-surface/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-giri-text tracking-tight">
            Explore the Three Worlds of Giri OS
          </h2>
          <p className="mt-4 text-sm text-giri-muted leading-relaxed">
            Discover how Giri Store unites with Giri Bridge and Giri Mobile to deliver a seamless computing experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {navigate && (
              <>
                <button
                  onClick={() => navigate('/products/giri-bridge')}
                  className="aureon-button text-xs py-2.5 px-5"
                >
                  <span>Explore Giri Bridge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate('/products/giri-mobile')}
                  className="umbra-button text-xs py-2.5 px-5"
                >
                  <span>Explore Giri Mobile</span>
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

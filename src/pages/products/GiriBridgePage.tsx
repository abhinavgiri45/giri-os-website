import React, { useState } from 'react';
import { ECOSYSTEMS, PRODUCT_WORKFLOWS, WorkflowStep } from '../../data/ecosystems';
import { StatusBadge } from '../../components/StatusBadge';
import { 
  Monitor, 
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
  Maximize2
} from 'lucide-react';

interface GiriBridgePageProps {
  navigate?: (path: string) => void;
}

export const GiriBridgePage: React.FC<GiriBridgePageProps> = ({ navigate }) => {
  const profile = ECOSYSTEMS.windows;
  const workflow = PRODUCT_WORKFLOWS.find(w => w.productId === 'giri-bridge')!;
  
  const [simulatedStep, setSimulatedStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
        return <FileCode className={`${baseClass} ${isCurrent ? 'text-blue-500' : 'text-giri-muted'}`} />;
      case 'inspect':
        return <ShieldCheck className={`${baseClass} ${isCurrent ? 'text-cyan-500' : 'text-giri-muted'}`} />;
      case 'sandbox':
        return <Cpu className={`${baseClass} ${isCurrent ? 'text-blue-500' : 'text-giri-muted'}`} />;
      case 'integrate':
        return <Sparkles className={`${baseClass} ${isCurrent ? 'text-amber-500' : 'text-giri-muted'}`} />;
      default:
        return <Sparkles className={baseClass} />;
    }
  };

  const bridgeFaqs = [
    {
      q: 'What is Giri Bridge and how does it function?',
      a: 'Giri Bridge is the application compatibility platform of Giri OS, designed to bring supported desktop applications into one integrated computing experience. It translates Win32/Win64 system calls and Direct3D graphics commands directly into POSIX and Vulkan instructions on the fly without a virtual machine.'
    },
    {
      q: 'Does Giri Bridge require a Windows license?',
      a: 'No. Giri Bridge relies entirely on open-source clean-room reimplementations of Windows APIs (Wine 9.0+ Staging, DXVK, and VKD3D). It contains zero proprietary Microsoft binaries and does not require a Windows license or installation media.'
    },
    {
      q: 'How does prefix isolation prevent software conflicts?',
      a: 'Each installed application is assigned its own isolated directory (~/.local/share/giri-bridge/prefixes/<app>). This virtual C: drive contains an independent registry and DLL override configuration, ensuring that installing or updating one program never breaks another.'
    },
    {
      q: 'Will every desktop application work seamlessly?',
      a: 'No. Applications requiring proprietary kernel-level anti-cheat drivers (e.g., Vanguard, kernel-mode Easy Anti-Cheat) or specialized hardware dongle drivers are not supported due to security and architectural boundaries. Giri Bridge provides transparent compatibility profiling.'
    }
  ];

  return (
    <div className="relative py-24 sm:py-32">
      {/* 1. Hero Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6 shadow-sm">
          <Monitor className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono">
            Official Giri Product &bull; Giri Bridge
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-giri-text leading-[1.08] max-w-4xl mx-auto">
          GIRI BRIDGE
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
              className={`text-xs font-mono font-bold px-3 py-1.5 rounded-md border ${fmt.color}`}
            >
              .{fmt.format.toLowerCase()} &bull; {fmt.label}
            </span>
          ))}
        </div>
      </section>

      {/* 2. Visual Interface Preview Mockup */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
          {/* Mockup Titlebar */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="font-mono text-slate-300 font-medium">Giri Bridge Manager &bull; Prefix Inspector</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Wine 9.0 Staging</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">DXVK 2.3 Vulkan</span>
              <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          {/* Mockup Window Body */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left: Prefix Navigation */}
              <div className="rounded-md bg-slate-900/80 border border-slate-800 p-4 space-y-2">
                <span className="text-xs font-mono  tracking-widest text-slate-400 block mb-2">Active Prefixes</span>
                <div className="btn-primary">
                  <span>Productivity_Suite_64</span>
                  <span className="text-xs font-mono bg-blue-500/30 px-1.5 py-0.5 rounded">64-bit</span>
                </div>
                <div className="p-2.5 rounded-md bg-slate-800/50 border border-slate-800 text-slate-400 text-xs flex items-center justify-between">
                  <span>Legacy_Audio_Tool</span>
                  <span className="text-xs font-mono bg-slate-700/50 px-1.5 py-0.5 rounded">32-bit</span>
                </div>
                <div className="p-2.5 rounded-md bg-slate-800/50 border border-slate-800 text-slate-400 text-xs flex items-center justify-between">
                  <span>Creative_Studio_Pro</span>
                  <span className="text-xs font-mono bg-slate-700/50 px-1.5 py-0.5 rounded">64-bit</span>
                </div>
              </div>

              {/* Right: Environment Configuration */}
              <div className="md:col-span-2 rounded-md bg-slate-900/80 border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-white">Environment Details: Productivity_Suite_64</h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">Path: ~/.local/share/giri-bridge/prefixes/productivity_suite_64</p>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Running</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-md bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 text-xs  font-mono block">Graphics Translation</span>
                    <span className="text-blue-400 font-bold mt-0.5 block">DXVK 2.3 &bull; D3D11 to Vulkan</span>
                  </div>
                  <div className="p-3 rounded-md bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 text-xs  font-mono block">Audio Sink</span>
                    <span className="text-cyan-400 font-bold mt-0.5 block">PipeWire Low-Latency Stream</span>
                  </div>
                </div>

                <div className="p-3 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
                  <div className="text-slate-400">[INFO] Windows Version: Windows 10 (10.0.19045)</div>
                  <div className="text-slate-400">[INFO] Direct3D 11 backend: Vulkan physical device initialized</div>
                  <div className="text-emerald-400">[SUCCESS] XDG Desktop Launcher generated at ~/.local/share/applications/productivity.desktop</div>
                </div>
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Interactive Pipeline Demonstration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-giri-text tracking-tight">
                Giri Bridge Installation Workflow
              </h2>
              <p className="text-xs sm:text-sm text-giri-muted mt-1">
                Visual demonstration: Select installer &rarr; Giri Bridge &rarr; Configure environment &rarr; Install &rarr; Launch.
              </p>
            </div>

            {/* Honest Disclosure Tag */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs max-w-xs">
              <Info className="w-4 h-4 flex-shrink-0" />
              <span>
                <strong>Demonstration Only:</strong> Illustrative interface simulation of the Giri Bridge installation pipeline.
              </span>
            </div>
          </div>

          {/* Workflow Simulation Controls */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning || simulatedStep === workflow.steps.length}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold transition-all ${
                isRunning || simulatedStep === workflow.steps.length
                  ? 'bg-giri-surface text-giri-muted cursor-not-allowed border border-giri-border'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Executing Steps...' : simulatedStep === workflow.steps.length ? 'Workflow Completed' : 'Simulate Workflow'}</span>
            </button>

            {simulatedStep > 0 && (
              <button
                onClick={handleReset}
                className="p-2.5 rounded-md border border-giri-border hover:bg-giri-surface text-giri-muted transition-colors"
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
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 transition-all duration-700 ease-out"
                style={{ width: `${(simulatedStep / workflow.steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* 5-Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflow.steps.map((step: WorkflowStep) => {
              const isCompleted = simulatedStep > step.stepNumber || simulatedStep === workflow.steps.length;
              const isCurrent = simulatedStep === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  className={`p-4 rounded-md border transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white dark:bg-slate-900 border-blue-500 ring-2 ring-blue-500/20 shadow-lg scale-[1.02]'
                      : isCompleted
                      ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-500/40'
                      : 'bg-giri-surface/30 border-giri-border'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : isCurrent
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : 'bg-giri-surface text-giri-muted'
                      }`}>
                        STEP 0{step.stepNumber}
                      </span>
                      <div className="w-6 h-6 rounded-md bg-giri-surface border border-giri-border flex items-center justify-center">
                        {renderIcon(step.iconType, isCurrent, isCompleted)}
                      </div>
                    </div>

                    <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      {step.phase}
                    </div>
                    <h3 className="text-xs font-bold text-giri-text mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-giri-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-giri-border/60">
                    <code className="block text-xs font-mono text-giri-text bg-giri-surface p-1.5 rounded overflow-x-auto border border-giri-border/50">
                      {step.subsystemAction}
                    </code>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Complete Feature & Capability Showcase */}
      <section className="py-20 border-t border-giri-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400  font-mono">
              Product Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2">
              Engineered for Desktop Independence
            </h2>
            <p className="mt-3 text-sm text-giri-muted">
              Every capability is developed and tested against real-world compatibility benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.capabilities.map((cap) => (
              <div key={cap.id} className="glass-card p-6 rounded-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-giri-muted font-medium">Giri Bridge</span>
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
            <div className="lg:col-span-6 glass-card p-8 rounded-md">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-giri-border">
                <HardDrive className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-giri-text">System Requirements</h3>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="block text-giri-muted font-semibold  font-mono text-xs">Minimum Hardware</span>
                  <p className="text-giri-text mt-1">{profile.systemRequirements.minimum}</p>
                </div>
                <div>
                  <span className="block text-giri-muted font-semibold  font-mono text-xs">Recommended Hardware</span>
                  <p className="text-giri-text mt-1 font-semibold text-blue-600 dark:text-blue-400">{profile.systemRequirements.recommended}</p>
                </div>
                <div className="badge-primary">
                  <span className="font-bold text-giri-text block mb-1">Hardware Acceleration Note:</span>
                  {profile.systemRequirements.notes}
                </div>
              </div>
            </div>

            {/* Known Limitations */}
            <div className="lg:col-span-6 glass-card p-8 rounded-md">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-giri-border">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-giri-text">Known Limitations</h3>
              </div>

              <ul className="space-y-3 text-xs text-giri-muted">
                {profile.knownLimitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-md bg-giri-surface border border-giri-border">
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
            <span className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400  font-mono">
              Product Questions
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-giri-text mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {bridgeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-md border border-giri-border bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* 7. Product Call to Action */}
      <section className="py-20 border-t border-giri-border text-center bg-giri-surface/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-giri-text tracking-tight">
            Explore the Three Worlds of Giri OS
          </h2>
          <p className="mt-4 text-sm text-giri-muted leading-relaxed">
            Discover how Giri Bridge unites with Giri Mobile and Giri Store to deliver a seamless computing experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {navigate && (
              <>
                <button
                  onClick={() => navigate('/products/giri-mobile')}
                  className="aureon-button text-xs py-2.5 px-5"
                >
                  <span>Explore Giri Mobile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate('/products/giri-store')}
                  className="umbra-button text-xs py-2.5 px-5"
                >
                  <span>Explore Giri Store</span>
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

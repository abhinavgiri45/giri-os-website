import React, { useState } from 'react';
import { ECOSYSTEMS, PRODUCT_WORKFLOWS, WorkflowStep } from '../../data/ecosystems';
import { StatusBadge } from '../../components/StatusBadge';
import { InputMappingShowcase } from '../../components/InputMappingShowcase';
import { 
  Smartphone, 
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
  Gamepad2
} from 'lucide-react';

interface GiriMobilePageProps {
  navigate?: (path: string) => void;
}

export const GiriMobilePage: React.FC<GiriMobilePageProps> = ({ navigate }) => {
  const profile = ECOSYSTEMS.android;
  const workflow = PRODUCT_WORKFLOWS.find(w => w.productId === 'giri-mobile')!;
  
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
        return <FileCode className={`${baseClass} ${isCurrent ? 'text-emerald-500' : 'text-giri-muted'}`} />;
      case 'inspect':
        return <ShieldCheck className={`${baseClass} ${isCurrent ? 'text-cyan-500' : 'text-giri-muted'}`} />;
      case 'sandbox':
        return <Cpu className={`${baseClass} ${isCurrent ? 'text-emerald-500' : 'text-giri-muted'}`} />;
      case 'controls':
        return <Gamepad2 className={`${baseClass} ${isCurrent ? 'text-purple-500' : 'text-giri-muted'}`} />;
      case 'integrate':
        return <Sparkles className={`${baseClass} ${isCurrent ? 'text-amber-500' : 'text-giri-muted'}`} />;
      default:
        return <Sparkles className={baseClass} />;
    }
  };

  const mobileFaqs = [
    {
      q: 'What is Giri Mobile?',
      a: 'Giri Mobile brings supported mobile applications to the Giri OS desktop through an integrated application runtime. It executes an open-source Android (AOSP) system container directly on the host Linux kernel without heavy VM emulation.'
    },
    {
      q: 'How does Giri Smart Input Mapping work?',
      a: 'Giri Smart Input Mapping is an integrated input subsystem that converts desktop keyboard inputs (like WASD or hotkeys), mouse cursor clicks, and USB gamepads into virtual multi-touch gestures. Profiles can be customized per application.'
    },
    {
      q: 'Does every mobile app support input mapping?',
      a: 'No. While Giri Smart Input Mapping works across a broad range of mobile titles, apps with complex custom proprietary multi-touch gesture systems or applications that strictly mandate physical device hardware sensors (e.g., gyroscope or barometer) may have limited compatibility.'
    },
    {
      q: 'Will banking apps work on Giri Mobile?',
      a: 'Applications that mandate proprietary Google Play Protect or hardware-backed SafetyNet/Play Integrity attestation may refuse to operate, as Giri OS prioritizes open-source user privacy over vendor-locked hardware verification.'
    }
  ];

  return (
    <div className="relative py-24 sm:py-32">
      {/* 1. Hero Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6 shadow-sm">
          <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
            Official Giri Product &bull; Giri Mobile
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-giri-text leading-[1.08] max-w-4xl mx-auto">
          GIRI MOBILE
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

      {/* 2. Runtime Architecture & Window Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-mono">
              Container Runtime Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2 mb-4">
              Native Performance Without Virtual Machine Latency
            </h2>
            <p className="text-sm text-giri-muted leading-relaxed mb-6">
              Instead of running an emulator that mimics mobile CPU hardware, Giri Mobile leverages Linux namespaces, cgroups, and direct kernel IPC to run mobile applications natively alongside your desktop tools.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                <h4 className="text-sm font-bold text-giri-text mb-1">Direct Kernel IPC (Binder & Ashmem)</h4>
                <p className="text-xs text-giri-muted leading-relaxed">
                  Inter-process communication between mobile services and the desktop compositor flows directly through kernel drivers, providing instant responsiveness and low memory utilization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                <h4 className="text-sm font-bold text-giri-text mb-1">Mesa DRI3 Hardware GPU Acceleration</h4>
                <p className="text-xs text-giri-muted leading-relaxed">
                  OpenGL ES and Vulkan commands are rendered directly by your physical GPU via Mesa drivers, delivering fluid 60+ FPS visuals in gaming and media applications.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                <h4 className="text-sm font-bold text-giri-text mb-1">Desktop Window Management</h4>
                <p className="text-xs text-giri-muted leading-relaxed">
                  Mobile applications render inside standard, resizable X11/Wayland desktop windows. Minimize, maximize, tile, or snap mobile windows with standard desktop hotkeys.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Architecture Diagram Mockup */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-300">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Giri Mobile Execution Stack</span>
              <span className="text-[10px] font-mono text-slate-400">Zero-VM Architecture</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                <div className="font-bold flex items-center justify-between">
                  <span>Application Layer</span>
                  <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">Mobile Apps (.APK)</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Productivity apps, mobile games, messaging clients</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
                <div className="font-bold flex items-center justify-between">
                  <span>Giri Mobile Container Runtime</span>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">AOSP / Waydroid</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">System services, package manager daemon, window bridge</p>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300">
                <div className="font-bold flex items-center justify-between">
                  <span>Giri Smart Input & Display Daemon</span>
                  <span className="text-[10px] bg-blue-500/20 px-2 py-0.5 rounded">keymap-daemon</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">WASD virtual joystick, mouse-to-touch, gamepad mapper</p>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300">
                <div className="font-bold flex items-center justify-between">
                  <span>Linux 6.1 LTS Kernel</span>
                  <span className="text-[10px] bg-purple-500/20 px-2 py-0.5 rounded">binder / ashmem / DRI3</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Shared host kernel resources with zero hypervisor penalty</p>
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Interactive Pipeline Demonstration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-giri-text tracking-tight">
                Giri Mobile Installation Workflow
              </h2>
              <p className="text-xs sm:text-sm text-giri-muted mt-1">
                Visual demonstration: Select APK &rarr; Check compatibility &rarr; Install &rarr; Configure controls &rarr; Launch.
              </p>
            </div>

            {/* Honest Disclosure Tag */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs max-w-xs">
              <Info className="w-4 h-4 flex-shrink-0" />
              <span>
                <strong>Demonstration Only:</strong> Illustrative interface simulation of the Giri Mobile installation pipeline.
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
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md'
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
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 transition-all duration-700 ease-out"
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
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white dark:bg-slate-900 border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg scale-[1.02]'
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
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'bg-giri-surface text-giri-muted'
                      }`}>
                        STEP 0{step.stepNumber}
                      </span>
                      <div className="w-6 h-6 rounded-lg bg-giri-surface border border-giri-border flex items-center justify-center">
                        {renderIcon(step.iconType, isCurrent, isCompleted)}
                      </div>
                    </div>

                    <div className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                      {step.phase}
                    </div>
                    <h4 className="text-xs font-bold text-giri-text mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-giri-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-giri-border/60">
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

      {/* 4. Giri Smart Input Mapping Showcase: Your Apps. Your Controls. */}
      <section className="py-20 border-t border-giri-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-mono">
              Giri Smart Input Mapping
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-2">
              Your Apps. Your Controls.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-giri-muted leading-relaxed">
              Touch-first interfaces should never hinder your desktop workflow. Configure custom keyboard shortcuts, virtual joystick movement, mouse gestures, and console controllers with precision.
            </p>
          </div>

          {/* Interactive Mapping Showcase Component */}
          <InputMappingShowcase />

          {/* Input Mapping Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-giri-surface border border-giri-border">
              <h4 className="text-sm font-bold text-giri-text mb-2">Keyboard & WASD Mapping</h4>
              <p className="text-xs text-giri-muted leading-relaxed">
                Map physical directional keys (WASD) to virtual analog sticks, with customizable action keys for jumps, sprints, and item triggers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-giri-surface border border-giri-border">
              <h4 className="text-sm font-bold text-giri-text mb-2">Mouse Gesture Translation</h4>
              <p className="text-xs text-giri-muted leading-relaxed">
                Transform click-and-drag mouse movements into smooth touch swipes, with scroll-wheel pinch zoom and right-click back button navigation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-giri-surface border border-giri-border">
              <h4 className="text-sm font-bold text-giri-text mb-2">Per-Application Profiles</h4>
              <p className="text-xs text-giri-muted leading-relaxed">
                Control profiles are automatically saved and matched per package name, switching layouts seamlessly when focusing different windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Complete Capability Checklist */}
      <section className="py-20 border-t border-giri-border bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-mono">
              Product Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2">
              Engineered for Mobile Integration
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
                    <span className="text-xs font-mono text-giri-muted font-medium">Giri Mobile</span>
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

      {/* 6. System Requirements & Known Limitations */}
      <section className="py-20 border-t border-giri-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* System Requirements */}
            <div className="lg:col-span-6 glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-giri-border">
                <HardDrive className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-lg font-bold text-giri-text">Hardware Requirements</h3>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="block text-giri-muted font-semibold uppercase font-mono text-[10px]">Minimum Hardware</span>
                  <p className="text-giri-text mt-1">{profile.systemRequirements.minimum}</p>
                </div>
                <div>
                  <span className="block text-giri-muted font-semibold uppercase font-mono text-[10px]">Recommended Hardware</span>
                  <p className="text-giri-text mt-1 font-semibold text-emerald-600 dark:text-emerald-400">{profile.systemRequirements.recommended}</p>
                </div>
                <div className="p-3 rounded-xl bg-giri-surface border border-giri-border text-giri-muted text-[11px] leading-relaxed">
                  <span className="font-bold text-giri-text block mb-1">Virtualization Prerequisites:</span>
                  {profile.systemRequirements.notes}
                </div>
              </div>
            </div>

            {/* Known Limitations */}
            <div className="lg:col-span-6 glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-giri-border">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-giri-text">Compatibility Limitations</h3>
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

      {/* 7. Product FAQ */}
      <section className="py-20 border-t border-giri-border bg-giri-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-mono">
              Product Questions
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-giri-text mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {mobileFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-giri-border bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

      {/* 8. Call to Action */}
      <section className="py-20 border-t border-giri-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-giri-text tracking-tight">
            Explore the Three Worlds of Giri OS
          </h2>
          <p className="mt-4 text-sm text-giri-muted leading-relaxed">
            Discover how Giri Mobile unites with Giri Bridge and Giri Store to deliver a seamless computing experience.
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

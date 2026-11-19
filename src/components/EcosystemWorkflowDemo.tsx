import React, { useState } from 'react';
import { PRODUCT_WORKFLOWS, ProductWorkflow, WorkflowStep } from '../data/ecosystems';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  FileCode, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Info,
  Terminal,
  Monitor,
  Smartphone,
  Package,
  Gamepad2
} from 'lucide-react';

export const EcosystemWorkflowDemo: React.FC = () => {
  const [activeProductId, setActiveProductId] = useState<'giri-bridge' | 'giri-mobile' | 'giri-store'>('giri-bridge');
  const [simulatedStep, setSimulatedStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const activeWorkflow: ProductWorkflow = PRODUCT_WORKFLOWS.find(w => w.productId === activeProductId) || PRODUCT_WORKFLOWS[0];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setSimulatedStep(1);

    const stepInterval = setInterval(() => {
      setSimulatedStep(prev => {
        if (prev >= activeWorkflow.steps.length) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return activeWorkflow.steps.length;
        }
        return prev + 1;
      });
    }, 1100);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSimulatedStep(0);
  };

  const handleTabChange = (id: 'giri-bridge' | 'giri-mobile' | 'giri-store') => {
    setActiveProductId(id);
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
        return <Cpu className={`${baseClass} ${isCurrent ? 'text-violet-500' : 'text-giri-muted'}`} />;
      case 'controls':
        return <Gamepad2 className={`${baseClass} ${isCurrent ? 'text-emerald-500' : 'text-giri-muted'}`} />;
      case 'integrate':
        return <Sparkles className={`${baseClass} ${isCurrent ? 'text-amber-500' : 'text-giri-muted'}`} />;
      default:
        return <Sparkles className={baseClass} />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-giri-border p-6 sm:p-8 backdrop-blur-xl shadow-xl">
      {/* Header & Honest Disclaimer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-giri-border">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Application Experience Demonstration</span>
          </div>
          <h3 className="text-2xl font-bold text-giri-text tracking-tight">
            Interactive Product Installation Workflows
          </h3>
          <p className="text-xs sm:text-sm text-giri-muted mt-1">
            Explore how Giri Bridge, Giri Mobile, and Giri Store ingest, isolate, and integrate applications into Giri Space.
          </p>
        </div>

        {/* Disclaimer Tag */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs max-w-xs">
          <Info className="w-4 h-4 flex-shrink-0" />
          <span>
            <strong>Illustrative Pipeline:</strong> Interactive interface demonstration of Giri OS target subsystem execution.
          </span>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 my-6">
        <div className="flex rounded-xl bg-giri-surface p-1 border border-giri-border">
          <button
            onClick={() => handleTabChange('giri-bridge')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeProductId === 'giri-bridge'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-giri-muted hover:text-giri-text'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Giri Bridge (EXE / MSI)</span>
          </button>
          <button
            onClick={() => handleTabChange('giri-mobile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeProductId === 'giri-mobile'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-giri-muted hover:text-giri-text'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Giri Mobile (APK)</span>
          </button>
          <button
            onClick={() => handleTabChange('giri-store')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeProductId === 'giri-store'
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-giri-muted hover:text-giri-text'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Giri Store (DEB / Flatpak)</span>
          </button>
        </div>

        {/* Simulator Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunSimulation}
            disabled={isRunning || simulatedStep === activeWorkflow.steps.length}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              isRunning || simulatedStep === activeWorkflow.steps.length
                ? 'bg-giri-surface text-giri-muted cursor-not-allowed border border-giri-border'
                : 'bg-giri-blue text-white hover:bg-blue-600 shadow-md'
            }`}
          >
            <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Executing Pipeline...' : simulatedStep === activeWorkflow.steps.length ? 'Workflow Completed' : 'Simulate Workflow'}</span>
          </button>

          {simulatedStep > 0 && (
            <button
              onClick={handleReset}
              className="p-2 rounded-xl border border-giri-border hover:bg-giri-surface text-giri-muted transition-colors"
              title="Reset Simulation"
              aria-label="Reset Simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Line */}
      <div className="relative w-full mb-8 px-2">
        <div className="h-1.5 w-full bg-giri-surface rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 transition-all duration-700 ease-out"
            style={{ width: `${(simulatedStep / activeWorkflow.steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${activeWorkflow.steps.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-4`}>
        {activeWorkflow.steps.map((step: WorkflowStep) => {
          const isCompleted = simulatedStep > step.stepNumber || simulatedStep === activeWorkflow.steps.length;
          const isCurrent = simulatedStep === step.stepNumber;

          return (
            <div
              key={step.stepNumber}
              className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isCurrent
                  ? 'bg-white dark:bg-slate-900 border-giri-blue ring-2 ring-giri-blue/20 shadow-lg scale-[1.02]'
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
                  <div className="w-6 h-6 rounded-lg bg-giri-surface border border-giri-border flex items-center justify-center">
                    {renderIcon(step.iconType, isCurrent, isCompleted)}
                  </div>
                </div>

                <div className="text-[11px] font-mono font-semibold text-giri-blue dark:text-cyan-400 mb-1">
                  {step.phase}
                </div>
                <h4 className="text-xs font-bold text-giri-text mb-1">
                  {step.title}
                </h4>
                <p className="text-[11px] text-giri-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Subsystem CLI Action */}
              <div className="mt-3 pt-2.5 border-t border-giri-border/60">
                <code className="block text-[10px] font-mono text-giri-text bg-giri-surface p-1.5 rounded overflow-x-auto border border-giri-border/50">
                  {step.subsystemAction}
                </code>
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal Output Snapshot */}
      {simulatedStep > 0 && (
        <div className="mt-6 p-4 rounded-xl bg-slate-950 text-slate-200 border border-slate-800 font-mono text-xs">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800 text-slate-400 text-[11px]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2">giri-orchestrator --target={activeWorkflow.targetFormat}</span>
          </div>
          <div className="space-y-1">
            {activeWorkflow.steps.slice(0, simulatedStep).map((s) => (
              <div key={s.stepNumber} className="flex items-center gap-2">
                <span className="text-emerald-400">[OK]</span>
                <span className="text-slate-400">Step {s.stepNumber}:</span>
                <span>{s.title} completed.</span>
              </div>
            ))}
            {simulatedStep === activeWorkflow.steps.length && (
              <div className="text-cyan-400 font-bold pt-1">
                &check; Application registered with Giri Space desktop launcher and MIME handlers.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

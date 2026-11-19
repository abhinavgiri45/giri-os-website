import React from 'react';
import { GIRI_EDITIONS } from '../data/editions';
import { Cpu, HardDrive, Monitor, CheckCircle2, ArrowRight } from 'lucide-react';

interface EditionsPageProps {
  navigate: (path: string) => void;
}

export const EditionsPage: React.FC<EditionsPageProps> = ({ navigate }) => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Distribution Lineup
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            Targeted Giri OS Editions
          </h1>
          <p className="mt-4 text-base text-giri-muted leading-relaxed">
            Giri OS provides tailored software profiles designed around specific hardware constraints and computing goals. No artificial limitations, no paid subscription tiers.
          </p>
        </div>

        {/* Editions Stack */}
        <div className="space-y-12">
          {GIRI_EDITIONS.map((ed) => (
            <div
              key={ed.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-giri-border relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-giri-border/80">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {ed.badge}
                    </span>
                    <span className="text-xs font-mono text-giri-muted font-medium">
                      Status: {ed.status}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{ed.name}</h2>
                  <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-1">Version: {ed.version}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigate('/downloads')}
                    className="aureon-button text-xs py-2.5 px-5"
                  >
                    <span>Download Centre</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Description & Target Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-sm">
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">
                    Overview
                  </h3>
                  <p className="text-giri-muted leading-relaxed">{ed.description}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">
                    Target Audience
                  </h3>
                  <p className="text-giri-muted leading-relaxed">{ed.targetAudience}</p>
                </div>
              </div>

              {/* Hardware Requirements Matrix */}
              <div className="rounded-2xl bg-giri-surface2/40 border border-giri-border p-6 mb-8">
                <h3 className="text-xs font-bold tracking-wider uppercase text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Hardware Requirements</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Minimum */}
                  <div className="p-4 rounded-xl bg-giri-surface/80 border border-giri-border/60">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Minimum (Entry Level)
                    </span>
                    <ul className="mt-3 space-y-2 text-xs text-giri-muted">
                      <li className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-giri-muted shrink-0" />
                        <span>CPU: {ed.minimumRequirements.cpu}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <HardDrive className="w-3.5 h-3.5 text-giri-muted shrink-0" />
                        <span>RAM: <strong className="text-slate-200">{ed.minimumRequirements.ram}</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <HardDrive className="w-3.5 h-3.5 text-giri-muted shrink-0" />
                        <span>Storage: {ed.minimumRequirements.storage}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Monitor className="w-3.5 h-3.5 text-giri-muted shrink-0" />
                        <span>Display: {ed.minimumRequirements.display}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Recommended */}
                  <div className="p-4 rounded-xl bg-giri-surface/80 border border-giri-border/60">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Recommended (Optimal Experience)
                    </span>
                    <ul className="mt-3 space-y-2 text-xs text-giri-muted">
                      <li className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>CPU: {ed.recommendedRequirements.cpu}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <HardDrive className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>RAM: <strong className="text-white">{ed.recommendedRequirements.ram}</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <HardDrive className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Storage: {ed.recommendedRequirements.storage}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Monitor className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Display: {ed.recommendedRequirements.display}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Software Bundled */}
              <div>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">
                  Included Subsystems & Components
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ed.includedSoftware.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-giri-surface/60 border border-giri-border/40"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

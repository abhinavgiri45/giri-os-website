import React from 'react';
import { GIRI_ROADMAP, MilestoneStatus } from '../data/roadmap';
import { StatusBadge } from '../components/StatusBadge';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight
} from 'lucide-react';

interface RoadmapPageProps {
  navigate: (path: string) => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({ navigate }) => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Trajectory & Milestones
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            The Giri OS Roadmap
          </h1>
          <p className="mt-4 text-base text-giri-muted leading-relaxed">
            From initial Debian live-build scaffolding to public Release Candidate validation. Milestones are marked completed only after verified code commits and test passes.
          </p>
        </div>

        {/* Milestone Timeline Cards */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-violet-500 before:to-transparent before:hidden md:before:block">
          {GIRI_ROADMAP.map((m) => (
            <div
              key={m.id}
              className="relative md:pl-20 transition-all duration-300"
            >
              {/* Timeline Indicator Dot */}
              <div className="hidden md:flex absolute left-6 -translate-x-1/2 top-8 w-5 h-5 rounded-full items-center justify-center bg-giri-navy border-2 border-cyan-400 shadow-[0_0_12px_rgba(0,210,255,0.6)] z-10">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-giri-border hover:border-cyan-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-giri-border/60">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {m.quarter}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{m.title}</h2>
                  </div>

                  <div className="flex items-center gap-3">
                    <StatusBadge status={m.status as MilestoneStatus} />
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {m.progressPercent}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-giri-surface2 rounded-full my-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      m.status === 'Completed'
                        ? 'bg-emerald-400'
                        : m.status === 'In Progress'
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                        : 'bg-violet-500/50'
                    }`}
                    style={{ width: `${m.progressPercent}%` }}
                  />
                </div>

                <p className="text-xs sm:text-sm text-giri-muted leading-relaxed mb-6">
                  {m.summary}
                </p>

                {m.verificationEvidence && (
                  <div className="mb-6 p-3.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-cyan-300 font-mono">
                    <strong>Verification Evidence:</strong> {m.verificationEvidence}
                  </div>
                )}

                {/* Deliverables Checklist */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Key Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {m.deliverables.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className={`flex items-center gap-2 text-xs p-2.5 rounded-xl border ${
                          d.completed
                            ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300'
                            : 'bg-giri-surface/50 border-giri-border/50 text-giri-muted'
                        }`}
                      >
                        {d.completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        )}
                        <span className={d.completed ? 'text-slate-200' : 'text-slate-400'}>
                          {d.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link to Status */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/status')}
            className="aureon-button text-xs py-3 px-6"
          >
            <span>View Live Development Status Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

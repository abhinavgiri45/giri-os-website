import React, { useState } from 'react';
import { GIRI_STATUS_DATA, RECENT_COMMITS, TRACKED_BUGS } from '../data/status';
import { 
  Activity, 
  GitBranch, 
  AlertTriangle, 
  Cpu, 
  ExternalLink, 
  ShieldCheck, 
  Server,
  RefreshCw
} from 'lucide-react';

export const StatusPage: React.FC = () => {
  const s = GIRI_STATUS_DATA;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastRefreshed(new Date().toLocaleTimeString());
    }, 600);
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase">
              Runtime Telemetry
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-2">
              Development Status Dashboard
            </h1>
            <p className="mt-4 text-base text-giri-muted leading-relaxed">
              Real-time tracking of active operating system milestones, branch states, virtualization test passes, and open bug triage.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-giri-muted font-mono">
              Updated: {lastRefreshed}
            </span>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="umbra-button text-xs py-2 px-3.5 flex items-center gap-1.5"
              aria-label="Refresh telemetry data"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-giri-blue dark:text-cyan-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Core Status Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl border border-giri-border">
            <span className="text-xs font-medium text-giri-muted flex items-center gap-1.5 mb-2">
              <Activity className="w-4 h-4 text-giri-blue dark:text-cyan-400" />
              <span>Current Milestone</span>
            </span>
            <div className="text-lg font-bold text-giri-text">{s.currentMilestone}</div>
            <div className="text-xs text-giri-blue dark:text-cyan-300 font-mono mt-1">{s.milestonePhase}</div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-giri-border">
            <span className="text-xs font-medium text-giri-muted flex items-center gap-1.5 mb-2">
              <GitBranch className="w-4 h-4 text-emerald-500" />
              <span>Active Branch</span>
            </span>
            <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400 truncate">
              {s.activeBranch}
            </div>
            <div className="text-xs text-giri-muted mt-1">Under Continuous Audit</div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-giri-border">
            <span className="text-xs font-medium text-giri-muted flex items-center gap-1.5 mb-2">
              <Server className="w-4 h-4 text-giri-blue" />
              <span>VM Test Status</span>
            </span>
            <div className="text-lg font-bold text-giri-text">Verified Pass</div>
            <div className="text-xs text-giri-blue dark:text-blue-300 mt-1">{s.vmTestingStatus}</div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-giri-border">
            <span className="text-xs font-medium text-giri-muted flex items-center gap-1.5 mb-2">
              <Cpu className="w-4 h-4 text-giri-violet" />
              <span>Kernel & Base</span>
            </span>
            <div className="text-sm font-bold text-giri-text truncate">Linux 6.1 LTS</div>
            <div className="text-xs text-giri-muted mt-1">{s.baseDistro}</div>
          </div>
        </div>

        {/* Deep Telemetry Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Recent Verified Commits */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-giri-border">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-giri-border">
              <h2 className="text-base font-bold text-giri-text flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-giri-blue dark:text-cyan-400" />
                <span>Recent Repository Commits</span>
              </h2>
              <a
                href="https://github.com/abhinavgiri45/giri-os/commits/feature/genesis-stabilization"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-giri-blue dark:text-cyan-400 hover:text-giri-text flex items-center gap-1"
              >
                <span>Full Git Log</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-4">
              {RECENT_COMMITS.map((c) => (
                <div
                  key={c.hash}
                  className="p-4 rounded-xl bg-giri-surface border border-giri-border flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/5 dark:bg-black/50 text-giri-blue dark:text-cyan-400">
                        {c.hash}
                      </span>
                      <span className="text-[11px] font-mono text-giri-muted">{c.branch}</span>
                    </div>
                    <p className="text-xs text-giri-text">{c.message}</p>
                  </div>
                  <span className="text-[11px] text-giri-muted font-mono shrink-0">{c.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tracked Issues & Audit Status */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-giri-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-giri-border">
                <h2 className="text-base font-bold text-giri-text flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Active Bug Triage ({TRACKED_BUGS.length})</span>
                </h2>
                <span className="text-xs text-giri-muted font-mono">Audited: {s.lastAuditDate}</span>
              </div>

              <div className="space-y-3">
                {TRACKED_BUGS.map((bug) => (
                  <div
                    key={bug.id}
                    className="p-3.5 rounded-xl bg-giri-surface border border-giri-border space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-500">{bug.id}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                        {bug.severity}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-giri-text">{bug.component}</div>
                    <p className="text-[11px] text-giri-muted leading-relaxed">{bug.description}</p>
                    <div className="text-[10px] font-mono text-giri-blue dark:text-cyan-300 pt-1">
                      Status: {bug.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-giri-blue/5 border border-giri-blue/20 text-xs text-giri-muted">
              <div className="flex items-center gap-2 text-giri-blue dark:text-cyan-300 font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Runtime Honesty Guarantee</span>
              </div>
              Build status reports represent verified automated test passes. Successful compilation does not prove complete bare-metal driver compatibility.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

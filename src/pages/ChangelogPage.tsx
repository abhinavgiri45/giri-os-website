import React from 'react';
import { GIRI_CHANGELOG } from '../data/changelog';
import { 
  Sparkles, 
  Wrench, 
  CheckCircle, 
  AlertCircle, 
  Calendar
} from 'lucide-react';

interface ChangelogPageProps {
  navigate?: (path: string) => void;
}

export const ChangelogPage: React.FC<ChangelogPageProps> = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Release Evolution
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            System Changelog
          </h1>
          <p className="mt-4 text-base text-giri-muted leading-relaxed">
            Detailed release notes, kernel changes, desktop shell improvements, and documented known issues for every Giri OS build.
          </p>
        </div>

        {/* Releases Stream */}
        <div className="space-y-12">
          {GIRI_CHANGELOG.map((rel) => (
            <article
              key={rel.version}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-giri-border"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-giri-border/80">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono">
                      v{rel.version} {rel.codename}
                    </span>
                    {rel.isLatest && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Latest Development Milestone
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Giri OS {rel.version} {rel.codename} Release Notes
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs text-giri-muted font-mono">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{rel.date}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-6">
                {rel.summary}
              </p>

              {/* Sections: New Features, Improvements, Fixes, Known Issues */}
              <div className="space-y-8">
                {/* New Features */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>New Features</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {rel.newFeatures.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2 mb-3">
                    <Wrench className="w-4 h-4" />
                    <span>Enhancements & Refinements</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {rel.improvements.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fixes */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4" />
                    <span>Resolved Issues</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {rel.fixes.map((fix, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{fix}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Known Issues */}
                <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-3">
                    <AlertCircle className="w-4 h-4" />
                    <span>Documented Known Issues</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-amber-200/80">
                    {rel.knownIssues.map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

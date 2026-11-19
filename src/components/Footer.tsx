import React from 'react';
import { FOOTER_SECTIONS } from '../data/navigation';
import { Shield, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="relative bg-giri-surface/80 border-t border-giri-border mt-24 pt-16 pb-12 overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-giri-blue/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-giri-border/60">
          {/* Brand Info & Tagline Column */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden p-0.5 bg-giri-surface2/60 border border-giri-border flex items-center justify-center">
                <img
                  src="/logo/giri-os-icon.svg"
                  alt="Giri OS Official Emblem — Four-Pane Modern Window Formation"
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,210,255,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-wider text-giri-text">
                  GIRI <span className="text-giri-violet">OS</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-giri-muted font-semibold">
                  Genesis 0.1
                </span>
              </div>
            </div>

            <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mt-1">
              ONE SYSTEM. INFINITE POSSIBILITIES.
            </p>

            <p className="text-xs text-giri-muted leading-relaxed max-w-sm">
              An independent Linux-based operating system designed for refined simplicity, rock-solid Debian reliability, and high-performance computing without telemetry or clutter.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/abhinavgiri45/giri-os"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-giri-muted hover:text-white px-3 py-1.5 rounded-full bg-giri-surface2/50 border border-giri-border hover:border-giri-cyan/40 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>OS Repo</span>
                <ArrowUpRight className="w-3 h-3 text-giri-muted" />
              </a>

              <a
                href="https://github.com/abhinavgiri45/giri-os-website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-giri-muted hover:text-white px-3 py-1.5 rounded-full bg-giri-surface2/50 border border-giri-border hover:border-giri-violet/40 transition-all"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Website Repo</span>
                <ArrowUpRight className="w-3 h-3 text-giri-muted" />
              </a>
            </div>
          </div>

          {/* Categorized Link Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-giri-text/90">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('http') ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-giri-muted hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    ) : (
                      <button
                        onClick={() => navigate(item.href)}
                        className="text-xs text-giri-muted hover:text-cyan-400 transition-colors text-left"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Metadata & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-giri-muted">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>&copy; {new Date().getFullYear()} Giri OS Open Source Project. Released under the MIT License.</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/security')} className="hover:text-white transition-colors">
              Security & Privacy
            </button>
            <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
              About the Project
            </button>
            <a
              href="https://github.com/abhinavgiri45/giri-os/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              OS License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

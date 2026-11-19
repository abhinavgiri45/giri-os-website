import React from 'react';
import { GIRI_DEV_RESOURCES } from '../data/developers';
import { CodeBlock } from '../components/CodeBlock';
import { 
  GitBranch, 
  Terminal, 
  Layers, 
  ExternalLink,
  CheckCircle,
  FileCode2,
  Workflow
} from 'lucide-react';

export const DevelopersPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Systems Engineering
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            Developer Portal
          </h1>
          <p className="mt-4 text-base text-giri-muted leading-relaxed">
            Build, test, and contribute to Giri OS. All development tools and instructions here reflect the verified structure of the official <code className="text-cyan-300 font-mono">abhinavgiri45/giri-os</code> repository.
          </p>
        </div>

        {/* Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card p-6 rounded-2xl border border-giri-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Primary OS Repository
                </span>
                <GitBranch className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">abhinavgiri45/giri-os</h3>
              <p className="text-xs text-giri-muted leading-relaxed mb-4">
                Operating system source: live-build configs, Plymouth theme, GRUB assets, Calamares installer modules, and Openbox Giri Space shell scripts.
              </p>
            </div>
            <a
              href="https://github.com/abhinavgiri45/giri-os"
              target="_blank"
              rel="noopener noreferrer"
              className="aureon-button text-xs py-2 px-4 self-start inline-flex items-center gap-1.5"
            >
              <span>Explore OS Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-giri-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/30">
                  Website Repository
                </span>
                <FileCode2 className="w-4 h-4 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">abhinavgiri45/giri-os-website</h3>
              <p className="text-xs text-giri-muted leading-relaxed mb-4">
                Official website source: React + Vite + TypeScript, ThreeUI design integration, Three.js 3D WebGL engine, and Cloudflare Pages deployment.
              </p>
            </div>
            <a
              href="https://github.com/abhinavgiri45/giri-os-website"
              target="_blank"
              rel="noopener noreferrer"
              className="umbra-button text-xs py-2 px-4 self-start inline-flex items-center gap-1.5"
            >
              <span>Explore Website Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Architecture Breakdown */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Architecture & Subsystem Pipeline</span>
          </h2>

          <div className="glass-panel p-8 rounded-3xl border border-giri-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl bg-giri-surface/80 border border-giri-border/60">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">Layer 1</div>
                <div className="text-sm font-bold text-white mt-1">Debian 12 Base</div>
                <p className="text-[11px] text-giri-muted mt-1">Linux 6.1 LTS Kernel, debootstrap rootfs, systemd</p>
              </div>

              <div className="p-4 rounded-xl bg-giri-surface/80 border border-giri-border/60">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">Layer 2</div>
                <div className="text-sm font-bold text-white mt-1">Display & Boot Engine</div>
                <p className="text-[11px] text-giri-muted mt-1">GRUB2 theme, Giri Genesis Plymouth splash, Xorg KMS</p>
              </div>

              <div className="p-4 rounded-xl bg-giri-surface/80 border border-giri-border/60">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">Layer 3</div>
                <div className="text-sm font-bold text-white mt-1">Giri Space Shell</div>
                <p className="text-[11px] text-giri-muted mt-1">Openbox WM, Picom composite shadows, Giri Dock, Panel applets</p>
              </div>

              <div className="p-4 rounded-xl bg-giri-surface/80 border border-giri-border/60">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">Layer 4</div>
                <div className="text-sm font-bold text-white mt-1">Installer & Tooling</div>
                <p className="text-[11px] text-giri-muted mt-1">Calamares OEM setup, live-build squashfs packager</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Guides & Snippets */}
        <div className="space-y-10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span>Developer Guides & Build Commands</span>
          </h2>

          {GIRI_DEV_RESOURCES.map((res) => (
            <div key={res.id} className="glass-panel p-8 rounded-3xl border border-giri-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  {res.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{res.title}</h3>
              <p className="text-xs sm:text-sm text-giri-muted leading-relaxed mb-4">{res.summary}</p>

              {res.codeSnippet && (
                <CodeBlock code={res.codeSnippet} language="bash" title={res.title} />
              )}

              <p className="text-xs text-slate-300 leading-relaxed mt-4 pt-4 border-t border-giri-border/60">
                {res.details}
              </p>
            </div>
          ))}
        </div>

        {/* Contribution & Code Standards */}
        <section className="glass-panel p-8 sm:p-10 rounded-3xl border border-giri-border">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Workflow className="w-5 h-5 text-cyan-400" />
            <span>Contribution Principles & Pull Request Standards</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-giri-muted leading-relaxed">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Strict Upstream Separation:</strong> Do not fork Debian core binaries when a configuration hook or shell wrapper can cleanly accomplish the task.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Minimal Overhead:</strong> Every added package or background daemon must justify its idle RAM footprint. Idle RAM must remain below 350MB.
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Clean Vector Branding:</strong> All graphic assets must adhere to the official four-pane color palette (Electric Blue, Cyan, Violet, Midnight Navy).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Reproducible ISO Builds:</strong> Build scripts must execute reproducibly on standard Debian 12 host environments without untracked binary blobs.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

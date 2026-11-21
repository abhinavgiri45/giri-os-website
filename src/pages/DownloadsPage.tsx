import React, { useState } from 'react';
import { GIRI_DOWNLOADS_DATA } from '../data/downloads';
import { 
  AlertTriangle, 
  ExternalLink, 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  Copy, 
  Check, 
  BookOpen 
} from 'lucide-react';

interface DownloadsPageProps {
  navigate: (path: string) => void;
}

export const DownloadsPage: React.FC<DownloadsPageProps> = ({ navigate }) => {
  const d = GIRI_DOWNLOADS_DATA;
  const [copied, setCopied] = useState(false);

  const copyVerifyCmd = () => {
    navigator.clipboard.writeText('echo "aaebbc5d8c6671a340503f223e5b099f67ca0fdc06906a4a0fcc00d584058d45 *giri-os-0.1-genesis-installable-amd64.iso" | sha256sum --check');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase">
            Release Validation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-2">
            Giri OS Official Downloads
          </h1>
          <p className="mt-4 text-base text-giri-muted leading-relaxed">
            Acquire verified, cryptographic release images of Giri OS. We utilize GitHub Releases to distribute bit-exact ISO files with published SHA-256 digests.
          </p>
        </div>

        {/* Primary Development Notice Banner as mandated */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-xl relative overflow-hidden shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-giri-text mb-1">
                Giri OS is currently under development. Official downloads will be available after release validation.
              </h2>
              <p className="text-xs sm:text-sm text-giri-muted leading-relaxed mt-2">
                The development team is actively stabilizing the <strong>Genesis 0.1</strong> live-build ISO on branch{' '}
                <code className="px-2 py-0.5 rounded bg-black/5 dark:bg-black/40 font-mono text-giri-blue dark:text-cyan-300">
                  feature/genesis-stabilization
                </code>
                . In accordance with our honesty principles, no placeholder or speculative download binaries are provided until end-to-end VM and hardware testing concludes successfully.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button
                  onClick={() => navigate('/status')}
                  className="umbra-button text-xs py-2 px-4"
                >
                  <span>View Development Telemetry</span>
                </button>
                <button
                  onClick={() => navigate('/docs#virtualbox')}
                  className="umbra-button text-xs py-2 px-4 flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-giri-blue dark:text-cyan-400" />
                  <span>VirtualBox Testing Guide</span>
                </button>
                <a
                  href={d.githubReleasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-giri-blue dark:text-cyan-400 hover:text-giri-text transition-colors"
                >
                  <span>Monitor GitHub Releases</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Release Specification Box */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-giri-border mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-giri-border">
            <div>
              <span className="text-xs font-bold font-mono text-giri-blue dark:text-cyan-400 uppercase tracking-wider">
                Release Profile Preview
              </span>
              <h3 className="text-2xl font-bold text-giri-text mt-1">
                Giri OS {d.version} ({d.edition})
              </h3>
              <p className="text-xs text-giri-muted mt-1">Target Architecture: {d.architecture}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-giri-blue/15 text-giri-blue dark:text-cyan-300 border border-giri-blue/30">
                {d.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
              <span className="text-xs text-giri-muted">Target Release Phase</span>
              <div className="text-sm font-bold text-giri-text mt-1">{d.releaseDate}</div>
            </div>
            <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
              <span className="text-xs text-giri-muted">Estimated ISO Size</span>
              <div className="text-sm font-bold font-mono text-giri-blue dark:text-cyan-400 mt-1">{d.estimatedSize}</div>
            </div>
            <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
              <span className="text-xs text-giri-muted">Installer Engine</span>
              <div className="text-sm font-bold text-giri-text mt-1">Calamares OEM Engine</div>
            </div>
            <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
              <span className="text-xs text-giri-muted">Kernel Base</span>
              <div className="text-sm font-bold font-mono text-giri-text mt-1">Linux 6.1 LTS</div>
            </div>
          </div>

          {/* SHA256 Verification Protocol */}
          <div className="p-5 rounded-2xl bg-giri-surface2 border border-giri-border">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-giri-text">
                  Cryptographic Checksum Verification (SHA-256)
                </h4>
              </div>
              <button
                onClick={copyVerifyCmd}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-giri-blue dark:text-cyan-400 hover:text-giri-text bg-giri-blue/10 hover:bg-giri-blue/20 transition-colors"
                aria-label="Copy verification command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-xs text-giri-muted mb-3">
              Always verify the cryptographic signature of your downloaded ISO before flashing to USB:
            </p>
            <div className="p-3 rounded-lg bg-black/5 dark:bg-black/60 font-mono text-xs text-giri-blue dark:text-cyan-300 break-all select-all flex items-center justify-between border border-giri-border">
              <code>echo "aaebbc5d8c6671a340503f223e5b099f67ca0fdc06906a4a0fcc00d584058d45 *giri-os-0.1-genesis-installable-amd64.iso" | sha256sum --check</code>
            </div>
            <p className="text-[11px] text-giri-muted mt-2">
              *{d.sha256Placeholder}
            </p>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-giri-text mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-giri-blue dark:text-cyan-400" />
            <span>Target Hardware Requirements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-giri-border">
              <span className="text-xs font-bold text-amber-500 dark:text-amber-400 uppercase tracking-wider">
                Minimum Requirements (Entry Level)
              </span>
              <ul className="mt-4 space-y-2.5 text-xs text-giri-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>CPU: {d.systemRequirements.minCpu}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>RAM: <strong className="text-giri-text">{d.systemRequirements.minRam}</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Disk: {d.systemRequirements.minStorage}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>GPU: {d.systemRequirements.gpu}</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-giri-border">
              <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider">
                Recommended Requirements (Fluid Multitasking)
              </span>
              <ul className="mt-4 space-y-2.5 text-xs text-giri-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>CPU: {d.systemRequirements.recCpu}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>RAM: <strong className="text-giri-text">{d.systemRequirements.recRam}</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Disk: {d.systemRequirements.recStorage}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Display: 1080p Full HD or higher</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Installation Roadmap */}
        <div>
          <h3 className="text-2xl font-bold text-giri-text mb-6 flex items-center gap-2">
            <HardDrive className="w-6 h-6 text-giri-blue dark:text-cyan-400" />
            <span>Preparation & Installation Process</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.installationSteps.map((step) => (
              <div key={step.step} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-giri-blue/10 text-giri-blue dark:text-cyan-400 border border-giri-blue/25 flex items-center justify-center font-bold text-xs mb-4">
                    0{step.step}
                  </div>
                  <h4 className="text-sm font-bold text-giri-text mb-2">{step.title}</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

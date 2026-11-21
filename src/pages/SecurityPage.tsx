import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Key, 
  AlertOctagon, 
  RefreshCw, 
  CheckCircle 
} from 'lucide-react';

export const SecurityPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 ">
            System Integrity
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-2">
            Security & Privacy Architecture
          </h1>
          <p className="mt-4 text-base text-giri-muted leading-relaxed">
            Security in Giri OS is built on transparency, least-privilege principles, and reproducible open-source binaries. We never make unrealistic claims of absolute invulnerability.
          </p>
        </div>

        {/* Security Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 rounded-3xl border border-giri-border">
            <div className="w-12 h-12 rounded-md bg-giri-blue/10 border border-giri-blue/20 text-giri-blue dark:text-cyan-400 flex items-center justify-center mb-6">
              <EyeOff className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-giri-text mb-2">Zero Telemetry Promise</h2>
            <p className="text-xs text-giri-muted leading-relaxed">
              Giri OS has zero analytics beacons, zero hardware ID trackers, and zero telemetry daemons. Your search queries in Giri Space and application launches remain strictly local to your machine.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-giri-border">
            <div className="w-12 h-12 rounded-md bg-giri-blue/10 border border-giri-blue/20 text-giri-blue flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-giri-text mb-2">Debian Cryptographic Provenance</h2>
            <p className="text-xs text-giri-muted leading-relaxed">
              Base system packages originate from official, cryptographically signed Debian mirrors verified via GPG keys. The root filesystem contains no untracked third-party proprietary binaries.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-giri-border">
            <div className="w-12 h-12 rounded-md bg-giri-violet/10 border border-giri-violet/20 text-giri-violet flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-giri-text mb-2">Least-Privilege Execution</h2>
            <p className="text-xs text-giri-muted leading-relaxed">
              Administrative tasks require explicit sudo authentication with sudo timeout protection. Standard desktop applications run strictly as unprivileged user processes.
            </p>
          </div>
        </div>

        {/* Deep Dive Breakdown */}
        <div className="space-y-8 mb-16">
          {/* Package Sources & Update Model */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-giri-border">
            <h3 className="text-xl font-bold text-giri-text mb-4 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-giri-blue dark:text-cyan-400" />
              <span>Software Sources & Upstream Update Model</span>
            </h3>
            <p className="text-xs sm:text-sm text-giri-muted leading-relaxed mb-4">
              Giri OS pulls security patches directly from Debian Security archives (`bookworm-security`). Kernel CVE remediations and critical package vulnerability patches are inherited immediately without waiting for intermediary distribution repackaging.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-giri-muted">
              <div className="p-4 rounded-md bg-giri-surface border border-giri-border">
                <span className="font-bold text-giri-blue dark:text-cyan-400">Standard Debian Repositories</span>
                <p className="text-giri-muted mt-1">Verified via Debian GPG release keyring; audited by Debian Security Team.</p>
              </div>
              <div className="p-4 rounded-md bg-giri-surface border border-giri-border">
                <span className="font-bold text-giri-violet">Sandboxed Flatpak Ecosystem</span>
                <p className="text-giri-muted mt-1">Desktop applications run isolated via bubblewrap sandboxing with strict Portal permissions.</p>
              </div>
            </div>
          </div>

          {/* User Authentication & Disk Encryption */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-giri-border">
            <h3 className="text-xl font-bold text-giri-text mb-4 flex items-center gap-2">
              <Key className="w-5 h-5 text-giri-blue dark:text-cyan-400" />
              <span>Full-Disk Encryption & Authentication</span>
            </h3>
            <p className="text-xs sm:text-sm text-giri-muted leading-relaxed mb-4">
              During installation through Calamares, users can opt for LUKS2 (Linux Unified Key Setup) full-disk encryption. This safeguards all user data, configuration files, and swap spaces against offline physical tampering or laptop theft.
            </p>
            <ul className="space-y-2 text-xs text-giri-muted">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Modern Argon2id password hashing prevents offline dictionary brute-force attacks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>PAM (Pluggable Authentication Modules) protects session lock and terminal authorization</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Security Vulnerability Reporting Protocol */}
        <div className="p-8 sm:p-10 rounded-3xl bg-giri-surface2 border border-giri-border">
          <div className="flex items-center gap-3 mb-4">
            <AlertOctagon className="w-6 h-6 text-giri-blue dark:text-cyan-400" />
            <h3 className="text-xl font-bold text-giri-text">
              Vulnerability Disclosure & Security Inquiries
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-giri-muted leading-relaxed mb-6">
            If you identify a security vulnerability in Giri Space, Calamares branding hooks, or live-build configurations, please report it responsibly before public disclosure.
          </p>

          <div className="p-4 rounded-md bg-black/5 dark:bg-black/60 font-mono text-xs text-giri-blue dark:text-cyan-300 flex items-center justify-between flex-wrap gap-3 border border-giri-border">
            <span>Email: security@girios.org &bull; Or open a private GitHub Advisory on abhinavgiri45/giri-os</span>
            <a
              href="https://github.com/abhinavgiri45/giri-os/security/advisories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded bg-giri-blue/10 text-giri-blue dark:text-cyan-400 hover:bg-giri-blue/20 transition-colors"
            >
              GitHub Advisories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

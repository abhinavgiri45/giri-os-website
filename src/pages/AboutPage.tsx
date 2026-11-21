import React from 'react';
import { 
  Compass, 
  Terminal, 
  Code, 
  ExternalLink,
  Layers,
  FileText
} from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Elegant Founder Attribution */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-giri-blue/10 border border-giri-blue/25 text-giri-blue dark:text-cyan-400 text-xs font-semibold tracking-wider  mb-3">
            <span>Project Origins & Ethos</span>
            <span className="w-1.5 h-1.5 rounded-full bg-giri-blue dark:bg-cyan-400" />
            <span className="font-bold">Giri OS is led by Abhinav Giri, its Founder &amp; Lead Architect.</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-2">
            About Giri OS
          </h1>
          <p className="mt-4 text-base text-giri-muted leading-relaxed">
            Built on the conviction that a modern operating system should be quiet, capable, and respectful of the person sitting in front of the display.
          </p>
        </div>

        {/* The Why Section */}
        <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-giri-border mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-giri-blue/10 text-giri-blue dark:text-cyan-400 border border-giri-blue/20 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-giri-text">Why Giri OS Exists</h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-giri-muted leading-relaxed">
            <p>
              Contemporary operating systems increasingly demand more hardware resources simply to idle. Background services consume memory, cloud sync utilities upload telemetry without explicit comprehension, and desktop layouts prioritize sponsored content over user utility.
            </p>
            <p>
              <strong>Giri OS</strong> was conceived to reverse this trajectory. We wanted a desktop that boots instantly, draws less than 350MB of RAM at idle, looks modern and cohesive, and stays out of your way until called upon.
            </p>
            <p>
              By decoupling ourselves from monolithic desktop environments and building upon <strong>Debian GNU/Linux</strong>, we combine decades of upstream UNIX stability with original, handcrafted user interface architecture.
            </p>
          </div>
        </section>

        {/* Development Principles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-giri-text mb-8 flex items-center gap-2">
            <Layers className="w-5 h-5 text-giri-blue dark:text-cyan-400" />
            <span>Core Development Principles</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-md border border-giri-border">
              <div className="text-giri-blue dark:text-cyan-400 font-mono text-xs font-bold  mb-2">Principle 01</div>
              <h3 className="text-lg font-bold text-giri-text mb-2">Simplicity Over Bloat</h3>
              <p className="text-xs text-giri-muted leading-relaxed">
                If a feature can be implemented with an efficient, modular shell script or standard POSIX utility, we reject heavy background frameworks.
              </p>
            </div>

            <div className="glass-card p-6 rounded-md border border-giri-border">
              <div className="text-giri-blue font-mono text-xs font-bold  mb-2">Principle 02</div>
              <h3 className="text-lg font-bold text-giri-text mb-2">Honest Engineering</h3>
              <p className="text-xs text-giri-muted leading-relaxed">
                We state our exact status clearly. Unfinished components are marked as &ldquo;In Development&rdquo; or &ldquo;Design Preview&rdquo;. We do not inflate feature claims or publish unverified binaries.
              </p>
            </div>

            <div className="glass-card p-6 rounded-md border border-giri-border">
              <div className="text-giri-violet font-mono text-xs font-bold  mb-2">Principle 03</div>
              <h3 className="text-lg font-bold text-giri-text mb-2">Independent Identity</h3>
              <p className="text-xs text-giri-muted leading-relaxed">
                Giri OS maintains its own distinct visual design language, vector emblem, color tokens, and desktop philosophy, free from derivative branding.
              </p>
            </div>
          </div>
        </section>

        {/* Open Source Licensing & Dual Alignment Section */}
        <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-giri-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-giri-violet/10 text-giri-violet border border-giri-violet/20 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-giri-text" id="license">Open Source Licensing & Codebase</h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-giri-muted leading-relaxed mb-8">
            <p>
              Giri OS is free software released under the <strong className="text-giri-text">GNU General Public License version 3 or (at your option) any later version (GPL-3.0-or-later)</strong>. The operating system&apos;s build scripts, custom desktop shell scripts, Plymouth boot themes, and installer modifications are available openly for audit, study, modification, and redistribution.
            </p>
            <p>
              In accordance with GNU philosophy, all original software developed within Giri OS guarantees the four essential software freedoms: the freedom to run the program for any purpose, study how it works, redistribute copies, and improve the software and release improvements to the public.
            </p>
            <p>
              Official Giri OS branding, logos, documentation, and curated wallpapers are made available under the <strong className="text-giri-text">Creative Commons Attribution 4.0 International (CC BY 4.0)</strong> license, ensuring creators and community builders can freely share and adapt materials with appropriate attribution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/abhinavgiri45/giri-os"
              target="_blank"
              rel="noopener noreferrer"
              className="aureon-button text-xs py-2.5 px-5 inline-flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Explore OS Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://github.com/abhinavgiri45/giri-os/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="umbra-button text-xs py-2.5 px-5 inline-flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-giri-blue" />
              <span>GNU GPL v3 License</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => navigate('/developers')}
              className="umbra-button text-xs py-2.5 px-5"
            >
              <span>Developer Guide</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

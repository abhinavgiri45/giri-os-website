import React, { useState } from 'react';
import { 
  ECOSYSTEMS, 
  ECOSYSTEM_COMPARISON_MATRIX, 
  HARDWARE_PREREQUISITES, 
  ECOSYSTEM_FAQS, 
  ComparisonCriterion, 
  HardwarePrerequisite, 
  EcosystemFaqItem 
} from '../data/ecosystems';
import { EcosystemHeroVisual } from '../components/EcosystemHeroVisual';
import { EcosystemWorkflowDemo } from '../components/EcosystemWorkflowDemo';
import { InputMappingShowcase } from '../components/InputMappingShowcase';
import { StatusBadge } from '../components/StatusBadge';
import { 
  Monitor, 
  Smartphone, 
  Package, 
  ArrowRight, 
  ChevronDown 
} from 'lucide-react';

interface ApplicationEcosystemPageProps {
  navigate?: (path: string) => void;
}

export const ApplicationEcosystemPage: React.FC<ApplicationEcosystemPageProps> = ({ navigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<string>('All');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  const filteredFaqs = faqCategoryFilter === 'All' 
    ? ECOSYSTEM_FAQS 
    : ECOSYSTEM_FAQS.filter(f => f.category === faqCategoryFilter);

  return (
    <div className="relative py-24 sm:py-32">
      {/* 1. Header & Hero Presentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-giri-surface border border-giri-border backdrop-blur-md mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-giri-blue dark:bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold text-giri-muted">
            Architecture Deep Dive &bull; Multi-Ecosystem Platform
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-giri-text leading-[1.08] max-w-4xl mx-auto">
          ONE OS. <br />
          <span className="text-gradient">THREE APPLICATION WORLDS.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-giri-muted max-w-2xl mx-auto leading-relaxed">
          Windows. Android. Linux. Your applications, unified in Giri OS through dedicated compatibility subsystems, isolated containers, and a cohesive desktop interface.
        </p>

        {/* Central Interactive Visualization */}
        <div className="mt-12">
          <EcosystemHeroVisual />
        </div>
      </section>

      {/* 2. Architectural Overview & Why Three Ecosystems */}
      <section className="py-20 border-t border-giri-border bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase font-mono">
              01 &bull; Architectural Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2">
              Software Freedom Without Platform Compromise
            </h2>
            <p className="mt-4 text-sm sm:text-base text-giri-muted leading-relaxed">
              Operating system transitions traditionally force a punishing dilemma: abandon your familiar workflow software or surrender your privacy and control. Giri OS eliminates this barrier by integrating three distinct runtime technologies beneath a single, unified Giri Space desktop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-giri-text mb-2">Giri Bridge</h3>
                <p className="text-xs text-giri-muted leading-relaxed mb-4">
                  Run productivity tools, creative software, and legacy desktop applications without the heavy RAM consumption or license requirements of a virtual machine.
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-giri-border">
                <div className="flex gap-1.5">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">.EXE</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">.MSI</span>
                </div>
                {navigate && (
                  <button
                    onClick={() => navigate('/products/giri-bridge')}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold transition-colors"
                  >
                    <span>Product Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-giri-text mb-2">Giri Mobile</h3>
                <p className="text-xs text-giri-muted leading-relaxed mb-4">
                  Access millions of mobile communication, reading, streaming, and gaming applications rendered inside resizable desktop windows with Giri Smart Input Mapping.
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-giri-border">
                <div className="flex gap-1.5">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">.APK</span>
                </div>
                {navigate && (
                  <button
                    onClick={() => navigate('/products/giri-mobile')}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold transition-colors"
                  >
                    <span>Product Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-6">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-giri-text mb-2">Giri Store</h3>
                <p className="text-xs text-giri-muted leading-relaxed mb-4">
                  The rock-solid native core. 60,000+ audited Debian packages alongside sandboxed Flatpaks with cryptographically verified checksums and atomic updates.
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-giri-border">
                <div className="flex gap-1.5">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">.DEB</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">Flatpak</span>
                </div>
                {navigate && (
                  <button
                    onClick={() => navigate('/products/giri-store')}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold transition-colors"
                  >
                    <span>Product Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Windows Compatibility: Giri Bridge Deep Dive */}
      <section className="py-20 border-t border-giri-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono">
                02 &bull; Windows Compatibility
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2 mb-4">
                Giri Bridge: High-Performance Win32/Win64 Translation
              </h2>
              <p className="text-sm text-giri-muted leading-relaxed mb-6">
                Giri Bridge does not emulate Windows hardware. Instead, it intercepts Windows Win32 and Win64 API calls and translates them directly into POSIX kernel instructions and Vulkan graphics commands in real time.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                  <h4 className="text-sm font-bold text-giri-text mb-1">Prefix Isolation Guarantee</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">
                    Every installed program receives an isolated prefix directory located at <code className="font-mono text-blue-500">~/.local/share/giri-bridge/prefixes/&lt;app&gt;</code>. Registry modifications and DLL overrides remain encapsulated, eliminating system-wide instability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                  <h4 className="text-sm font-bold text-giri-text mb-1">DXVK & VKD3D Vulkan Pipeline</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">
                    Direct3D 9, 10, 11, and 12 draw calls are translated directly into low-overhead Vulkan pipeline state objects, allowing GPU-intensive applications and 3D packages to render at near-native framerates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                  <h4 className="text-sm font-bold text-giri-text mb-1">Automatic Desktop Launcher Generation</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">
                    When an installer finishes, Giri Bridge extracts the program&apos;s embedded Windows ICO resource, converts it to high-resolution PNG, and registers a standard XDG <code className="font-mono text-blue-500">.desktop</code> shortcut in Giri Space.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Capabilities Checklist */}
            <div className="lg:col-span-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-giri-border p-6 sm:p-8 backdrop-blur-xl shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-giri-border mb-6">
                <h3 className="text-lg font-bold text-giri-text flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-600" />
                  <span>Giri Bridge Capabilities</span>
                </h3>
                <span className="text-xs font-mono text-giri-muted">v0.1 Genesis Roadmap</span>
              </div>

              <div className="space-y-3">
                {ECOSYSTEMS.windows.capabilities.map((cap) => (
                  <div key={cap.id} className="p-3.5 rounded-xl bg-giri-surface/60 border border-giri-border/80 flex items-start justify-between gap-3">
                    <div>
                      <h5 className="text-xs font-bold text-giri-text">{cap.name}</h5>
                      <p className="text-[11px] text-giri-muted mt-0.5">{cap.description}</p>
                    </div>
                    <StatusBadge status={cap.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mobile Compatibility: Giri Mobile Deep Dive */}
      <section className="py-20 border-t border-giri-border bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Capabilities Checklist */}
            <div className="lg:col-span-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-giri-border p-6 sm:p-8 backdrop-blur-xl shadow-lg order-2 lg:order-1">
              <div className="flex items-center justify-between pb-4 border-b border-giri-border mb-6">
                <h3 className="text-lg font-bold text-giri-text flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-emerald-600" />
                  <span>Giri Mobile Capabilities</span>
                </h3>
                <span className="text-xs font-mono text-giri-muted">v0.1 Genesis Roadmap</span>
              </div>

              <div className="space-y-3">
                {ECOSYSTEMS.android.capabilities.map((cap) => (
                  <div key={cap.id} className="p-3.5 rounded-xl bg-giri-surface/60 border border-giri-border/80 flex items-start justify-between gap-3">
                    <div>
                      <h5 className="text-xs font-bold text-giri-text">{cap.name}</h5>
                      <p className="text-[11px] text-giri-muted mt-0.5">{cap.description}</p>
                    </div>
                    <StatusBadge status={cap.status} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Explanation */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-mono">
                03 &bull; Mobile Runtime Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2 mb-4">
                Giri Mobile: Containerized AOSP Desktop Runtime
              </h2>
              <p className="text-sm text-giri-muted leading-relaxed mb-6">
                Instead of running slow emulators that emulate foreign CPU architectures, Giri Mobile boots an Android Open Source Project (AOSP) system container directly on top of the host Linux kernel via Waydroid and LXC namespaces.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                  <h4 className="text-sm font-bold text-giri-text mb-1">Direct Kernel IPC (Binder & Ashmem)</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">
                    Android services communicate with host graphics and audio daemons via Linux kernel IPC drivers (<code className="font-mono text-emerald-500">binder_linux</code> and <code className="font-mono text-emerald-500">ashmem_linux</code>) compiled into the Giri OS kernel.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                  <h4 className="text-sm font-bold text-giri-text mb-1">Mesa DRI3 Hardware GPU Acceleration</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">
                    Graphics rendering commands pass directly to the host GPU using Direct Rendering Infrastructure (DRI3), delivering silky smooth 60 FPS mobile gaming without CPU software rasterization.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                  <h4 className="text-sm font-bold text-giri-text mb-1">Desktop Windowing Integration</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">
                    Android activities are projected as normal desktop windows. They can be freely resized, snapped to screen edges, minimized to Giri Dock, and managed just like native Linux applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Native Linux Ecosystem: Giri Store Deep Dive */}
      <section className="py-20 border-t border-giri-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest text-violet-600 dark:text-violet-400 uppercase font-mono">
                04 &bull; Native Linux Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2 mb-4">
                Giri Store: Debian APT & Universal Flatpak Hub
              </h2>
              <p className="text-sm text-giri-muted leading-relaxed mb-6">
                The native backbone of Giri OS combines the absolute stability of Debian 12 Bookworm with the agility and sandbox security of Flathub.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                  <h4 className="text-sm font-bold text-giri-text mb-1">Debian APT Repository Integration</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">
                    Direct access to over 60,000 pre-compiled native packages. Every binary is cryptographically verified against official Debian archive keys for ironclad integrity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                  <h4 className="text-sm font-bold text-giri-text mb-1">Universal Flatpak Sandboxing</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">
                    Run the newest versions of Discord, Steam, Blender, and LibreOffice in unprivileged bubblewrap containers with fine-grained portal permissions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-giri-surface border border-giri-border">
                  <h4 className="text-sm font-bold text-giri-text mb-1">Zero Commercial Telemetry or Ads</h4>
                  <p className="text-xs text-giri-muted leading-relaxed">
                    Giri Store contains zero sponsored banners, tracking beacons, or account lock-ins. It is completely open-source and respects user attention.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Capabilities Checklist */}
            <div className="lg:col-span-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-giri-border p-6 sm:p-8 backdrop-blur-xl shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-giri-border mb-6">
                <h3 className="text-lg font-bold text-giri-text flex items-center gap-2">
                  <Package className="w-5 h-5 text-violet-600" />
                  <span>Giri Store Capabilities</span>
                </h3>
                <span className="text-xs font-mono text-giri-muted">v0.1 Genesis Status</span>
              </div>

              <div className="space-y-3">
                {ECOSYSTEMS.linux.capabilities.map((cap) => (
                  <div key={cap.id} className="p-3.5 rounded-xl bg-giri-surface/60 border border-giri-border/80 flex items-start justify-between gap-3">
                    <div>
                      <h5 className="text-xs font-bold text-giri-text">{cap.name}</h5>
                      <p className="text-[11px] text-giri-muted mt-0.5">{cap.description}</p>
                    </div>
                    <StatusBadge status={cap.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Input Mapping Showcase */}
      <section className="py-20 border-t border-giri-border bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InputMappingShowcase />
        </div>
      </section>

      {/* 7. Unified Installation Demonstration */}
      <section className="py-20 border-t border-giri-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EcosystemWorkflowDemo />
        </div>
      </section>

      {/* 8. Technical Comparison Matrix */}
      <section className="py-20 border-t border-giri-border bg-giri-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase font-mono">
              05 &bull; Technical Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2">
              Cross-Ecosystem Architecture Matrix
            </h2>
            <p className="mt-4 text-sm text-giri-muted leading-relaxed">
              Examine the engineering trade-offs, isolation models, audio/video pipelines, and performance profiles across all three subsystems.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-giri-border bg-white dark:bg-slate-900 shadow-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-giri-surface border-b border-giri-border text-giri-text font-bold uppercase tracking-wider">
                  <th className="py-4 px-5">Architectural Dimension</th>
                  <th className="py-4 px-5 text-blue-600 dark:text-blue-400">Giri Bridge</th>
                  <th className="py-4 px-5 text-emerald-600 dark:text-emerald-400">Giri Mobile</th>
                  <th className="py-4 px-5 text-violet-600 dark:text-violet-400">Giri Store</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-giri-border/70">
                {ECOSYSTEM_COMPARISON_MATRIX.map((row: ComparisonCriterion) => (
                  <tr key={row.id} className="hover:bg-giri-surface/40 transition-colors">
                    <td className="py-4 px-5 font-semibold text-giri-text">
                      <div>{row.name}</div>
                      <div className="text-[10px] font-mono text-giri-muted font-normal mt-0.5">{row.description}</div>
                    </td>
                    <td className="py-4 px-5 text-giri-muted leading-relaxed">
                      {row.giriBridge}
                    </td>
                    <td className="py-4 px-5 text-giri-muted leading-relaxed">
                      {row.giriMobile}
                    </td>
                    <td className="py-4 px-5 text-giri-muted leading-relaxed font-medium">
                      {row.giriStore}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Hardware Prerequisites & System Specifications */}
      <section className="py-20 border-t border-giri-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase font-mono">
              06 &bull; Hardware Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2">
              Hardware Acceleration & Resource Profiles
            </h2>
            <p className="mt-4 text-sm text-giri-muted leading-relaxed">
              Verify your system capabilities for optimal compatibility and performance across each ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HARDWARE_PREREQUISITES.map((spec: HardwarePrerequisite, idx: number) => (
              <div key={idx} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-giri-text mb-4 pb-2 border-b border-giri-border">
                    {spec.ecosystem}
                  </h3>

                  <div className="space-y-3 text-xs mb-6">
                    <div>
                      <span className="block text-giri-muted font-medium">Minimum RAM:</span>
                      <span className="font-mono font-bold text-giri-blue dark:text-cyan-400">{spec.minRam}</span>
                    </div>
                    <div>
                      <span className="block text-giri-muted font-medium">Recommended RAM:</span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{spec.recRam}</span>
                    </div>
                    <div>
                      <span className="block text-giri-muted font-medium">CPU Virtualization:</span>
                      <span className="text-giri-text">{spec.cpuRequirements}</span>
                    </div>
                    <div>
                      <span className="block text-giri-muted font-medium">GPU Acceleration:</span>
                      <span className="text-giri-text">{spec.gpuRequirements}</span>
                    </div>
                    <div>
                      <span className="block text-giri-muted font-medium">Base Storage:</span>
                      <span className="font-mono text-giri-text">{spec.diskSpace}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-giri-surface border border-giri-border text-[11px] text-giri-muted leading-relaxed">
                  <span className="font-bold text-giri-text block mb-1">Architecture Note:</span>
                  {spec.notes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions (FAQ) */}
      <section className="py-20 border-t border-giri-border bg-giri-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase font-mono">
              07 &bull; Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-giri-text mt-2">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-giri-muted">
              Technical answers regarding software compatibility, gaming limitations, and security boundaries.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['All', 'General', 'Windows', 'Android', 'Linux', 'Performance'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFaqCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    faqCategoryFilter === cat
                      ? 'bg-giri-blue text-white shadow-sm'
                      : 'bg-giri-surface border border-giri-border text-giri-muted hover:text-giri-text'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq: EcosystemFaqItem, index: number) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-giri-border bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-giri-blue"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-giri-text">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-giri-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-giri-muted leading-relaxed border-t border-giri-border/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Final Call to Action */}
      <section className="py-20 border-t border-giri-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-giri-text tracking-tight">
            Ready to Experience Giri OS?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-giri-muted leading-relaxed">
            Download the official Giri OS 0.1 Genesis ISO or explore the open-source architecture in our developer documentation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {navigate && (
              <button
                onClick={() => navigate('/downloads')}
                className="aureon-button text-sm py-3 px-6"
              >
                <span>Download Giri OS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {navigate && (
              <button
                onClick={() => navigate('/docs')}
                className="umbra-button text-sm py-3 px-6"
              >
                <span>Read Documentation</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

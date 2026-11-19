export interface EditionItem {
  id: string;
  name: string;
  version: string;
  badge: string;
  description: string;
  targetAudience: string;
  architecture: string;
  kernel: string;
  baseDistribution: string;
  desktopEnvironment: string;
  minimumRequirements: {
    cpu: string;
    ram: string;
    storage: string;
    display: string;
  };
  recommendedRequirements: {
    cpu: string;
    ram: string;
    storage: string;
    display: string;
  };
  includedSoftware: string[];
  status: 'Current Active Development' | 'Planned' | 'Under Architectural Review';
}

export const GIRI_EDITIONS: EditionItem[] = [
  {
    id: 'standard',
    name: 'Giri OS Standard Edition',
    version: '0.1 Genesis',
    badge: 'Primary Flagship',
    description: 'The definitive Giri OS desktop experience. Crafted for everyday productivity, programming, content consumption, and creative workflows with a streamlined user interface and rock-solid Debian foundation.',
    targetAudience: 'Everyday users, developers, students, and professionals seeking an intuitive, bloat-free Linux desktop.',
    architecture: 'x86_64 (64-bit AMD/Intel)',
    kernel: 'Linux 6.1 LTS Kernel',
    baseDistribution: 'Debian 12 (Bookworm)',
    desktopEnvironment: 'Giri Space + Openbox Composited Shell',
    minimumRequirements: {
      cpu: '2.0 GHz Dual-Core 64-bit processor',
      ram: '2 GB RAM (4 GB recommended for multitasking)',
      storage: '20 GB free disk space',
      display: '1024 x 768 resolution'
    },
    recommendedRequirements: {
      cpu: 'Quad-Core 64-bit processor (Intel Core i5 / AMD Ryzen 5 or higher)',
      ram: '8 GB RAM',
      storage: '50 GB SSD storage',
      display: '1920 x 1080 Full HD or higher'
    },
    includedSoftware: [
      'Giri Space desktop shell with panel applets',
      'Giri Dock application manager',
      'Calamares graphical system installer with OEM setup',
      'Custom Giri Plymouth boot splash engine',
      'Giri GRUB2 theme with HiDPI display auto-scaling',
      'Essential core utilities and terminal suite'
    ],
    status: 'Current Active Development'
  },
  {
    id: 'developer',
    name: 'Giri OS Developer Edition',
    version: '0.2 Proxima (Planned)',
    badge: 'Future Target',
    description: 'An engineered workstation edition tailored for software architects, systems programmers, and DevOps professionals with out-of-the-box container tooling, compiler toolchains, and kernel debugging hooks.',
    targetAudience: 'Software engineers, web developers, systems programmers, and Linux power users.',
    architecture: 'x86_64 / ARM64 (Future)',
    kernel: 'Linux 6.x LTS with Low-Latency patches',
    baseDistribution: 'Debian 12 (Bookworm) / Sid tracking option',
    desktopEnvironment: 'Giri Space Dev Mode (Tiling window manager extensions)',
    minimumRequirements: {
      cpu: 'Quad-Core 64-bit processor',
      ram: '8 GB RAM',
      storage: '60 GB SSD storage',
      display: '1920 x 1080 resolution'
    },
    recommendedRequirements: {
      cpu: '8-Core modern CPU (Intel Core i7/i9 or AMD Ryzen 7/9)',
      ram: '16 GB to 32 GB RAM',
      storage: '128 GB NVMe SSD',
      display: 'Dual 1440p or 4K displays'
    },
    includedSoftware: [
      'Pre-configured Docker & Podman container engines',
      'LLVM, GCC, Rust, Python, and Node.js toolchains',
      'Giri Dev Center setup utility',
      'Git credential helpers and SSH keyring management',
      'Performance profiling utilities (perf, btop, htop)'
    ],
    status: 'Planned'
  },
  {
    id: 'cloud',
    name: 'Giri OS Cloud & Minimal',
    version: '0.3 Pulsar (Conceptual)',
    badge: 'Conceptual',
    description: 'A headless, ultra-minimal base image optimized for virtual machines, container hosts, and home lab servers with negligible idle memory consumption and cloud-init readiness.',
    targetAudience: 'Sysadmins, cloud architects, and home-server enthusiasts.',
    architecture: 'x86_64 / ARM64',
    kernel: 'Linux 6.1 LTS Server Profile',
    baseDistribution: 'Debian Minimal Base',
    desktopEnvironment: 'Headless (No GUI / SSH Console)',
    minimumRequirements: {
      cpu: '1 vCPU 64-bit',
      ram: '512 MB RAM',
      storage: '5 GB virtual disk space',
      display: 'Headless / Serial Console'
    },
    recommendedRequirements: {
      cpu: '2+ vCPU',
      ram: '2 GB+ RAM',
      storage: '20 GB+ SSD',
      display: 'SSH / Web Terminal'
    },
    includedSoftware: [
      'OpenSSH secure daemon',
      'Cloud-init metadata provisioning',
      'Systemd-networkd zero-overhead networking',
      'Automatic security updates module'
    ],
    status: 'Under Architectural Review'
  }
];

export type MilestoneStatus = 'Completed' | 'In Progress' | 'Planned';

export interface MilestoneItem {
  id: string;
  quarter: string;
  title: string;
  summary: string;
  status: MilestoneStatus;
  progressPercent: number;
  verificationEvidence?: string;
  deliverables: {
    name: string;
    completed: boolean;
  }[];
}

export const GIRI_ROADMAP: MilestoneItem[] = [
  {
    id: 'm1-base',
    quarter: 'Milestone 1 — Q3 2026',
    title: 'Debian Base & Live-Build Framework',
    summary: 'Establish the core operating system architecture, Debian 12 Bookworm live-build configuration, chroot automation, and bootable hybrid ISO creation.',
    status: 'Completed',
    progressPercent: 100,
    verificationEvidence: 'Live-build scripts implemented in `build/live-build`, ISO creation verified via `scripts/build-iso.sh`.',
    deliverables: [
      { name: 'Debian 12 Bookworm 64-bit base rootfs', completed: true },
      { name: 'Automated live-build package hook system', completed: true },
      { name: 'Hybrid BIOS + UEFI bootable ISO generation', completed: true },
      { name: 'Core systemd configuration & squashfs compression', completed: true }
    ]
  },
  {
    id: 'm2-branding',
    quarter: 'Milestone 2 — Q4 2026',
    title: 'Giri Branding, Plymouth & Grub Integration',
    summary: 'Design and embed official Giri OS orbital vector identity, Plymouth boot animation engine, custom high-resolution Grub theme, and system default wallpapers.',
    status: 'Completed',
    progressPercent: 100,
    verificationEvidence: 'Assets validated in `boot/plymouth/giri-genesis`, `boot/grub/themes/giri`, and `branding/wallpapers`.',
    deliverables: [
      { name: 'Official orbital emblem vector logo and color token specifications', completed: true },
      { name: 'Cinematic Plymouth boot splash with pulsing orbital emblem', completed: true },
      { name: 'HiDPI GRUB2 bootloader theme with custom selection boxes', completed: true },
      { name: '12 high-resolution official desktop wallpaper compositions', completed: true }
    ]
  },
  {
    id: 'm3-installer',
    quarter: 'Milestone 3 — Q4 2026',
    title: 'Calamares Graphical Installer & Partitioning',
    summary: 'Customize the Calamares installer with Giri OS visual branding, automated disk partitioning, timezone selection, user creation, and post-install hooks.',
    status: 'Completed',
    progressPercent: 100,
    verificationEvidence: 'Calamares branding module validated in `installer/calamares/modules/branding.desc` and QSS stylesheets.',
    deliverables: [
      { name: 'Custom Calamares dark QSS stylesheet matching Giri palette', completed: true },
      { name: 'Automated EFI and root partition layout presets', completed: true },
      { name: 'Post-install user setup and localization modules', completed: true },
      { name: 'Live environment desktop installer launcher icon', completed: true }
    ]
  },
  {
    id: 'm4-shell',
    quarter: 'Milestone 4 — Current',
    title: 'Giri Space Desktop Shell & Panel Architecture',
    summary: 'Develop the native Giri Space desktop environment shell, integrating top panel status indicators, audio flyout, workspace switcher, and Giri Dock.',
    status: 'In Progress',
    progressPercent: 70,
    verificationEvidence: 'Shell architecture active in `desktop/giri-space/shell/giri_space.py` and Openbox `rc.xml` configuration.',
    deliverables: [
      { name: 'Openbox compositor & window decoration tuning', completed: true },
      { name: 'Giri Dock application launcher shelf', completed: true },
      { name: 'Top status bar with battery, network, clock applets', completed: true },
      { name: 'Application search indexer & launcher refinement', completed: false }
    ]
  },
  {
    id: 'm5-stabilization',
    quarter: 'Milestone 5 — Current',
    title: 'Genesis 0.1 ISO Stabilization & Virtualization Validation',
    summary: 'Rigorous VM validation on VirtualBox, VMware, and QEMU/KVM, addressing display server handoffs, audio daemon stability, and installer edge cases.',
    status: 'In Progress',
    progressPercent: 65,
    verificationEvidence: 'Branch `feature/genesis-stabilization` tracking live corrective audits and VM guest test passes.',
    deliverables: [
      { name: 'VirtualBox Guest Additions auto-integration', completed: true },
      { name: 'Display resolution auto-negotiation on VM boot', completed: true },
      { name: 'Clean Plymouth to Xorg desktop transition without flashing', completed: false },
      { name: 'End-to-end VM installation pass verification test suite', completed: false }
    ]
  },
  {
    id: 'm6-control-center',
    quarter: 'Milestone 6 — Q1 2027',
    title: 'Giri Control Center & Quick Settings',
    summary: 'Unified flyout for volume sliders, network connections, Bluetooth discovery, night light temperature, and system power management.',
    status: 'Planned',
    progressPercent: 0,
    deliverables: [
      { name: 'PipeWire audio sink and source selector flyout', completed: false },
      { name: 'NetworkManager Wi-Fi / VPN drawer', completed: false },
      { name: 'Night color temperature scheduler', completed: false },
      { name: 'Power profile selector (Battery Saver, Balanced, Performance)', completed: false }
    ]
  },
  {
    id: 'm7-store',
    quarter: 'Milestone 7 — Q2 2027',
    title: 'Giri Store & Flatpak Package Management',
    summary: 'Curated graphical software center supporting sandboxed Flatpak installations, Debian APT packages, and automatic update scheduling.',
    status: 'Planned',
    progressPercent: 0,
    deliverables: [
      { name: 'Flathub repository integration backend', completed: false },
      { name: 'Curated app categories (Developer, Design, Office, Games)', completed: false },
      { name: 'Fine-grained permission toggles for webcam, mic, filesystem', completed: false },
      { name: 'Background non-disruptive update caching', completed: false }
    ]
  },
  {
    id: 'm8-compat',
    quarter: 'Milestone 8 — Q2 2027',
    title: 'Gaming & Windows Software Compatibility',
    summary: 'Streamline Proton, Wine, and DXVK setup to provide seamless execution of Windows productivity utilities and Steam games.',
    status: 'Planned',
    progressPercent: 0,
    deliverables: [
      { name: 'One-click Wine container configuration wizard', completed: false },
      { name: 'Vulkan and Mesa GPU driver verification engine', completed: false },
      { name: 'GameMode CPU scheduling daemon integration', completed: false },
      { name: 'Controller autoconfig for Sony and Xbox gamepads', completed: false }
    ]
  },
  {
    id: 'm9-backup',
    quarter: 'Milestone 9 — Q3 2027',
    title: 'Giri Backup & Point-in-Time System Recovery',
    summary: 'Instant Btrfs snapshot management accessible directly from the Giri GRUB theme for zero-downtime rollbacks after problematic updates.',
    status: 'Planned',
    progressPercent: 0,
    deliverables: [
      { name: 'Automated pre-update snapshot creation', completed: false },
      { name: 'Grub bootloader sub-menu for booting historical snapshots', completed: false },
      { name: 'Desktop GUI for scheduling incremental backups', completed: false },
      { name: 'Encrypted USB external drive backup archive export', completed: false }
    ]
  },
  {
    id: 'm10-rc',
    quarter: 'Milestone 10 — Q3/Q4 2027',
    title: 'Release Candidate (Genesis 0.1 RC1) & Public ISO Launch',
    summary: 'Public release validation, community testing bug bounty, verified ISO checksum publication on GitHub Releases, and official installer media guides.',
    status: 'Planned',
    progressPercent: 0,
    deliverables: [
      { name: 'Multi-hardware bare metal test matrix validation (Intel/AMD)', completed: false },
      { name: 'Cryptographic GPG key signing of release checksums', completed: false },
      { name: 'Official GitHub Releases hosting for public ISO images', completed: false },
      { name: 'Public feedback and bug triage forum launch', completed: false }
    ]
  }
];

export type FeatureStatus = 'Available' | 'In Development' | 'Planned';

export interface FeatureItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: FeatureStatus;
  category: 'Desktop Experience' | 'System Architecture' | 'Productivity' | 'Ecosystem';
  icon: string;
  highlights: string[];
}

export const GIRI_FEATURES: FeatureItem[] = [
  {
    id: 'giri-space',
    name: 'Giri Space',
    tagline: 'Modern, modular desktop environment shell',
    description: 'The core graphical environment of Giri OS, integrating top bar telemetry, dynamic workspace management, and seamless window orchestration tailored for keyboard and mouse efficiency.',
    status: 'In Development',
    category: 'Desktop Experience',
    icon: 'LayoutGrid',
    highlights: [
      'Lightweight memory footprint (<350MB at idle)',
      'Built upon proven Openbox window management mechanics',
      'Configurable panel applets and system tray',
      'Fluid workspace switching with trackpad and keyboard shortcuts'
    ]
  },
  {
    id: 'giri-dock',
    name: 'Giri Dock',
    tagline: 'Fluid application shelf & running app manager',
    description: 'An elegant, responsive application dock providing rapid access to pinned essentials, active running processes, and window group previews with subtle glassmorphic styling.',
    status: 'Available',
    category: 'Desktop Experience',
    icon: 'Layers',
    highlights: [
      'Dynamic magnification and hover illumination',
      'Active application dot indicators',
      'Multi-monitor intelligent positioning',
      'Drag-and-drop launcher pinning'
    ]
  },
  {
    id: 'giri-launcher',
    name: 'Giri Launcher',
    tagline: 'Fuzzy-search application indexer & runner',
    description: 'A focused, full-screen and overlay application launcher with millisecond keystroke response, application categorization, and quick calculator/command execution.',
    status: 'In Development',
    category: 'Desktop Experience',
    icon: 'Search',
    highlights: [
      'Sub-5ms fuzzy search across all installed binaries',
      'Category filtering: Internet, Graphics, Dev, System, Utilities',
      'Recent apps and pinned favorite prioritization',
      'Terminal command runner mode'
    ]
  },
  {
    id: 'giri-control-center',
    name: 'Giri Control Center',
    tagline: 'Unified hardware, audio & network flyout',
    description: 'Consolidated quick-toggle control panel for volume sliders, audio sink selection, Wi-Fi / Ethernet connections, Bluetooth peripherals, and display brightness.',
    status: 'In Development',
    category: 'Desktop Experience',
    icon: 'Sliders',
    highlights: [
      'PulseAudio / PipeWire audio routing flyout',
      'NetworkManager Wi-Fi scanner and connection tray',
      'Night-light and display scaling controls',
      'Battery percentage and power profile switching'
    ]
  },
  {
    id: 'giri-plymouth',
    name: 'Giri Plymouth Boot Engine',
    tagline: 'Cinematic splash animation from BIOS to Desktop',
    description: 'Custom animated boot splash utilizing Giri OS’s orbital geometric emblem with smooth pulsing progress indicators and clean kernel handoff.',
    status: 'Available',
    category: 'System Architecture',
    icon: 'Sparkles',
    highlights: [
      'Flicker-free kernel DRM/KMS graphics handoff',
      'Orbital electric blue & violet illuminated emblem',
      'Custom progress bar with subtle glow',
      'Full resolution auto-detection on UEFI systems'
    ]
  },
  {
    id: 'giri-grub',
    name: 'Giri Grub Bootloader',
    tagline: 'High-resolution graphical boot menu',
    description: 'Custom GRUB2 theme featuring high-contrast typography, electric cyan selection boxes, and official Giri OS branding on boot selection.',
    status: 'Available',
    category: 'System Architecture',
    icon: 'Terminal',
    highlights: [
      '1080p and 4K high-DPI scaling support',
      'Subtle electric blue highlight frame',
      'Dual-boot OS icon auto-detection',
      'Safe recovery mode entry point'
    ]
  },
  {
    id: 'giri-files',
    name: 'Giri Files',
    tagline: 'Fast, clean file browser with dual-pane support',
    description: 'A streamlined file management experience designed for speed, tabbed navigation, integrated terminal drawer, and cloud/network share mounts.',
    status: 'Planned',
    category: 'Productivity',
    icon: 'FolderTree',
    highlights: [
      'Instant folder traversal with cached previews',
      'Built-in archive compression (tar, zip, 7z)',
      'Split-view dual-pane workflow',
      'Deep bookmarks and tagging support'
    ]
  },
  {
    id: 'giri-store',
    name: 'Giri Store',
    tagline: 'Curated software discovery & Flatpak manager',
    description: 'A modern, secure application store offering verified open-source software, sandboxed Flatpaks, and native Debian repository packages with one-click installation.',
    status: 'Planned',
    category: 'Ecosystem',
    icon: 'ShoppingBag',
    highlights: [
      'Sandboxed Flatpak permission manager',
      'Curated collections for designers, engineers, and creators',
      'Delta updates for minimal data consumption',
      'Zero telemetry or promotional adware'
    ]
  },
  {
    id: 'giri-dev-center',
    name: 'Giri Dev Center',
    tagline: 'One-click workstation toolchains & SDKs',
    description: 'Dedicated developer utility for bootstrapping Node.js, Python, Rust, Go, Docker, and GCC development environments with curated configuration presets.',
    status: 'Planned',
    category: 'Productivity',
    icon: 'Code',
    highlights: [
      'Automated container runtime provisioning',
      'Pre-configured zsh and shell development themes',
      'Git credential helpers and SSH key management',
      'VS Code / Neovim quick setup bundles'
    ]
  },
  {
    id: 'giri-bridge',
    name: 'Giri Bridge',
    tagline: 'Cross-device file sharing & clipboard synchronization',
    description: 'Local network peer-to-peer sharing utility allowing encrypted file transfers, shared clipboards, and notification mirror between phone and PC.',
    status: 'Planned',
    category: 'Ecosystem',
    icon: 'Share2',
    highlights: [
      'End-to-end encrypted Wi-Fi direct transfer',
      'Universal copy-paste clipboard sharing',
      'SMS and notification reply tray integration',
      'Virtual input and media playback control'
    ]
  },
  {
    id: 'giri-gaming',
    name: 'Giri Gaming Hub',
    tagline: 'Vulkan optimization & game launcher',
    description: 'Built-in gaming launcher with automated Vulkan / Mesa shader pre-caching, GameMode CPU scheduling, and Proton compatibility management for Steam and Heroic games.',
    status: 'Planned',
    category: 'Desktop Experience',
    icon: 'Gamepad2',
    highlights: [
      'Feral GameMode CPU governor tuning',
      'MangoHud overlay toggle support',
      'Controller mapper for DualSense and Xbox gamepads',
      'Wine/Proton container version selector'
    ]
  },
  {
    id: 'giri-backup',
    name: 'Giri Backup',
    tagline: 'Atomic snapshots & point-in-time recovery',
    description: 'Non-destructive system restore points using Btrfs snapshots and Timeshift integration, allowing safe updates and instant rollbacks from GRUB.',
    status: 'Planned',
    category: 'System Architecture',
    icon: 'HardDrive',
    highlights: [
      'One-click pre-update system snapshot creation',
      'Bootable rollback directly from Giri Grub theme',
      'Incremental encrypted offsite backup support',
      'Exclusion rules for personal documents and media'
    ]
  },
  {
    id: 'giri-ai',
    name: 'Giri AI',
    tagline: 'Private, on-device local intelligence engine',
    description: 'An optional, strictly private local assistant powered by small language models (SLMs) running locally via Vulkan/CPU for desktop workflow automation and semantic file search.',
    status: 'Planned',
    category: 'Ecosystem',
    icon: 'Bot',
    highlights: [
      '100% offline, zero data transmitted off machine',
      'Semantic local file and document search',
      'Natural-language terminal command explanation',
      'Complete user kill-switch and modular uninstallation'
    ]
  }
];

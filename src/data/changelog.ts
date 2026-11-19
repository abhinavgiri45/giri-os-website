export interface ChangelogRelease {
  version: string;
  codename: string;
  date: string;
  isLatest: boolean;
  status: 'In Stabilization' | 'Released' | 'Archived';
  summary: string;
  newFeatures: string[];
  improvements: string[];
  fixes: string[];
  knownIssues: string[];
}

export const GIRI_CHANGELOG: ChangelogRelease[] = [
  {
    version: '0.1',
    codename: 'Genesis',
    date: 'November 2026 (Active Development)',
    isLatest: true,
    status: 'In Stabilization',
    summary: 'The inaugural milestone build of Giri OS, establishing the complete Debian 12 Bookworm live-build foundation, official orbital geometric visual branding, Plymouth boot engine, GRUB2 theme, and initial Giri Space desktop shell.',
    newFeatures: [
      'Giri Plymouth boot animation featuring pulsing orbital emblem with zero-flicker kernel handoff',
      'High-resolution Giri GRUB2 theme with HiDPI display auto-scaling and electric cyan selection frames',
      'Calamares graphical system installer with custom dark stylesheet and automated partitioning profiles',
      'Giri Space desktop shell foundation featuring top telemetry panel and Openbox composited window manager',
      'Giri Dock application manager with magnification and running task indicators',
      '12 official 4K/UHD desktop wallpapers curated for the Giri color palette (Midnight Navy, Electric Blue, Violet)'
    ],
    improvements: [
      'Configured Debian 12 (Bookworm) live-build hooks with squashfs xz compression for optimized ISO footprint',
      'Hardened base system packages with essential networking tools (NetworkManager, wpa_supplicant)',
      'Pre-configured font rendering with Subpixel geometry and anti-aliasing for Inter and JetBrains Mono',
      'VirtualBox Guest Additions integration hook for automatic resolution scaling on virtual machines'
    ],
    fixes: [
      'Resolved Plymouth splash resolution tearing on UEFI systems with non-standard aspect ratios',
      'Corrected Calamares branding module configuration paths during live chroot execution',
      'Fixed Openbox window decoration borders for seamless visual harmony with dark panel applets'
    ],
    knownIssues: [
      'Application launcher search index is currently undergoing optimization for sub-5ms latency; certain desktop entries require manual shell execution.',
      'Multi-monitor configurations require xrandr configuration persistence in ~/.xprofile on specific legacy GPUs.',
      'ISO image is currently undergoing stabilization audits on branch `feature/genesis-stabilization` and is not yet published for production downloads.'
    ]
  }
];

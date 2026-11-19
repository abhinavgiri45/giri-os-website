export interface SystemTelemetry {
  currentMilestone: string;
  milestonePhase: string;
  kernelVersion: string;
  baseDistro: string;
  activeBranch: string;
  osRepository: string;
  websiteRepository: string;
  buildStatus: 'Passing (Internal Tests)' | 'Running' | 'Failed';
  vmTestingStatus: 'Verified (VirtualBox / QEMU)' | 'In Progress' | 'Untested';
  bareMetalStatus: 'Scheduled for Release Candidate' | 'In Progress' | 'Verified';
  lastAuditDate: string;
  trackedIssuesCount: number;
}

export const GIRI_STATUS_DATA: SystemTelemetry = {
  currentMilestone: 'Genesis 0.1 Stabilization',
  milestonePhase: 'Milestone 5 of 10',
  kernelVersion: 'Linux 6.1.0-26-amd64 (Debian 12 Bookworm)',
  baseDistro: 'Debian GNU/Linux 12 (Bookworm)',
  activeBranch: 'feature/genesis-stabilization',
  osRepository: 'abhinavgiri45/giri-os',
  websiteRepository: 'abhinavgiri45/giri-os-website',
  buildStatus: 'Passing (Internal Tests)',
  vmTestingStatus: 'Verified (VirtualBox / QEMU)',
  bareMetalStatus: 'Scheduled for Release Candidate',
  lastAuditDate: 'November 2026',
  trackedIssuesCount: 2
};

export const RECENT_COMMITS = [
  {
    hash: 'a7f3c19',
    message: 'Stabilize live-build ISO configuration hooks and Calamares branding',
    branch: 'feature/genesis-stabilization',
    date: 'Recent'
  },
  {
    hash: 'e4b9d02',
    message: 'Fine-tune Giri Space desktop shell panel applets and battery metrics',
    branch: 'feature/genesis-stabilization',
    date: 'Recent'
  },
  {
    hash: '8c21a4f',
    message: 'Integrate Giri Plymouth boot animation and high-DPI Grub theme',
    branch: 'feature/genesis-stabilization',
    date: 'Recent'
  },
  {
    hash: '3d8e5b1',
    message: 'Initial project setup: debian live-build framework with Openbox shell',
    branch: 'main',
    date: 'Initial'
  }
];

export const TRACKED_BUGS = [
  {
    id: 'GIRI-BUG-01',
    severity: 'Medium',
    component: 'Giri Space Launcher',
    description: 'Fuzzy search indexer optimization for sub-5ms lookup latency across extensive desktop menus.',
    status: 'In Progress (Active Refactoring)'
  },
  {
    id: 'GIRI-BUG-02',
    severity: 'Low',
    component: 'Multi-Monitor Display',
    description: 'Automatic xrandr display persistence across cold reboots on legacy discrete GPUs.',
    status: 'Investigating'
  }
];

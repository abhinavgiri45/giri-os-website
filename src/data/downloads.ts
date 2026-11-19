export interface DownloadSpec {
  edition: string;
  version: string;
  status: 'In Development — Coming Soon' | 'Released';
  releaseDate: string;
  architecture: string;
  estimatedSize: string;
  sha256Placeholder: string;
  githubReleasesUrl: string;
  systemRequirements: {
    minCpu: string;
    recCpu: string;
    minRam: string;
    recRam: string;
    minStorage: string;
    recStorage: string;
    gpu: string;
  };
  installationSteps: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const GIRI_DOWNLOADS_DATA: DownloadSpec = {
  edition: 'Standard Edition',
  version: '0.1 Genesis',
  status: 'In Development — Coming Soon',
  releaseDate: 'Post-Stabilization Validation',
  architecture: 'x86_64 (64-bit Intel & AMD)',
  estimatedSize: '~2.4 GB',
  sha256Placeholder: 'SHA-256 checksum will be published alongside verified GitHub release assets.',
  githubReleasesUrl: 'https://github.com/abhinavgiri45/giri-os/releases',
  systemRequirements: {
    minCpu: 'Dual-core 64-bit 2.0 GHz processor',
    recCpu: 'Quad-core 64-bit processor (Intel Core i5 / AMD Ryzen 5 or higher)',
    minRam: '2 GB RAM',
    recRam: '8 GB RAM',
    minStorage: '20 GB free disk space',
    recStorage: '50 GB SSD storage',
    gpu: 'VGA / HDMI capable graphics card with 1024x768 resolution minimum (1080p recommended)'
  },
  installationSteps: [
    {
      step: 1,
      title: 'Download & Verify Checksum',
      description: 'Once released, obtain the official ISO from the verified GitHub Releases page. Verify the cryptographic SHA-256 hash against the published digest to guarantee image integrity.'
    },
    {
      step: 2,
      title: 'Flash to USB Drive',
      description: 'Use a reliable flashing tool such as balenaEtcher, Rufus (in DD mode), or Linux dd utility (`sudo dd if=giri-os.iso of=/dev/sdX bs=4M status=progress`) to write to a 4GB+ USB drive.'
    },
    {
      step: 3,
      title: 'Boot into Live Environment',
      description: 'Insert the USB drive into target hardware or mount the ISO in a virtual machine (VirtualBox, VMware, QEMU). Select boot from USB in your UEFI/BIOS menu.'
    },
    {
      step: 4,
      title: 'Experience or Install',
      description: 'Test drive Giri Space in the live session without touching your hard drive, or launch the Calamares installer icon on the desktop to proceed with permanent system installation.'
    }
  ]
};

export interface DeveloperResource {
  id: string;
  title: string;
  summary: string;
  category: 'Build & Tooling' | 'Contributing' | 'Architecture';
  codeSnippet?: string;
  details: string;
}

export const GIRI_DEV_RESOURCES: DeveloperResource[] = [
  {
    id: 'build-iso',
    title: 'Building Giri OS ISO from Source',
    summary: 'Compile the complete Giri OS live installer ISO using the Debian live-build framework.',
    category: 'Build & Tooling',
    codeSnippet: `# Clone the operating system repository
git clone https://github.com/abhinavgiri45/giri-os.git
cd giri-os

# Ensure required host dependencies are installed (Debian/Ubuntu host)
sudo apt update && sudo apt install -y live-build debootstrap xorriso squashfs-tools

# Execute the automated build script with root privileges
sudo ./scripts/build-iso.sh

# The finished bootable ISO is generated at:
# ./build/giri-os-0.1-genesis-amd64.iso`,
    details: 'The build script configures a Debian 12 Bookworm chroot environment, injects Giri branding hooks, compiles Openbox and Giri Space shell components, installs the customized Calamares installer, and creates an EFI-hybrid bootable ISO image.'
  },
  {
    id: 'dev-env',
    title: 'Development Environment & VM Setup',
    summary: 'Spin up a quick QEMU test bench to validate live ISO changes without slow physical reboots.',
    category: 'Build & Tooling',
    codeSnippet: `# Launch ISO in QEMU with KVM acceleration and 4GB RAM
qemu-system-x86_64 \\
  -enable-kvm \\
  -m 4096 \\
  -smp 4 \\
  -vga virtio \\
  -display gtk,gl=on \\
  -cdrom ./build/giri-os-0.1-genesis-amd64.iso`,
    details: 'Testing within QEMU or VirtualBox allows rapid iteration on live chroot hooks, Plymouth splash animations, and Calamares configuration without altering your local system partition.'
  },
  {
    id: 'repo-structure',
    title: 'Operating System Repository Layout',
    summary: 'Understand the directory architecture of the primary `giri-os` repository.',
    category: 'Architecture',
    details: `
- \`boot/grub/\`: GRUB2 bootloader theme assets, fonts, and menu box coordinates.
- \`boot/plymouth/\`: Giri Genesis Plymouth boot animation script and vector sprite frames.
- \`branding/\`: Official four-pane vector SVGs, PNGs, and 12 curated desktop wallpapers.
- \`build/live-build/\`: Debian live-build configuration, package lists, and post-installation chroot hooks.
- \`desktop/giri-space/\`: Desktop shell scripts, panel widgets, and Openbox window manager configurations.
- \`installer/calamares/\`: Calamares distribution configuration, QSS stylesheets, and branding metadata.
- \`scripts/\`: Automation scripts for ISO creation, chroot setup, and test verification.`
  },
  {
    id: 'contribute',
    title: 'Contribution Guidelines & Git Workflow',
    summary: 'Branching strategy, pull request criteria, and code style expectations for contributors.',
    category: 'Contributing',
    codeSnippet: `# Checkout a descriptive feature branch from main
git checkout -b feature/your-subsystem-improvement

# Test your build locally before opening a pull request
sudo ./scripts/build-iso.sh

# Commit with structured conventional messages
git commit -m "feat(branding): improve Plymouth splash screen contrast on 1080p displays"`,
    details: 'All contributions must maintain strict separation between Debian upstream packages and original Giri OS branding. PRs must pass automated build validation and avoid introducing non-free proprietary dependencies without explicit justification.'
  }
];

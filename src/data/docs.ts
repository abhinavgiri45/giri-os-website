export interface DocArticle {
  id: string;
  category: 'Getting Started' | 'Installation & Setup' | 'Using Giri OS' | 'Engineering & Linux Architecture';
  title: string;
  description: string;
  slug: string;
  author?: string;
  readingTime?: string;
  keywords?: string[];
  content: string; // Markdown formatted technical guide
}

export const GIRI_DOCS: DocArticle[] = [
  {
    id: 'intro',
    category: 'Getting Started',
    title: 'What Is Giri OS? An Introduction to the Project',
    description: 'An architectural introduction to Giri OS, its design ethos, Debian base, and independent Linux identity.',
    slug: 'what-is-giri-os',
    author: 'Giri OS Core Architecture Team',
    readingTime: '5 min read',
    keywords: ['what is giri os', 'giri os linux', 'independent linux distribution', 'debian 12 bookworm', 'giri space'],
    content: `
# What Is Giri OS? An Introduction to the Project

**Giri OS** is an independent Linux-based operating system designed to deliver an elegant, fast, and thoughtful desktop computing experience. Built upon a proven **Debian 12 (Bookworm)** base, Giri OS decouples itself from heavy, bloated desktop environments by pairing an engineered **Giri Space** user interface with the proven, lightweight **Openbox** window manager and **Picom** compositor.

### Core Architectural Principles

1. **Lightweight Precision**: Idle memory consumption remains under 350MB, preserving precious CPU cycles and RAM for user applications, software engineering workflows, and creative tooling.
2. **Visual Cohesion**: A unified design language grounded in deep midnight surfaces (\`#060913\`, \`#0B0F19\`) and vivid electric accents (Electric Blue \`#0066FF\`, Cyan \`#00D2FF\`, and Violet \`#7928CA\`).
3. **Rock-Solid Stability**: By relying on Debian's proven package ecosystem, users gain access to over 60,000 thoroughly tested open-source packages without fear of unstable upstream regressions.
4. **Zero Forced Telemetry**: Your operating system belongs to you. Giri OS contains no user tracking, no forced advertising, and no background metric uploads.

### System Architecture Stack

\`\`\`text
+---------------------------------------------------------------+
|                    User Applications & Tools                  |
+---------------------------------------------------------------+
|     Giri Space Shell | Giri Dock | Calamares Installer        |
+---------------------------------------------------------------+
|     Openbox Window Manager + Picom Compositor Engine          |
+---------------------------------------------------------------+
|               Xorg / KMS Display Server Subsystem             |
+---------------------------------------------------------------+
|          Debian 12 (Bookworm) Core System Libraries           |
+---------------------------------------------------------------+
|            Linux 6.1 LTS Kernel & Modular Device Drivers      |
+---------------------------------------------------------------+
\`\`\`

### Independent Project Identity

Giri OS is an independent operating system project developed transparently on GitHub. It is built to serve users seeking a clean, dependable operating environment free from vendor lock-in.

Learn more on the [Official Roadmap](/roadmap) and inspect verified milestones on our [Development Status](/status) dashboard.
`
  },
  {
    id: 'system-requirements',
    category: 'Getting Started',
    title: 'System Requirements & Hardware Recommendations',
    description: 'Hardware recommendations for physical PCs, laptops, and virtual machine environments.',
    slug: 'system-requirements',
    author: 'Giri OS Systems Team',
    readingTime: '3 min read',
    keywords: ['giri os system requirements', 'linux hardware specs', 'lightweight os requirements', 'debian system specs'],
    content: `
# System Requirements & Hardware Recommendations

Giri OS is engineered to run fluidly across a wide spectrum of modern and legacy 64-bit hardware, from resource-constrained laptops to multi-core developer workstations.

### Minimum Specifications (Entry-level / Lightweight Testing)
- **Processor:** 64-bit x86 Dual-Core processor (1.8 GHz or faster)
- **Memory (RAM):** 2 GB RAM (under 350MB allocated to OS at idle)
- **Storage:** 20 GB free disk space (ext4 or btrfs)
- **Display:** 1024 x 768 resolution capable display
- **Bootloader:** UEFI (64-bit) or Legacy BIOS boot support

### Recommended Specifications (Optimal Daily Driver Performance)
- **Processor:** Quad-Core 64-bit processor (Intel Core i5 / AMD Ryzen 5 or equivalent)
- **Memory (RAM):** 8 GB RAM or higher
- **Storage:** 50 GB Solid State Drive (NVMe or SATA SSD)
- **Graphics:** Modern Intel UHD, AMD Radeon, or NVIDIA graphics with Vulkan 1.2+ support
- **Display:** 1920 x 1080 (Full HD) or higher resolution

Compare our complete edition matrices on the [Editions Overview](/editions) page.
`
  },
  {
    id: 'what-makes-good-desktop-os',
    category: 'Getting Started',
    title: 'What Makes a Good Desktop Operating System?',
    description: 'An architectural exploration of desktop ergonomics, resource management, visual calm, and user agency.',
    slug: 'what-makes-good-desktop-os',
    author: 'Giri OS Design & UX Working Group',
    readingTime: '6 min read',
    keywords: ['desktop operating system design', 'linux desktop ergonomics', 'minimalist os', 'user agency', 'operating system philosophy'],
    content: `
# What Makes a Good Desktop Operating System?

The desktop operating system is the primary lens through which humans interact with computational power. Over the past decade, mainstream desktop operating systems have increasingly drifted toward advertising delivery, forced cloud integration, and aggressive background telemetry.

In developing **Giri OS**, we identified four fundamental pillars that define a truly great desktop operating system:

### 1. Resource Thriftiness & Predictability
A desktop operating system should never consume significant hardware resources simply by existing. When an OS draws 3GB to 4GB of RAM at idle, it robs developers of Docker container capacity, gamers of frame rates, and creators of render buffer memory. Giri OS maintains an idle footprint under **350MB RAM**, ensuring hardware serves the user rather than the desktop shell.

### 2. Visual Calm & Cognitive Clarity
Human attention is finite. Modern notification badges, blinking taskbar widgets, and animated search suggestions cause persistent cognitive friction. A superior desktop provides **ambient calm** — clean typography, restrained dark surfaces (\`#060913\`), soft shadows, and non-intrusive status indicators that surface information only when requested.

### 3. Modularity Over Monoliths
Monolithic desktop environments bundle display managers, file indexing daemons, and system utilities into tightly coupled binaries. When one component fails or leaks memory, the entire session degrades. Giri OS embraces Unix modularity:
- Window Management: **Openbox** (fast, deterministic C binary).
- Compositing: **Picom** (hardware accelerated shadows and opacity).
- Shell: **Giri Space** (customized status bar, dock, and app launcher).

### 4. Sovereignty & Zero Forced Telemetry
The machine belongs to the person who purchased it. Operating system updates should never force automatic reboots during active work, and private keystrokes or filenames should never be uploaded to corporate analytics servers. Giri OS adheres strictly to Debian's free software guidelines and zero-telemetry architecture.

Read our complete commitment in the [Security & Privacy Guide](/security).
`
  },
  {
    id: 'virtualbox-installation',
    category: 'Installation & Setup',
    title: 'VirtualBox Testing Guide & VM Setup',
    description: 'Step-by-step walkthrough for configuring and booting Giri OS inside Oracle VirtualBox.',
    slug: 'virtualbox-installation',
    author: 'Giri OS QA Engineering',
    readingTime: '5 min read',
    keywords: ['virtualbox linux setup', 'test giri os virtualbox', 'virtualbox debian vm', 'vboxsvga display settings'],
    content: `
# Installing Giri OS in Oracle VirtualBox

VirtualBox offers a risk-free environment to test Giri OS 0.1 Genesis before installing on bare metal.

### 1. VM Configuration
1. Open Oracle VM VirtualBox Manager and click **New**.
2. **Name:** \`Giri OS 0.1 Genesis\`
3. **Type:** \`Linux\`
4. **Version:** \`Debian (64-bit)\`
5. **Memory:** Allocate at least **4096 MB (4 GB)**.
6. **Processors:** Allocate **2 or 4 vCPUs** in the System > Processor tab.
7. **Virtual Disk:** Create a virtual hard disk with at least **25 GB** (VDI dynamically allocated).

### 2. Display Settings (Crucial for Smooth Compositing)
- Navigate to **Settings > Display**.
- Set **Video Memory** to **128 MB**.
- Choose **Graphics Controller:** \`VBoxSVGA\`.
- Check **Enable 3D Acceleration** (improves composite window shadows and transitions).

### 3. Mounting the ISO & Booting
1. Under **Settings > Storage**, click the optical drive icon and select **Choose a disk file**.
2. Select your \`giri-os-0.1-genesis-amd64.iso\` image.
3. Click **Start** to boot the virtual machine.
4. In the **Giri GRUB Menu**, press \`Enter\` to launch the **Live Session**.
5. Once on the desktop, double-click **Install Giri OS** to run the Calamares installer.

For release validation instructions, visit the [Downloads Portal](/downloads).
`
  },
  {
    id: 'calamares-guide',
    category: 'Installation & Setup',
    title: 'Calamares Installer Walkthrough',
    description: 'Navigating the graphical installer, disk partitioning options, and user creation.',
    slug: 'calamares-guide',
    author: 'Giri OS Installer Working Group',
    readingTime: '5 min read',
    keywords: ['calamares installer linux', 'giri os install walkthrough', 'linux disk partitioning', 'dual boot linux'],
    content: `
# Calamares Graphical Installation Guide

Giri OS includes a customized Calamares installer styled to match the official Giri aesthetic.

### Step 1: Language and Region
Select your preferred language, time zone, and system locale. Calamares automatically sets your system clock based on internet time servers.

### Step 2: Keyboard Layout
Confirm your keyboard layout. Test typing in the test area, especially special characters and numbers.

### Step 3: Disk Partitioning
You will be presented with three primary partition strategies:
- **Erase Disk (Recommended for dedicated drives):** Clears the target disk and configures standard EFI (512MB FAT32) and root partitions formatted with ext4.
- **Install Alongside (Dual Boot):** Shrinks an existing operating system partition to make room for Giri OS.
- **Manual Partitioning:** For advanced users configuring separate \`/home\`, custom swap partitions, or Btrfs subvolumes.

\`\`\`bash
# Standard Partition Layout Created by Calamares:
/dev/sda1   512 MB    FAT32    /boot/efi    (boot, esp flags)
/dev/sda2   Rest      ext4     /            (root filesystem)
\`\`\`

### Step 4: User Credentials
Enter your full name, username, hostname (computer name), and password. You can choose whether to require the password for administrative (\`sudo\`) tasks.

### Step 5: Summary & Execution
Review the proposed installation plan. Once you click **Install**, partition formatting begins. Installation typically completes in 5 to 10 minutes on modern SSDs.
`
  },
  {
    id: 'how-os-installation-works',
    category: 'Installation & Setup',
    title: 'How Operating System Installation Works: Storage, Partitioning & Calamares',
    description: 'A deep dive into block devices, partition tables, ext4/btrfs filesystems, unpackfs, and initramfs hooks.',
    slug: 'how-os-installation-works',
    author: 'Giri OS Kernel & Storage Engineering',
    readingTime: '7 min read',
    keywords: ['how os installation works', 'calamares installer architecture', 'linux partitioning guide', 'unpackfs squashfs', 'efi system partition'],
    content: `
# How Operating System Installation Works: Storage, Partitioning & Calamares

Installing a modern Linux distribution transforms compressed squashfs filesystem archives into a bootable, persistent operating system on persistent storage media (NVMe, SSD, or HDD).

### The Installation Pipeline

\`\`\`text
+---------------------------------------------------------------+
| 1. Live ISO Boot: SquashFS mounted readonly via overlayfs     |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| 2. Partitioning: GPT creation, EFI (FAT32) & Root (ext4)      |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| 3. UnpackFS: Stream SquashFS rootfs to target block partition |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| 4. Chroot Configuration: Hostname, locale, users, fstab       |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| 5. Bootloader Deployment: GRUB EFI installed into /boot/efi   |
+---------------------------------------------------------------+
\`\`\`

### Step-by-Step Subsystem Analysis

#### 1. Block Device Detection & Partitioning
Calamares interfaces with \`parted\` and \`libparted\` to inspect attached block devices (\`/dev/nvme0n1\`, \`/dev/sda\`). For UEFI systems:
- A **GPT (GUID Partition Table)** is written.
- An **EFI System Partition (ESP)** is formatted as FAT32 (type code \`EF00\`, size 512MB).
- A root filesystem partition is created and formatted with \`mkfs.ext4\`.

#### 2. The UnpackFS Phase
During live execution, the entire Giri OS filesystem lives compressed inside \`/live/filesystem.squashfs\`. Calamares executes the \`unpackfs\` C++ module, decompressing this archive block-by-block directly onto the mounted target root partition at \`/tmp/calamares-root\`.

#### 3. Chroot Post-Installation Configuration
Once unpacked, Calamares enters a **chroot** environment inside the new root filesystem:
1. Generates cryptographic password hashes inside \`/etc/shadow\`.
2. Adds the primary user to standard system groups: \`sudo\`, \`audio\`, \`video\`, \`plugdev\`.
3. Compiles locales via \`locale-gen\`.
4. Writes the filesystem table (\`/etc/fstab\`) with persistent \`UUID=\` block references.

#### 4. Bootloader Deployment
Finally, GRUB 2 is deployed into the EFI partition via:
\`\`\`bash
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=girios --recheck
update-grub
\`\`\`

Review our [Developer Portal](/developers) to inspect the live-build configuration and installer modules.
`
  },
  {
    id: 'giri-space-desktop',
    category: 'Using Giri OS',
    title: 'Navigating Giri Space: Shell, Panels & Workspaces',
    description: 'Mastering the top status panel, dock, workspaces, and window controls in Giri OS.',
    slug: 'giri-space-desktop',
    author: 'Giri OS Desktop Experience Team',
    readingTime: '4 min read',
    keywords: ['giri space desktop', 'linux desktop shell', 'openbox shortcuts', 'giri dock', 'minimalist window manager'],
    content: `
# Navigating Giri Space: Shell, Panels & Workspaces

The **Giri Space** desktop shell provides an uncluttered workspace prioritizing user focus over desktop clutter.

### Top Panel Applets
- **Workspace Switcher:** Displays active virtual desktops. Click or scroll over the indicator to rotate through workspaces.
- **System Tray:** Hosts network connection indicators, volume flyouts, battery status, and notifications.
- **Clock & Calendar:** Displays current time and date. Clicking opens a minimalist calendar flyout.

### Giri Dock
- Located at the bottom center of the display.
- Hovering smoothly illuminates items with subtle elevation.
- A glowing dot below an application indicates that it is currently running in background or foreground.
- Right-click any running icon to pin it permanently to the dock.

### Standard Keyboard Shortcuts
| Shortcut | Action |
| :--- | :--- |
| \`Super\` | Open Giri Application Launcher |
| \`Super + Enter\` | Open Terminal Emulator |
| \`Super + E\` | Open File Manager |
| \`Alt + Tab\` | Switch active application windows |
| \`Super + Left / Right\` | Snap active window to half screen |
| \`Super + Up\` | Maximize active window |
| \`Super + 1..4\` | Switch directly to Workspace 1, 2, 3, or 4 |
| \`Ctrl + Alt + T\` | Launch secondary terminal |
| \`Ctrl + Alt + Del\` | Open Session & Power Menu |
`
  },
  {
    id: 'how-linux-desktop-environments-work',
    category: 'Using Giri OS',
    title: 'How Linux Desktop Environments Work: Display Servers, Compositors & Shells',
    description: 'An architectural exploration of the graphical Linux stack: Xorg, Wayland, Openbox, Picom, and IPC panels.',
    slug: 'how-linux-desktop-environments-work',
    author: 'Giri OS Graphics & Window Architecture Team',
    readingTime: '7 min read',
    keywords: ['how linux desktop environments work', 'xorg vs wayland', 'picom compositor', 'openbox window manager', 'linux display server architecture'],
    content: `
# How Linux Desktop Environments Work: Display Servers, Compositors & Shells

A Linux desktop environment is not a monolithic program; it is an orchestrated pipeline of cooperating independent Unix processes. Understanding how these layers communicate is essential for technical mastery.

### The Graphic Stack Pipeline

\`\`\`text
+---------------------------------------------------------------+
|                      Application (GUI App)                    |
|                (GTK4, Qt6, Electron, SDL2)                    |
+---------------------------------------------------------------+
                               |
                               | (X11 / Wayland Protocol)
                               v
+---------------------------------------------------------------+
|               Display Server (Xorg / Wayland)                 |
|       Manages screen buffers, inputs, client boundaries       |
+---------------------------------------------------------------+
         |                                           ^
         | (Window Mapping)                          | (Rendering)
         v                                           |
+---------------------------+       +---------------------------+
|  Window Manager (Openbox) |       |    Compositor (Picom)     |
|  Handles frames, borders, |------>| Draws shadows, blurs,     |
|  placement, minimize/close|       | vsync, hardware offload   |
+---------------------------+       +---------------------------+
\`\`\`

### 1. The Kernel Display Layer: KMS & DRM
Before graphical windows can appear, the Linux kernel initializes the **Direct Rendering Manager (DRM)** and **Kernel Mode Setting (KMS)** drivers. These interface directly with your GPU hardware (Intel, AMD, or NVIDIA) to allocate video scan-out memory.

### 2. The Display Server: Xorg
Giri OS Genesis 0.1 utilizes the mature, widely compatible **Xorg** display server. Xorg creates a virtual canvas, listens for hardware input events from \`libinput\` (mouse, keyboard, touchpad), and routes events to the appropriate application window.

### 3. The Window Manager: Openbox
The display server only knows how to draw raw surfaces; it does not know where to place windows or how to minimize them. Giri OS utilizes **Openbox**:
- Written in pure C for near-zero memory footprint (< 15MB RAM).
- Interprets user keybindings defined in \`rc.xml\`.
- Computes exact coordinate geometry for window borders, titlebars, and stacking order.

### 4. The Compositor: Picom
Without a compositor, moving windows can cause screen tearing and artifacting. Giri OS executes **Picom** with the OpenGL backend (\`backend = "glx"\`). Picom intercepts window redraws in an off-screen buffer, applies subtle drop shadows, rounds corners, and synchronizes page flips to the monitor's refresh rate (VSync).

### 5. The Shell Layer: Giri Space
The taskbar, application launcher, dock, and notifications comprise the shell layer. By decoupling the shell from the window manager, Giri OS allows developers to customize their workflow without risking display crashes.

Explore the complete visual gallery on our [Gallery Page](/gallery).
`
  },
  {
    id: 'package-management',
    category: 'Using Giri OS',
    title: 'Package Management & System Updates with Debian APT',
    description: 'Managing software packages with APT and maintaining system security on Giri OS.',
    slug: 'package-management',
    author: 'Giri OS Packaging Working Group',
    readingTime: '4 min read',
    keywords: ['debian apt guide', 'giri os package management', 'linux system updates', 'flatpak debian'],
    content: `
# Package Management & Updates with Debian APT

Because Giri OS is built directly on Debian 12 (Bookworm), users command the full power of Debian's **APT** (Advanced Package Tool) ecosystem.

### Updating System Packages
To update local package metadata and upgrade installed packages:

\`\`\`bash
# Refresh package indexes from official mirrors
sudo apt update

# Upgrade installed packages with verified security patches
sudo apt upgrade -y

# Clean up obsolete dependencies safely
sudo apt autoremove --purge
\`\`\`

### Installing New Software
Search and install from over 60,000 Debian packages:

\`\`\`bash
# Search for packages by keyword or name
apt search <package-name>

# Inspect package metadata and dependencies
apt show <package-name>

# Install a package with required libraries
sudo apt install <package-name>
\`\`\`

### Sandboxed Flatpak Applications
For applications requiring isolated upstream runtime environments, Flatpak can be configured effortlessly:

\`\`\`bash
# Install Flatpak subsystem
sudo apt install flatpak

# Add Flathub remote repository
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
\`\`\`
`
  },
  {
    id: 'how-linux-os-built',
    category: 'Engineering & Linux Architecture',
    title: 'How a Linux-Based Operating System Is Built: From Kernel to Live ISO',
    description: 'An exhaustive engineering guide to building an independent Linux distribution using Debian live-build and chroot hooks.',
    slug: 'how-linux-os-built',
    author: 'Giri OS Core Release Engineering',
    readingTime: '8 min read',
    keywords: ['how to build a linux operating system', 'debian live-build tutorial', 'building custom linux iso', 'chroot build hooks', 'squashfs linux packaging'],
    content: `
# How a Linux-Based Operating System Is Built: From Kernel to Live ISO

Building a production-ready, bootable Linux distribution requires orchestrated toolchains, deterministic package staging, and reproducible binary outputs.

### The Live-Build Assembly Pipeline

\`\`\`text
+---------------------------------------------------------------+
| 1. Config Stage: package-lists, debian-installer, hooks       |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| 2. Bootstrap: debootstrap creates clean Debian 12 chroot      |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| 3. Chroot Customization: Install Giri Space, Openbox, themes  |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| 4. Binary Packaging: Compress chroot into filesystem.squashfs |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| 5. Hybrid ISO Generation: xorriso crafts EFI/MBR bootable ISO |
+---------------------------------------------------------------+
\`\`\`

### 1. The Configuration Stage
Giri OS uses Debian's standard \`live-build\` toolchain. The build environment resides in \`build/live-build/config/\`:
- **\`package-lists/giri-desktop.list.chroot\`**: Declares every binary package required (Linux kernel, Xorg, Openbox, Picom, Python 3, Calamares, system libraries).
- **\`hooks/live/\`**: Shell scripts executed inside the chroot during compilation to configure branding, Plymouth splash themes, and skeleton user permissions.

### 2. Bootstrap via Debootstrap
The command \`lb bootstrap\` invokes \`debootstrap\`, fetching base binary packages directly from official Debian Bookworm mirrors. This guarantees that the root system begins from verified, cryptographically signed upstream packages.

### 3. Chroot Customization Hooks
During \`lb chroot\`, the build engine chroots into the newly populated filesystem:
\`\`\`bash
# Example Hook: 01-setup-giri-branding.hook.chroot
# Installs Plymouth boot theme and updates initramfs
plymouth-set-default-theme giri-genesis
update-initramfs -u -k all
\`\`\`

### 4. SquashFS Compression
The unpacked chroot directory (often 4GB to 6GB) is compressed into a single read-only image using \`mksquashfs\`:
\`\`\`bash
mksquashfs chroot binary/live/filesystem.squashfs -comp xz -b 1M
\`\`\`
Using high-ratio \`xz\` compression reduces the final ISO file size to approximately **2.4 GB**, enabling swift downloads and rapid USB flashing.

### 5. Hybrid ISO Assembly with Xorriso
Finally, \`xorriso\` wraps the SquashFS filesystem, the Linux 6.1 kernel, the initial ramdisk (initrd), and the GRUB EFI bootloader into an ISO 9660 hybrid image. The resulting \`.iso\` boots seamlessly whether written to optical media or raw block storage via \`dd\`:
\`\`\`bash
sudo dd if=giri-os-0.1-genesis-amd64.iso of=/dev/sdX bs=4M status=progress oflag=sync
\`\`\`

Inspect the full build scripts in our [Developer Portal](/developers).
`
  },
  {
    id: 'debian-role-in-linux',
    category: 'Engineering & Linux Architecture',
    title: 'Understanding Debian and Its Role in Linux Distributions',
    description: 'Why Debian is the universal operating system foundation, package governance, and why Giri OS chose Bookworm.',
    slug: 'debian-role-in-linux',
    author: 'Giri OS Architecture Team',
    readingTime: '6 min read',
    keywords: ['debian role in linux', 'why choose debian', 'debian bookworm stability', 'debian package governance', 'upstream linux distribution'],
    content: `
# Understanding Debian and Its Role in Linux Distributions

Often called the "Universal Operating System," **Debian** forms the bedrock of modern Linux computing. World-renowned distributions like Ubuntu, Linux Mint, Pop!_OS, and Kali Linux all originate from Debian's foundation.

When designing **Giri OS**, selecting the base architecture was our most consequential decision. We chose **Debian 12 (Bookworm)** for four core reasons:

### 1. Unmatched Architectural Stability
Debian releases adhere to strict release cycles governed by exhaustive freeze periods. In Debian 12 Bookworm, software versions are tested over months across ten CPU architectures. This guarantees that system libraries (\`glibc\`, \`systemd\`, \`libssl\`) do not experience breaking API changes midway through development.

### 2. Comprehensive 60,000+ Package Archive
Debian maintains the largest curated package repository in the free software world. By utilizing Debian as our base, Giri OS users immediately gain access to compilers, development runtimes, productivity suites, and creative software without needing third-party repositories.

### 3. The Debian Social Contract & DFSG
Debian is governed by the **Debian Free Software Guidelines (DFSG)**. It is not owned by a commercial corporation with shareholder incentives to inject telemetry or paid promotions. Choosing Debian ensures Giri OS remains permanently anchored in genuine open-source software freedom.

### 4. Reproducible Builds & Cryptographic Trust
Debian has pioneered reproducible builds — the ability to verify that a compiled binary matches its published source code bit-for-bit. Every package in Giri OS is cryptographically signed with official Debian GPG keys, safeguarding users against supply-chain attacks.

Learn about our security model in the [Security & Privacy Guide](/security).
`
  },
  {
    id: 'understanding-linux-bootloaders',
    category: 'Engineering & Linux Architecture',
    title: 'Understanding Linux Bootloaders: GRUB, EFI, and Kernel Handover',
    description: 'How hardware boots into Linux: UEFI firmware, NVRAM boot entries, GRUB 2 stages, initramfs, and Plymouth.',
    slug: 'understanding-linux-bootloaders',
    author: 'Giri OS Firmware & Boot Architecture',
    readingTime: '7 min read',
    keywords: ['linux bootloader guide', 'grub2 uefi boot process', 'initramfs kernel handover', 'plymouth boot splash architecture'],
    content: `
# Understanding Linux Bootloaders: GRUB, EFI, and Kernel Handover

From the moment the power button is pressed until the desktop wallpaper appears, a Linux system executes a precise sequence of low-level software handoffs.

### The Boot Sequence Architecture

\`\`\`text
[ Power On ]
      |
      v
[ UEFI Firmware / BIOS ] -> Reads NVRAM, loads EFI System Partition
      |
      v
[ GRUB 2 EFI Bootloader ] -> Renders visual menu, loads kernel & initrd
      |
      v
[ Linux 6.1 LTS Kernel ] -> Mounts initramfs, discovers hardware, loads drivers
      |
      v
[ Systemd (PID 1) ] -> Starts Plymouth splash, mounts root filesystem
      |
      v
[ Display Manager (LightDM) ] -> Launches Giri Space desktop session
\`\`\`

### 1. UEFI Firmware Initialization
Modern motherboards execute **Unified Extensible Firmware Interface (UEFI)** code. UEFI reads non-volatile RAM (NVRAM) boot variables to locate the EFI System Partition (ESP) and loads \`/EFI/girios/grubx64.efi\`.

### 2. The GRUB 2 Bootloader
Giri OS uses GRUB 2 styled with a customized high-resolution theme:
- Loads filesystem drivers (FAT32, ext4).
- Reads \`/boot/grub/grub.cfg\`.
- Loads the Linux kernel image (\`/boot/vmlinuz-6.1.0-*-amd64\`) into RAM.
- Loads the initial RAM filesystem (\`/boot/initrd.img-6.1.0-*-amd64\`).
- Hands over CPU execution to the kernel entrypoint.

### 3. The Initial RAM Filesystem (initramfs)
Before the real root partition can be read, drivers must be initialized. The **initramfs** is a temporary root filesystem in memory containing the minimal storage and NVMe drivers needed to locate the real root partition via \`UUID=\`.

### 4. Plymouth Graphical Splash
To replace raw kernel diagnostic text with a refined visual transition, Giri OS invokes **Plymouth**:
- Operates directly via the kernel DRM framebuffer.
- Displays the animated Giri emblem and progress bar.
- Hands over the display buffer cleanly to the Xorg display manager without screen flicker.
`
  },
  {
    id: 'system-recovery-logs',
    category: 'Engineering & Linux Architecture',
    title: 'System Diagnostics, Journal Logs & Recovery Mode',
    description: 'Inspecting system logs, recovering from boot issues, and kernel troubleshooting in Giri OS.',
    slug: 'system-recovery-logs',
    author: 'Giri OS Support & Reliability Engineering',
    readingTime: '5 min read',
    keywords: ['linux system diagnostics', 'journalctl guide', 'systemd recovery mode', 'plymouth troubleshooting'],
    content: `
# System Diagnostics & Recovery

Should an update or configuration issue disrupt system operation, Giri OS offers comprehensive diagnostic facilities.

### Accessing Recovery Mode
1. Power on your machine and wait for the **Giri GRUB Menu**.
2. Select **Advanced options for Giri OS**.
3. Choose the entry marked **(recovery mode)**.
4. The system boots into single-user root maintenance mode without starting the Xorg display server.

### Inspecting System Journal Logs
Query the systemd journal for runtime anomalies and driver failures:

\`\`\`bash
# View kernel ring buffer messages from current boot
journalctl -k -b

# Follow live system logs in real time
journalctl -f

# Check status of Xorg display manager or shell
systemctl status lightdm
\`\`\`

### Plymouth Diagnostics
To verify that the Plymouth boot theme is functioning correctly during live testing:

\`\`\`bash
# Test Plymouth splash in active session
sudo plymouthd
sudo plymouth --show-splash
sudo plymouth --quit
\`\`\`
`
  },
  {
    id: 'giri-os-architecture-and-roadmap',
    category: 'Engineering & Linux Architecture',
    title: 'Giri OS Development: Architecture and Roadmap',
    description: 'A deep dive into the 10-milestone roadmap, Genesis 0.1 stabilization, and long-term vision.',
    slug: 'giri-os-architecture-and-roadmap',
    author: 'Giri OS Project Leadership',
    readingTime: '6 min read',
    keywords: ['giri os roadmap', 'operating system roadmap', 'linux distro architecture', 'genesis 0.1 milestones'],
    content: `
# Giri OS Development: Architecture and Roadmap

Giri OS follows an open, phased development methodology designed to achieve dependable stability before introducing experimental features.

### The 10-Milestone Development Lifecycle

1. **Milestone 1 — Core Live-Build Foundation**: Debian 12 Bookworm base setup, Linux 6.1 LTS kernel, Openbox integration. *(Status: Verified)*
2. **Milestone 2 — Genesis 0.1 Stabilization**: Shell crash resolution, Calamares installer styling, and live ISO verification. *(Status: Active)*
3. **Milestone 3 — Calamares Automated Partitioning**: Enhancing EFI/GPT automatic partitioning workflows. *(Status: Planned)*
4. **Milestone 4 — Plymouth & GRUB Theme Polishing**: Flicker-free boot transition across AMD, Intel, and NVIDIA graphics. *(Status: In Progress)*
5. **Milestone 5 — Official ISO Release Genesis 0.1**: Public distribution via GitHub Releases with cryptographic SHA-256 validation. *(Status: Upcoming)*
6. **Milestone 6 — Native Giri Space Shell (Rust / C++)**: Transitioning prototype Python applets into high-performance compiled daemons. *(Status: Planned)*
7. **Milestone 7 — Giri Software Center**: Flatpak and Debian APT package catalog with curated app recommendations. *(Status: Planned)*
8. **Milestone 8 — Giri Cloud & Developer Editions**: Headless server images and pre-configured developer workstations. *(Status: Planned)*
9. **Milestone 9 — Wayland Compositor Migration**: Transitioning to wlroots-based modern Wayland session. *(Status: Research)*
10. **Milestone 10 — Giri Orbit Ecosystem**: Seamless multi-device synchronization and peer-to-peer workspace sharing. *(Status: Concept)*

Track live milestone progress on our [Roadmap Page](/roadmap) and [Changelog](/changelog).
`
  },
  {
    id: 'open-source-os-development',
    category: 'Engineering & Linux Architecture',
    title: 'Understanding Open-Source Operating System Development',
    description: 'How independent Linux distributions manage licensing, source trees, binary distribution, and community governance.',
    slug: 'open-source-os-development',
    author: 'Giri OS Governance Working Group',
    readingTime: '5 min read',
    keywords: ['open source operating system development', 'linux distribution governance', 'gpl mit licensing', 'transparent software engineering'],
    content: `
# Understanding Open-Source Operating System Development

An open-source operating system is built upon transparency, community peer review, and shared technological stewardship.

### The Pillars of Open-Source OS Development

### 1. Transparent Version Control
Every change made to Giri OS — whether a configuration hook in \`live-build\`, an Openbox menu layout, or an installer theme stylesheet — is recorded in public Git commit history. This allows anyone to audit changes, inspect modifications, and submit improvements.

### 2. Dual Licensing Strategy: GPL & MIT
An operating system combines multiple license models harmoniously:
- The **Linux Kernel** and **GNU Coreutils** operate under the **GNU General Public License (GPL)**, ensuring that kernel modifications remain free and open.
- The **Giri OS Website**, design system, and custom tooling operate under the permissive **MIT License**, permitting flexible adoption, educational reuse, and developer inspection.

### 3. Open Issue Triage & Bug Tracking
Software engineering requires rapid, honest bug triage. In Giri OS, bugs encountered during ISO testing or installer partitioning are tracked publicly in GitHub Issues. We maintain an honest development philosophy: we do not conceal unresolved issues behind marketing claims.

Read about our project history and leadership on the [About Page](/about).
`
  },
  {
    id: 'how-to-contribute-to-linux-os',
    category: 'Engineering & Linux Architecture',
    title: 'How to Contribute to an Open-Source Operating System',
    description: 'A comprehensive guide for developers, designers, and testers to participate in Giri OS development.',
    slug: 'how-to-contribute-to-linux-os',
    author: 'Giri OS Community & Developer Relations',
    readingTime: '6 min read',
    keywords: ['how to contribute to linux', 'contribute to open source os', 'giri os contribution guide', 'qemu testing guide'],
    content: `
# How to Contribute to an Open-Source Operating System

Contributing to Giri OS is an exceptional opportunity to learn real-world Linux systems engineering, desktop customization, and open-source collaboration.

### Contribution Tracks

You do not need to be a C kernel programmer to make significant contributions to Giri OS. We welcome participation across multiple areas:

#### 1. Quality Assurance & Virtual Machine Testing
- Test candidate ISO builds inside Oracle VirtualBox, QEMU/KVM, or VMware.
- Verify Calamares installer behavior across BIOS and UEFI partition layouts.
- Report UI glitches, scaling errors, or package dependency conflicts on GitHub Issues.

#### 2. Shell & Desktop Ergonomics (Python / GTK / CSS)
- Refine the **Giri Space** status bar, dock animations, and quick launcher.
- Improve Openbox theme styles and window border decorations.
- Enhance keyboard shortcut accessibility for international layouts.

#### 3. Live-Build Engineering (Bash / Debian Packaging)
- Optimize live-build scripts in \`build/live-build/\`.
- Prune unneeded package dependencies to maintain our < 2.5 GB ISO size target.
- Test initramfs hooks and Plymouth splash screen transitions.

#### 4. Documentation & Educational Writing
- Expand architectural guides and troubleshooting tutorials in our documentation portal.
- Translate documentation into multiple languages.

### Standard Git Contribution Workflow

\`\`\`bash
# 1. Fork the repository on GitHub
# https://github.com/abhinavgiri45/giri-os

# 2. Clone your fork locally
git clone https://github.com/<your-username>/giri-os.git
cd giri-os

# 3. Create a descriptive feature branch
git checkout -b feature/improved-dock-indicator

# 4. Implement changes and test inside QEMU
./scripts/test-qemu.sh

# 5. Commit with semantic message
git commit -m "feat(dock): add illuminated active app indicator"

# 6. Push to your fork and submit a Pull Request
git push origin feature/improved-dock-indicator
\`\`\`

Explore full developer guides and build commands in our [Developer Portal](/developers).
`
  }
];

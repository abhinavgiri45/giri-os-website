export type CapabilityStatus = 
  | 'Planned' 
  | 'In Development' 
  | 'Experimental' 
  | 'Available' 
  | 'Verified' 
  | 'Limited Compatibility';

export interface CapabilityItem {
  id: string;
  name: string;
  description: string;
  status: CapabilityStatus;
}

export interface FormatBadge {
  format: string;
  label: string;
  description: string;
  color: string;
}

export interface EcosystemProfile {
  id: 'windows' | 'android' | 'linux';
  productId: 'giri-bridge' | 'giri-mobile' | 'giri-store';
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  formats: FormatBadge[];
  engineName: string;
  engineDescription: string;
  accentColor: string;
  badgeColor: string;
  productPath: string;
  capabilities: CapabilityItem[];
  deepDiveSlug: string;
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  systemRequirements: {
    minimum: string;
    recommended: string;
    notes: string;
  };
  knownLimitations: string[];
}

export const ECOSYSTEMS: Record<'windows' | 'android' | 'linux', EcosystemProfile> = {
  windows: {
    id: 'windows',
    productId: 'giri-bridge',
    name: 'Giri Bridge',
    subtitle: 'Application Compatibility Platform',
    tagline: 'Bring supported desktop applications into your Giri OS experience.',
    description: 'Giri Bridge is the application compatibility platform of Giri OS, designed to bring supported desktop applications into one integrated computing experience.',
    formats: [
      { format: 'EXE', label: 'Windows Executable', description: 'Portable & standalone desktop binary applications', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
      { format: 'MSI', label: 'Windows Installer', description: 'Standard Windows Installer setup packages', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' }
    ],
    engineName: 'Giri Bridge Compatibility Layer',
    engineDescription: 'Built upon Wine 9.0+ Staging, Proton compatibility scripts, DXVK Direct3D-to-Vulkan layer, and isolated prefix management.',
    accentColor: '#2563EB',
    badgeColor: 'blue',
    productPath: '/products/giri-bridge',
    capabilities: [
      {
        id: 'win-installer',
        name: 'EXE and MSI installer handling',
        description: 'Guided installer wizard for common desktop executables (.exe) and setup packages (.msi).',
        status: 'In Development'
      },
      {
        id: 'win-wine',
        name: 'Wine-based compatibility',
        description: 'Comprehensive Win32 and Win64 API translation runtime powered by upstream Wine staging.',
        status: 'In Development'
      },
      {
        id: 'win-prefix',
        name: 'Application-specific environments',
        description: 'Isolated prefix directories per application to prevent DLL collisions and registry corruption.',
        status: 'In Development'
      },
      {
        id: 'win-runtime',
        name: 'Runtime management',
        description: 'Configurable Wine versions, runner selection, and environment variable tuning per application.',
        status: 'In Development'
      },
      {
        id: 'win-deps',
        name: 'Dependency management',
        description: 'Automated installation of required runtimes: DirectX, Visual C++ Redistributables, and .NET Framework.',
        status: 'Experimental'
      },
      {
        id: 'win-launchers',
        name: 'Application launchers',
        description: 'Automatic creation of native Giri Space desktop entries (.desktop) with extracted high-res icons.',
        status: 'In Development'
      },
      {
        id: 'win-profiles',
        name: 'Compatibility profiles',
        description: 'Pre-configured prefix settings, DLL overrides, and graphics flags tailored for popular applications.',
        status: 'Experimental'
      },
      {
        id: 'win-graphics',
        name: 'Graphics compatibility',
        description: 'Direct3D 9/10/11/12 draw calls translated directly to native Vulkan via DXVK and VKD3D.',
        status: 'In Development'
      },
      {
        id: 'win-diagnostics',
        name: 'Application diagnostics',
        description: 'Integrated crash reporting, Wine debug channel inspect, and missing DLL troubleshooting logs.',
        status: 'Planned'
      },
      {
        id: 'win-backup',
        name: 'Backup and recovery',
        description: 'Snapshot and archive individual application prefixes with saved data and configurations.',
        status: 'Planned'
      }
    ],
    deepDiveSlug: 'giri-bridge',
    architectureHighlights: [
      {
        title: 'Prefix Isolation Engine',
        description: 'Each installed application lives in an independent virtual directory (~/.local/share/giri-bridge/prefixes/<app>), ensuring zero cross-contamination.'
      },
      {
        title: 'Direct3D-to-Vulkan (DXVK & VKD3D)',
        description: 'Translates Direct3D 9/10/11 and Direct3D 12 draw calls directly into native Vulkan pipeline commands for near-native GPU rendering speeds.'
      },
      {
        title: 'Audio & Input Subsystem',
        description: 'Translates DirectSound and XAudio2 directly into PipeWire and PulseAudio low-latency audio streams, with XInput gamepad support.'
      }
    ],
    systemRequirements: {
      minimum: 'x86_64 CPU (Intel Core 2 Duo / AMD Athlon 64), 2 GB RAM, 500 MB base disk space, OpenGL 3.3+ capable GPU',
      recommended: 'Multi-core 64-bit CPU, 4 GB - 8 GB RAM, 10 GB SSD storage, Vulkan 1.2+ capable GPU (Intel UHD 620+, AMD Vega, NVIDIA Kepler+)',
      notes: 'Hardware acceleration requires Vulkan drivers for Direct3D 11/12 compatibility. Software rasterization fallback is available.'
    },
    knownLimitations: [
      'Kernel-level anti-cheat drivers (e.g., Vanguard, Easy Anti-Cheat in kernel mode) are unsupported due to Linux kernel security boundaries.',
      'Applications relying on proprietary hardware dongle drivers or low-level Windows kernel drivers may fail to initialize.',
      'Some Microsoft Store (UWP/MSIX) applications requiring proprietary Windows platform APIs are currently unsupported.'
    ]
  },
  android: {
    id: 'android',
    productId: 'giri-mobile',
    name: 'Giri Mobile',
    subtitle: 'Integrated Mobile Application Runtime',
    tagline: 'Extend your desktop experience with supported mobile applications.',
    description: 'Giri Mobile brings supported mobile applications to the Giri OS desktop through an integrated application runtime.',
    formats: [
      { format: 'APK', label: 'Android Application Package', description: 'Universal mobile applications and games packaged for Android', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' }
    ],
    engineName: 'Giri Mobile Runtime (Waydroid/AOSP Container Engine)',
    engineDescription: 'Utilizes Linux LXC namespaces, Android Binder IPC, and Mesa DRI3 hardware acceleration to execute mobile apps with near-zero overhead.',
    accentColor: '#10B981',
    badgeColor: 'emerald',
    productPath: '/products/giri-mobile',
    capabilities: [
      {
        id: 'apk-install',
        name: 'APK installation',
        description: 'Seamless double-click or drag-and-drop installation of mobile .apk packages.',
        status: 'In Development'
      },
      {
        id: 'apk-runtime-mgmt',
        name: 'Application runtime management',
        description: 'Lifecycle control of the underlying AOSP container runtime with on-demand boot and sleep modes.',
        status: 'In Development'
      },
      {
        id: 'apk-launching',
        name: 'Application launching',
        description: 'Instant launch from Giri Space desktop menus, taskbar favorites, or file manager shortcuts.',
        status: 'In Development'
      },
      {
        id: 'apk-window',
        name: 'Desktop window integration',
        description: 'Mobile applications render directly as independent, resizable desktop windows inside Openbox and Giri Space.',
        status: 'In Development'
      },
      {
        id: 'apk-permissions',
        name: 'Application permissions',
        description: 'Desktop-grade permission manager for storage, microphone, camera, and network access.',
        status: 'In Development'
      },
      {
        id: 'apk-display',
        name: 'Display adaptation',
        description: 'Dynamic resolution scaling, orientation lock (portrait/landscape), and high-DPI display adjustments.',
        status: 'In Development'
      },
      {
        id: 'apk-km',
        name: 'Keyboard and mouse integration',
        description: 'Standard desktop keyboard typing and mouse navigation translated to mobile input events.',
        status: 'In Development'
      },
      {
        id: 'apk-keymap',
        name: 'Giri Smart Input Mapping',
        description: 'Custom on-screen touch overlay mapping for mouse clicks, WASD movement, and hotkeys in mobile titles.',
        status: 'Experimental'
      },
      {
        id: 'apk-profiles',
        name: 'Per-application control profiles',
        description: 'Saved controller and keyboard configurations matched automatically to specific mobile apps.',
        status: 'Experimental'
      },
      {
        id: 'apk-diagnostics',
        name: 'Application diagnostics',
        description: 'Integrated logcat inspection, ABI verification, and crash inspection console.',
        status: 'Planned'
      },
      {
        id: 'apk-reporting',
        name: 'Compatibility reporting',
        description: 'Community-verified reports on mobile app behavior, performance, and input suitability.',
        status: 'Planned'
      }
    ],
    deepDiveSlug: 'giri-mobile',
    architectureHighlights: [
      {
        title: 'Zero-VM Container Architecture',
        description: 'Unlike slow emulation engines, Giri Mobile uses Linux cgroups, namespaces, and binder IPC directly on the host kernel for minimal CPU overhead.'
      },
      {
        title: 'Mesa DRI3 Hardware GPU Acceleration',
        description: 'Mobile OpenGL ES and Vulkan commands pass directly through the host Mesa graphics drivers for 60+ FPS fluid rendering.'
      },
      {
        title: 'Giri Smart Input Mapping Daemon',
        description: 'Translates physical desktop mouse clicks, scroll wheels, and keyboard keys into virtual multi-touch coordinate vectors in real time.'
      }
    ],
    systemRequirements: {
      minimum: 'x86_64 CPU with BIOS Virtualization (Intel VT-x / AMD-V), 3 GB RAM, 3 GB free disk space, OpenGL 3.0+ graphics',
      recommended: 'Quad-core 64-bit CPU with VT-x/AMD-V, 6 GB - 8 GB RAM, 10 GB SSD space, Mesa DRI3 accelerated graphics',
      notes: 'Requires host Linux kernel modules (binder_linux, ashmem_linux) provided in the Giri OS default kernel.'
    },
    knownLimitations: [
      'Proprietary Google Play Protect / SafetyNet / Play Integrity hardware attestation is not passed in uncertified container environments.',
      'Certain banking applications enforcing strict hardware-backed Knox or SafetyNet attestation may refuse to launch.',
      'ARM64 native binary translation on x86_64 systems incurs a modest CPU translation overhead via libndk/Houdini.'
    ]
  },
  linux: {
    id: 'linux',
    productId: 'giri-store',
    name: 'Giri Store',
    subtitle: 'Unified Application Marketplace',
    tagline: 'Discover, install and manage applications through one unified marketplace.',
    description: 'Giri Store is the unified application marketplace of Giri OS, designed to help users discover, install and manage applications through one interface.',
    formats: [
      { format: 'DEB', label: 'Debian Software Package', description: 'Rock-solid native binaries directly compiled for Debian Bookworm', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
      { format: 'Flatpak', label: 'Universal Sandboxed Package', description: 'Self-contained applications with isolated dependencies & runtime permissions', color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20' }
    ],
    engineName: 'Giri Store (APT & Flatpak Backend)',
    engineDescription: 'Combines dpkg/APT package management, Flathub remote repository integration, and AppStream metadata for rapid software discovery.',
    accentColor: '#8B5CF6',
    badgeColor: 'violet',
    productPath: '/products/giri-store',
    capabilities: [
      {
        id: 'store-search',
        name: 'Unified application search',
        description: 'Search across 60,000+ Debian repositories and Flathub simultaneously with unified results.',
        status: 'In Development'
      },
      {
        id: 'store-deb-mgmt',
        name: 'DEB package management',
        description: 'Direct integration with Debian 12 Bookworm repositories, providing verified native binaries.',
        status: 'Available'
      },
      {
        id: 'store-flatpak-mgmt',
        name: 'Flatpak integration',
        description: 'First-class Flathub repository integration with bubblewrap unprivileged sandboxing.',
        status: 'Available'
      },
      {
        id: 'store-install',
        name: 'Application installation',
        description: 'One-click automated package download, signature verification, and installation.',
        status: 'Available'
      },
      {
        id: 'store-updates',
        name: 'Application updates',
        description: 'Atomic background update notifications and graphical one-click security updates.',
        status: 'Available'
      },
      {
        id: 'store-removal',
        name: 'Application removal',
        description: 'Clean uninstallation of applications and residual configuration files with dependency protection.',
        status: 'Available'
      },
      {
        id: 'store-transparency',
        name: 'Package-source transparency',
        description: 'Clear display of whether an app originates from Debian Main, Backports, or Flathub.',
        status: 'Available'
      },
      {
        id: 'store-permissions',
        name: 'Permission information',
        description: 'Detailed inspection of Flatpak sandbox permissions (filesystem, network, devices).',
        status: 'In Development'
      },
      {
        id: 'store-installed-mgmt',
        name: 'Installed application management',
        description: 'Comprehensive overview of all installed software with size calculation and launch triggers.',
        status: 'Available'
      },
      {
        id: 'store-offline',
        name: 'Offline visibility of installed applications',
        description: 'Browse, manage, and inspect locally installed applications without an active internet connection.',
        status: 'Available'
      }
    ],
    deepDiveSlug: 'giri-store',
    architectureHighlights: [
      {
        title: 'Cryptographic Integrity (GPG)',
        description: 'Every Debian package is verified against official cryptographic keys to guarantee untampered security.'
      },
      {
        title: 'Bubblewrap Unprivileged Sandboxing',
        description: 'Flatpaks execute within isolated namespaces with restricted filesystem and device access via XDG Desktop Portals.'
      },
      {
        title: 'Zero Bloat & Zero Telemetry',
        description: 'Unlike commercial app stores, Giri Store consumes <80 MB RAM, contains no ads, and collects zero telemetry.'
      }
    ],
    systemRequirements: {
      minimum: 'Any x86_64 compatible CPU, 512 MB RAM, 50 MB storage for store database, standard framebuffer',
      recommended: 'Dual-core 64-bit CPU, 2 GB - 4 GB RAM, 2 GB storage for cached packages, accelerated GPU',
      notes: 'Extremely lightweight. Operates efficiently across legacy hardware and modern workstations.'
    },
    knownLimitations: [
      'APT and Flatpak operate with separate storage caches; duplicate libraries may exist when installing the same app in both formats.',
      'Some Flatpak applications require explicit portal permission grants to access host directories outside of ~/Downloads or ~/Documents.',
      'Offline installation requires pre-downloaded .deb binaries with all required dependent packages satisfied.'
    ]
  }
};

export interface ComparisonCriterion {
  id: string;
  category: string;
  name: string;
  description: string;
  giriBridge: string;
  giriMobile: string;
  giriStore: string;
}

export const ECOSYSTEM_COMPARISON_MATRIX: ComparisonCriterion[] = [
  {
    id: 'product-role',
    category: 'Product Identity',
    name: 'Primary Role',
    description: 'The core purpose of the Giri OS product in your desktop workflow.',
    giriBridge: 'Desktop Application Compatibility Platform',
    giriMobile: 'Integrated Mobile Application Runtime',
    giriStore: 'Unified Application Marketplace'
  },
  {
    id: 'runtime-engine',
    category: 'Architecture',
    name: 'Underlying Engine',
    description: 'The core subsystem responsible for running the application binaries.',
    giriBridge: 'Wine 9.0+ Staging & Proton compatibility layer',
    giriMobile: 'Containerized AOSP / Waydroid with shared Linux kernel',
    giriStore: 'Native ELF execution via GNU C Library (glibc)'
  },
  {
    id: 'isolation-security',
    category: 'Security',
    name: 'Isolation & Sandboxing',
    description: 'Level of separation between the application and the host operating system.',
    giriBridge: 'Isolated Wine prefix directories (~/.local/share/giri-bridge/prefixes/)',
    giriMobile: 'Linux kernel cgroups, namespaces & seccomp container boundaries',
    giriStore: 'Bubblewrap sandbox for Flatpak; standard Unix UID permissions for DEB'
  },
  {
    id: 'performance-overhead',
    category: 'Performance',
    name: 'Performance Overhead',
    description: 'System overhead compared to running on native target operating systems.',
    giriBridge: 'Very Low (5-10% CPU, near-native GPU via DXVK Vulkan translation)',
    giriMobile: 'Near Zero (Native container, direct kernel syscalls, hardware DRI3 GPU)',
    giriStore: 'Zero (100% native kernel execution, zero translation overhead)'
  },
  {
    id: 'package-formats',
    category: 'Packaging',
    name: 'Supported Formats',
    description: 'File extensions and installer containers supported.',
    giriBridge: '.exe, .msi, standalone portable executables',
    giriMobile: '.apk, universal Android packages',
    giriStore: '.deb (Debian APT), Flatpak (Flathub universal runtime)'
  },
  {
    id: 'graphics-pipeline',
    category: 'Graphics',
    name: 'Graphics & GPU Acceleration',
    description: 'How graphical draw calls are rendered by the host GPU.',
    giriBridge: 'Direct3D 9/10/11/12 translated to Vulkan via DXVK and VKD3D',
    giriMobile: 'Mesa DRI3 direct pass-through for OpenGL ES 3.2 and Vulkan',
    giriStore: 'Native OpenGL, Vulkan, and X11/Wayland rendering'
  },
  {
    id: 'input-controls',
    category: 'Input',
    name: 'Input Handling',
    description: 'Keyboard, mouse, touch, and controller support.',
    giriBridge: 'Native desktop keyboard, mouse, and XInput game controllers',
    giriMobile: 'Giri Smart Input Mapping: WASD joystick, mouse-to-touch, controller profiles',
    giriStore: 'Standard Linux evdev, X11/Wayland pointer, keyboard, and joysticks'
  },
  {
    id: 'implementation-status',
    category: 'Project Status',
    name: 'Current Development Phase',
    description: 'Honest implementation readiness in Giri OS v0.1 Genesis.',
    giriBridge: 'In Development (Prefix isolation & DXVK testing)',
    giriMobile: 'In Development (Container subsystem & window manager integration)',
    giriStore: 'Available (APT & Flatpak operational; Store GUI in development)'
  }
];

export interface WorkflowStep {
  stepNumber: number;
  phase: string;
  title: string;
  description: string;
  subsystemAction: string;
  iconType: 'detect' | 'inspect' | 'sandbox' | 'integrate' | 'controls';
}

export interface ProductWorkflow {
  productId: 'giri-bridge' | 'giri-mobile' | 'giri-store';
  name: string;
  targetFormat: string;
  steps: WorkflowStep[];
}

export const PRODUCT_WORKFLOWS: ProductWorkflow[] = [
  {
    productId: 'giri-bridge',
    name: 'Giri Bridge Installation Workflow',
    targetFormat: 'setup.exe / installer.msi',
    steps: [
      {
        stepNumber: 1,
        phase: 'Select Installer',
        title: 'Installer File Selection & MIME Detection',
        description: 'The user selects an .exe or .msi file. Giri Bridge inspects the PE32/PE32+ binary architecture and determines 32-bit vs 64-bit environment requirements.',
        subsystemAction: 'giri-bridge --inspect package.exe',
        iconType: 'detect'
      },
      {
        stepNumber: 2,
        phase: 'Giri Bridge',
        title: 'Subsystem Routing & Prefix Provisioning',
        description: 'Giri Bridge routes the installer to an isolated prefix (~/.local/share/giri-bridge/prefixes/<app>) with a clean virtual registry and directory structure.',
        subsystemAction: 'mkdir -p ~/.local/share/giri-bridge/prefixes/app && wineboot -u',
        iconType: 'inspect'
      },
      {
        stepNumber: 3,
        phase: 'Configure Environment',
        title: 'Runtime Dependencies & DXVK Injection',
        description: 'Environment variables, Direct3D-to-Vulkan (DXVK) DLL overrides, and required runtimes (Visual C++, .NET) are automatically configured.',
        subsystemAction: 'WINEDLLOVERRIDES="d3d11,dxgi=n" winetricks -q vcrun2022',
        iconType: 'sandbox'
      },
      {
        stepNumber: 4,
        phase: 'Install',
        title: 'Sandboxed Setup Execution',
        description: 'The native setup wizard executes inside the isolated prefix, creating local program files without altering host system libraries.',
        subsystemAction: 'wine installer.exe /S',
        iconType: 'sandbox'
      },
      {
        stepNumber: 5,
        phase: 'Launch',
        title: 'Desktop Launcher & Window Integration',
        description: 'Giri Bridge extracts the embedded high-resolution application icon and registers a native Giri Space desktop launcher (.desktop) ready for immediate launch.',
        subsystemAction: 'giri-desktop-integrator --generate-launcher ~/.local/share/applications/app.desktop',
        iconType: 'integrate'
      }
    ]
  },
  {
    productId: 'giri-mobile',
    name: 'Giri Mobile Installation Workflow',
    targetFormat: 'application.apk',
    steps: [
      {
        stepNumber: 1,
        phase: 'Select APK',
        title: 'Package Ingestion & Manifest Reading',
        description: 'The user selects a mobile .apk package. Giri Mobile parses AndroidManifest.xml, extracting package metadata, required permissions, and icons.',
        subsystemAction: 'giri-mobile aapt dump badging package.apk',
        iconType: 'detect'
      },
      {
        stepNumber: 2,
        phase: 'Check Compatibility',
        title: 'ABI Verification & Translation Setup',
        description: 'Giri Mobile verifies ARM64 vs x86_64 native libraries and initializes libndk translation where foreign architecture translation is required.',
        subsystemAction: 'giri-mobile-container check-abi --package com.example.app',
        iconType: 'inspect'
      },
      {
        stepNumber: 3,
        phase: 'Install',
        title: 'Container Package Manager Handoff',
        description: 'The APK is transferred into the AOSP system container and registered securely using the Android package manager daemon.',
        subsystemAction: 'waydroid app install package.apk',
        iconType: 'sandbox'
      },
      {
        stepNumber: 4,
        phase: 'Configure Controls',
        title: 'Giri Smart Input Mapping Setup',
        description: 'The user or pre-configured profile binds keyboard keys (WASD), mouse clicks, and gestures to on-screen virtual touch zones.',
        subsystemAction: 'giri-keymap-daemon --assign-profile com.example.app --preset=wasd',
        iconType: 'controls'
      },
      {
        stepNumber: 5,
        phase: 'Launch',
        title: 'Desktop Window Projection & Run',
        description: 'The mobile app window appears on the Giri Space desktop, fully integrated with taskbar minimization, window resizing, and smooth 60 FPS graphics.',
        subsystemAction: 'waydroid app launch com.example.app',
        iconType: 'integrate'
      }
    ]
  },
  {
    productId: 'giri-store',
    name: 'Giri Store Installation Workflow',
    targetFormat: 'package.deb / Flatpak Ref',
    steps: [
      {
        stepNumber: 1,
        phase: 'Search Application',
        title: 'Unified Marketplace Discovery',
        description: 'The user enters an application name or keyword in Giri Store. The search engine queries local APT manifests and remote Flathub catalog indexes.',
        subsystemAction: 'giri-store-query --search "blender"',
        iconType: 'detect'
      },
      {
        stepNumber: 2,
        phase: 'Choose Package Source',
        title: 'Source Transparency & Version Comparison',
        description: 'Giri Store presents the available formats side-by-side: native Debian (.deb) or sandboxed Flatpak, detailing version and permissions.',
        subsystemAction: 'giri-store-inspect --sources org.blender.Blender',
        iconType: 'inspect'
      },
      {
        stepNumber: 3,
        phase: 'Install',
        title: 'Cryptographic Verification & Unpacking',
        description: 'The chosen package is downloaded, its cryptographic GPG signature is verified, and dependencies are resolved atomically into the system or sandbox.',
        subsystemAction: 'apt-get install -y blender || flatpak install flathub org.blender.Blender',
        iconType: 'sandbox'
      },
      {
        stepNumber: 4,
        phase: 'Launch',
        title: 'Menu Indexing & Instant Execution',
        description: 'The application is indexed in the Giri Space application menu and MIME associations are linked, allowing immediate launching.',
        subsystemAction: 'update-desktop-database && blender',
        iconType: 'integrate'
      }
    ]
  }
];

export interface InputMappingMode {
  id: string;
  name: string;
  tagline: string;
  description: string;
  recommendedFor: string;
  controls: {
    key: string;
    action: string;
    type: 'keyboard' | 'mouse' | 'touch';
  }[];
}

export const INPUT_MAPPING_MODES: InputMappingMode[] = [
  {
    id: 'gaming-wasd',
    name: 'Virtual D-Pad & WASD Controls',
    tagline: 'Precision 8-way directional movement for mobile action & adventure titles.',
    description: 'Maps physical desktop keyboard keys (W, A, S, D) to a simulated on-screen virtual joystick, allowing smooth directional movement without touch controls.',
    recommendedFor: 'Mobile action games, RPGs, and dual-stick platformers',
    controls: [
      { key: 'W / A / S / D', action: 'Simulate Virtual Analog Joystick (Up/Left/Down/Right)', type: 'keyboard' },
      { key: 'Spacebar', action: 'Tap Action Button A (Jump / Primary Action)', type: 'keyboard' },
      { key: 'Shift', action: 'Simulate Sprint / Dash gesture', type: 'keyboard' },
      { key: 'E / R / Q', action: 'Trigger Special Abilities / Quick Items', type: 'keyboard' },
      { key: 'Left Click', action: 'Simulate Touch Tap & Drag at cursor position', type: 'mouse' }
    ]
  },
  {
    id: 'mouse-precision',
    name: 'Mouse-to-Touch Precision',
    tagline: 'Pixel-accurate mouse pointer navigation for mobile productivity apps.',
    description: 'Transforms desktop mouse events into smooth single-finger and multi-finger gestures with scroll-wheel pinch-to-zoom support.',
    recommendedFor: 'Document editors, reading apps, photo retouching, and social media',
    controls: [
      { key: 'Left Click', action: 'Single-finger tap at coordinate', type: 'mouse' },
      { key: 'Click + Drag', action: 'Continuous finger drag / scroll motion', type: 'mouse' },
      { key: 'Mouse Wheel', action: 'Simulate two-finger pinch-to-zoom or vertical page scroll', type: 'mouse' },
      { key: 'Right Click', action: 'Android Back navigation button gesture', type: 'mouse' },
      { key: 'Middle Click', action: 'Android Home screen gesture', type: 'mouse' }
    ]
  },
  {
    id: 'gamepad-console',
    name: 'Console Controller Mapping',
    tagline: 'Direct XInput / DirectInput controller mapping for native gameplay.',
    description: 'Connect standard Xbox, PlayStation, or generic USB gamepads and enjoy direct hardware controller integration for supported mobile titles.',
    recommendedFor: 'Racing games, retro emulators, and controller-supported titles',
    controls: [
      { key: 'Left Thumbstick', action: 'Analog movement input', type: 'keyboard' },
      { key: 'Right Thumbstick', action: 'Camera look / secondary aim', type: 'mouse' },
      { key: 'A / B / X / Y', action: 'Mapped mobile action keys', type: 'keyboard' },
      { key: 'Triggers (LT / RT)', action: 'Proportional throttle and brake', type: 'keyboard' },
      { key: 'Guide Button', action: 'Giri Smart Input Overlay toggle', type: 'keyboard' }
    ]
  }
];

export interface EcosystemFaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Giri Bridge' | 'Giri Mobile' | 'Giri Store' | 'Performance';
}

export const ECOSYSTEM_FAQS: EcosystemFaqItem[] = [
  {
    question: 'What are the three official application products of Giri OS?',
    answer: 'Giri OS features three distinct application products: Giri Bridge (the application compatibility platform for desktop software), Giri Mobile (the integrated mobile application runtime for APKs), and Giri Store (the unified application marketplace for native Debian packages and sandboxed Flatpaks). Together, they deliver the "ONE OS. THREE WORLDS" computing vision.',
    category: 'General'
  },
  {
    question: 'How does Giri Bridge differ from running software inside a virtual machine?',
    answer: 'A virtual machine runs a complete duplicate operating system with heavy guest kernel virtualization, consuming 2-4 GB of RAM just to idle. Giri Bridge translates application calls directly into native POSIX and Vulkan instructions on the fly, consuming virtually no idle RAM and projecting application windows directly into Giri Space.',
    category: 'Giri Bridge'
  },
  {
    question: 'Will every Windows executable (.exe / .msi) work on Giri Bridge?',
    answer: 'No. While thousands of 32-bit and 64-bit desktop productivity tools and games run with excellent performance, software that relies on proprietary kernel-level anti-cheat drivers (e.g., Vanguard) or deep copy-protection hooks is not supported. Giri Bridge provides clear compatibility information so you know what to expect.',
    category: 'Giri Bridge'
  },
  {
    question: 'How does Giri Mobile achieve near-native performance for mobile applications?',
    answer: 'Unlike traditional mobile emulators that emulate ARM CPU architecture on top of x86, Giri Mobile uses Linux LXC container virtualization. Mobile applications run as unprivileged containers on the host Linux kernel, sharing CPU cycles directly. Graphics pass through host Mesa DRI3 hardware acceleration for fluid 60 FPS performance.',
    category: 'Giri Mobile'
  },
  {
    question: 'What is Giri Smart Input Mapping?',
    answer: 'Giri Smart Input Mapping is an integrated input subsystem that allows users to bind desktop keyboard keys (such as WASD directional keys, Spacebar, Shift, and hotkeys), mouse gestures, and USB gamepads to virtual touch coordinates on the screen, enabling seamless desktop control of touch-first mobile titles.',
    category: 'Giri Mobile'
  },
  {
    question: 'Does every mobile app support Giri Smart Input Mapping?',
    answer: 'No. While Giri Smart Input Mapping supports customizable virtual touch overlays for most mobile games and productivity apps, applications with non-standard custom gesture engines or apps that strictly mandate hardware accelerometer/gyroscope sensors may have limited compatibility.',
    category: 'Giri Mobile'
  },
  {
    question: 'How does Giri Store manage both APT and Flatpak packages?',
    answer: 'APT and Flatpak remain separate, independent underlying package management systems to preserve system stability. Giri Store provides a unified graphical interface that searches both catalogs simultaneously, displaying transparent package source badges (Debian vs Flathub) and permission information.',
    category: 'Giri Store'
  },
  {
    question: 'Are Giri Bridge and Giri Mobile isolated from my personal files?',
    answer: 'Yes. Giri Bridge isolates each application into its own prefix directory (~/.local/share/giri-bridge/prefixes/<app>), preventing modifications to host system files. Giri Mobile executes inside isolated Linux namespaces (mount, network, PID, IPC) with restricted filesystem permissions.',
    category: 'Performance'
  },
  {
    question: 'What are the hardware requirements to run the Giri OS application ecosystem?',
    answer: 'Native Linux applications in Giri Store run smoothly on 512 MB to 2 GB RAM. For comfortable multi-tasking with Giri Bridge and Giri Mobile, we recommend a 64-bit multi-core CPU with BIOS virtualization enabled (Intel VT-x / AMD-V), 8 GB of system RAM, and a Vulkan-capable graphics card.',
    category: 'Performance'
  }
];

export interface HardwarePrerequisite {
  ecosystem: string;
  minRam: string;
  recRam: string;
  cpuRequirements: string;
  gpuRequirements: string;
  diskSpace: string;
  notes: string;
}

export const HARDWARE_PREREQUISITES: HardwarePrerequisite[] = [
  {
    ecosystem: 'Giri Bridge (Desktop Applications)',
    minRam: '2 GB',
    recRam: '4 GB - 8 GB',
    cpuRequirements: 'x86_64 CPU (Intel Core 2 Duo / AMD Athlon 64 or newer)',
    gpuRequirements: 'Vulkan 1.2+ capable GPU recommended for 3D apps (Intel UHD 620, AMD Vega, NVIDIA Kepler+); Software OpenGL fallback available',
    diskSpace: '500 MB base runtime + app storage',
    notes: 'Prefixes are isolated. Direct3D 11/12 compatibility requires modern Vulkan GPU drivers.'
  },
  {
    ecosystem: 'Giri Mobile (Mobile Applications)',
    minRam: '3 GB',
    recRam: '6 GB - 8 GB',
    cpuRequirements: 'x86_64 CPU with BIOS Hardware Virtualization (Intel VT-x or AMD-V enabled)',
    gpuRequirements: 'OpenGL 3.0+ / Mesa DRI3 capable graphics (Intel HD 4000+, AMD GCN, NVIDIA GeForce 600+)',
    diskSpace: '3 GB base AOSP system image + app storage',
    notes: 'Requires Linux kernel modules (binder_linux, ashmem_linux) provided in Giri OS default kernel.'
  },
  {
    ecosystem: 'Giri Store (Native Linux & Sandboxed Packages)',
    minRam: '512 MB',
    recRam: '2 GB - 4 GB',
    cpuRequirements: 'Any compatible x86_64 processor',
    gpuRequirements: 'Standard VESA / KMS framebuffer or any modern GPU for accelerated compositing',
    diskSpace: '50 MB for Giri Store manager; package sizes vary',
    notes: 'Extremely lightweight. Operates seamlessly on low-spec legacy PCs and high-end workstations.'
  }
];

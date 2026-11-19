export type GalleryCategory = 'All' | 'Desktop' | 'Boot & Theme' | 'Wallpapers' | 'Installer' | 'Concept Previews';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageSrc: string;
  isRealScreenshot: boolean;
  label: 'Verified OS Asset' | 'Design Preview';
  description: string;
}

export const GIRI_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'wall-aurora',
    title: 'Aurora Horizon',
    category: 'Wallpapers',
    imageSrc: '/wallpapers/aurora.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'Official Giri OS wallpaper featuring deep midnight teal gradients and electric light rays.'
  },
  {
    id: 'wall-beyond-horizon',
    title: 'Beyond Horizon',
    category: 'Wallpapers',
    imageSrc: '/wallpapers/beyond-horizon.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'Cinematic horizon composition created for the Giri OS desktop environment.'
  },
  {
    id: 'wall-electric-geometry',
    title: 'Electric Geometry',
    category: 'Wallpapers',
    imageSrc: '/wallpapers/electric-geometry.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'Abstract polygonal structures echoing the Giri OS four-pane geometric ethos.'
  },
  {
    id: 'wall-giri-origin',
    title: 'Giri Origin',
    category: 'Wallpapers',
    imageSrc: '/wallpapers/giri-origin.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'The flagship atmospheric wallpaper designed for the Genesis 0.1 release.'
  },
  {
    id: 'wall-default-dark',
    title: 'Giri Default Dark',
    category: 'Wallpapers',
    imageSrc: '/wallpapers/giri-os-default-dark.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'The default dark desktop background shipped on the Genesis live ISO image.'
  },
  {
    id: 'wall-default-light',
    title: 'Giri Default Light',
    category: 'Wallpapers',
    imageSrc: '/wallpapers/giri-os-default-light.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'Crisp, high-contrast light theme desktop background for day-lit environments.'
  },
  {
    id: 'wall-midnight-arch',
    title: 'Midnight Architecture',
    category: 'Wallpapers',
    imageSrc: '/wallpapers/midnight-architecture.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'Architectural minimalism rendering in deep navy, cyan, and violet.'
  },
  {
    id: 'wall-violet-dim',
    title: 'Violet Dimension',
    category: 'Wallpapers',
    imageSrc: '/wallpapers/violet-dimension.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'Electric violet depth visualization highlighting the secondary brand accent.'
  },
  {
    id: 'theme-plymouth',
    title: 'Giri Genesis Plymouth Boot Theme',
    category: 'Boot & Theme',
    imageSrc: '/images/plymouth/logo.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'Active Plymouth boot splash logo featuring the illuminated four-pane emblem during kernel boot.'
  },
  {
    id: 'theme-grub',
    title: 'Giri HiDPI GRUB2 Boot Menu',
    category: 'Boot & Theme',
    imageSrc: '/images/grub/background.png',
    isRealScreenshot: true,
    label: 'Verified OS Asset',
    description: 'Verified high-resolution bootloader menu background featuring subtle cyan borders.'
  },
  {
    id: 'preview-giri-space',
    title: 'Giri Space Desktop & Dock',
    category: 'Desktop',
    imageSrc: '/wallpapers/giri-origin.png',
    isRealScreenshot: false,
    label: 'Design Preview',
    description: 'Concept layout of the top panel telemetry, workspace manager, and elevated Giri Dock.'
  },
  {
    id: 'preview-launcher',
    title: 'Giri Quick Launcher Overlay',
    category: 'Concept Previews',
    imageSrc: '/wallpapers/electric-geometry.png',
    isRealScreenshot: false,
    label: 'Design Preview',
    description: 'Design preview of the fuzzy application search overlay with sub-5ms keystroke response.'
  },
  {
    id: 'preview-control-center',
    title: 'Giri Control Center Flyout',
    category: 'Concept Previews',
    imageSrc: '/wallpapers/midnight-architecture.png',
    isRealScreenshot: false,
    label: 'Design Preview',
    description: 'Unified audio, network, brightness, and power management drawer concept.'
  },
  {
    id: 'preview-installer',
    title: 'Calamares Branded Installer',
    category: 'Installer',
    imageSrc: '/images/grub/background.png',
    isRealScreenshot: false,
    label: 'Design Preview',
    description: 'System partitioner and automated OEM installer preview styled in Giri dark glass.'
  }
];

# GIRI OS OFFICIAL WEBSITE — ANIMATION ARCHITECTURE & THREEUI REPORT

**Project:** Giri OS Official Website  
**Repository:** `https://github.com/abhinavgiri45/giri-os-website`  
**Animation Technologies:** Three.js (WebGL), Tailwind CSS Keyframes, CSS Variables  
**Design Inspiration:** ThreeUI (https://threeui.com/browse)  
**Status:** Validated & Production Ready  

---

## 1. Executive Summary

The Giri OS official website incorporates a refined motion system inspired by modern spatial UI paradigms (including [ThreeUI](https://threeui.com/)). Animations are purposeful, tactile, and engineered with strict hardware efficiency to ensure 60fps performance on low-power mobile GPUs while offering full compliance with `prefers-reduced-motion` accessibility standards.

---

## 2. ThreeUI-Inspired Component Implementations

| ThreeUI Inspiration | Clean-Room Implementation | Component & Location | Technical Details |
| :--- | :--- | :--- | :--- |
| **Aureon** | Radiant Crystal Action Button | `.aureon-button` (`globals.css`) | Linear gradient (`#0066FF` &rarr; `#2563EB` &rarr; `#7928CA`), cyan border illumination, ambient glow shadow (`rgba(0,102,255,0.35)`), smooth tactile translateY(-1px) on hover. |
| **Umbra** | Chrome Beveled Button | `.umbra-button` (`globals.css`) | Adaptive theme gradient (clean slate in light mode, midnight slate in dark mode), subtle inner bevel shadow, high-contrast typography. |
| **OBLO** | Glassmorphic Surface Cards | `.glass-card`, `.glass-panel` | Backdrop-filter blur (16px), subtle border (`rgba(15,23,42,0.08)` in light / `rgba(255,255,255,0.08)` in dark), soft elevation on hover. |
| **Perspective UI** | Kinetic 3D Hero Emblem | `ThreeHero.tsx` | Extruded physical 3D orbital 'G' emblem reacting in real-time to pointer coordinates with damping interpolation (`targetX += (mouseX - targetX) * 0.05`). |
| **Isometric Grid** | Structural Background Texture | `.bg-isometric-grid` (`globals.css`) | Subtle 40px × 40px grid matrix providing architectural depth without image bandwidth overhead. |

---

## 3. Real-Time Three.js 3D Emblem Architecture

The hero section features a custom WebGL 3D rendering of the official Giri OS orbital 'G' emblem in `src/components/ThreeHero.tsx`:

### 1. Geometric Letter 'G' Modeling:
The geometric letter 'G' is modeled using `THREE.Shape` and `THREE.ExtrudeGeometry` with coordinate transforms mapped directly from the official vector specification:
```typescript
const shape = new THREE.Shape();
const s = 0.019; // scale factor
const cx = 128, cy = 128;
const tx = (x: number) => (x - cx) * s;
const ty = (y: number) => -(y - cy) * s;

shape.moveTo(tx(188), ty(96));
shape.bezierCurveTo(tx(173), ty(64), tx(139), ty(46), tx(104), ty(51));
// ... complete 14-node Bezier loop
shape.closePath();

const extrudeSettings: THREE.ExtrudeGeometryOptions = {
  depth: 0.3,
  bevelEnabled: true,
  bevelSegments: 4,
  steps: 1,
  bevelSize: 0.04,
  bevelThickness: 0.04
};
const gGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
gGeometry.center();
```

### 2. Physical Shaders & Lighting:
- **Material:** `THREE.MeshPhysicalMaterial` configured with Electric Blue base (`#0066FF`), deep sapphire emission (`#001B66`), roughness `0.18`, metalness `0.65`, and clearcoat `1.0` with clearcoat roughness `0.1`.
- **Orbital Ring:** Constructed via `THREE.TubeGeometry` over a closed `THREE.CatmullRomCurve3` ellipse, rotated at `-28°` to match the brand identity.
- **Satellite Node:** High-emissive cyan sphere (`#00F0FF`) situated at the orbit apex.
- **Lighting Rig:** Quad-light system with ambient fill (1.4 intensity), directional cyan key light, point violet rim light, and blue central specular fill.

---

## 4. Hardware Optimization & Resource Throttling

To prevent battery drain, high CPU utilization, and thermal throttling on laptops and mobile devices, `ThreeHero.tsx` implements strict runtime lifecycle management:

1. **IntersectionObserver Viewport Throttling:**
   - Pauses the render loop immediately when the 3D canvas is scrolled out of the active browser viewport.
   - Resumes animation instantly when the user scrolls back into view.
2. **Page Visibility Lifecycle API (`visibilitychange`):**
   - Cancels `requestAnimationFrame` and pauses clocks when the browser tab is hidden, minimized, or backgrounded.
   - Resumes immediately when the tab returns to active focus.
3. **Deterministic Memory Disposal:**
   - Disposes all geometries (`gGeometry.dispose()`, `orbitGeometry.dispose()`, `particleGeometry.dispose()`), materials (`gMaterial.dispose()`, `orbitMaterial.dispose()`), and WebGL contexts (`renderer.dispose()`) on component unmount.
4. **Mobile Touch Scroll Protection:**
   - Sets `renderer.domElement.style.touchAction = 'pan-y'`, allowing uninterrupted vertical page scrolling without WebGL touch gesture interference.

---

## 5. Reduced-Motion Accessibility Compliance

For users with vestibular disorders or those who have enabled "Reduce Motion" in their operating system settings:

1. **JavaScript WebGL Listener:**
   - Listens to `window.matchMedia('(prefers-reduced-motion: reduce)')`.
   - Disables kinetic mouse tracking, orbital wobble, and breathing rotation while rendering the static, beautifully lit 3D emblem.
2. **CSS Global Override (`globals.css`):**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-delay: -1ms !important;
       animation-duration: 1ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0s !important;
       scroll-behavior: auto !important;
     }
   }
   ```
3. **WebGL Fallback:**
   - On devices without WebGL support, automatically renders an accessible static vector fallback (`public/logo/giri-os-icon.svg`) with full alt text.

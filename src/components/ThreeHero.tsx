import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeHero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    // Detect WebGL capability safely
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) {
      setHasWebGL(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Media query listener for reduced-motion preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.domElement.style.touchAction = 'pan-y'; // Prevent vertical scroll trap on touch devices
    container.appendChild(renderer.domElement);

    // Root emblem group
    const emblemGroup = new THREE.Group();
    scene.add(emblemGroup);

    // 1. Construct 3D Beveled Lens Platform via ExtrudeGeometry
    const shape = new THREE.Shape();
    const radius = 1.8;
    const segments = 48;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = Math.cos(theta) * radius;
      const y = Math.sin(theta) * radius;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.15,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 1,
      bevelSize: 0.08,
      bevelThickness: 0.08
    };

    const gGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    gGeometry.center();

    // Material for lens base
    const gMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.15,
      roughness: 0.25,
      transmission: 0.65,
      thickness: 0.5,
      transparent: true,
      opacity: 0.85,
      reflectivity: 0.8
    });
    const baseMesh = new THREE.Mesh(gGeometry, gMaterial);
    emblemGroup.add(baseMesh);

    // 2. Genuine Official Giri OS Emblem Texture Front Face
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load('/logo/giri-os-icon.png');
    logoTexture.generateMipmaps = true;
    logoTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const faceGeometry = new THREE.PlaneGeometry(3.1, 3.1);
    const faceMaterial = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true,
      opacity: 0.98,
      side: THREE.DoubleSide
    });
    const faceMesh = new THREE.Mesh(faceGeometry, faceMaterial);
    faceMesh.position.z = 0.17; // Sit cleanly above front bevel
    emblemGroup.add(faceMesh);

    // 3. Subtle Outer Orbital Ring Accent
    const orbitGeometry = new THREE.TorusGeometry(2.35, 0.025, 16, 100);
    const orbitMaterial = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      emissive: 0x0066ff,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: 0.8
    });
    const orbitMesh = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbitMesh.rotation.x = Math.PI / 3;
    emblemGroup.add(orbitMesh);

    // 4. Satellite Node on Orbit
    const nodeGeometry = new THREE.SphereGeometry(0.09, 24, 24);
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.5,
      roughness: 0.1
    });
    const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
    emblemGroup.add(nodeMesh);

    // 5. Ambient Floating Particle Field
    const particleCount = 45;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x2563eb);
    const c2 = new THREE.Color(0x06b6d4);
    const c3 = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;

      const chosen = [c1, c2, c3][i % 3];
      colors[i * 3] = chosen.r;
      colors[i * 3 + 1] = chosen.g;
      colors[i * 3 + 2] = chosen.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.65
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    keyLight.position.set(5, 5, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x818cf8, 1.8);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    // Mouse Parallax Handling
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.45;
      targetRotationX = y * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation & Lifecycle Management
    let isVisible = true;
    let isTabActive = true;
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || !isTabActive) return;

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth floating motion
        emblemGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

        // Gentle orbital satellite movement
        const orbitSpeed = elapsedTime * 1.5;
        const orbitR = 2.35;
        nodeMesh.position.x = Math.cos(orbitSpeed) * orbitR;
        nodeMesh.position.y = Math.sin(orbitSpeed) * orbitR * Math.cos(Math.PI / 3);
        nodeMesh.position.z = Math.sin(orbitSpeed) * orbitR * Math.sin(Math.PI / 3);

        // Slow particle drift
        particles.rotation.y = elapsedTime * 0.04;
      }

      // Smooth camera/parallax interpolation
      emblemGroup.rotation.y += (targetRotationY - emblemGroup.rotation.y) * 0.08;
      emblemGroup.rotation.x += (targetRotationX - emblemGroup.rotation.x) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      gGeometry.dispose();
      faceGeometry.dispose();
      orbitGeometry.dispose();
      nodeGeometry.dispose();
      particleGeometry.dispose();
      gMaterial.dispose();
      faceMaterial.dispose();
      orbitMaterial.dispose();
      nodeMaterial.dispose();
      particleMaterial.dispose();
      logoTexture.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    // Accessible Static Vector Fallback
    return (
      <div className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center">
        <div className="relative w-64 h-64 p-4 rounded-3xl bg-giri-surface/80 border border-giri-border backdrop-blur-xl shadow-sm dark:shadow-glow animate-float">
          <img
            src="/logo/giri-os-icon.png"
            alt="Giri OS Official Emblem"
            width={256}
            height={256}
            decoding="async"
            className="w-full h-full object-contain filter drop-shadow-[0_4px_25px_rgba(37,99,235,0.35)]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[580px] flex items-center justify-center overflow-hidden">
      {/* ThreeUI Ambient Glow Backdrop */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-giri-blue/20 via-giri-cyan/15 to-giri-violet/20 blur-3xl pointer-events-none animate-pulse-subtle" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};

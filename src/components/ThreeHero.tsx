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
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.domElement.style.touchAction = 'pan-y'; // Prevent vertical scroll trap on touch devices
    container.appendChild(renderer.domElement);

    // Root emblem group
    const emblemGroup = new THREE.Group();
    scene.add(emblemGroup);

    // Pane Geometry: Symmetrical 2x2 Formation with Rounded Depth
    const paneGeometry = new THREE.BoxGeometry(1.0, 1.0, 0.22);

    // Materials representing Giri OS 4-Pane Identity
    const materialTL = new THREE.MeshPhysicalMaterial({
      color: 0x00D2FF, // Electric Cyan-Blue
      emissive: 0x005577,
      emissiveIntensity: 0.25,
      roughness: 0.15,
      metalness: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const materialTR = new THREE.MeshPhysicalMaterial({
      color: 0x0066FF, // Vivid Electric Blue
      emissive: 0x002277,
      emissiveIntensity: 0.25,
      roughness: 0.15,
      metalness: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const materialBL = new THREE.MeshPhysicalMaterial({
      color: 0x7928CA, // Electric Violet
      emissive: 0x330055,
      emissiveIntensity: 0.25,
      roughness: 0.15,
      metalness: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const materialBR = new THREE.MeshPhysicalMaterial({
      color: 0xA855F7, // Radiant Violet-Magenta
      emissive: 0x440066,
      emissiveIntensity: 0.25,
      roughness: 0.15,
      metalness: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const offset = 0.62;

    const meshTL = new THREE.Mesh(paneGeometry, materialTL);
    meshTL.position.set(-offset, offset, 0);

    const meshTR = new THREE.Mesh(paneGeometry, materialTR);
    meshTR.position.set(offset, offset, 0);

    const meshBL = new THREE.Mesh(paneGeometry, materialBL);
    meshBL.position.set(-offset, -offset, 0);

    const meshBR = new THREE.Mesh(paneGeometry, materialBR);
    meshBR.position.set(offset, -offset, 0);

    emblemGroup.add(meshTL, meshTR, meshBL, meshBR);

    // Outer Orbit Ring (ThreeUI inspired geometric frame)
    const ringGeo = new THREE.TorusGeometry(1.85, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00D2FF,
      transparent: true,
      opacity: 0.25,
      wireframe: false,
    });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    emblemGroup.add(orbitRing);

    // Floating Ambient Particles (Subtle spatial dust)
    const particleCount = 75;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorA = new THREE.Color(0x00D2FF);
    const colorB = new THREE.Color(0x7928CA);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const mixedColor = colorA.clone().lerp(colorB, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x0B0F19, 1.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.DirectionalLight(0x00D2FF, 3.5);
    cyanLight.position.set(-4, 4, 5);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0xA855F7, 4.0, 15);
    violetLight.position.set(4, -3, 4);
    scene.add(violetLight);

    const centerGlow = new THREE.PointLight(0x0066FF, 2.5, 8);
    centerGlow.position.set(0, 0, 1.5);
    scene.add(centerGlow);

    // Mouse Tracking for Kinetic Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.4;
      mouseY = y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation & Resource Throttling Control
    let animationFrameId: number;
    let isRunning = true;
    let isIntersecting = true;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isRunning || !isIntersecting) return;

      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth mouse damping
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Subtle breathing tilt and rotation
        emblemGroup.rotation.y = targetX + Math.sin(elapsedTime * 0.4) * 0.12;
        emblemGroup.rotation.x = -targetY + Math.cos(elapsedTime * 0.3) * 0.08;
        emblemGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.08;

        // Dynamic individual pane subtle floating
        meshTL.position.z = Math.sin(elapsedTime * 1.2) * 0.04;
        meshTR.position.z = Math.cos(elapsedTime * 1.2) * 0.04;
        meshBL.position.z = Math.cos(elapsedTime * 1.2) * 0.04;
        meshBR.position.z = Math.sin(elapsedTime * 1.2) * 0.04;

        // Gentle ring rotation
        orbitRing.rotation.z = elapsedTime * 0.15;

        // Particles gentle drift
        particles.rotation.y = elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (!animationFrameId) {
        clock.start();
        animate();
      }
    };

    const stopAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
        clock.stop();
      }
    };

    // Pause rendering when tab is hidden or backgrounded
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        stopAnimation();
      } else {
        isRunning = true;
        startAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // IntersectionObserver to pause rendering when hero is scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !document.hidden) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    // Initial loop start
    startAnimation();

    // Cleanup on unmount
    return () => {
      stopAnimation();
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      paneGeometry.dispose();
      ringGeo.dispose();
      particleGeometry.dispose();
      materialTL.dispose();
      materialTR.dispose();
      materialBL.dispose();
      materialBR.dispose();
      ringMat.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    // Accessible Static Vector Fallback
    return (
      <div className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center">
        <div className="relative w-64 h-64 p-4 rounded-3xl bg-giri-surface/80 border border-giri-border backdrop-blur-xl shadow-glow animate-float">
          <img
            src="/logo/giri-os-icon.svg"
            alt="Giri OS Official Emblem — Four-Pane Modern Window Formation"
            width={256}
            height={256}
            decoding="async"
            className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(0,210,255,0.4)]"
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

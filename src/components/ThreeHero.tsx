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
    renderer.toneMappingExposure = 1.25;
    renderer.domElement.style.touchAction = 'pan-y'; // Prevent vertical scroll trap on touch devices
    container.appendChild(renderer.domElement);

    // Root emblem group
    const emblemGroup = new THREE.Group();
    scene.add(emblemGroup);

    // 1. Construct the Official Geometric Letter 'G' from official SVG specification
    const shape = new THREE.Shape();
    const s = 0.019; // scale factor
    const cx = 128;
    const cy = 128;

    const tx = (x: number) => (x - cx) * s;
    const ty = (y: number) => -(y - cy) * s; // Invert SVG Y to Three.js +Y

    shape.moveTo(tx(188), ty(96));
    shape.bezierCurveTo(tx(173), ty(64), tx(139), ty(46), tx(104), ty(51));
    shape.bezierCurveTo(tx(63), ty(57), tx(34), ty(94), tx(34), ty(136));
    shape.bezierCurveTo(tx(34), ty(182), tx(68), ty(215), tx(116), ty(215));
    shape.bezierCurveTo(tx(164), ty(215), tx(197), ty(183), tx(197), ty(141));
    shape.lineTo(tx(197), ty(129));
    shape.lineTo(tx(116), ty(129));
    shape.lineTo(tx(116), ty(152));
    shape.lineTo(tx(170), ty(152));
    shape.bezierCurveTo(tx(167), ty(170), tx(145), ty(190), tx(115), ty(190));
    shape.bezierCurveTo(tx(81), ty(190), tx(58), ty(165), tx(58), ty(134));
    shape.bezierCurveTo(tx(58), ty(103), tx(80), ty(77), tx(112), ty(73));
    shape.bezierCurveTo(tx(136), ty(70), tx(159), ty(81), tx(171), ty(100));
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

    // Physical Material for the Letter 'G' (Electric Blue with Sapphire Clearcoat)
    const gMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0066FF,
      emissive: 0x001B66,
      emissiveIntensity: 0.25,
      roughness: 0.18,
      metalness: 0.65,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95
    });

    const gMesh = new THREE.Mesh(gGeometry, gMaterial);
    emblemGroup.add(gMesh);

    // 2. Outer Orbital Ring (Tilted at -28 degrees)
    const orbitPoints: THREE.Vector3[] = [];
    const numCurvePoints = 64;
    for (let i = 0; i < numCurvePoints; i++) {
      const angle = (i / numCurvePoints) * Math.PI * 2;
      orbitPoints.push(new THREE.Vector3(2.2 * Math.cos(angle), 0.78 * Math.sin(angle), 0));
    }
    const orbitPath = new THREE.CatmullRomCurve3(orbitPoints, true);
    const orbitGeometry = new THREE.TubeGeometry(orbitPath, 120, 0.022, 8, true);
    const orbitMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00D2FF,
      emissive: 0x0066FF,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 1.0
    });
    const orbitRing = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbitRing.rotation.z = THREE.MathUtils.degToRad(-28);
    emblemGroup.add(orbitRing);

    // 3. Luminous Satellite Node on the Orbital Ring
    const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00F0FF,
      emissive: 0x00F0FF,
      emissiveIntensity: 1.5,
      roughness: 0.1
    });
    const satelliteNode = new THREE.Mesh(nodeGeometry, nodeMaterial);
    satelliteNode.position.set(2.2, 0, 0); // Positioned at orbit boundary
    orbitRing.add(satelliteNode);

    // 4. Floating Ambient Particles (Subtle spatial dust)
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
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.DirectionalLight(0x00D2FF, 3.2);
    cyanLight.position.set(-4, 4, 5);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0xA855F7, 3.5, 15);
    violetLight.position.set(4, -3, 4);
    scene.add(violetLight);

    const centerGlow = new THREE.PointLight(0x0066FF, 2.0, 8);
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
      mouseX = x * 0.35;
      mouseY = y * 0.25;
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

        // Orbit ring gentle continuous rotation and wobble
        orbitRing.rotation.z = THREE.MathUtils.degToRad(-28) + Math.sin(elapsedTime * 0.5) * 0.05;

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

      gGeometry.dispose();
      orbitGeometry.dispose();
      nodeGeometry.dispose();
      particleGeometry.dispose();
      gMaterial.dispose();
      orbitMaterial.dispose();
      nodeMaterial.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    // Accessible Static Vector Fallback
    return (
      <div className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center">
        <div className="relative w-64 h-64 p-4 rounded-3xl bg-giri-surface/80 border border-giri-border backdrop-blur-xl shadow-sm dark:shadow-glow animate-float">
          <img
            src="/logo/giri-os-icon.svg"
            alt="Giri OS Official Emblem — Orbital 'G' Geometric Formation"
            width={256}
            height={256}
            decoding="async"
            className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(0,102,255,0.35)]"
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

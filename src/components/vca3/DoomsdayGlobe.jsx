import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 340;
const RADIUS = 1.05;
const DUST_COUNT = 180;
const GOLDEN_ANGLE = 2.399963;

export default function DoomsdayGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // 2. High performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      depth: false,
      stencil: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    // 3. Generate Incursion Singularity Nodes
    const positions = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      const t = i / (NODE_COUNT - 1);
      const theta = i * GOLDEN_ANGLE;
      const phi = Math.acos(1 - 2 * t);

      // Multiversal quantum distortion
      const distortion = 1.0 + Math.sin(i * 11.2) * 0.09;
      positions[i * 3] = RADIUS * Math.sin(phi) * Math.cos(theta) * distortion;
      positions[i * 3 + 1] = RADIUS * Math.sin(phi) * Math.sin(theta) * distortion;
      positions[i * 3 + 2] = RADIUS * Math.cos(phi) * distortion;
    }

    // 4. Generate Latverian / Quantum Filament Connections
    const connections = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 0.28) {
          connections.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }
    const connectionPositions = new Float32Array(connections);

    // 5. Geometries & Materials (Doctor Doom Green 0x00643D & Incursion Gold/Purple)
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Outer Emerald Energy Halo (#00643D)
    const glowMat = new THREE.PointsMaterial({
      color: 0x00643d,
      size: 0.14,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const glowPoints = new THREE.Points(pointsGeo, glowMat);

    // Core Quantum Nodes (Gold & Latverian Green)
    const coreMat = new THREE.PointsMaterial({
      color: 0xfbbf24,
      size: 0.05,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const corePoints = new THREE.Points(pointsGeo, coreMat);

    // Emerald Latverian Filaments (#00643D)
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(connectionPositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00643d,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);

    // 6. Multiversal Cosmic Incursion Dust Particles
    const dustPositions = new Float32Array(DUST_COUNT * 3);
    const dustVelocities = new Float32Array(DUST_COUNT);
    for (let i = 0; i < DUST_COUNT; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 11;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 11;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 7;
      dustVelocities[i] = 0.004 + Math.random() * 0.012;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // Group Core
    const coreGroup = new THREE.Group();
    coreGroup.add(glowPoints);
    coreGroup.add(corePoints);
    coreGroup.add(lines);
    coreGroup.scale.setScalar(2.6);
    scene.add(coreGroup);

    // 7. Interaction & Scroll Tracking
    let targetRotationY = 0;
    let targetRotationX = 0;
    let mouseX = 0;
    let mouseY = 0;
    let lastScrollY = window.scrollY || 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.35;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.35;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      const delta = currentScrollY - lastScrollY;
      targetRotationY += delta * 0.0025;
      targetRotationX += delta * 0.0008;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 8. Window Resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 9. Animation Render Loop
    let animId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      animId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1) || 0.016;
      lastTime = currentTime;

      // Base auto rotation + mouse parallax + scroll
      targetRotationY += 0.002;
      const rotationSmoothness = 1 - Math.exp(-4 * delta);
      coreGroup.rotation.y = THREE.MathUtils.lerp(coreGroup.rotation.y, targetRotationY + mouseX, rotationSmoothness);
      coreGroup.rotation.x = THREE.MathUtils.lerp(coreGroup.rotation.x, targetRotationX + mouseY, rotationSmoothness);

      // Multiversal quantum pulse
      const pulse = 2.6 + Math.sin(currentTime * 0.002) * 0.12;
      coreGroup.scale.setScalar(pulse);

      // Animate incursion dust particles
      const dustPos = dustGeo.attributes.position.array;
      for (let i = 0; i < DUST_COUNT; i++) {
        dustPos[i * 3 + 1] += dustVelocities[i];
        if (dustPos[i * 3 + 1] > 5.5) {
          dustPos[i * 3 + 1] = -5.5;
          dustPos[i * 3] = (Math.random() - 0.5) * 11;
        }
      }
      dustGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pointsGeo.dispose();
      lineGeo.dispose();
      dustGeo.dispose();
      glowMat.dispose();
      coreMat.dispose();
      lineMat.dispose();
      dustMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ willChange: "transform" }}
      aria-hidden="true"
    />
  );
}

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const COUNT = 300;
const RADIUS = 1;
const CONNECTION_THRESHOLD = 0.26;
const GOLDEN_ANGLE = 2.399963;

export default function NeuralGlobeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene & Camera (matching Events page [0, 0, 8] fov 50)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

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

    // 3. Generate Fibonacci Sphere Points
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const t = i / (COUNT - 1);
      const theta = i * GOLDEN_ANGLE;
      const phi = Math.acos(1 - 2 * t);

      positions[i * 3] = RADIUS * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = RADIUS * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = RADIUS * Math.cos(phi);
    }

    // 4. Generate Neural Connections
    const connections = [];
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_THRESHOLD) {
          connections.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }
    const connectionPositions = new Float32Array(connections);

    // 5. Geometries & Constant Initial Color (#00e5ff) Materials
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Soft glow points layer
    const glowMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.085,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const glowPoints = new THREE.Points(pointsGeo, glowMat);

    // Main bright neural nodes
    const brightMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.045,
      transparent: true,
      opacity: 1.0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const brightPoints = new THREE.Points(pointsGeo, brightMat);

    // Neural connections
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(connectionPositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.15,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);

    const group = new THREE.Group();
    group.add(glowPoints);
    group.add(brightPoints);
    group.add(lines);
    group.scale.setScalar(3.0);
    scene.add(group);

    // 6. Scroll Tracking for Rotation and Zoom
    let targetRotationY = 0;
    let targetRotationX = 0;
    let lastScrollY = window.scrollY || window.pageYOffset || 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset || 0;
      const delta = currentScrollY - lastScrollY;

      targetRotationY += delta * 0.0035;
      targetRotationX += delta * 0.0007;
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 7. Window Resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 8. Visibility & Render Loop
    let animId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      animId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1) || 0.016;
      lastTime = currentTime;

      // Smooth Rotation
      const rotationSmoothness = 1 - Math.exp(-4 * delta);
      group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetRotationY, rotationSmoothness);
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetRotationX, rotationSmoothness);

      // Smooth Zoom
      const heroHeight = window.innerHeight;
      const zoomStart = heroHeight * 0.08;
      const zoomEnd = heroHeight * 0.90;
      const currentScroll = window.scrollY || window.pageYOffset || 0;

      const zoomProgress = THREE.MathUtils.clamp(
        (currentScroll - zoomStart) / (zoomEnd - zoomStart),
        0,
        1
      );

      const targetScale = THREE.MathUtils.lerp(3.0, 6.0, zoomProgress);
      const scaleSmoothness = 1 - Math.exp(-8 * delta);
      const newScale = THREE.MathUtils.lerp(group.scale.x, targetScale, scaleSmoothness);
      group.scale.setScalar(newScale);

      renderer.render(scene, camera);
    };
    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pointsGeo.dispose();
      lineGeo.dispose();
      glowMat.dispose();
      brightMat.dispose();
      lineMat.dispose();
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

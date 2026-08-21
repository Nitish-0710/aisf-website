import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * GeodesicGlobeBackground Component (High Performance & Mobile-Optimized)
 * - Renders a 3D Geodesic Node Sphere & Constellation Network
 * - Auto-detects device capabilities to clamp pixel ratios and geometry detail
 * - Uses throttled RAF scroll listener to eliminate stutter
 */
export default function GeodesicGlobeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 9);

    // 2. WebGL Renderer with device-adaptive performance settings
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile, // Disable MSAA on mobile/low-end GPUs for 60fps boost
      powerPreference: "high-performance",
      precision: isMobile ? "mediump" : "highp",
    });
    renderer.setSize(width, height);
    // Cap pixel ratio to 1.5 on desktop, 1.0 on mobile to avoid 4K viewport fill bottlenecks
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Simple & efficient ambient + point lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f3ff, 5, 35);
    pointLight.position.set(5, 5, 8);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x2563eb, 4, 35);
    pointLight2.position.set(-5, -5, 6);
    scene.add(pointLight2);

    // 4. Create Node Glow Texture
    const createNodeTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.35, "rgba(0, 243, 255, 0.9)");
      grad.addColorStop(0.7, "rgba(37, 99, 235, 0.4)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;
      return texture;
    };
    const nodeTexture = createNodeTexture();

    // 5. Geodesic Sphere & Constellation Construction
    const baseRadius = 3.6;
    const sphereGeo = new THREE.IcosahedronGeometry(baseRadius, isMobile ? 1 : 2);

    // Wireframe lines
    const wireframeGeo = new THREE.WireframeGeometry(sphereGeo);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const lineMesh = new THREE.LineSegments(wireframeGeo, lineMaterial);

    // Node points
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: isMobile ? 0.18 : 0.22,
      map: nodeTexture,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pointsMesh = new THREE.Points(sphereGeo, pointsMaterial);

    // Secondary Outer Constellation Grid
    const outerSphereGeo = new THREE.IcosahedronGeometry(baseRadius * 1.5, 1);
    const outerWireframeGeo = new THREE.WireframeGeometry(outerSphereGeo);
    const outerLineMaterial = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const outerLineMesh = new THREE.LineSegments(outerWireframeGeo, outerLineMaterial);

    // Ambient floating dust particles (Adaptive count)
    const dustCount = isMobile ? 120 : 250;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 24;
      dustPositions[i + 1] = (Math.random() - 0.5) * 24;
      dustPositions[i + 2] = (Math.random() - 0.5) * 16;
    }
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      map: nodeTexture,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dustMesh = new THREE.Points(dustGeo, dustMaterial);

    // Main group container
    const globeGroup = new THREE.Group();
    globeGroup.add(lineMesh);
    globeGroup.add(pointsMesh);
    globeGroup.add(outerLineMesh);
    globeGroup.add(dustMesh);
    scene.add(globeGroup);

    // 6. Non-blocking Scroll & Mouse State
    let scrollY = window.scrollY;
    let targetExpansion = 0;
    let currentExpansion = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let isTicking = false;

    const onScroll = () => {
      if (!isTicking) {
        requestAnimationFrame(() => {
          scrollY = window.scrollY;
          const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
          // Pure linear progression [0.0 to 1.0] from page top to page bottom
          const rawProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
          targetExpansion = rawProgress;
          isTicking = false;
        });
        isTicking = true;
      }
    };

    const onMouseMove = (e) => {
      if (!isMobile) {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }
    onScroll();

    // 7. Throttled Window Resize
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }, 100);
    };
    window.addEventListener("resize", onResize);

    // 8. High-Efficiency Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Mouse parallax
      if (!isMobile) {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
        globeGroup.rotation.x = mouseY * 0.5;
        globeGroup.rotation.z = mouseX * 0.3;
      }

      // Continuous ambient rotation
      globeGroup.rotation.y += 0.0025;

      // Smooth linear scroll expansion towards page end
      currentExpansion += (targetExpansion - currentExpansion) * 0.1;

      // Opacity calculation based on scroll
      const fadeProgress = Math.min(1, Math.max(0, (scrollY - 100) / 300));
      const overallOpacity = 0.3 + fadeProgress * 0.7;

      lineMaterial.opacity = 0.55 * overallOpacity;
      pointsMaterial.opacity = 1.0 * overallOpacity;
      outerLineMaterial.opacity = 0.35 * overallOpacity;
      dustMaterial.opacity = 0.6 * overallOpacity;

      // Moderate linear scaling reaching maximum smoothly at the end of the page
      const innerScale = 1.0 + currentExpansion * 1.7;
      lineMesh.scale.set(innerScale, innerScale, innerScale);
      pointsMesh.scale.set(innerScale, innerScale, innerScale);

      const outerScale = 1.0 + currentExpansion * 2.3;
      outerLineMesh.scale.set(outerScale, outerScale, outerScale);

      // Gentle camera depth adjustment
      camera.position.z = 9.0 - currentExpansion * 1.5;

      outerLineMesh.rotation.y -= 0.0012;
      dustMesh.rotation.y -= 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resource Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
      window.removeEventListener("scroll", onScroll);
      if (!isMobile) {
        window.removeEventListener("mousemove", onMouseMove);
      }
      window.removeEventListener("resize", onResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      wireframeGeo.dispose();
      outerSphereGeo.dispose();
      outerWireframeGeo.dispose();
      dustGeo.dispose();
      nodeTexture.dispose();
      lineMaterial.dispose();
      pointsMaterial.dispose();
      outerLineMaterial.dispose();
      dustMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu"
      style={{ willChange: "transform" }}
      aria-hidden="true"
    />
  );
}

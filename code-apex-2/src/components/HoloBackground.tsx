import { useEffect, useRef } from "react";
import * as THREE from "three";

const COUNT = 400;
const RADIUS = 1;
const CONNECTION_THRESHOLD = 0.26;

export default function HoloBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ---------- THREE SETUP ---------- */

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    mount.appendChild(renderer.domElement);

    /* ---------- NEURAL SPHERE ---------- */

    const group = new THREE.Group();
    scene.add(group);

    const positions = new Float32Array(COUNT * 3);

    const goldenAngle = 2.399963;

    for (let i = 0; i < COUNT; i++) {
      const t = i / (COUNT - 1);

      const theta = i * goldenAngle;
      const phi = Math.acos(1 - 2 * t);

      positions[i * 3] =
        RADIUS *
        Math.sin(phi) *
        Math.cos(theta);

      positions[i * 3 + 1] =
        RADIUS *
        Math.sin(phi) *
        Math.sin(theta);

      positions[i * 3 + 2] =
        RADIUS *
        Math.cos(phi);
    }

    /* ---------- CONNECTIONS ---------- */

    const connections: number[] = [];

    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx =
          positions[i * 3] -
          positions[j * 3];

        const dy =
          positions[i * 3 + 1] -
          positions[j * 3 + 1];

        const dz =
          positions[i * 3 + 2] -
          positions[j * 3 + 2];

        const distance = Math.sqrt(
          dx * dx +
          dy * dy +
          dz * dz
        );

        if (distance < CONNECTION_THRESHOLD) {
          connections.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],

            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
        }
      }
    }

    /* ---------- GLOWING POINTS ---------- */

    const pointsGeometry =
      new THREE.BufferGeometry();

    pointsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const glowMaterial =
      new THREE.PointsMaterial({
        color: "#ff2142",
        size: 0.085,
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

    const glowPoints =
      new THREE.Points(
        pointsGeometry,
        glowMaterial
      );

    group.add(glowPoints);

    /* ---------- MAIN BRIGHT POINTS ---------- */

    const pointsMaterial =
      new THREE.PointsMaterial({
        color: "#ff2142",
        size: 0.045,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

    const points =
      new THREE.Points(
        pointsGeometry,
        pointsMaterial
      );

    group.add(points);

    /* ---------- CONNECTION LINES ---------- */

    const lineGeometry =
      new THREE.BufferGeometry();

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array(connections),
        3
      )
    );

    const lineMaterial =
      new THREE.LineBasicMaterial({
        color: "#ff2142",
        transparent: true,
        opacity: 0.15,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

    const lines =
      new THREE.LineSegments(
        lineGeometry,
        lineMaterial
      );

    group.add(lines);

    /* ---------- SCROLL ROTATION ---------- */

    let lastScrollY = window.scrollY;

    let targetRotationY = 0;
    let targetRotationX = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const delta =
        currentScrollY - lastScrollY;

      targetRotationY += delta * 0.008;
      targetRotationX += delta * 0.0015;

      lastScrollY = currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    /* ---------- ANIMATION ---------- */

    const clock = new THREE.Clock();

    let animationFrame: number;

    const animate = () => {
      animationFrame =
        requestAnimationFrame(animate);

      const delta = clock.getDelta();

      const smoothRotation =
        1 - Math.exp(-7 * delta);

      group.rotation.y =
        THREE.MathUtils.lerp(
          group.rotation.y,
          targetRotationY,
          smoothRotation
        );

      group.rotation.x =
        THREE.MathUtils.lerp(
          group.rotation.x,
          targetRotationX,
          smoothRotation
        );

      /*
        SCROLL ZOOM

        Scroll DOWN = sphere expands
        Scroll UP = sphere contracts back
      */

      const heroHeight =
        window.innerHeight;

      const zoomStart =
        heroHeight * 0.08;

      const zoomEnd =
        heroHeight * 0.9;

      const zoomProgress =
        THREE.MathUtils.clamp(
          (window.scrollY - zoomStart) /
            (zoomEnd - zoomStart),
          0,
          1
        );

      const targetScale =
        THREE.MathUtils.lerp(
          3,
          6,
          zoomProgress
        );

      const smoothScale =
        1 - Math.exp(-8 * delta);

      const newScale =
        THREE.MathUtils.lerp(
          group.scale.x,
          targetScale,
          smoothScale
        );

      group.scale.setScalar(newScale);

      /* subtle line pulse */

      lineMaterial.opacity =
        0.12 +
        0.035 *
          Math.sin(
            clock.elapsedTime * 0.5
          );

      renderer.render(scene, camera);
    };

    animate();

    /* ---------- RESIZE ---------- */

    const handleResize = () => {
      camera.aspect =
        window.innerWidth /
        window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    /* ---------- CLEANUP ---------- */

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      cancelAnimationFrame(animationFrame);

      pointsGeometry.dispose();
      lineGeometry.dispose();

      glowMaterial.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();

      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="holo-background"
    />
  );
}
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RedOrb = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(
      mount.clientWidth,
      mount.clientHeight
    );

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    mount.appendChild(renderer.domElement);

    /* PARTICLES */

    const particleCount = 7000;

    const positions = new Float32Array(
      particleCount * 3
    );

    const originalPositions = new Float32Array(
      particleCount * 3
    );

    const openedPositions = new Float32Array(
      particleCount * 3
    );

    const radius = 1.65;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const phi = Math.acos(
        -1 + (2 * i) / particleCount
      );

      const theta =
        Math.sqrt(
          particleCount * Math.PI
        ) * phi;

      const x =
        radius *
        Math.cos(theta) *
        Math.sin(phi);

      const y =
        radius *
        Math.sin(theta) *
        Math.sin(phi);

      const z =
        radius *
        Math.cos(phi);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      /*
        SPLIT THE SPHERE

        Left particles move left,
        right particles move right,
        while adding random depth.
      */

      const direction = x > 0 ? 1 : -1;

      openedPositions[i3] =
        x + direction * (1.2 + Math.random() * 1.5);

      openedPositions[i3 + 1] =
        y + (Math.random() - 0.5) * 1.2;

      openedPositions[i3 + 2] =
        z + (Math.random() - 0.5) * 2;
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    );

    const material =
      new THREE.PointsMaterial({
        color: "#ff1838",
        size: 0.018,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      });

    const particles =
      new THREE.Points(
        geometry,
        material
      );

    scene.add(particles);

    /* SCROLL PROGRESS */

    const animationState = {
      progress: 0,
    };

    const trigger =
      ScrollTrigger.create({
        trigger: ".challenge",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onUpdate: (self) => {
          animationState.progress =
            self.progress;
        },
      });

    /* ANIMATION LOOP */

    let animationFrame: number;

    const animate = () => {
      animationFrame =
        requestAnimationFrame(animate);

      const positionArray =
        geometry.attributes.position
          .array as Float32Array;

      const progress =
        animationState.progress;

      for (
        let i = 0;
        i < particleCount;
        i++
      ) {
        const i3 = i * 3;

        positionArray[i3] =
          THREE.MathUtils.lerp(
            originalPositions[i3],
            openedPositions[i3],
            progress
          );

        positionArray[i3 + 1] =
          THREE.MathUtils.lerp(
            originalPositions[i3 + 1],
            openedPositions[i3 + 1],
            progress
          );

        positionArray[i3 + 2] =
          THREE.MathUtils.lerp(
            originalPositions[i3 + 2],
            openedPositions[i3 + 2],
            progress
          );
      }

      geometry.attributes.position.needsUpdate =
        true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect =
        mount.clientWidth /
        mount.clientHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        mount.clientWidth,
        mount.clientHeight
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      cancelAnimationFrame(
        animationFrame
      );

      trigger.kill();

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (
        renderer.domElement.parentNode ===
        mount
      ) {
        mount.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="red-orb"
    />
  );
};

export default RedOrb;
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 400;
const RADIUS = 1;
const CONNECTION_THRESHOLD = 0.26;

const COLOR_HERO = new THREE.Color("#00e5ff");
const COLOR_CA2 = new THREE.Color("#ff3344");
const COLOR_CA1 = new THREE.Color("#2f7dff");

function EventBackgroundModel() {
  const groupRef = useRef();

  const pointsMaterialRef = useRef();
  const lineMaterialRef = useRef();

  const targetRotationY = useRef(0);
  const targetRotationX = useRef(0);

  const currentColor = useRef(COLOR_HERO.clone());
  const targetColor = useRef(COLOR_HERO.clone());

  /*
    ---------------------------------------------------------
    Generate the neural sphere
    ---------------------------------------------------------
  */
  const positions = useMemo(() => {
    const points = new Float32Array(COUNT * 3);
    const goldenAngle = 2.399963;

    for (let i = 0; i < COUNT; i++) {
      const t = i / (COUNT - 1);

      const theta = i * goldenAngle;
      const phi = Math.acos(1 - 2 * t);

      points[i * 3] =
        RADIUS * Math.sin(phi) * Math.cos(theta);

      points[i * 3 + 1] =
        RADIUS * Math.sin(phi) * Math.sin(theta);

      points[i * 3 + 2] =
        RADIUS * Math.cos(phi);
    }

    return points;
  }, []);

  /*
    ---------------------------------------------------------
    Create neural connections
    ---------------------------------------------------------
  */
  const connectionPositions = useMemo(() => {
    const connections = [];

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

    return new Float32Array(connections);
  }, [positions]);

  /*
    ---------------------------------------------------------
    Scroll:
    - controls rotation
    - determines active event section
    ---------------------------------------------------------
  */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      /*
        SLOWER ROTATION

        Small scroll = small visible rotation.
        Scroll down = forward rotation.
        Scroll up = reverse rotation.
      */
      targetRotationY.current += delta * 0.008;
      targetRotationX.current += delta * 0.0015;

      lastScrollY = currentScrollY;

      /*
        -----------------------------------------------------
        EVENT COLOR

        Before the event sections:
          cyan

        Code Apex 2.0:
          red

        Code Apex 1.0:
          blue
        -----------------------------------------------------
      */

      const switchLine = window.innerHeight * 0.55;

      const codeApex2 = document.getElementById("code-apex-2");
      const codeApex1 = document.getElementById("code-apex-1");

      let activeColor = COLOR_HERO;

      if (
        codeApex2 &&
        codeApex2.getBoundingClientRect().top <= switchLine
      ) {
        activeColor = COLOR_CA2;
      }

      if (
        codeApex1 &&
        codeApex1.getBoundingClientRect().top <= switchLine
      ) {
        activeColor = COLOR_CA1;
      }

      targetColor.current.copy(activeColor);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    ---------------------------------------------------------
    Animation
    ---------------------------------------------------------
  */
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    /*
      -------------------------------------------------------
      SMOOTH ROTATION
      -------------------------------------------------------
    */

    const rotationSmoothness =
      1 - Math.exp(-7 * delta);

    groupRef.current.rotation.y =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY.current,
        rotationSmoothness
      );

    groupRef.current.rotation.x =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX.current,
        rotationSmoothness
      );

    /*
      -------------------------------------------------------
      COLOR TRANSITION
      -------------------------------------------------------

      Color changes smoothly rather than snapping.
      -------------------------------------------------------
    */

    const colorSmoothness =
      1 - Math.exp(-4 * delta);

    currentColor.current.lerp(
      targetColor.current,
      colorSmoothness
    );

    if (pointsMaterialRef.current) {
      pointsMaterialRef.current.color.copy(
        currentColor.current
      );
    }

    if (lineMaterialRef.current) {
      lineMaterialRef.current.color.copy(
        currentColor.current
      );
    }

    /*
      -------------------------------------------------------
      ZOOM

      Initial size:
        1.45

      Final size:
        6.0

      Zoom is spread across most of the HERO section.

      It does NOT finish after 20px anymore.
      -------------------------------------------------------
    */

    const heroHeight = window.innerHeight;

    const zoomStart = heroHeight * 0.08;
    const zoomEnd = heroHeight * 0.90;

    const zoomProgress = THREE.MathUtils.clamp(
      (window.scrollY - zoomStart) /
      (zoomEnd - zoomStart),
      0,
      1
    );

    const targetScale = THREE.MathUtils.lerp(
      3.0,
      6.0,
      zoomProgress
    );

    const scaleSmoothness =
      1 - Math.exp(-8 * delta);

    const newScale = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      targetScale,
      scaleSmoothness
    );

    groupRef.current.scale.setScalar(newScale);

    /*
      -------------------------------------------------------
      SUBTLE LINE PULSE
      -------------------------------------------------------
    */

    if (lineMaterialRef.current) {
      lineMaterialRef.current.opacity =
        0.12 +
        0.035 *
        Math.sin(
          state.clock.elapsedTime * 0.5
        );
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0, 0]}
      scale={1}
    >
      {/* Soft glow around the neural nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#00e5ff"
          size={0.085}
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Main bright neural nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          ref={pointsMaterialRef}
          color="#00e5ff"
          size={0.045}
          transparent
          opacity={1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Neural connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connectionPositions, 3]}
          />
        </bufferGeometry>

        <lineBasicMaterial
          ref={lineMaterialRef}
          color="#00e5ff"
          transparent
          opacity={0.15}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default EventBackgroundModel;
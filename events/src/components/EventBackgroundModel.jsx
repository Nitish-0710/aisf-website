import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 300;
const RADIUS = 1;
const CONNECTION_THRESHOLD = 0.30;

function EventBackgroundModel() {
  const groupRef = useRef();
  const lineMaterialRef = useRef();

  const targetRotationY = useRef(0);
  const targetRotationX = useRef(0);

  /*
    ---------------------------------------------------------
    Generate points on a sphere using the golden-angle method.
    This runs only once.
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
    Create connections between nearby points.
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
    Read page scroll.
    ---------------------------------------------------------
  */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      /*
        Every small scroll movement directly adds rotation.
  
        Increase 0.035 if you want even more rotation
        from a tiny scroll.
      */
      targetRotationY.current += delta * 0.065;

      /*
        Add a small X movement too, so the object doesn't
        feel like it's rotating on a perfectly flat axis.
      */
      targetRotationX.current += delta * 0.008;

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    ---------------------------------------------------------
    Animate rotation and subtle connection pulse.
    ---------------------------------------------------------
  */
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    /*
      -------------------------------------------------------
      SMOOTH ROTATION
      -------------------------------------------------------
  
      Instead of snapping to the scroll position, we smoothly
      approach the target rotation.
  
      This gives the sphere a continuous, fluid motion.
    */

    const rotationSmoothness =
      1 - Math.exp(-14 * delta);

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY.current,
      rotationSmoothness
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX.current,
      rotationSmoothness
    );

    /*
      -------------------------------------------------------
      QUICK INITIAL ZOOM
      -------------------------------------------------------
  
      The first ~60px of scrolling produces the zoom.
  
      After that, the size stays fixed.
    */

    const zoomProgress = THREE.MathUtils.clamp(
      window.scrollY / 20,
      0,
      1
    );

    /*
      Initial size = 1
      Final size   = 2.2
    */

    const targetScale = THREE.MathUtils.lerp(
      1,
      2.2,
      zoomProgress
    );

    const scaleSmoothness =
      1 - Math.exp(-12 * delta);

    const newScale = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      targetScale,
      scaleSmoothness
    );

    groupRef.current.scale.setScalar(newScale);

    /*
      -------------------------------------------------------
      SUBTLE CONNECTION PULSE
      -------------------------------------------------------
    */

    if (lineMaterialRef.current) {
      lineMaterialRef.current.opacity =
        0.12 +
        0.04 *
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
      {/* Neural points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              positions,
              3,
            ]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#00e5ff"
          size={0.055}
          transparent
          opacity={0.95}
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
            args={[
              connectionPositions,
              3,
            ]}
          />
        </bufferGeometry>

        <lineBasicMaterial
          ref={lineMaterialRef}
          color="#00d9ff"
          transparent
          opacity={0.20}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default EventBackgroundModel;
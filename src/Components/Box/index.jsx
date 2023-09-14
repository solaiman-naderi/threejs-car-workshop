import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
const Box = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));
  const texture = useLoader(THREE.TextureLoader, "/wood.jpg");
  // useFrame((state) => {
  //   ref.current.rotation.x += 0.01;
  //   ref.current.rotation.y += 0.01;
  // });

  const handlePointDown = (e) => {
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
  };
  const handlePointEnter = (e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };
  const handlePointLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };
  return (
    <mesh
      ref={ref}
      {...props}
      api={api}
      castShadow
      onPointerDown={handlePointDown}
      onPointerEnter={handlePointEnter}
      onPointerLeave={handlePointLeave}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        color="orange"
        transparent
        opacity={0.9}
        fog={false}
        clearcoat={1}
        roughness={0}
        transmission={0.7}
        reflectivity={1}
        map={texture}
      />
    </mesh>
  );
};
export default Box;

import "./App.css";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
const Box = (props) => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color="orange" />
    </mesh>
  );
};

const Floor = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <sphereGeometry   args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
};

function App() {
  return (
    <div style={{ width: "100vm", height: "100vh" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        <Box position={[2, 1, 0]} />
        <Floor position={[0, -0.5, 0]} />
        <ambientLight intensity={0.9} />
        <pointLight />
        <CameraController />
        <axesHelper args={[3]} />
        <Bulb position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;

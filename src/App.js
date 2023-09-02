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
const Box = () => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};

function App() {
  return (
    <div style={{ width: "100vm", height: "100vh" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        {/* <Box /> */}
        <CameraController />
        <axesHelper args={[3]} />
      </Canvas>
    </div>
  );
}

export default App;

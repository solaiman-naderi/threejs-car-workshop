import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = () => {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
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
      <Canvas style={{ background: "black" }}>
        <Box />
      </Canvas>
    </div>
  );
}

export default App;

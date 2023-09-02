import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = () => {
  // useFrame((state) => {
  //   console.log(state);
  // });
  return (
    <mesh>
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

import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import CameraController from "./Components/Orbit";
import Box from "./Components/Box";
import Background from "./Components/Background";
import Floor from "./Components/Floor";
import Bulb from "./Components/Blub";
import ColorPicker from "./Components/ColorPicker";
import Dragable from "./Components/Dragable";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [enabledOrbit, setEnabledOrbit] = useState(true);
  // let enabledOrbit = true;
  const changeOrbitStatus = (type) => {
    console.log(type);
    return setEnabledOrbit(type);
  };
  return (
    <div style={{ width: "100vm", height: "100vh" }}>
      <ColorPicker />
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [3, 2, 7] }}
      >
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <ambientLight intensity={0.9} />
        <axesHelper args={[3]} />
        <Bulb position={[0, 3, 0]} />
        <OrbitControls enabled={enabledOrbit ? true : false} />
        <Dragable enabledOrbit={changeOrbitStatus}>
          <Suspense fallback={null}>
            <Box position={[-4, 1, 0]} />
          </Suspense>

          <Suspense fallback={null}>
            <Box position={[4, 1, 0]} />
          </Suspense>
        </Dragable>

        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;

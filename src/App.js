import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/cannon";

import Background from "./Components/Background";
import Floor from "./Components/Floor";
import Bulb from "./Components/Blub";
import ColorPicker from "./Components/ColorPicker";
import { OrbitControls } from "@react-three/drei";
import CameraControls from "./Components/CameraControls";
import Cars from "./Components/Cars";
import CameraButtons from "./Components/CameraButton";
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
      <CameraButtons />

      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <CameraControls />
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <ambientLight intensity={0.9} />
        {/* <axesHelper args={[5]} /> */}
        <OrbitControls enabled={enabledOrbit ? true : false} />
        <Suspense fallback={null}>
          <Background />
        </Suspense>

        <Bulb position={[6, 4, 0]} />
        <Bulb position={[0,4, 0]} />
        <Bulb position={[-6, 4, 0]} />
        <Physics>
          <Cars changeOrbitStatus={changeOrbitStatus} />

          <Floor position={[0, 0, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;

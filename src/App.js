import "./App.css";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  useLoader,
} from "@react-three/fiber";
import { useEffect, useRef, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
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
  const texture = useLoader(THREE.TextureLoader, "/wood.jpg");
  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef} {...props} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        color="orange"
        transparent
        opacity={0.9}
        fog={false}
        // wireframe
        clearcoat={1}
        roughness={0}
        transmission={0.7}
        reflectivity={1}
        map={texture}
      />
    </mesh>
  );
};

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow intensity={0.9} />

      <sphereGeometry args={[0.2]} />
      <meshPhongMaterial
        attach="material"
        emissive="yellow"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
};

const Background = () => {
  const texture = useLoader(THREE.TextureLoader, "/autoshop.jpg");
  const { scene, gl } = useThree();

  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  );
  cubeRenderTarget.fromEquirectangularTexture(gl, texture);

  scene.background = cubeRenderTarget.texture;
  return null;
};

function App() {
  return (
    <div style={{ width: "100vm", height: "100vh" }}>
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <Suspense fallback={null}>
          <Box position={[2, 1, 0]} />
        </Suspense>

        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, 0, 0]} />
        <ambientLight intensity={0.9} />
        <CameraController />
        <axesHelper args={[3]} />
        <Bulb position={[0, 3, 0]} />
      </Canvas>
    </div>
  );
}

export default App;

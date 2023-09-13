import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo } from "react";
const Background = () => {
  const texture = useLoader(THREE.TextureLoader, "/autoshop.jpg");
  const { scene, gl } = useThree();
  useMemo(() => {
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(
      texture.image.height
    );
    cubeRenderTarget.fromEquirectangularTexture(gl, texture);

    scene.background = cubeRenderTarget.texture;
  }, []);

  return null;
};

export default Background;

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import state from "../../state";
const CameraControls = (props) => {
  const vec = new THREE.Vector3();
  useFrame(({ camera, scene }) => {
    if (state.activeMesh.name !== state.activeMeshName) {
        state.activeMesh = scene.getObjectByName(
            state.activeMeshName
        ) || {}
    }
    camera.position.lerp(state.cameraPosition, 0.1);
    const diff = camera.position.clone().sub(state.cameraPosition).length();
    if (diff < 0.1) state.shoudUpdate = false;
  });
  return null;
};

export default CameraControls;

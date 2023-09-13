import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

extend({ DragControls });

const Dragable = (props) => {
  const groupRef = useRef();
  const controlsRef = useRef();
  const [childrens, setChildrens] = useState();
  const { gl, camera } = useThree();

  useEffect(() => {
    setChildrens(groupRef.current.children);
  }, []);

  useEffect(() => {
    console.log(props);
    controlsRef.current.addEventListener("hoveron", (e) => {
      props.enabledOrbit(false);
    });
    controlsRef.current.addEventListener("hoveroff", (e) => {
      props.enabledOrbit(true);
    });
  }, [childrens]);
  return (
    <group ref={groupRef}>
      <dragControls
        ref={controlsRef}
        args={[childrens, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};
export default Dragable;

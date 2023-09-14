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
    controlsRef.current.addEventListener("hoveron", (e) => {
      return props.enabledOrbit(false);
    });
    controlsRef.current.addEventListener("hoveroff", (e) => {
      return props.enabledOrbit(true);
    });

    controlsRef.current.addEventListener("dragstart", (e) => {
      return e.object.api?.mass.set(0);
    });

    controlsRef.current.addEventListener("dragend", (e) => {
      return e.object.api?.mass.set(1);
    });
    controlsRef.current.addEventListener("drag", (e) => {
      e.object.api?.position.copy(e.object.position);
      e.object.api?.velocity.set(0, 0, 0);
    });
  }, [childrens]);
  return (
    <group ref={groupRef}>
      <dragControls
        transformGroup={props.transformGroup}
        ref={controlsRef}
        args={[childrens, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};
export default Dragable;

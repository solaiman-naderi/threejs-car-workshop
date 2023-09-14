import { Suspense } from "react";

import Dragable from "../Dragable";

import Model from "../Model";
import BoundingBox from "../BoundingBox";

const Cars = (props) => {
  return (
    <>
      <Dragable transformGroup enabledOrbit={props.changeOrbitStatus}>
        <Suspense fallback={null}>
          <BoundingBox
            offset={[0, -0.4, 1]}
            dims={[3, 2, 6.5]}
            position={[5, 3, 0]}
          >
            <Model
              path="/tesla_model_3/scene.gltf"
              scale={new Array(3).fill(0.01)}
            />
          </BoundingBox>
        </Suspense>
      </Dragable>

      <Dragable transformGroup enabledOrbit={props.changeOrbitStatus}>
        <Suspense fallback={null}>
          <BoundingBox
            offset={[0, -0.6, 0.3]}
            dims={[3, 2, 6.5]}
            position={[-4, 5, 0]}
          >
            <Model
              path="/tesla_model_s/scene.gltf"
              scale={new Array(3).fill(0.012)}
            />
          </BoundingBox>
        </Suspense>
      </Dragable>
    </>
  );
};
export default Cars;

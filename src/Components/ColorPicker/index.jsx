import * as THREE from "three";
import state from "../../state";

const ColorPicker = (props) => {
  const handleChangeColor = (e) => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <div
        onClick={handleChangeColor}
        style={{ width: "50px", height: "50px", background: "blue" }}
      ></div>
      <div
        onClick={handleChangeColor}
        style={{ width: "50px", height: "50px", background: "red" }}
      ></div>
      <div
        onClick={handleChangeColor}
        style={{ width: "50px", height: "50px", background: "orange" }}
      ></div>
    </div>
  );
};

export default ColorPicker;

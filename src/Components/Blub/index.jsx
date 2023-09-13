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

export default Bulb;

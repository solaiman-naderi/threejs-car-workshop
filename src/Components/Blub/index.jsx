const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight
        castShadow
        intensity={40}
        position={(0, 0, 0)}
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />

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

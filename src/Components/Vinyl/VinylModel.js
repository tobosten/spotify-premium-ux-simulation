import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls, useGLTF, useHelper } from "@react-three/drei";
import React from "react";
import "./VinylModel.css";
import { DirectionalLightHelper } from "three";

const Sphere = ({ position, size, color }) => {
  const ref = useRef();

  /* import { DirectionalLightHelper } from "three"; */
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 1;
    ref.current.rotation.z += delta * 1;
    ref.current.rotation.x += delta * 1.2;
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size} />
      <meshStandardMaterial wireframe={true} color={"#14FF00"} />
    </mesh>
  );
};

function Model() {
  // 'process.env.PUBLIC_URL' can be used for public folder.
  // Because this project is on gh-pages this finds both local dev and gh-pages.
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/model.glb`);
  const ref = useRef();
  const [vinylHovering, setVinylHovering] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh rotation={[1, 0, .1]} >
      <primitive
        ref={ref}
        object={scene}
        position={[0, 1, 0]}
        /* rotation={[1, 0, 0]} */
        scale={3.5}
      />
    </mesh>
  );
}

useGLTF.preload(`${process.env.PUBLIC_URL}/model.glb`);

const Scene = () => {
  return (
    <>
      <directionalLight position={[-1.5, 3, 2]} intensity={2} />
      <directionalLight position={[-2, 5, 2]} intensity={.5} />
      <directionalLight position={[-2.7, 5, 2]} intensity={.1} />
      {/* <ambientLight intensity={1} /> */}

      {/* <Sphere size={[2.5, 10, 7]} /> */}
      <Model />

      {/* <OrbitControls /> */}
    </>
  );
};

const VinylModel = () => {
  return (
    <div className="modelContainer">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default VinylModel;

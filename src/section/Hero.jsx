import React, { Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronut } from "../components/Astronut";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <div className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space ">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </div>
  );
};

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.pointer.x / 10, 1 + state.pointer.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;

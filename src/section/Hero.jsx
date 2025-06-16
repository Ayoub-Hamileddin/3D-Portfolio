import React from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { Astronut } from "../components/Astronut";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

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
          <Astronut
            scale={isMobile && 0.23}
            position={isMobile && [0, -1.5, 0]}
          />
          <OrbitControls />
        </Canvas>
      </figure>
    </div>
  );
};

export default Hero;

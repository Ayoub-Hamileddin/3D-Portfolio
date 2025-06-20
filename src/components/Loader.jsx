import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="uppercase font-black text-3xl ">
      {progress} % loaded
    </Html>
  );
};

export default Loader;

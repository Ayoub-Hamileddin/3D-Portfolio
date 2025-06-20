import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
    </div>
  );
};

export default App;

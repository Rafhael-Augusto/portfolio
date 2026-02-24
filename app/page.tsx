"use client";
import { useState } from "react";

import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <Navbar isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <Hero isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

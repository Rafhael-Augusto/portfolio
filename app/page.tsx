"use client";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Hero } from "@/components/hero/hero";
import { Navbar } from "@/components/navbar/navbar";
import { About } from "@/components/about/about";
import { Experience } from "@/components/experience/experience";
import { Projects } from "@/components/projects/projects";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <div className={cn("opacity-0", isLoaded && "opacity-100")}>
        <Navbar />
      </div>
      <Hero isLoaded={isLoaded} setIsLoaded={setIsLoaded} />

      <div className={cn("hidden", isLoaded && "block")}>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

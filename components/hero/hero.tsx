"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";

import { BBH_Hegarty } from "next/font/google";

const smooch_sans = BBH_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
  fallback: ["sans-serif"],
});

const titleVariants = {
  start: {
    fontSize: "4rem",
    transition: { duration: 0.3, delay: 0.6 },
  },
  expanded: {
    fontSize: "10rem",
    transition: { duration: 0.6 },
  },
  done: {
    fontSize: "6rem",
    transition: { duration: 0.4, delay: 0.2 },
  },
};

const underlineVariants = {
  start: {
    scaleX: 0,
    transformOrigin: "left",
    transition: {
      delay: 0.2,
    },
  },
  end: {
    scaleX: 1,
    transformOrigin: "left",
    transition: {
      duration: 1,
    },
  },
};

type props = {
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
};

export default function Hero({ isLoaded, setIsLoaded }: props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const titleControls = useAnimation();
  const underlineControls = useAnimation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    const startAnimation = async () => {
      await titleControls.start("start");
      await titleControls.start("expanded");
      await titleControls.start("done");
      setIsLoaded(true);
      await underlineControls.start("start");
      await underlineControls.start("end");
    };

    startAnimation();
  }, []);

  return (
    <div className="relative h-screen w-screen text-white text-center">
      <video
        className={cn(
          "h-full w-full object-cover opacity-0 transition-all duration-1000",
          isLoaded && "opacity-100",
        )}
        ref={videoRef}
        muted
        loop
        playsInline
      >
        <source src="/background.webm" />
      </video>

      <div className="absolute h-screen w-screen bg-black/80 bottom-0 left-0" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full ">
        <motion.h1
          variants={titleVariants}
          initial="start"
          animate={titleControls}
          transition={{ ease: "easeInOut" }}
          className={cn(smooch_sans.className)}
        >
          Web Developer
        </motion.h1>
      </div>

      <div className="absolute bottom-5/12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/6 ">
        <motion.div
          variants={underlineVariants}
          initial="start"
          animate={underlineControls}
          className="bg-white w-full h-1"
        />
      </div>

      <div
        className={cn(
          "absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit opacity-0 transition-all duration-1000",
          isLoaded && "opacity-100",
        )}
      >
        <p className="text-2xl">
          Transformando ideias em código limpo, soluções eficientes e
          experiências digitais memoráveis
        </p>
      </div>
    </div>
  );
}

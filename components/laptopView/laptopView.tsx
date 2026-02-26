"use client";

import { useRef, useEffect } from "react";

import { cn } from "@/lib/utils";

import { LoopOnce, Group } from "three";
import { Canvas, useFrame } from "@react-three/fiber";

import { useInView } from "@/hooks/useInView";

import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";

interface props {
  isVisible: boolean;
}

function LaptopModel({ isVisible }: props) {
  const gltf = useGLTF("/laptop.glb");
  const group = useRef<Group>(null);

  const { actions } = useAnimations(gltf.animations, group);

  useEffect(() => {
    if (!isVisible) return;

    Object.values(actions).forEach((action) => {
      if (!action) return;
      action.setLoop(LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    });
  }, [isVisible, actions]);

  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 2;
    }
  });

  return (
    <primitive
      ref={group}
      object={gltf.scene}
      scale={0.5}
      rotation={[0, Math.PI / 1, 0]}
      position={[0, 0, 10]}
    />
  );
}

export function LaptopView() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.6,
  });

  return (
    <div>
      <div
        ref={ref}
        className={cn("transition-all duration-700 ease-out mt-28 h-128 w-lg")}
      >
        <Canvas
          camera={{ position: [70, 45, 30], fov: 60 }}
          onCreated={({ gl }) => {
            gl.toneMappingExposure = 0.2;
          }}
        >
          <ambientLight intensity={0.1} />
          <LaptopModel isVisible={isVisible} />
          <Environment preset="studio" />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            rotateSpeed={0.6}
          />
        </Canvas>
      </div>
    </div>
  );
}

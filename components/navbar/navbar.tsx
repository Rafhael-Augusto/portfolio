"use client";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";

const navItems = [
  {
    label: "Sobre",
    targetId: "about",
  },
  {
    label: "Experiencia",
    targetId: "experience",
  },
  {
    label: "Projetos",
    targetId: "projects",
  },
  {
    label: "Contato",
    targetId: "contact",
  },
];
export default function Navbar() {
  return (
    <div
      className={cn(
        "p-4 fixed backdrop-blur-xs top-0 left-0 z-50 w-full bg-transparent transition-all duration-1000 font-bold",
      )}
    >
      <div className="flex items-center text-white">
        <p className="shrink-0">Rafhael Augusto</p>
        <ButtonGroup
          className="flex items-center justify-center gap-16 w-full"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <Button
              key={item.targetId}
              className="text-xl bg-transparent cursor-pointer hover:text-2xl hover:underline hover:bg-transparent"
            >
              {item.label}
            </Button>
          ))}
        </ButtonGroup>

        <p>{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { useInView } from "@/hooks/useInView";

import { BBH_Hegarty } from "next/font/google";

import {
  SiBlender,
  SiGithub,
  SiLucide,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { ChartAreaIcon } from "lucide-react";
import { MdAnimation } from "react-icons/md";

import ProjectsItem from "../projectsItem/projectsItem";

const smooch_sans = BBH_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
  fallback: ["sans-serif"],
});

const projects = [
  {
    title: "Trackly",
    desc: `Desenvolvi uma aplicação web full-stack para gerenciamento de tarefas e metas, permitindo criação, edição, exclusão e filtros avançados por status, data e nome.

    O sistema conta com dashboards interativos para visualização de métricas semanais e mensais, incluindo tarefas concluídas e horas registradas.

    Também implementei um cronômetro persistente acessível em todas as páginas, sistema de alertas configuráveis com suporte a tema claro e escuro, priorizando usabilidade e experiência do usuário.`,
    video: "/background.mp4",
    id: 0,
    links: [
      {
        name: "Github",
        icon: SiGithub,
        link: "https://github.com/Rafhael-Augusto/trackly",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        link: "https://trackly-opal.vercel.app/",
      },
    ],
    tools: [
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        icon: SiShadcnui,
        name: "Shadcn/ui",
      },
      {
        icon: SiLucide,
        name: "Lucide",
      },
      {
        icon: ChartAreaIcon,
        name: "Recharts",
      },
      {
        icon: SiPrisma,
        name: "Prisma",
      },
      {
        icon: SiPostgresql,
        name: "Postgresql",
      },
    ],
  },
  {
    title: "Portfolio",
    desc: `Portfolio pessoal desenvolvido como aplicação web moderna para apresentação de projetos, tecnologias e experiências. 
    
    O site organiza projetos com descrições técnicas, stack utilizada e links externos, além de oferecer navegação responsiva e interface minimalista. 
    
    Construído com Next.js, TypeScript e Tailwind CSS, priorizando performance, reutilização de componentes e organização de código.`,
    video: "/background.mp4",
    id: 1,
    links: [
      {
        name: "Github",
        icon: SiGithub,
        link: "https://github.com/Rafhael-Augusto/portfolio",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        link: "https://rafhael-portfolio-v2.vercel.app/",
      },
    ],
    tools: [
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        icon: SiShadcnui,
        name: "Shadcn/ui",
      },
      {
        icon: MdAnimation,
        name: "Motion",
      },
      {
        icon: SiThreedotjs,
        name: "React Three Fiber",
      },
      {
        icon: SiBlender,
        name: "Blender",
      },
    ],
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState<number | null>(null);

  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (id: number | null) => {
    if (itemRef.current && openId === null) {
      const y =
        itemRef.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setOpenId(id);
  };
  return (
    <div
      ref={ref}
      className={cn(
        "relative p-16 bg-primary/60 opacity-0 transition-opacity duration-700",
        isVisible && "opacity-100",
      )}
    >
      <h2
        className={cn(
          "underline text-white text-4xl text-center",
          smooch_sans.className,
        )}
      >
        Projetos
      </h2>

      <div ref={itemRef} className="grid grid-cols-3 gap-8 mt-16 min-h-220">
        {projects.map((item) => {
          if (openId === item.id || openId === null) {
            return (
              <div
                key={item.id}
                className={cn(
                  "col-span-1",
                  openId === item.id && "col-span-full relative",
                )}
              >
                <ProjectsItem
                  data={item}
                  openId={openId}
                  handleClick={handleClick}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

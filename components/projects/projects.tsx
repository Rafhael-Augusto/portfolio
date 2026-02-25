import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { useInView } from "@/hooks/useInView";

import { BBH_Hegarty } from "next/font/google";

import {
  SiDailymotion,
  SiGithub,
  SiLucide,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiThreedotjs,
  SiThreema,
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
    desc: "Project description",
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
    desc: "Project description",
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

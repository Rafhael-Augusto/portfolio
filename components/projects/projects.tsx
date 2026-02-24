import { cn } from "@/lib/utils";

import { useInView } from "@/hooks/useInView";

import { BBH_Hegarty } from "next/font/google";

import { BsFiletypeCsv } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { LuPackageSearch } from "react-icons/lu";
import {
  SiLucide,
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import ProjectsItem from "../projectsItem/projectsItem";

const smooch_sans = BBH_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
  fallback: ["sans-serif"],
});

const projects = [
  {
    title: "Scheduler plus",
    desc: "Project description",
    video: "/background.mp4",
    links: [
      {
        name: "Github",
        link: "https://github.com/Rafhael-Augusto/Schedule",
      },
      {
        name: "Vercel",
        link: "https://schedule-sable-five.vercel.app/",
      },
    ],
    tools: [
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
      },
      {
        icon: <SiReact />,
        name: "React",
      },
      {
        icon: <FaMobileAlt />,
        name: "PWA",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiShadcnui />,
        name: "Shadcn",
      },

      {
        icon: <LuPackageSearch />,
        name: "Zustand",
      },
      {
        icon: <SiLucide />,
        name: "Lucide",
      },
      {
        icon: <BsFiletypeCsv />,
        name: "Papaparse",
      },
    ],
  },
];

export default function Projects() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "p-16 bg-primary/60 opacity-0 transition-all duration-700",
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

      <div className="relative grid grid-cols-2 gap-16 mt-16 min-h-220">
        {projects.map((item) => (
          <div key={item.title}>
            <ProjectsItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

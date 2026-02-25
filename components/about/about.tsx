import { cn } from "@/lib/utils";

import { useInView } from "@/hooks/useInView";

import { BBH_Hegarty } from "next/font/google";

import { LaptopView } from "../laptopView/laptopView";

const smooch_sans = BBH_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
  fallback: ["sans-serif"],
});

export default function About() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between p-16 bg-primary/50 opacity-0 transition-opacity duration-700",
        isVisible && "opacity-100",
      )}
    >
      <div className="flex flex-col items-start gap-4 w-1/2">
        <h2
          className={cn("underline text-white text-4xl", smooch_sans.className)}
        >
          Sobre mim
        </h2>

        <p className="text-white text-xl">
          Sou Rafhael Augusto, formado em Full Stack Python pela EBAC. Meu
          interesse por tecnologia começou aos 13 anos, criando jogos e
          estudando programação de forma autodidata. Aos 17, decidi seguir
          carreira em desenvolvimento web e desde então venho me dedicando a
          projetos práticos e estudos contínuos. <br /> <br />
          Atuo no front-end com HTML, CSS, TypeScript e React, utilizando
          Next.js, Vite, Tailwind CSS e Styled Components para criar interfaces
          responsivas e bem estruturadas. <br /> <br />
          No back-end, trabalho com Python e Django, desenvolvendo APIs RESTful,
          integrando PostgreSQL e realizando deploys com Render, Vercel, Nginx e
          Gunicorn. <br /> <br /> Tenho familiaridade com Git/GitHub, Linux e
          ambientes virtuais. Sou curioso, organizado e valorizo a evolução
          constante e o trabalho em equipe.
        </p>
      </div>

      <div>
        <LaptopView />
      </div>
    </div>
  );
}

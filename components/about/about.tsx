import { cn } from "@/lib/utils";

import { useInView } from "@/hooks/useInView";

import { BBH_Hegarty } from "next/font/google";

import { LaptopView } from "@/components/laptopView/laptopView";

const smooch_sans = BBH_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
  fallback: ["sans-serif"],
});

export function About() {
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
          className={cn(
            "underline text-secondary text-4xl",
            smooch_sans.className,
          )}
        >
          Sobre mim
        </h2>

        <p className="whitespace-pre-line text-secondary text-xl">
          {`Sou Rafhael Augusto, Desenvolvedor Full Stack com foco em aplicações
          modernas utilizando Next.js (frontend e backend), TypeScript e
          PostgreSQL. 
          
          Meu interesse por tecnologia começou aos 13 anos, criando
          jogos e estudando programação de forma autodidata. Aos 17, decidi
          seguir carreira em desenvolvimento web e desde então venho me
          dedicando a projetos práticos e estudos contínuos. 
          
          Atuo no desenvolvimento de aplicações completas com Next.js, construindo
          interfaces consistentes com TailwindCSS e shadcn/ui. No backend,
          trabalho com APIs server-side integradas ao PostgreSQL utilizando
          Prisma ORM para modelagem e manipulação de dados. 
          
          Possuo experiência com versionamento utilizando Git e GitHub, além 
          de familiaridade com ambientes Linux. Sou curioso, organizado e 
          valorizo a evolução constante e o desenvolvimento de soluções bem estruturadas.`}
        </p>
      </div>

      <div>
        <LaptopView />
      </div>
    </div>
  );
}

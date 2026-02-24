import { cn } from "@/lib/utils";

import { useInView } from "@/hooks/useInView";

import { BBH_Hegarty } from "next/font/google";

import ExperienceItem from "../experienceItem/experienceItem";

const smooch_sans = BBH_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
  fallback: ["sans-serif"],
});

const experienceList = [
  {
    company: "DecodeSoftware",
    role: "Software Engineer",
    date: "jun 2025 - momento",
    description:
      "Desenvolvimento de aplicações web e automação de processos, atuando em front-end e back-end, com foco em eficiência, qualidade de código e entregas escaláveis.",
  },
  {
    company: "Hotel Brasil",
    role: "Assistente Geral e Auxiliar Administrativo",
    date: "ago 2022 - abr 2024",
    description:
      "Atuação em atendimento ao cliente e suporte administrativo, com responsabilidade pelo controle de reservas, organização de agendas e gestão de fluxos operacionais. Realização de análises de relatórios financeiros, contribuindo para a organização e eficiência dos processos internos.",
  },
];

export default function Experience() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "p-16 min-h-220 bg-primary/30 opacity-0 transition-all duration-700",
        isVisible && "opacity-100",
      )}
    >
      <h2
        className={cn(
          "underline text-white text-4xl text-center",
          smooch_sans.className,
        )}
      >
        Experiencia
      </h2>

      <ul className="grid grid-cols-2 gap-16 mt-16">
        {experienceList.map((item) => (
          <li key={item.company}>
            <ExperienceItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

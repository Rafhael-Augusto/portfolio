type props = {
  data: {
    company: string;
    role: string;
    date: string;
    description: string;
  };
};

export function ExperienceItem({ data }: props) {
  return (
    <div className="hover:scale-105 hover:border-zinc-600 text-start rounded-xl border border-zinc-800 bg-primary/60 p-8 transition-all min-h-64">
      <div>
        <span className="text-2xl font-semibold text-secondary">
          {data.role}
        </span>
      </div>
      <h3 className="text-xl text-secondary">{data.company}</h3>
      <span className="text-zinc-400 text-sm">{data.date}</span>
      <p className="mt-2 text-zinc-300 text-start">{data.description}</p>
    </div>
  );
}

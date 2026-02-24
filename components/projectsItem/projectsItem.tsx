import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

type links = {
  name: string;
  link: string;
};

type props = {
  data: {
    title: string;
    desc: string;
    video: string;
    links: links[];
  };
};

export default function ProjectsItem({ data }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleHoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;

    videoRef.current.play();
  };

  const handleHoverLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;

    videoRef.current.pause();
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={(e) => handleHoverEnter(e)}
      onMouseLeave={(e) => handleHoverLeave(e)}
      className={cn(
        "absolute top-0 left-0 translate-x-0 translate-y-0 h-104 w-104 bg-transparent hover:scale-110 transition-all cursor-pointer",
        isOpen &&
          "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all",
      )}
    >
      <video
        muted
        loop
        ref={videoRef}
        className="h-full w-full object-cover rounded-2xl"
      >
        <source src="/background.webm" />
      </video>
    </div>
  );
}

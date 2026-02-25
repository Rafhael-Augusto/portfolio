import { cn } from "@/lib/utils";
import { JSX, useEffect, useMemo, useRef, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { IconType } from "react-icons";

type Links = {
  name: string;
  icon: IconType;
  link: string;
};

type Tools = {
  icon: IconType;
  name: string;
};

type props = {
  handleClick: (id: number | null) => void;
  openId: number | null;
  data: {
    title: string;
    desc: string;
    video: string;
    id: number;
    links: Links[];
    tools: Tools[];
  };
};

export default function ProjectsItem({ data, handleClick, openId }: props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleHoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    if (isOpen) return;

    videoRef.current.play();
  };

  const handleHoverLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    if (isOpen) return;

    videoRef.current.pause();
  };

  const handleItemClick = () => {
    if (videoRef.current) {
      if (openId !== data.id) {
        handleClick(data.id);
      }
    }
  };

  const isOpen = useMemo(() => {
    if (openId === data.id) {
      return true;
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }

      return false;
    }
  }, [openId, data.id]);

  return (
    <div>
      <div
        onClick={() => handleClick(null)}
        className={cn(
          "top-0 left-0 h-full w-full",
          isOpen && "absolute cursor-pointer",
        )}
      />

      <div
        onClick={() => handleItemClick()}
        onMouseEnter={(e) => handleHoverEnter(e)}
        onMouseLeave={(e) => handleHoverLeave(e)}
        className={cn(
          "h-104 w-104 z-10 pb-2 overflow-y-scroll hover:scale-105 bg-primary/50 rounded-xl cursor-pointer",
          isOpen &&
            "absolute h-2/3 w-1/2 top-1/2 hover:scale-100 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default",
        )}
      >
        <video
          muted
          loop
          ref={videoRef}
          className={cn(
            "h-full p-4 w-full object-cover rounded-4xl",
            openId === data.id && "h-2/3 p-4",
          )}
        >
          <source src="/background.webm" />
        </video>

        {data.id === openId && (
          <div className="flex flex-col justify-between">
            <div className="text-center text-secondary text-2xl font-bold">
              <h2>{data.title}</h2>
            </div>

            <div className="px-8 text-secondary/70 text-xl">
              <span>{data.desc}</span>

              <div className="flex flex-col my-8 gap-4">
                {data.links.map((item) => (
                  <div className="flex items-center gap-4 text-cyan-300">
                    <item.icon />

                    <a href={item.link} target="_blank">
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              {data.tools.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <item.icon className="text-3xl text-secondary" />
                  </TooltipTrigger>

                  <TooltipContent>
                    <span>{item.name}</span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

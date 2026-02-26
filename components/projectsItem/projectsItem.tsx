"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { IconType } from "react-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

export function ProjectsItem({ data, handleClick, openId }: props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isOpen = openId === data.id;

  const handleHoverEnter = () => {
    if (!videoRef.current) return;
    if (isOpen) return;

    videoRef.current.play();
  };

  const handleHoverLeave = () => {
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

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

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
        onMouseEnter={() => handleHoverEnter()}
        onMouseLeave={() => handleHoverLeave()}
        className={cn(
          "w-104 z-10 pb-2 overflow-y-scroll hover:scale-105 bg-primary/50 rounded-xl cursor-pointer",
          isOpen &&
            "absolute h-full w-1/2 top-1/2 hover:scale-100 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default",
        )}
      >
        <div className={cn("p-4 h-full", isOpen && "h-2/3 bg-secondary/5")}>
          <video
            muted
            loop
            ref={videoRef}
            className={cn(
              "h-full w-full object-cover border-4 border-primary rounded-4xl",
              openId === data.id && "full",
            )}
          >
            <source src={data.video} />
          </video>
        </div>

        {data.id === openId && (
          <div className="flex flex-col justify-between">
            <div className="text-center text-secondary text-2xl font-bold my-8">
              <h2>{data.title}</h2>
            </div>

            <div className="px-8 text-secondary/70 text-xl">
              <p className="whitespace-pre-line">{data.desc}</p>

              <div className="flex items-center justify-between my-16 px-16">
                {data.links.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 text-secondary underline"
                  >
                    <item.icon />

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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

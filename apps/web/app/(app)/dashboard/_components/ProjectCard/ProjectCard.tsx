"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ProjectCardDropdown from "./ProjectCardDropdown";
import { Clock, Globe } from "lucide-react";
import { GetUserVirtualBox } from "@/actions/virtualbox/getUserVirtualbox";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ className }: { className?: string }) => {
  const { data: virtualboxs, isLoading } = useQuery({
    queryKey: ["user-virtualbox"],
    queryFn: GetUserVirtualBox,
  });

  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4">
      {virtualboxs?.virtualboxs?.map((virtualbox) => (
        <Link href={`/code/${virtualbox.id}`}>
          <Card
            key={virtualbox.id}
            className={cn("bg-gradient-to-tl from-zinc-900 flex", className)}
          >
            <CardContent className="h-full flex flex-col justify-between">
              <div className="font-semibold md:text-xl w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src={
                      virtualbox.type === "REACT"
                        ? "/project-icons/react.svg"
                        : "/project-icons/node.svg"
                    }
                    width={20}
                    height={20}
                    alt="Project icons"
                    className="grayscale"
                  />
                  <h1>{virtualbox.name}</h1>
                </div>
                <ProjectCardDropdown />
              </div>
              <div className="text-muted-foreground">
                <div className="flex items-center">
                  <Globe className="w-3 h-3 mr-2" />
                  <span className="capitalize text-sm">
                    {virtualbox.visibility}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-2 text-sm" /> 3d ago
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;

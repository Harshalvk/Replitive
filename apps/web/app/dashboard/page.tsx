"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Code2,
  FolderDot,
  Globe,
  HelpCircle,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import ProjectCard from "./_components/ProjectCard";

type TScreen = "projects" | "shared" | "settings" | "search";

const Dashboard = () => {
  const [screen, setScreen] = useState<TScreen>("projects");

  const activeScreen = (s: TScreen) => {
    if (screen === s) {
      return "justify-start w-full border bg-gradient-to-t from-zinc-800 to-zinc-900 ";
    } else {
      return "w-full justify-start font-normal text-muted-foreground";
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex grow w-full">
        <div className="w-56 border-r border-border p-4 justify-between flex flex-col">
          <div className="space-y-1">
            <Button
              variant={"secondary"}
              className="flex items-center px-2 py-1 border w-full mb-4"
            >
              <Plus className="w-4 h-4" />
              New Project
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => setScreen("projects")}
              className={activeScreen("projects")}
            >
              <FolderDot className="w-4 h-4" />
              My Projects
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => setScreen("shared")}
              className={activeScreen("shared")}
            >
              <Users className="w-4 h-4" />
              Shared rooms
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => setScreen("settings")}
              className={activeScreen("settings")}
            >
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </div>
          <div className="mt-1 border-t">
            <Button
              variant={"ghost"}
              className="justify-start text-muted-foreground font-normal w-full mt-1"
            >
              <Code2 className="w-4 h-4" />
              GitHub Repo
            </Button>
            <Button
              variant={"ghost"}
              className="justify-start text-muted-foreground font-normal w-full"
            >
              <HelpCircle className="w-4 h-4" />
              About
            </Button>
          </div>
        </div>
        <div className="grow grid lg:grid-cols-4 xl:grid-cols-5 space-y-0.5 p-4">
          <ProjectCard>
            <div className="font-semibold md:text-xl">React project 1</div>
            <div className="text-muted-foreground">
              <div className="flex items-center">
                <Globe className="w-3 h-3 mr-2" /> Public
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-2" /> 3d ago
              </div>
            </div>
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

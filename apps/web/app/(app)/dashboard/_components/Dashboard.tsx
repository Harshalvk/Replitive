"use client";

import { Button } from "@/components/ui/button";
import { Code2, FolderDot, HelpCircle, Settings, Users } from "lucide-react";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import CreateProjectDialog from "./CreateProjectDialog";
import Shared from "./Shared";

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
    <div className="flex flex-1 min-h-0">
      <div className="w-56 flex flex-col border-r border-border p-4 justify-between">
        <div className="space-y-1 w-full">
          <CreateProjectDialog />
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
      <div className="w-full">
        {screen === "projects" ? (
          <ProjectCard />
        ) : screen === "shared" ? (
          <Shared />
        ) : screen === "settings" ? null : null}
      </div>
    </div>
  );
};

export default Dashboard;

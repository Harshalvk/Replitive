"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Ellipsis, Lock, Trash2 } from "lucide-react";

const ProjectCardDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="h-6 w-6">
        <Button className="rounded-sm" variant={"ghost"}>
          <Ellipsis className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Lock className="h-4 w-4" />
          Make Private
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Trash2 className="h-4 w-4"/>
          Delete Project</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectCardDropdown;

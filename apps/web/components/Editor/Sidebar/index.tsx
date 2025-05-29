import React from "react";
import { FilePlus, FolderPlus, Search } from "lucide-react";
import { TFile, TFolder } from "./types";
import SidebarFile from "./File";
import SidebarFolder from "./Folder";

const data: (TFile | TFolder)[] = [
  {
    id: "index.tsx",
    type: "file",
    name: "index.tsx",
  },
  {
    id: "components",
    type: "folder",
    name: "components",
    childern: [
      {
        id: "navbar.tsx",
        type: "file",
        name: "navbar.tsx",
      },
      {
        id: "ui",
        type: "folder",
        name: "ui",
        childern: [
          {
            id: "Button.tsx",
            type: "file",
            name: "Button.tsx",
          },
          {
            id: "Input.tsx",
            type: "file",
            name: "Input.tsx",
          },
        ],
      },
    ],
  },
  {
    id: "components",
    type: "folder",
    name: "components",
    childern: [
      {
        id: "navbar.tsx",
        type: "file",
        name: "navbar.tsx",
      },
      {
        id: "ui",
        type: "folder",
        name: "ui",
        childern: [
          {
            id: "Button.tsx",
            type: "file",
            name: "Button.tsx",
          },
          {
            id: "Input.tsx",
            type: "file",
            name: "Input.tsx",
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-between h-8 mb-1 px-1">
        <div className="text-muted-foreground">Explorer</div>
        <div className="flex space-x-1">
          <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-md">
            <FilePlus className="h-4 w-4" />
          </div>
          <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-md">
            <FolderPlus className="h-4 w-4" />
          </div>
          <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-md">
            <Search className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="w-full mt-2 flex flex-col p-2">
        {data.map((child, idx) =>
          child.type === "file" ? (
            <SidebarFile key={child.id} data={child} />
          ) : (
            <SidebarFolder key={idx} data={child} />
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;

"use client";

import React, { useState } from "react";
import { TFolder } from "./types";
import Image from "next/image";
import { getIconForFolder, getIconForOpenFolder } from "vscode-icons-js";
import SidebarFile from "./File";

const SidebarFolder = ({ data }: { data: TFolder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const folder = isOpen
    ? getIconForOpenFolder(data.name)
    : getIconForFolder(data.name);

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center h-7 px-1 transition-colors hover:bg-secondary cursor-pointer rounded-sm select-none"
      >
        <Image
          src={`/icons/${folder}`}
          alt="Folder Icon"
          width={18}
          height={18}
          className="mr-2"
        />
        {data.name}
      </div>
      {isOpen ? (
        <div className="flex w-full items-stretch">
          <div className="w-[1px] mx-2 min-h-full bg-border" />
          <div className="flex flex-col grow">
            {data.childern.map((child) =>
              child.type === "file" ? (
                <SidebarFile key={child.id} data={child} />
              ) : (
                <SidebarFolder key={child.id} data={child} />
              )
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SidebarFolder;

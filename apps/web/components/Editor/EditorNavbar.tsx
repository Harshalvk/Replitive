"use client";

import { Pencil } from "lucide-react";
import UserAccount from "../UserAccount";
import Logo from "../Logo";
import { Button } from "../ui/button";

export default function EditorNavbar() {
  return (
    <div className="w-full border-b flex items-center justify-between p-2">
      <div className="flex items-center">
        <Logo />
        <h1 className="text-sm font-semibold">My Project</h1>
        <Button
          size={"sm"}
          className="text-white h-7 w-7 ml-2 flex items-center justify-center transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-md"
        >
          <Pencil className="w-4 h-4" />
        </Button>
      </div>
      <UserAccount />
    </div>
  );
}

"use client";

import React from "react";
import { Button } from "./button";
import { X } from "lucide-react";

const Tab = ({
  children,
  onClick,
  onClose,
  selected,
}: {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}) => {
  return (
    <Button
      onClick={onClick ?? undefined}
      size={"sm"}
      variant={"secondary"}
      className={`group select-none ${
        selected ? "bg-zinc-600 hover:bg-zinc-800" : ""
      }`}
    >
      {children}
      <div
        onClick={onClose ?? undefined}
        className="h-5 w-5 flex items-center transition-colors"
      >
        <X className="w-3 h-3" />
      </div>
    </Button>
  );
};

export default Tab;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card className="bg-gradient-to-tl from-zinc-900">
      <CardContent className="h-full flex flex-col justify-between ">
        {children}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

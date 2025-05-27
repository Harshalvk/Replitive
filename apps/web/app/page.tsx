"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="h-1/2 w-full flex flex-col items-center justify-center gap-5">
        <h1 className="text-7xl font-bold">Replitive</h1>
        <Button variant={"secondary"} onClick={() => redirect("/dashboard")}>
          Dashboard
        </Button>
      </div>
    </div>
  );
}

"use client";

import EditorNavbar from "@/components/Editor/EditorNavbar";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const CodeEditor = dynamic(() => import("@/components/Editor/index"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex w-screen flex-col h-screen bg-background">
      <div className="h-12 flex">
        <EditorNavbar />
      </div>
      <div className="w-full flex grow">
        <CodeEditor />
      </div>
    </div>
  );
}

"use client";

import React, { useRef } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import Editor, { OnMount } from "@monaco-editor/react";
import monaco from "monaco-editor";
import Sidebar from "@/components/Editor/Sidebar/index";
import Tab from "../ui/tab";

const CodeEditor = () => {
  const editorRef = useRef<null | monaco.editor.IStandaloneCodeEditor>(null);

  const handleEditorMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  return (
    <>
      <Sidebar />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          maxSize={75}
          minSize={30}
          defaultSize={60}
          className="flex flex-col p-2"
        >
          <div className="h-10 w-full flex gap-2">
            <Tab selected>index.html</Tab>
            <Tab>index.html</Tab>
          </div>
          <div className="grow w-full overflow-hidden rounded-lg">
            <Editor
              height={"100%"}
              defaultLanguage="typescript"
              theme="vs-dark"
              options={{
                minimap: {
                  enabled: false,
                },
                padding: {
                  bottom: 4,
                  top: 4,
                },
                scrollBeyondLastLine: false,
              }}
              onMount={handleEditorMount}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel
              defaultSize={50}
              minSize={20}
              className="p-2 flex flex-col"
            >
              <div className="h-10 w-full flex gap-2">
                <Button
                  variant={"secondary"}
                  size={"sm"}
                  className="min-w-20 justify-between"
                >
                  localhost:3000
                </Button>
              </div>
              <div className="w-full grow rounded-lg bg-zinc-900"></div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel
              defaultSize={50}
              minSize={20}
              className="p-2 flex flex-col"
            >
              <div className="h-10 w-full flex gap-2">
                <Tab selected>Node</Tab>
                <Tab>Console</Tab>
              </div>
              <div className="w-full grow rounded-lg bg-zinc-900"></div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default CodeEditor;

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GetUserVirtualBox } from "@/actions/virtualbox/getUserVirtualbox";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Shared = () => {
  const { data: virtualboxs, isLoading } = useQuery({
    queryKey: ["user-virtualbox"],
    queryFn: GetUserVirtualBox,
  });

  return (
    <div className="grow p-4 flex flex-col">
      <h1 className="capitalize text-xl font-semibold">Shared with me</h1>
      <div className="grow w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Virtualbox Name</TableHead>
              <TableHead>Shared By</TableHead>
              <TableHead>Opened</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {virtualboxs?.virtualboxs?.map((virtualbox) => (
              <TableRow key={virtualbox.id}>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={
                        virtualbox.type === "REACT"
                          ? "/project-icons/react.svg"
                          : "/project-icons/node.svg"
                      }
                      width={20}
                      height={20}
                      alt="Project icons"
                      className="grayscale"
                    />
                    <p>{virtualbox.name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-zinc-900 rounded-full" />
                    Harshal Khobragade
                  </div>
                </TableCell>
                <TableCell>{new Date().toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant={"secondary"} className="group">
                    Open{" "}
                    <ChevronRight className="w-4 h-4 -translate-x-0.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Shared;

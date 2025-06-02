"use client";

import React, { useCallback, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader, Plus } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  createVirutalboxForm,
  VirtualBoxType,
  VirtualBoxVisibility,
} from "@repo/validator/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { CreateVirtualbox } from "@/actions/virtualbox/createVirtualbox";
import { toast } from "sonner";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectTypeOptionsT = "REACT" | "NODE";

const projectType: {
  id: ProjectTypeOptionsT;
  name: string;
  image: string;
  description: string;
}[] = [
  {
    id: "REACT",
    name: "React",
    image: "/project-icons/react.svg",
    description: "A javascript library for building user interfaces",
  },
  {
    id: "NODE",
    name: "Node",
    image: "/project-icons/node.svg",
    description: "A javascript runtime built on V8 JavaScript Enginer",
  },
];

const CreateProjectDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] =
    useState<ProjectTypeOptionsT>("REACT");

  const form = useForm<z.infer<typeof createVirutalboxForm>>({
    resolver: zodResolver(createVirutalboxForm),
    defaultValues: {
      name: "",
      type: "REACT",
      visibility: "PRIVATE",
    },
  });

  const { mutate: createVirtualbox, isPending } = useMutation({
    mutationFn: CreateVirtualbox,
    onSuccess: () => {
      setIsOpen(false);
      toast.success("Virtualbox created", { id: "create-virtualbox" });
    },
    onError: () => {
      toast.error("Failed to create virtualbox", { id: "create-virtualbox" });
    },
  });

  const onSubmit = useCallback(
    (value: z.infer<typeof createVirutalboxForm>) => {
      toast.loading("Creating virtualbox...", { id: "create-virtualbox" });
      createVirtualbox(value);
    },
    [createVirtualbox]
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          className="flex items-center px-2 py-1 border w-full mb-4"
          onClick={() => setIsOpen(true)}
        >
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a VirutalBox</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              disabled={isPending}
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 w-full gap-2">
                      {projectType.map((type) => (
                        <button
                          type="button"
                          key={type.id}
                          className={cn(
                            "w-full p-2 flex flex-col text-start relative border rounded-md overflow-hidden transition-all focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:right-2 focus-visible:ring-ring",
                            selectedType && field.value === type.id
                              ? "border-4"
                              : "border-border"
                          )}
                          onClick={() => {
                            setSelectedType(type.id);
                            field.onChange(type.id);
                          }}
                        >
                          <div className="w-full flex">
                            <Image
                              src={type.image}
                              alt={type.name}
                              width={20}
                              height={20}
                              className="absolute z-0 h-24 w-24 -top-6 -left-6 opacity-15"
                            />
                            <div className="z-10 font-semibold">
                              {type.name}
                            </div>
                          </div>
                          <div className="z-10 text-sm text-muted-foreground">
                            {type.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isPending}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex., Bolt clone" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isPending}
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {VirtualBoxVisibility.map((visibility) => (
                          <SelectItem value={visibility}>
                            {visibility}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              variant={"secondary"}
              type="submit"
              className="w-full"
              disabled={isPending}
            >
              Create{" "}
              {isPending && (
                <Loader className="h-4 w-4 animate-spin transition-transform" />
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDialog;

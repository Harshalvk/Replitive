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

const CreateProjectDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof createVirutalboxForm>>({
    resolver: zodResolver(createVirutalboxForm),
    defaultValues: {
      name: "",
      type: "NODE",
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
          <DialogTitle>Create a new project</DialogTitle>
          <DialogDescription>Start building your project</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                  <FormDescription>
                    This is your public display project name.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              disabled={isPending}
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {VirtualBoxType.map((type) => (
                          <SelectItem value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
            <Button variant={"secondary"} type="submit" disabled={isPending}>
              Create{" "}
              {isPending && (
                <Loader className="h-4 w-4 animate-spin transition-transform" />
              )}
            </Button>
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"ghost"} disabled={isPending}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDialog;

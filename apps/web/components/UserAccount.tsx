"use client";

import { User } from "better-auth";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const UserAccount = () => {
  const { data: session } = authClient.useSession();

  if (!session?.user) {
    return <Link href={"/signin"}>Sign In</Link>;
  }

  const isLoading = session === undefined;

  const user = session.user;

  return (
    <>
      {isLoading ? null : session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserAvatar user={user} />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-white dark:bg-zinc-900"
            align="end"
          >
            <div className="flex items-center justify-star gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                {user.name && <p className="font-medium">{user.name}</p>}
                {user.email && (
                  <p className="w-[200px] truncate text-sm text-zinc-700 dark:text-zinc-400">
                    {user.email}
                  </p>
                )}
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                authClient.signOut();
              }}
              className="text-red-800 cursor-pointer dark:text-red-500 group"
            >
              Sign Out
              <LogOut
                height={16}
                width={16}
                className="-translate-x-0.5 group-hover:translate-x-1 transition-all text-red-800 dark:text-red-500"
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Skeleton className="w-8 h-8 rounded-full" />
      )}
    </>
  );
};

export default UserAccount;

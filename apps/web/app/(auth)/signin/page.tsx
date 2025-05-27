"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Button
        variant={"secondary"}
        onClick={() => authClient.signIn.social({ provider: "github" })}
      >
        SignIn with GitHub
      </Button>
    </div>
  );
};

export default SignIn;

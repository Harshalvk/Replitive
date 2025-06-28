import React, { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import { TRPCReactProvider } from "@/trpc/client";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TRPCReactProvider>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </TRPCReactProvider>
    </>
  );
};

export default AppProvider;

import { CssBaseline } from "@mui/material";
import React from "react";

export const AppTheme = ({ children }: { children: React.ReactNode }) => {
  return <CssBaseline>{children}</CssBaseline>;
};

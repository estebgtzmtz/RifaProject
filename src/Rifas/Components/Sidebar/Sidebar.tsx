import { FC } from "react";
import { Divider, Drawer, Grid, Toolbar } from "@mui/material";
import { SidebarProps } from "./Sidebar.types";

export const Sidebar: FC<SidebarProps> = ({ drawerWidth }) => {
  return (
    <Grid
      component="nav"
      sx={{
        width: {
          sm: drawerWidth,
        },
        flexShrink: {
          sm: 0,
        },
      }}
    >
      <Drawer
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar></Toolbar>
        <Divider />
      </Drawer>
    </Grid>
  );
};

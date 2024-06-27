import { Grid, Toolbar } from "@mui/material";
import { Navbar } from "../Components";
import { Sidebar } from "../Components/Sidebar/Sidebar";

const drawerWidth = 240;

export const RifasLayout = ({ children }: any) => {
  return (
    <Grid
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Navbar />
      {/* <Sidebar drawerWidth={drawerWidth} /> */}

      <Grid item component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Grid>
    </Grid>
  );
};

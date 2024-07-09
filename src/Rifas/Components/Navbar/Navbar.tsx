import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { NavbarProps } from "./Navbar.types";
import { useAuth0 } from "@auth0/auth0-react";
import { UseGetUserMetada } from "../../Hooks";

export const Navbar: React.FC<NavbarProps> = ({ drawerWidth = 0 }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const { userMetadata } = UseGetUserMetada();

  console.log(userMetadata);

  const handleLogin = async () => loginWithRedirect();

  const handleLogout = () =>
    logout({ logoutParams: { returnTo: window.location.origin } });

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#1B3489",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div">
              Journal App
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated && user ? (
              <>
                <Tooltip title="open settings">
                  <IconButton sx={{ p: 0 }} onClick={handleMenu}>
                    <Avatar alt={user.name} src={user.picture} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button color="inherit" onClick={handleLogin}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

import React from "react";
import "./Header.css";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import aurilLogo from "../../logos/Auril Logo.png";
import { ArrowBack } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <AppBar position="fixed" color="primary" sx={{ bgcolor: "primary.light" }}>
      <img src={aurilLogo} alt="auril Logo" className="Banner_Logo"></img>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <ArrowBack />
        </IconButton>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default Header;

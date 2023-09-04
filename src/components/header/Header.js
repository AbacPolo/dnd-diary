import React, { useState } from "react";
import "./Header.css";
import {
  AppBar,
  Button,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import aurilLogo from "../../logos/Auril Logo.png";
import { ArrowBack } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router";
import classNames from "classnames";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigateTo = useNavigate();
  const location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (direction) => {
    setAnchorEl(null);
    switch (direction) {
      case "Homepage":
        navigateTo(`/`);
        break;
      case "Games":
        navigateTo(`/Games`);
        break;
      case "Engines":
        navigateTo(`/Engines`);
        break;
      case "About":
        navigateTo(`/About`);
        break;
      default:
        break;
    }
  };

  return (
    <AppBar
      position="fixed"
      color="primary"
      elevation={0}
      sx={{ bgcolor: "primary.light"}}
      className="appBar"
    >
      <img src={aurilLogo} alt="auril Logo" className="Banner_Logo"></img>
      <Toolbar className="Header">
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <ArrowBack />
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          className="Menu"
          id="menu-appbar"
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          marginThreshold={0}
          TransitionComponent={Fade}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 56, left: 0 }}
        >
          <MenuItem>
            <Typography variant="button">MENU</Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="button">SESSIONS</Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="button">DIES</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
export default Header;

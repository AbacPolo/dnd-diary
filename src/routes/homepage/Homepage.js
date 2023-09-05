import React from "react";
import "./Homepage.css";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function Homepage() {
  return (
    <div className="Homepage_Container">
      <div className="Homepage_Wrapper">
        <div className="Title_Container">
          <Typography variant="h1">L’ODA DE LA DAMA GEBRADA</Typography>
        </div>
        <div className="Homepage_Content">
          <TextField
            id="outlined-basic"
            variant="outlined"
            color="primary"
            placeholder="Buscar per paraules"
            focused
            fullWidth
            size="small"
            sx={{
              bgcolor: "#fff",
              borderRadius: "6px",
              "& .MuiOutlinedInput-root": { paddingRight: "0px" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
          <div className="NavigationButtons_Container">
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className="Big_Button"
              fullWidth
            >
              DIARI DE VIATGE
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className="Small_Buttons"
            >
              SESSIONS
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className="Small_Buttons"
            >
              DIES
            </Button>
          </div>
          <div className="CurrentSesion">
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              fullWidth
              className="CurrentSesion_Button"
            >
              <Typography variant="h3">
                Sessió 52 - Bryn Shander? More like Quin Mérder
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

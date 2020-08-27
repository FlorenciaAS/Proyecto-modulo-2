import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";
import iconMatea from "../images/LogoSoloBlancoFondoTransparente 1.png";
import "../Styles/NavbarLogin.css";




function LoginNavbar() {


  return (
    <div className='cont'>
      <AppBar className="nav" position="static">
        <Toolbar>
          <img className="img-nav" src={iconMatea}></img>
          <Box  fontFamily="Righteous" fontSize={28}  align="center">
            Mateify
          </Box>
        </Toolbar>
      </AppBar>

    </div>
  );
}
export default LoginNavbar;

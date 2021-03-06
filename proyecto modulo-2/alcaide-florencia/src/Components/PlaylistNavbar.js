import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Avatar, Box, Toolbar, Typography, IconButton } from "@material-ui/core";
import iconMatea from "../images/LogoSoloBlancoFondoTransparente 1.png";
import AccountCircle from "@material-ui/icons/AccountCircle";
import '../Styles/NavbarPlaylist.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
 
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className='navPlay' position="static">
        <Toolbar>
          <img className="img-nav" src={iconMatea}></img>
          
          <Box className={classes.title}  fontFamily="Righteous" fontSize={28}  align="center">
            Mateify
          </Box>

          <div>
            <IconButton>
              <Avatar/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

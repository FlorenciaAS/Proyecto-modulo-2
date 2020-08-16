import React from  'react';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import iconMatea from '../images/LogoSoloBlancoFondoTransparente 1.png'


function LoginNavbar() {
    return(
        <AppBar  position='static'>
            <Toolbar>
                <img src={iconMatea}></img>
                <Typography variant='h5' align='center'>
                    Mateify
                </Typography>
            </Toolbar>
        </AppBar>
    );

}
export default LoginNavbar;
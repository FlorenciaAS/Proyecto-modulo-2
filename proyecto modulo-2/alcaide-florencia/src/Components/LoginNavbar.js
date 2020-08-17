import React from  'react';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import iconMatea from '../images/LogoSoloBlancoFondoTransparente 1.png';
import '../Styles/NavbarLogin.css';


function LoginNavbar() {
    return(
        <AppBar className='container-nav'  position='static'>
            <Toolbar>
                <img className='img-nav' src={iconMatea}></img>
                <Typography variant='h5' align='center'>
                    Mateify
                </Typography>
            </Toolbar>
        </AppBar>
    );

}
export default LoginNavbar;
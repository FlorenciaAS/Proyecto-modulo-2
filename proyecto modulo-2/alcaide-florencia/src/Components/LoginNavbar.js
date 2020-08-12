import React from  'react';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import { Typography } from '@material-ui/core';

function LoginNavbar() {
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' align='center'>
                    Mateify
                </Typography>
            </Toolbar>
        </AppBar>
    );

}
export default LoginNavbar;

import React from 'react';
import {Card,CardActions, CardContent, Button , Typography, TextField  } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import '../Styles/CardLog.css';



function CardLogin() {
 
  return (
    <container className='principal'>
      <Card className='container'  variant="outlined" >
        <CardContent>
          <LockIcon  color='secondary' fontSize='large'></LockIcon>
          <Typography  variant='h5' align='center'>
              Ingresar
          </Typography>
          <form  autoComplete="off">
              <TextField  fullWidth label="Correo electrónico" variant="outlined" />
              <div className="text">
              <TextField  fullWidth label="Contraseña" variant="outlined"  type="password"/>
              </div>
          </form>
          <Button variant="contained"  fullWidth size='large' color="secondary">
          Comenzar a crear playlist
          </Button>
          <Button  color="primary" size='small' fullWidth
          >¿Has olvidado la contraseña?</Button>
          <hr/>
          <Button disabled size='large' fullWidth >
            ¿NO TIENES CUENTA?</Button>
          <Button variant="outlined" fullWidth color="primary">
            Registrate
          </Button>


        </CardContent>
      
      </Card>
    </container>
  );
}

export default CardLogin;

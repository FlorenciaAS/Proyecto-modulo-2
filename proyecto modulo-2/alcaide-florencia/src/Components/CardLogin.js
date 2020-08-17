import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  Grid
} from "@material-ui/core";
import "../Styles/CardLog.css";
import padlockIcon from '../images/padlock-icon.png'




function CardLogin() {
  return (
    <Grid   className="principal">
      <Card className="container" maxWidth="sm"variant="outlined">
        <CardContent className='cont-card'>
            <img align='center' src={padlockIcon}></img>
          <Typography variant="h5" align="center">
            Ingresar
          </Typography>
          <form  autoComplete="off">
            <TextField
              fullWidth
              label="Correo electrónico"
              variant="outlined"
            />
            <div className="text">
              <TextField
                fullWidth
                label="Contraseña"
                variant="outlined"
                type="password"
              />
            </div>
          </form>
          <Button  variant="contained" fullWidth size="large" color="secondary">
            Comenzar a crear playlist
          </Button>
          
          <Button color="primary" size="small" fullWidth>
            ¿Has olvidado la contraseña?
          </Button>
          <hr />
          
          <Button disabled size="large" fullWidth>
            ¿NO TIENES CUENTA?
          </Button>

          <div className="button-registre">
            <Button variant="outlined" fullWidth color="primary">
              Registrate
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardLogin;

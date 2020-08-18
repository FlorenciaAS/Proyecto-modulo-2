import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  Grid,
} from "@material-ui/core";
import "../Styles/CardLog.css";
import padlockIcon from "../images/padlock-icon.png";

function CardLogin(props) {
  return (
    <Grid className="principal">
      <Card className="container" maxWidth="sm" variant="outlined">
        <CardContent className="cont-card">
          <img align="center" src={padlockIcon}></img>
          <Typography variant="h5" align="center">
            Ingresar
          </Typography>
          <form autoComplete="off">
            <TextField
              fullWidth
              label="Correo electrónico"
              variant="outlined"
              value={props.inputEmail}
              onChange={props.showEmail}
            />
            <div className="text">
              <TextField
                fullWidth
                label="Contraseña"
                variant="outlined"
                type="password"
                value={props.inputPassword}
                onChange={props.showPassword}
              />
            </div>
          </form>
          <Button variant="contained" fullWidth size="large" 
          color="secondary" onClick={props.userValidate}>
            Comenzar a crear playlist
          </Button>

          <div className="button-crear">
            <Button color="primary" size="small" fullWidth>
              ¿Has olvidado la contraseña?
            </Button>
          </div>
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

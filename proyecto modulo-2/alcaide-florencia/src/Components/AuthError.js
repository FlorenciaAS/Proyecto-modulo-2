import React from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import '../Styles/AuthErrror.css';
import LoginNavbar from '../Components/LoginNavbar'
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  },
 
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  
}));

export default function AuthError() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
          <img src={padlockIcon} className={classes.cover}></img>

      
        <CardContent className={classes.content}>
          <Typography variant="h4">
          Mmm... algo no salió bien
          </Typography>
          <Typography variant="h8" >
          Debes estar autenticado para acceder a esta página
          </Typography>
        </CardContent>
      
        </Card>
  );
}


import React, {useState} from 'react';
import userData from '../baseDeDatos/userData.json';
import CardLogin from '../Components/CardLogin';
import { useHistory } from "react-router-dom";


const ValidateUser= () =>  {
    const [inputEmail, setInputEmail]=useState();
    const [inputPassword, setInputPassword]=useState();

    
    const handleShowEmail= (event)=> {
        setInputEmail(event.target.value);
        console.log('entra a show email');
    };
    const handleShowPassword= (event)=> {
        setInputPassword(event.target.value);
    };

    const userCheck= (element) => {
        if(element.email === inputEmail && 
            element.password === inputPassword){
            return true;
        }else{
            return false;
        };
    };

    const history = useHistory();

    const userValidate= () => {
        const userFilter= userData.filter(userCheck);
        console.log(userFilter);
        if(userFilter.length > 0){
            history.push(`/Playlist/`);
        }else{  
            history.push(`/AuthError/`);
        }
    };

    return(
        <CardLogin handleShowEmail={handleShowEmail}
        handleShowPassword={handleShowPassword}
        userValidate={userValidate}/>
    );

   
};

export default ValidateUser;



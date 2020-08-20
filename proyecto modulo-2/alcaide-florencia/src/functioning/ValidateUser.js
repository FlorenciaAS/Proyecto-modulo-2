import React, {useState} from 'react';
import userData from '../baseDeDatos/userData.json';
import CardLogin from '../Components/CardLogin';

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

    
    const userValidate= () => {
        const userFilter= userData.filter(userCheck);
        console.log(userFilter);
        if(userFilter.length > 0){
            alert("usuario correcto");
        }else{  
            alert("no es correcto");
        }
    };

    return(
        <CardLogin/>
    );

   
};

export default ValidateUser;



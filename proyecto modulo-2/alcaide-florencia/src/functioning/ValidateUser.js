import React, {useState} from 'react';
import userData from '../baseDeDatos/userData.json';
import CardLogin from '../Components/CardLogin';

const ValidateUser= () => {
    const [inputEmail, setInputEmail]=useState('');
    const [inputPassword, setInputPassword]=useState('');
    
    const showEmail= (e)=> {
        setInputEmail(e.target.value);
    };
    const showPassword= (e)=> {
        setInputPassword(e.target.value);
    };

    const userCheck= (element)=>{
        if(element.email === inputEmail && 
            element.password === inputPassword){
            return true;
        }else{
            return false;
        };
    };

    
    const userValidate= () =>{
        const userFilter= userData.filter(userCheck);
        console.log(userFilter);
        if(userFilter.length > 0){
            alert("bieen");
        }else{  
            alert("noo");
        }
    }

    return(
        <CardLogin/>
    );

   
}

export default ValidateUser;



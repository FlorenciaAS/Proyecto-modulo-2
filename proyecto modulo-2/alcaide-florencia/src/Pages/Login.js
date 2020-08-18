import React from 'react';
import LoginNavbar from '../Components/LoginNavbar';
import CardLogin from '../Components/CardLogin';
import ValidateUser from '../functioning/ValidateUser'

function Login(){
    return(
        <div>
            <LoginNavbar/>
            <ValidateUser/>
            

        </div>
    )
}

export default Login;
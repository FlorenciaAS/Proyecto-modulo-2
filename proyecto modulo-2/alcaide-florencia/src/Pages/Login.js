import React from 'react';
import LoginNavbar from '../Components/LoginNavbar';
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
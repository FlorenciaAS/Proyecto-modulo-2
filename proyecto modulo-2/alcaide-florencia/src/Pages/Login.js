import React from 'react';
import LoginNavbar from '../Components/LoginNavbar';
import CardLogin from '../Components/CardLogin'
import AuthError from '../Components/AuthError'

function Login(){
    return(
        <div>
            <LoginNavbar/>
            <AuthError/>
        </div>
    )
}

export default Login;
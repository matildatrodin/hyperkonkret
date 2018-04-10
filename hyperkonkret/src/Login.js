import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';
import './App.css';

class Login extends React.Component {

    constructor (props, context) {
        super(props, context);
    }

    responseGoogle (googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        var googleId = googleUser.getId();

        console.log({ googleId });
        console.log({accessToken: id_token});
        //anything else you want to do(save to localStorage)...
    }

    render () {
        return (
            <div>
                <GoogleLogin socialId="yourClientID"
                             className="App-button-login"
                             scope="profile"
                             fetchBasicProfile={false}
                             responseHandler={this.responseGoogle}
                             buttonText="Login With Google"/>
            </div>
        );
    }

}

export default Login;
import React from 'react';
import LoginForm from './LoginForm';

export default function Login (props) { 

    return (
      <div className={'background'}>
        <div className={'navBarHomePage'}>
            <h1><a href="#">InstaRent</a></h1>
            </div>
            <div className={"signInContainer"}>
              <h1>SIGN IN</h1>
              <LoginForm/>
              <div className={"loginWithSocial"}>
                <div></div>
                <p>SIGN IN WITH</p>
                <div></div>
              </div>
              <p>Don't have an account yet? Sign up!</p>
            </div>
      </div>
    );
  }
  

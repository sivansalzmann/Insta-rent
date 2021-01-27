import React from 'react';
import LoginForm from './LoginForm';

export default function Login (props) { 

    return (
      <div className={'background'}>
        <div className={'navBarHomePage'}>
                <h1>InstaRent</h1>
                {/* <ul>
                    <li>HOME PAGE</li>
                    <li>ASSETS</li>
                    <li>LOGIN/SIGN UP</li>
                </ul> */}
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
  

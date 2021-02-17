import React, {useState, useContext,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './SignIn.css';
import Footer from '../All/Footer';
import GoogleLogin from 'react-google-login';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
        marginLeft: '25%',
        marginTop: '6%',
    },
  },
}));

export default function Login (props) { 
  let history = useHistory();
  const classes = useStyles();

  const googleSuccess = async (response) => {
    const body = {token: response.tokenId}
    fetch(`http://localhost:3000/api/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    })
        .then(response => response.json())
        .then(result => {
            let path = '/HomePage'
            history.push(path)
        });
  }

  const googleFailure = (response) => {
    console.log(response);
}

    return (
      <div className={'background'}>
        <h1 className={"headSignIn"}>InstaRent</h1>
        <div className={"signInContainer"}>
          <p>SIGN IN WITH GOOGLE</p>
          <div className={"googleLogIn"}> 
              <GoogleLogin
              className={classes.google}
              clientId="521754477823-1e3s41qrtptk8tl2rg6a6nks18al6286.apps.googleusercontent.com"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  

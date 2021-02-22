import React, {useState, useContext,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './SignIn.css';
import Footer from '../All/Footer';
import GoogleLogin from 'react-google-login';
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";

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
  const [cookies, setCookie] = useCookies(['user']);
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
      const cookiePromise = new Promise((resolve, reject) => {
        setCookie('user', result)
        resolve()
      });
      cookiePromise.then(() => {
        if (result)
          history.push('/HomePage')
      })
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
              clientId="455770929949-rknvnltjkidooak44tu8jbt49372itkn.apps.googleusercontent.com"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  

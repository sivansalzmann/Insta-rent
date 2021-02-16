import React, {useState, useContext,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './SignIn.css';
import Footer from '../All/Footer';
import GoogleLogin from 'react-google-login';
import {useHistory} from "react-router-dom";
import {UserContext} from '../../UserContext';

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
  const { userId, setUserId} = useContext(UserContext);

  const classes = useStyles();

  useEffect(() => {
    if(userId != 0){
      console.log("1", userId);
      let path = '/HomePage';
      history.push({
        pathname: path,
        userId: userId
      });
    }}, [userId]);

    const handleLogin = async googleData => {

    const res = await fetch(`http://localhost:3000/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({
      token: googleData.tokenId,
    }),
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
        console.log(res.cookies, data);
        if(res.status === 200){
          if(data === "the user does NOT exist"){
            window.location = '/SignInDeatils';  
          } else {
            setUserId(data.id);
          }
        } else {
          alert("Some error occurred");
        }
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
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={'single_host_origin'}
              />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  

import react ,{ useState } from 'react';
import Axios from "axios";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Footer from '../All/Footer';
import NavBar from '../All/NavBar';
import GoogleLogin from 'react-google-login';

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

const responseGoogle = () => {
  console.log('Google');
}

export default function Login (props) { 

  const classes = useStyles();

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/api/owners/login",
    }).then((res) => console.log(res));
  };

    return (
      <div className={'background'}>
        <NavBar />
        <div className={"signInContainer"}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField required id="standard-required" label="EMAIL" defaultValue="" onChange={(e) => setLoginUsername(e.target.value)}/>
            <TextField required id="standard-password-input" label="PASSWORD" type="password" autoComplete="current-password" onChange={(e) => setLoginPassword(e.target.value)}/>  
            <p><a href="#" style={{marginLeft: '39%',fontSize:'12px'}}>FORGOT YOUR PASSWORD?</a></p>
            <Button variant="outlined" color="primary" style={{fontSize:'15px',fontWeight:'bold',marginLeft: '20%',marginTop:'5%',width:'60%'}} onClick={login}>SIGN IN</Button>
          </form>
          <div className={"loginWithSocial"}>
            <div></div>
            <p>SIGN IN WITH</p>
            <div></div>
          </div>
          <div className={"signUpNow"}>
            <div className={"googleLogIn"}> 
                <GoogleLogin
                className={classes.google}
                clientId="455770929949-rknvnltjkidooak44tu8jbt49372itkn.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
            </div>
            <Link to={{ pathname: "/SignUp"}}><p>Don't have an account yet? Sign up!</p></Link>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  

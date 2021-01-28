import react ,{ useState } from 'react';
import Axios from "axios";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
        marginLeft: '30%',
    },
  },
}));

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
        <div className={'navBarHomePage'}>
            <h1><a href="#">InstaRent</a></h1>
            </div>
            <div className={"signInContainer"}>
              <h1>SIGN IN</h1>
              <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField style={{marginTop: '1%'}} required id="standard-required" label="EMAIL" defaultValue="" onChange={(e) => setLoginUsername(e.target.value)}/>
                <TextField style={{marginTop: '2%'}} required id="standard-password-input" label="PASSWORD" type="password" autoComplete="current-password" onChange={(e) => setLoginPassword(e.target.value)}/>  
                <p><a href="#" style={{marginLeft: '39%',fontSize:'12px'}}>FORGOT YOUR PASSWORD?</a></p>
                <Button variant="contained" style={{fontSize:'15px',fontWeight:'bold',marginLeft: '20%',marginTop:'5%',width:'60%'}} onClick={login}>SIGN IN</Button>
              </div>
            </form>
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
  

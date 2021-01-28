import React from 'react';
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

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField style={{marginTop: '1%'}} required id="standard-required" label="EMAIL" defaultValue="" />
        <TextField style={{marginTop: '2%'}} required id="standard-password-input" label="PASSWORD" type="password" autoComplete="current-password"/>  
        <p><a href="#" style={{marginLeft: '39%',fontSize:'12px'}}>FORGOT YOUR PASSWORD?</a></p>
        <Button variant="contained" style={{fontSize:'15px',fontWeight:'bold',marginLeft: '20%',marginTop:'5%',width:'60%'}}>SIGN IN</Button>
      </div>
    </form>
  );
}
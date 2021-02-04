import react ,{ useState } from 'react';
import Axios from "axios";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Footer from '../All/Footer';
import NavBar from '../All/NavBar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
        marginLeft: '30%',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
  },
}}));

export default function SignUp (props) { 

  const classes = useStyles();

  const { FirstName, LastName, Gender, Email, Phone } = props.values;

    return (
        <>
          <TextField 
              id="FirstName" 
              label="First name" 
              name="First name"
              defaultValue={FirstName}
              onChange={props.handleChange('FirstName')}
              fullWidth
          />
          <TextField 
              id="LastName" 
              label="Last name" 
              name="Last name"
              defaultValue={LastName}
              onChange={props.handleChange('LastName')}
              fullWidth
          />
          <TextField 
              id="Email" 
              label="Email" 
              name="Email"
              defaultValue={Email}
              onChange={props.handleChange('Email')}
              fullWidth
          />
          <TextField 
              id="Phone" 
              label="Phone" 
              name="Phone"
              defaultValue={Phone}
              onChange={props.handleChange('Phone')}
              fullWidth
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="Gender">Gender</InputLabel>
            <Select 
              labelId="Gender" 
              id="Gender"
              defaultValue={Gender}
              onChange={props.handleChange('Gender')}
              fullWidth
              >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </>
    );
  }
  

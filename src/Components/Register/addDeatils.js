import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './SignInDeatils.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PopUp from '../All/PopUp';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        marginLeft: '30%',
    },

}}));

export default function SignInDeatils (props) { 

  const classes = useStyles();

  const [gender,setGender] = useState("")
  const [phone,setPhone] = useState("")
  const [country,setCountry] = useState("")
  const [age,setAge] = useState("")
  const [userDeatils,setUserDeatils] = useState("");
  const [openEdit,setOpenEdit] = useState(true);


  const register = () => {
    console.log("here")
    if(age === '' || gender === '' || country === '' || phone === ''){
        alert("Please fill all fields");
    } else {
    Axios({
        method: "POST",
        data: {
        Gender: setGender,
        Phone: setPhone,
        Country: setCountry,
        Age: setAge,
        },
        withCredentials: true,
        url: `http://localhost:3000/api/users${props.loctaio.userId}`,
    }).then((res) => {
        //if(res.data.msg === "User Already Exists"){
            window.location = '/';
        //}
       // else{            
         //   window.location = '/';
        //}
    });
}
};       

  // const editUser = () => {
  //   const body = { Phone: phone,Gender:gender,Country: country,Age:age};
  //   fetch(`http://localhost:3000/api/users/${props.user.id}` ,{
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(body),
  //   })
  //   .then(response => response.json())
  //   .then(result => {
  //       console.log(result)
  //       setUserDeatils(result)
  //       setOpenEdit(false)
  //       setGender("")
  //       setPhone("")
  //       setCountry("")
  //       setAge("")
  //   });
  // }


    return (
      <PopUp open={openEdit} onSubmit={() => register()} title={"edit your deatils"} showBt={true}>
      <form className={classes.root} autoComplete="off"> 
        <div className={"colForm"}>
          <div>
          <TextField 
              id="Country" 
              label="Country" 
              name="Country"
              value={country} 
              onChange={e => setCountry(e.target.value)}
              fullWidth
              required
          />
          <TextField 
              id="Phone" 
              label="Phone" 
              name="Phone"
              value={phone} 
              onChange={e => setPhone(e.target.value)}
              fullWidth
          />
          </div>
          <div className={"rowForm"}>
            <TextField 
                id="Age" 
                label="Age" 
                name="Age"
                value={age} 
                onChange={e => setAge(e.target.value)}
                required
            />
            <FormControl >
              <InputLabel id="Gender">Gender</InputLabel>
              <Select 
                labelId="Gender" 
                id="Gender"
                value={gender} 
                onChange={e => setGender(e.target.value)}
                fullWidth
                required
                >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        </form>
        </PopUp>
    );
  }
  

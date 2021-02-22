import React, {useEffect, useState} from 'react';
import './SignInDeatils.css';
import Footer from '../All/Footer';
import {useCookies} from "react-cookie";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '20ch',
        marginLeft: '10%',
    },

}}));

export default function SignInDeatils (props) { 
  const classes = useStyles();
  const [user,setUser] = useState("");
  const [cookies] = useCookies(['user']);
  const [gender,setGender] = useState("")
  const [phone,setPhone] = useState("")
  const [country,setCountry] = useState("")
  const [age,setAge] = useState("")
  const [favoriteCountry,setFavoriteCountry] = useState("")
  const [budget,setBudget] = useState("")
  const [jobTitle,serJobTitle] = useState("")

  useEffect(() => {
    fetch(`https://instarent-1st.herokuapp.com/api/users/${cookies.user.id}`, {credentials: 'include'})
      .then(response => response.json())
      .then(result =>  {
        setUser(result)
      })    
  }, [cookies.user.id])
   const addAdditionalInformation = () => {
      const body = { Phone: phone,Gender: gender,Country: country,Age:age, Budget:budget, FavoriteCountry: favoriteCountry, JobTitle:jobTitle};
      fetch(`https://instarent-1st.herokuapp.com/api/users/${user.id}` ,{
          method: 'PUT',
          credentials: 'include',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body),
      })
      .then(response => response.json())
      .then(result => {
          setGender("")
          setPhone("")
          setCountry("")
          setAge("")
          setFavoriteCountry("")
          setBudget("")
          serJobTitle("")
          window.location = '/HomePage';
      });
    }
    return (
      <div className={'background'}>
        <h1 className={"headSignIn"}>InstaRent</h1>
        <div className={"SignInDeatilsContainer"}>
          <p>Additional Information</p>
          <form className={classes.root} autoComplete="off"> 
        <div className={"colForm"}>
        <div className={"rowForm"}>
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
              required
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
            <TextField 
                id="Budget" 
                label="Budget" 
                name="Budget"
                value={budget} 
                onChange={e => setBudget(e.target.value)}
                required
            />
            </div>
            <div className={"rowForm"}>
              <TextField 
                  id="FavoriteCountry" 
                  label="FavoriteCountry" 
                  name="FavoriteCountry"
                  value={favoriteCountry} 
                  onChange={e => setFavoriteCountry(e.target.value)}
                  required
              />
              <TextField 
                  id="JobTitle" 
                  label="JobTitle" 
                  name="JobTitle"
                  value={jobTitle} 
                  onChange={e => serJobTitle(e.target.value)}
                  required
              />
            </div>
            <div className={"rowForm"}>
              <FormControl style={{marginLeft: "10%" ,width:"20%"}} required>
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
        <Button variant="contained" color="primary" onClick={addAdditionalInformation}><p>SEND</p></Button>
        </div>
        <Footer/>
      </div>
    );
  }
  

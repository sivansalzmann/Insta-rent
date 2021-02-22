import React, { useState} from 'react';
import './PrsonalDeatils.css';
import { Button } from '@material-ui/core';
import PopUp from '../All/PopUp';
import TextField from '@material-ui/core/TextField';

export default function RenterPage(props) {
    const [openEdit,setOpenEdit] = useState(false);
    const [jobTitle,setJob] = useState("");
    const [budget,setBudget] = useState("");
    const [favoriteCountry,setFavoriteCountry] = useState("");
    const [setUser] = useState("");

    const validateBudget = () => {        
        let errors = [];
        if(budget !== "") {
            if(isNaN(budget)) {
                errors.push("You have entered an invalid budget, please insert another one \n")
            }
        }
        if (errors.length > 0)
            alert(errors)
        else
            return true
    }
    const editRenter = () => {
        if(validateBudget()) {
            const body = { JobTitle: jobTitle,Budget:budget,FavoriteCountry: favoriteCountry};
            fetch(`https://instarent-1st.herokuapp.com/api/users/${props.user.id}` ,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            .then(response => response.json())
            .then(result => {
                setOpenEdit(false);
                setUser(result)
                setJob("")
                setBudget("")
                setFavoriteCountry("")
            });
        }
      }
      const isRenter = () => {
          return (
              <>
                <div><Button style={{marginBottom:'5%'}} variant="contained" color="primary" onClick={() => setOpenEdit(true)}>Edit</Button></div>   
                <PopUp onSubmit={editRenter} title={"Edit User"} open={openEdit} closePopup={() => setOpenEdit(false)} sendBtn={true} showBt={true}>
                    <TextField label="JobTitle" value={jobTitle} onChange={e => setJob(e.target.value)} fullWidth required/>
                    <TextField label="Budget" value={budget} onChange={e => setBudget(e.target.value)} fullWidth required/>
                    <TextField label="Favorite country" value={favoriteCountry} onChange={e => setFavoriteCountry(e.target.value)} fullWidth required/>
                </PopUp>
            </>
          )
      }
      const isOwner = () => {
        return (
            <>
            </>
        )
    }
    return (
        <div className={"personalDeatils"}>
            <img src={props.ImageUrl} alt="profile" />
            <h1>{props.FirstName} {props.LastName}</h1>
            <h3>{props.JobTitle}</h3>
            <div className={"line"}></div>
            <p>Gender</p>
            <span>{props.Gender}</span>
            <p>Age</p>
            <span>{props.Age}</span>
            <p>Country</p>
            <span>{props.Country}</span>
            {props.isRenter ? isRenter() : isOwner()} 
        </div>
	);
}


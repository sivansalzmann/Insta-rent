import React, {useEffect, useState} from 'react';
import './PrsonalDeatils.css';
// import profileImg from './Media/profile.png'
import { Button } from '@material-ui/core';
import PopUp from '../All/PopUp';
import TextField from '@material-ui/core/TextField';


  
export default function RenterPage(props) {


    const [openEdit,setOpenEdit] = useState(false);
    const [jobTitle,setJob] = useState("");
    const [budget,setBudget] = useState("");
    const [renterDeatils,setRenterDeatils] = useState("");


    const editUser = () => {
        const body = { JobTitle: jobTitle,Budget:budget};
        console.log(body);
        // fetch(`https://instarent-1st.herokuapp.com/api/users/${user.id}`, {
        fetch(`http://localhost:3000/api/renterDeatils/${props.idRenter}` ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
          .then(response => response.json())
          .then(result => {
              setOpenEdit(false);
              setRenterDeatils(result)
              setJob("")
              setBudget("")
          });
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
            <div><Button style={{marginBottom:'5%'}} variant="contained" color="primary" onClick={() => setOpenEdit(true)}>Edit</Button></div>   
            <PopUp onSubmit={editUser} title={"Edit User"} open={openEdit} closePopup={() => setOpenEdit(false)} sendBtn={true}>
                <TextField label="JobTitle" value={jobTitle} onChange={e => setJob(e.target.value)} fullWidth required/>
                <TextField label="Budget" value={budget} onChange={e => setBudget(e.target.value)} fullWidth required/>
            </PopUp>
        </div>

	);
}


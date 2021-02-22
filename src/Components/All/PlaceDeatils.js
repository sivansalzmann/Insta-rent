import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PopUp from '../All/PopUp';

export default function PlaceDeatils(props) {

    const [deatils,setDeatils] = useState("")
    const [open,setOpen] = useState(true)
    const getDeatils = () => {
        fetch(`https://restcountries-v1.p.rapidapi.com/name/${props.country}`, {
        method: 'GET',
        headers: { 'x-rapidapi-key': 'ccf705d7e2mshcc4c93570281dfdp1fb7f3jsne6c4a2c05e63',
        'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
        useQueryString: true },
      })
        .then(response => response.json())
        .then(result => {
            setDeatils(result)
            console.log(result)
        })
    }
    const getGeneralDetils = () => {
        return (
            <div>
                <PopUp onSubmit={() => setOpen(false)} wantAssetBtn={false} title={"Genarel deatils"} open={setOpen} closePopup={() => setOpen(false)} sendBtn={false} showBt={true}>
                    <p>Country: {deatils[0].name}</p>
                    <p>Capitel city: {deatils[0].capital}</p>
                </PopUp>
            </div>
        )
    }
    const getAllDetils = () => {
        return (
            <div>
                {getDeatils()}
                <p>Country: {deatils[0].name}</p>
                <p>Capitel city: {deatils[0].capital}</p>
                <p>area: {deatils[0].area}</p>
                <p>population: {deatils[0].population}</p>
                <p>region: {deatils[0].region}</p>
                <p>subregion: {deatils[0].subregion}</p>
            </div>
        );
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => {getGeneralDetils()}}><p>GET GENERAL DEATILS</p></Button>
            <Button variant="contained" color="primary" onClick={() => {getAllDetils()}}><p>GET GENERAL DEATILS</p></Button>
        </div>
    )
        
}


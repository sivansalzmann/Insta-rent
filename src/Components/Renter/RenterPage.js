import React, {useEffect, useState} from 'react';
import './RenterPage.css';
import PrivatePage from '../All/PrivatePage';
import {useHistory} from "react-router-dom";

export default function RenterPage(props) {
  let history = useHistory()

  const [renterMessages, setRenterMessages] = useState("");
  const [user,setUser] = useState("");
  const [renterDeatils,setRenterDeatils] = useState("");
  const [renterDeatilsId,setRenterDeatilsId] = useState("");
  const [wantedAsset,setWantedAsset] = useState("");
  const [userProps] = useState(props.location.user)


  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${userProps.googleID}`)
      .then(response => response.json())
      .then(result =>  {
          setUser(result)
      })    
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/api/renterDeatils/${userProps.id}`)
      .then(response => response.json())
      .then(result =>  {
        setRenterDeatils(result)
        setRenterDeatilsId(result.id)
      }) 
  }, [renterDeatils])

  useEffect(() => {
    fetch(`http://localhost:3000/api/assets?RenterId=${userProps.id}`)
      .then(response => response.json())
      .then(result => {
        setWantedAsset(result)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/api/messages?RenterId=${userProps.id}`)
      .then(response => response.json())
      .then(result =>  {
        setRenterMessages(result)
      })
  }, [])

  return (
      <div className={"renterMainPage"}>
        <PrivatePage label1={"In progress"} label2={"Asset place deatils"} label3={"Messages to my owner"} 
        FirstName={user.FirstName} LastName={user.LastName} Gender={user.Gender} Age={user.Age} Country={user.Country} ImageUrl={user.ImageUrl} idRenter={user.id}
        FavoriteCountry={renterDeatils.FavoriteCountry} Budget={renterDeatils.Budget} JobTitle={renterDeatils.JobTitle} userId={user}
        firstHead={"Prsonal deatils"} isRenter={true} user={user} messages={renterMessages} wantedAsset={wantedAsset} renterDeatilsId={renterDeatilsId} />
    </div>
);
}
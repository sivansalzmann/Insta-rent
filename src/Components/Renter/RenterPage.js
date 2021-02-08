import React, {useEffect, useState} from 'react';
import './RenterPage.css';
import PrivatePage from '../All/PrivatePage';

const userId = 3; //change it

export default function RenterPage(props) {

    const [renterMessages, setRenterMessages] = useState("");
    const [user,setUser] = useState("");
    const [renterDeatils,setRenterDeatils] = useState("");
    const [renterDeatilsId,setRenterDeatilsId] = useState("");
    const [wantedAsset,setWantedAsset] = useState("");

    useEffect(() => {
      fetch(`http://localhost:3000/api/users/${userId}`)
        .then(response => response.json())
        .then(result =>  {
            setUser(result)
        })    
    }, [user])

  useEffect(() => {
    fetch(`http://localhost:3000/api/renterDeatils/${userId}`)
      .then(response => response.json())
      .then(result =>  {
        setRenterDeatils(result)
        setRenterDeatilsId(result.id)
      }) 
    }, [renterDeatils])

    useEffect(() => {
      fetch(`http://localhost:3000/api/assets?RenterId=${userId}`)
        .then(response => response.json())
        .then(result => {
          setWantedAsset(result)
      })
    }, [wantedAsset])
    useEffect(() => {
      fetch(`http://localhost:3000/api/messages?RenterId=${userId}`)
        .then(response => response.json())
        .then(result =>  {
          setRenterMessages(result)
        })
    }, [renterMessages])

    return (
		<div className={"renterMainPage"}>
      <PrivatePage label1={"In progress"} label2={"Asset place deatils"} label3={"Messages to my owner"} 
      FirstName={user.FirstName} LastName={user.LastName} Gender={user.Gender} Age={user.Age} Country={user.Country} ImageUrl={user.ImageUrl} idRenter={user.id}
      FavoriteCountry={renterDeatils.FavoriteCountry} Budget={renterDeatils.Budget} userId={user.id}
      firstHead={"Prsonal deatils"} renter={true} user={user} messages={renterMessages} wantedAsset={wantedAsset} />
	</div>
	);
}
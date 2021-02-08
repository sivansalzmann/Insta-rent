import React, {useEffect, useState} from 'react';
import './OwnerPage.css';
import PrivatePage from '../All/PrivatePage';

export default function OwnerPage1(props) {

    const [user,setUser] = useState("");
    const [assets,setAssets] = useState("");
    const [messages,setOwnerMessages] = useState("");

    useEffect(() => {
      fetch(`http://localhost:3000/api/users/${props.location.ownerId}`)
        .then(response => response.json())
        .then(result =>  {
            setUser(result)
        })
    }, [user])

    useEffect(() => {
      fetch(`http://localhost:3000/api/assets?OwnerId=${props.location.ownerId}`)
        .then(response => response.json())
        .then(result =>  {
            setAssets(result)
        })     
    }, [assets])

    useEffect(() => {
      fetch(`http://localhost:3000/api/messages?OwnerId=${props.location.ownerId}`)
        .then(response => response.json())
        .then(result =>  {
            setOwnerMessages(result)
        }) 
    }, [messages])

  return (
    <div className={"ownerMainPage"}>
      <PrivatePage label1={"General"} label2={"My assets"} label3={"Messages"} 
      FirstName={user.FirstName} LastName={user.LastName} Gender={user.Gender} Age={user.Age} Country={user.Country} ImageUrl={user.ImageUrl} idOwner={user.id}
      firstHead={"Prsonal deatils"} renter={false} user={user} assets={assets} messages={messages} 
      />
    </div>
  );
}
import React, {useEffect, useState} from 'react';
import './OwnerPage.css';
import PrivatePage from '../All/PrivatePage';
import {useCookies} from "react-cookie";

export default function OwnerPage1(props) {

    const [user,setUser] = useState("");
    const [assets,setAssets] = useState("");
    const [messages,setOwnerMessages] = useState("");
    const [userProps] = useState(props.location.user)
    const [cookies] = useCookies(['user']);

    useEffect(() => {
      fetch(`http://localhost:3000/api/users/${cookies.user.id}`, {credentials: 'include'})
        .then(response => response.json())
        .then(result =>  {
            setUser(result)
        })    
    }, [user])

    useEffect(() => {
      fetch(`http://localhost:3000/api/assets?OwnerId=${cookies.user.id}`, {credentials: 'include'})
        .then(response => response.json())
        .then(result =>  {
            setAssets(result)
        })     
    }, [assets])

    useEffect(() => {
      fetch(`http://localhost:3000/api/messages?OwnerId=${cookies.user.id}`, {credentials: 'include'})
        .then(response => response.json())
        .then(result =>  {
            setOwnerMessages(result)
        }) 
    }, [messages])

  return (
    <div className={"ownerMainPage"}>
      <PrivatePage label1={"General"} label2={"My assets"} label3={"Messages"} 
      firstHead={"Prsonal deatils"} user={user} assets={assets} messages={messages} isOwner={true} renterDeatils={-1}
      />
    </div>
  );
}
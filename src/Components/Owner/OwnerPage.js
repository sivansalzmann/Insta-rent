import React, {useEffect, useState} from 'react';
import './OwnerPage.css';
import PrivatePage from '../All/PrivatePage';
import {useCookies} from "react-cookie";

export default function OwnerPage1(props) {

    const [user,setUser] = useState("");
    const [assets,setAssets] = useState("");
    const [messages,setOwnerMessages] = useState("");
    const [cookies] = useCookies(['user']);

    useEffect(() => {
      fetch(`https://instarent-1st.herokuapp.com/api/users/${cookies.user.id}`, { withCredentials: true, credentials: 'include' })
        .then(response => response.json())
        .then(result =>  {
            setUser(result)
        })    
    }, [cookies.user.id])
    useEffect(() => {
      fetch(`https://instarent-1st.herokuapp.com/api/assets?OwnerId=${cookies.user.id}`, { withCredentials: true, credentials: 'include' })
        .then(response => response.json())
        .then(result =>  {
            setAssets(result)
        })     
    }, [cookies.user.id])
    useEffect(() => {
      fetch(`https://instarent-1st.herokuapp.com/api/messages?OwnerId=${cookies.user.id}`, { withCredentials: true, credentials: 'include' })
        .then(response => response.json())
        .then(result =>  {
            setOwnerMessages(result)
        }) 
    }, [cookies.user.id])
    return (
    <div className={"ownerMainPage"}>
      <PrivatePage label1={"General"} label2={"My assets"} label3={"Messages"} 
      firstHead={"Prsonal deatils"} user={user} assets={assets} messages={messages} isOwner={true} 
      />
    </div>
  );
}
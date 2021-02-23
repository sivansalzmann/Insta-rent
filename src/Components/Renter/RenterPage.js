import React, {useEffect, useState} from 'react';
import './RenterPage.css';
import PrivatePage from '../All/PrivatePage';
import {useCookies} from "react-cookie";

export default function RenterPage(props) {
  const [renterMessages, setRenterMessages] = useState("");
  const [user,setUser] = useState("");
  const [wantedAsset,setWantedAsset] = useState("");
  const [cookies] = useCookies(['user']);

  useEffect(() => {
    fetch(`https://instarent-1st.herokuapp.com/api/users/${cookies.user.id}`, { withCredentials: true, credentials: 'include' })
      .then(response => response.json())
      .then(result =>  {
          setUser(result)
      })    
  }, [cookies.user.id])
  useEffect(() => {
    fetch(`https://instarent-1st.herokuapp.com/api/assets?RenterId=${cookies.user.id}`, { withCredentials: true, credentials: 'include' })
      .then(response => response.json())
      .then(result => {
        setWantedAsset(result)
    })
  }, [cookies.user.id])
  useEffect(() => {
    fetch(`https://instarent-1st.herokuapp.com/api/messages?RenterId=${cookies.user.id}`, { withCredentials: true, credentials: 'include' })
      .then(response => response.json())
      .then(result =>  {
        setRenterMessages(result)
      })
  }, [cookies.user.id])
  
  return (
      <div className={"renterMainPage"}>
        <PrivatePage label1={"In progress"} label2={"Asset place deatils"} label3={"Messages to my owner"} 
        user={user} firstHead={"Prsonal deatils"} isRenter={true} messages={renterMessages} wantedAsset={wantedAsset[0]} />
    </div>
  );
}
import React, {useState, useEffect} from 'react';
import AssetSearchForm from './AssetSearchForm'
import NavBar from '../All/NavBar';
import Footer from '../All/Footer';
import './RenterSearch.css';
import {useCookies} from "react-cookie";

export default function RenterSearch(props) {
    const [cookies] = useCookies(['user']);
	const [user,setUser] = useState("")
	
	useEffect(() => {
        fetch(`https://instarent-1st.herokuapp.com/api/users/${cookies.user.id}`, { withCredentials: true, credentials: 'include' })
          .then(response => response.json())
          .then(result =>  {
            setUser(result)
        })
      },)
	return (
		<div className={"renterMainPage"}>
			<NavBar/>
			<p className={"renterMainPgeHeadline"}>Find You'r Next Asset</p>
			<AssetSearchForm user={user}/>
			<Footer />
		</div>
	);
}


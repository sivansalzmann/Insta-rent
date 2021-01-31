import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const userId = '3';

export default function App(props) {

    const [wantedAsset,setWantedAsset] = useState("");
    const [renter, setRenter] = useState([]);

    useEffect(() => {
        fetch(`https://instarent-1st.herokuapp.com/api/assets?RenterId=${userId}`)
            .then(response => response.json())
            .then(result => {
              setWantedAsset(result)
              console.log(result)
            })
    }, [])
  
    return (
        <div className={'background'}>
            <div className={'navBarHomePage'}>
                <h1><a href="/">InstaRent</a></h1>
                <h2><Link to={{ pathname:"/Renter",wantedAsset:wantedAsset}}>RENTER PROFILE</Link></h2>
            </div>
            <div className={"homePageContainer"}>
                <h1 className={"headLineHomePage"}>Looking for apartment?</h1>
                <p className={"pHomePage"}>Search apartments by neighborhood, price, amenity, and more</p>
                <div className={"choiseRenterOwner"}>
                    <ul>
                        <li><Link to={{ pathname: "/RenterSearch"}}>I want to rent asset</Link></li>
                        <li><Link to={{ pathname: "/OwnerPage"}}>I want to post asset</Link></li>
                    </ul>
                </div>	 
            </div>
        </div>
    )

}


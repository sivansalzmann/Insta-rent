import React, {useEffect, useState} from 'react';
import './UserDeatils.css';
import {useCookies} from "react-cookie";

export default function UserDeatils(props) {
    const [renter,setRenter] = useState("")
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        fetch(`https://instarent-1st.herokuapp.com/api/users/${props.asset.RenterId}`, { withCredentials: true, credentials: 'include' })
            .then(response => response.json())
            .then(result =>  {
                setRenter(result)
                console.log(renter)
        })
    }, [renter])

    return (
        <div>
            <div className={"rowImg"}>
                <div className={"coulmn"}>            
                    <h1>{renter.FirstName},{renter.LastName}</h1>
                    <span>{renter.JobTitle}</span>
                    <div>
                        <h4>Budget:</h4>
                        <span>{renter.Budget}</span>
                    </div>
                </div> 
                <img src={renter.ImageUrl} alt="profile"/>
            </div>
            <div className={"firstDeatils"}>
                <div>
                    <h4>Gender: </h4>
                    <span>{renter.Gender}</span>
                </div>
                <div>
                    <h4>Age:</h4>
                    <span>{renter.Age}</span>
                </div>
                <div>
                    <h4>Country: </h4>
                    <span>{renter.Country}</span>
                </div>
            </div>
            <div className={"row"}>
                <h4>Phone: </h4>
                <span>{renter.Phone}</span>
            </div>
            <div className={"row"}>
                <h4>Email: </h4>
                <span>{renter.Email}</span>
            </div>
        </div>
    );
}
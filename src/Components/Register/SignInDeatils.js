import React, {useEffect, useState} from 'react';
import './SignInDeatils.css';
import Footer from '../All/Footer';
import AddDeatils from './addDeatils';
import {useHistory} from "react-router-dom";

export default function SignInDeatils (props) { 
  let history = useHistory();

  const [userId] = useState(props.location.userId)
  const [user,setUser] = useState("");

  console.log(userId)

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${userId}`, {credentials: 'include'})
      .then(response => response.json())
      .then(result =>  {
          setUser(result)
          console.log(result)
      })    
  }, [])

    return (
      <div className={'background'}>
        <h1 className={"headSignIn"}>InstaRent</h1>
        <div className={"SignInDeatilsContainer"}>
          <p>Additional Information</p>
          <AddDeatils
            user={user}
          />
        </div>
        <Footer/>
      </div>
    );
  }
  

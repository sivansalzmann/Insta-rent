import React, {useEffect, useState,useContext} from 'react';
import './SignInDeatils.css';
import Footer from '../All/Footer';
import AddDeatils from './addDeatils';
import {useHistory} from "react-router-dom";
import {UserContext} from '../../UserContext';

export default function SignInDeatils (props) { 
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const [userId] = useState(props.location.userId)
  const [user,setByUserId] = useState("");

  console.log(userId)

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${userId}`, {credentials: 'include'})
      .then(response => response.json())
      .then(result =>  {
          setByUserId(result)
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
  

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PopUp from '../All/PopUp';
import {useHistory} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useCookies} from "react-cookie";


export default function App(props) {
    let history = useHistory()
    const [renterDeatilsPopUp,setRenterDeatilsPopUp] = useState(false)
    const [favoriteCountry,setFavoriteCountry] = useState("")
    const [budget,setBudget] = useState("")
    const [jobTitle,serJobTitle] = useState("")
    const [renterDeatils,setRenterDeatils] = useState("")
    const [positionPopUp,setPositionPopUp] = useState(true)
    const [position,setPositionUser] = useState("")
    const [renter,setRenter] = useState(false)
    const [owner,setOwner] = useState(false)
    const [renterDeatilsExist,setRenterDeatilsExist] = useState("")
    const [cookies,setCookie] = useCookies(['user']);
    const [user,setUser] = useState("")


    useEffect(() => {
        fetch(`https://instarent-1st.herokuapp.com/api/renterDeatils/${cookies.user.id}`, {credentials: 'include'})
          .then(response => response.json())
          .then(result =>  {
            setRenterDeatilsExist(result)
        })
      }, [renterDeatilsExist])

    useEffect(() => {
    fetch(`https://instarent-1st.herokuapp.com/api/users/${cookies.user.id}`, {credentials: 'include'})
        .then(response => response.json())
        .then(result =>  {
            setUser(result)
    })
    }, [user])

    const addRenterDeatils = () => {
        const body = { JobTitle: jobTitle, Budget: budget, FavoriteCountry: favoriteCountry,RenterId: user.id ,googleID: user.googleID};
        fetch(`https://instarent-1st.herokuapp.com/api/renterDeatils`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
          .then(response => response.json())
          .then(result => {
            setRenterDeatilsPopUp(false)
            setRenterDeatils(result)
            serJobTitle("")
            setBudget("")
            setFavoriteCountry("")
          });
      }

    const logout = () => {
        fetch(`https://instarent-1st.herokuapp.com/api/auth/logout`, {credentials: 'include'})
        .then(result => {
            setCookie('user', '')
            history.push('/')
        })
        .catch(err => console.log(err))
    }

    const setPosition = () => {
        console.log(renter)
        const body = {IsRenter:renter,IsOwner:owner};
        fetch(`https://instarent-1st.herokuapp.com/api/users/${cookies.user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(result => {
            setPositionUser(result);
        })
    }

      const chooseHomePage = () => {
        if(renter === true) {
            return (
                <div className={"buttons"}>
                    {renterDeatilsExistFunc()}
                    <Link to={{ pathname: "/RenterSearch" , user:user, isRenter:true }}><Button onClick={() => addRenterDeatils()}><p>I want to rent asset</p></Button></Link>
                    <Link to={{ pathname: "/Renter" , user:user, isRenter:true }}><Button type={"submit"}><p>My renter page</p></Button></Link>
                </div>
                )
            }
        if(owner === true) {
            return (
                <div className={"buttons"}>
                    <Link to={{ pathname: "/OwnerPage" , user:user, isRenter:false }}><Button type={"submit"}><p>My owner page</p></Button></Link>
                </div>
                )
            }
        }
      const chooesPosition = () => {
        // if(props.location.fromLogin) {
            return (
                <PopUp open={positionPopUp} title={"Choose your position"} closePopup={() => alert("you have to choose position to continue")} showBt={false}>
                    <div className={"buttonsChoose"} >
                        <Button variant="contained" color="primary" onClick={() => {setRenter(true) ; setOwner(false); setPositionPopUp(false); setPosition()}}><p>I want to rent asset</p></Button>
                        <Button variant="contained" color="primary" onClick={() => {setOwner(true) ; setRenter(false); setPositionPopUp(false); setPosition()}}><p>I want to post asset</p></Button>
                    </div>
                </PopUp>
                
            )
        // }
      }
      
    
      const renterDeatilsExistFunc = () => {
          if(renterDeatilsExist == null) {
              return (
                <PopUp open={renterDeatilsPopUp} onSubmit={() => addRenterDeatils()} title={"Insert deatils on your current position"} closePopup={() => setRenterDeatilsPopUp(false)} showBt={true}>
                    <TextField className="input" label="Country" size="large" onChange={ (event) => serJobTitle(event.target.value) } value={ jobTitle } fullWidth required/>   
                    <TextField className="input" label="jobTitle" size="large" onChange={ (event) => setBudget(event.target.value) } value={ budget } fullWidth required/>   
                    <TextField className="input" label="budget" size="large" onChange={ (event) => setFavoriteCountry(event.target.value) } value={ favoriteCountry } fullWidth required/>   
                </PopUp> 
              )
          }
      }


    return (
        <div>
            <div className={"background"}> 
                <div className={'navBarHomePage'}>
                    {chooesPosition()}
                    <h1><a href="/HomePage">InstaRent</a></h1>
                    <div className={"options"}>
                        <h3><Link to={{ pathname: '/HomePage'}}>About</Link></h3>
                        <h3><Link to={{ pathname: '/RenterSearch' , user:user, renter:true }}>Search</Link></h3>
                        <h3>Hello {user.FirstName} {user.LastName} </h3>
                        <h3><Button onClick={logout} >LOGOUT</Button></h3>
                    </div>
                </div>
                <div className={"homePageContainer"}>
                    <div className={"pictures"}></div>
                    <div className={"explain"}>
                        <h1>Looking for apartment?</h1>
                        <p> 
                            Lorem Ipsum is simply dummy text of the  printing and typesetting industry. \n
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    {chooseHomePage()}
                </div>
            </div>
        </div>
    )

}


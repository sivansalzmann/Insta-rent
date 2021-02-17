import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PopUp from '../All/PopUp';
import {useHistory} from "react-router-dom";
import AddDeatils from '../Register/addDeatils';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddAsset from '../Owner/AddAsset';
import { makeStyles } from '@material-ui/core/styles';
import {useCookies} from "react-cookie";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(0),
      },
    },
  }));

export default function App(props) {
    // const [user] = useState(props.location.userId)
    let history = useHistory()
    const [renterDeatilsPopUp,setRenterDeatilsPopUp] = useState(false)
    const [favoriteCountry,setFavoriteCountry] = useState("")
    const [budget,setBudget] = useState("")
    const [jobTitle,serJobTitle] = useState("")
    const [renterDeatils,setRenterDeatils] = useState("")
    const [position,setPosition] = useState(true)
    const [renter,setRenter] = useState(false)
    const [owner,setOwner] = useState(false)
    const [renterDeatilsExist,setRenterDeatilsExist] = useState("")
    const [cookies] = useCookies(['user']);
    const [user,setUser] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3000/api/renterDeatils/${cookies.user.id}`, {credentials: 'include'})
          .then(response => response.json())
          .then(result =>  {
            setRenterDeatilsExist(result)
        })
      }, [cookies.user.id])

    useEffect(() => {
    fetch(`http://localhost:3000/api/users/${cookies.user.googleID}`, {credentials: 'include'})
        .then(response => response.json())
        .then(result =>  {
            setUser(result)
    })
    }, [cookies.user.id])

    const addRenterDeatils = () => {
        const body = { JobTitle: jobTitle, Budget: budget, FavoriteCountry: favoriteCountry,RenterId: user.id ,googleID: user.googleID};
        fetch(`http://localhost:3000/api/renterDeatils`, {
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

      const chooseHomePage = () => {
        if(renter == true) {
            return (
                <div className={"buttons"}>
                    {renterDeatilsExistFunc()}
                    <Link to={{ pathname: "/RenterSearch" , user:user, isRenter:true }}><Button onClick={() => setRenterDeatilsPopUp(true)}><p>I want to rent asset</p></Button></Link>
                    <Link to={{ pathname: "/Renter" , user:user, isRenter:true }}><Button type={"submit"}><p>My renter page</p></Button></Link>
                </div>
                )
            }
        if(owner == true) {
            return (
                <div className={"buttons"}>
                    <Button type={"submit"}><p>post asset</p></Button>
                    <Link to={{ pathname: "/OwnerPage" , user:user, isRenter:false }}><Button type={"submit"}><p>My owner page</p></Button></Link>
                </div>
            )
            }
        }
      const chooesPosition = () => {
        // if(props.location.fromLogin) {
            return (
                <PopUp open={position} title={"Choose your position"} closePopup={() => alert("you have to choose position to continue")} showBt={false}>
                    <div className={"buttonsChoose"} >
                        <Button variant="contained" color="primary" onClick={() => {setRenter(true) ; setPosition(false)}}><p>I want to rent asset</p></Button>
                        <Button variant="contained" color="primary" onClick={() => {setOwner(true) ; setPosition(false)}}><p>I want to post asset</p></Button>
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

      const insertDeatils = () => {
          return (
            <AddDeatils user={user}/>
          )
      }

    return (
        <div>
            <div className={"background"}> 
                <div className={'navBarHomePage'}>
                    {chooesPosition()}
                    <h1><a href="/">InstaRent</a></h1>
                    <div className={"options"}>
                        {console.log(user)}
                        <h3><Link to={{ pathname: '/HomePage'}}>About</Link></h3>
                        <h3><Link to={{ pathname: '/RenterSearch' , user:user, renter:true }}>Search</Link></h3>
                        <h3>Hello {user.FirstName} {user.LastName} </h3>
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


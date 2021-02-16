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
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(0),
      },
    },
  }));

export default function App(props) {
    const [user] = useState(props.location.userId)
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

    const classes = useStyles();


    const addRenterDeatils = () => {
        const body = { JobTitle: jobTitle, Budget: budget, FavoriteCountry: favoriteCountry,RenterId: user.id ,googleID: user.googleID};
        fetch(`http://localhost:3000/api/renterDeatils`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
          .then(response => response.json())
          .then(result => {
            // let path = `/RenterSearch`
            setRenterDeatilsPopUp(false)
            setRenterDeatils(result)
            serJobTitle("")
            setBudget("")
            setFavoriteCountry("")
        //     history.push({
        //         pathname: path,
        //         user: user,
        //         renter: renter
        //   })
          });
      }

      const chooseHomePage = () => {
        if(renter == true) {
            return (
                <div className={"buttons"}>
                    {renterDeatilsExistFunc()}
                    <Link to={{ pathname: "/RenterSearch" , user:user, renter:true }}><Button onClick={() => setRenterDeatilsPopUp(true)}><p>I want to rent asset</p></Button></Link>
                    {/* <PopUp open={renterDeatilsPopUp} onSubmit={() => addRenterDeatils()} title={"Insert deatils on your current position"} closePopup={() => setRenterDeatilsPopUp(false)} showBt={true}>
                        <TextField className="input" label="Country" size="large" onChange={ (event) => serJobTitle(event.target.value) } value={ jobTitle } fullWidth/>   
                        <TextField className="input" label="jobTitle" size="large" onChange={ (event) => setBudget(event.target.value) } value={ budget } fullWidth/>   
                        <TextField className="input" label="budget" size="large" onChange={ (event) => setFavoriteCountry(event.target.value) } value={ favoriteCountry } fullWidth/>   
                    </PopUp>                     */}
                    <Link to={{ pathname: "/Renter" , user:user, renter:true }}><Button type={"submit"}><p>My renter page</p></Button></Link>
                </div>
                )
            }
        if(owner == true) {
            return (
                <div className={"buttons"}>
                    <Button type={"submit"}><p>post asset</p></Button>
                    <Link to={{ pathname: "/OwnerPage" , user:user, renter:false }}><Button type={"submit"}><p>My owner page</p></Button></Link>
                </div>
            )
            }
        }

      const chooesPosition = () => {
        return (
            <PopUp open={position} title={"Choose your position"} closePopup={() => alert("you have to choose position to continue")} showBt={false}>
                <div className={"buttonsChoose"} >
                    <Button variant="contained" color="primary" onClick={() => {setRenter(true) ; setPosition(false)}}><p>I want to rent asset</p></Button>
                    <Button variant="contained" color="primary" onClick={() => {setOwner(true) ; setPosition(false)}}><p>I want to post asset</p></Button>
                </div>
            </PopUp>
        )
      }
      console.log(user.id)

      useEffect(() => {
        fetch(`http://localhost:3000/api/renterDeatils/${user.id}`)
          .then(response => response.json())
          .then(result =>  {
            setRenterDeatilsExist(result)
        })
      }, [])
    
      const renterDeatilsExistFunc = () => {
          if(renterDeatilsExist == null) {
              return (
                <PopUp open={renterDeatilsPopUp} onSubmit={() => addRenterDeatils()} title={"Insert deatils on your current position"} closePopup={() => setRenterDeatilsPopUp(false)} showBt={true}>
                    <TextField className="input" label="Country" size="large" onChange={ (event) => serJobTitle(event.target.value) } value={ jobTitle } fullWidth/>   
                    <TextField className="input" label="jobTitle" size="large" onChange={ (event) => setBudget(event.target.value) } value={ budget } fullWidth/>   
                    <TextField className="input" label="budget" size="large" onChange={ (event) => setFavoriteCountry(event.target.value) } value={ favoriteCountry } fullWidth/>   
                </PopUp> 
              )
          }
      }

    return (
        <div>
            {/* <AddDeatils user={user}/> */}
            {chooesPosition()}
            <div className={"background"}> 
                <div className={'navBarHomePage'}>
                    <h1><a href="/">InstaRent</a></h1>
                    <div className={"options"}>
                        {console.log(user)}
                        <h3><Link to={{ pathname: '/HomePage'}}>About</Link></h3>
                        <h3><Link to={{ pathname: '/RenterSearch' , user:user, renter:true }}>Search</Link></h3>
                        {/* <div className={"rowName"}> */}
                        <h3>Hello {user.FirstName} {user.LastName} </h3>
                            {/* <div className={classes.root}>
                                <Avatar alt="Remy Sharp" src={user.ImageUrl} />
                            </div> */}
                        {/* </div> */}
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


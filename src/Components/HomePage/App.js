import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PopUp from '../All/PopUp';
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {useCookies} from "react-cookie";

export default function App(props) {
    let history = useHistory()
    const [positionPopUp,setPositionPopUp] = useState(true)
    const [renter,setRenter] = useState(false)
    const [owner,setOwner] = useState(false)
    const [cookies,setCookie] = useCookies(['user']);
    const [user,setUser] = useState("")

    useEffect(() => {
        fetch(`https://instarent-1st.herokuapp.com/api/users/${cookies.user.id}`, {credentials: 'include'})
            .then(response => response.json())
            .then(result =>  {
                setUser(result)
        })
    }, [cookies.user.id,user])
    
    const logout = () => {
        fetch(`https://instarent-1st.herokuapp.com/api/auth/logout`, {credentials: 'include'})
        .then(result => {
            setCookie('user', '')
            history.push('/')
        })
        .catch(err => console.log(err))
    }

    const chooseHomePage = () => {
        if(renter === true) {
            return (
                <div className={"buttons"}>
                    <Link to={{ pathname: "/RenterSearch" , user:user, isRenter:true }}><Button><p>I want to rent asset</p></Button></Link>
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
        return (
            <PopUp open={positionPopUp} title={"Choose your position"} closePopup={() => alert("you have to choose position to continue")} showBt={false}>
                <div className={"buttonsChoose"} >
                    <Button variant="contained" color="primary" onClick={() => {setRenter(true) ; setPositionPopUp(false);}}><p>I want to rent asset</p></Button>
                    <Button variant="contained" color="primary" onClick={() => {setOwner(true) ; setPositionPopUp(false);}}><p>I want to post asset</p></Button>
                </div>
            </PopUp>
            
        )
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
                        <h3><Button onClick={logout}><h3>LOGOUT</h3></Button></h3>
                    </div>
                </div>
                <div className={"homePageContainer"}>
                    <div className={"pictures"}></div>
                    <div className={"explain"}>
                        <h1>Looking for apartment?</h1>
                        <p> 
                        Welcome to InstaRent the web app that will 
                        accompany you throughout the process of renting or advertising your dream apartment!
                        </p>
                    </div>
                    {chooseHomePage()}
                </div>
            </div>
        </div>
    )
}


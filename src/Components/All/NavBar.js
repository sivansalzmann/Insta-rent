import React from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './NavBar.css';
import {useCookies} from "react-cookie";

export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cookies, setCookie] = useCookies(['user']);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    let history = useHistory();

    const logout = () => {
        fetch(`http://localhost:3000/api/auth/logout`, {credentials: 'include'})
        .then(result => {
            setCookie('user', '')
            history.push('/')
        })
        .catch(err => console.log(err))
    }

    const changePosition = () => {
        return (
            <p></p>
        )
    }

    const navBarPosition = () => {
            return ( 
                <>
                    <div className={"rowOptionsNavBar"}>
                        <h3><Link to={{ pathname: "/"}}>AboutUs</Link></h3>
                        <h3><Link to={{ pathname: "/Renter",user:props.userId}}>Hello {cookies.user.FirstName} {cookies.user.LastName}</Link></h3>
                    </div> 
                    <div className={"menu"}>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={logout} style={{color:'white', fontFamily: 'Lato',fontWeight: 'bold', fontSize: '100%'}}>
                        LOGOUT
                    </Button>
                    </div>
                </>
            )
    }

    return (
        <div className={"navBar"}>
            <h1><Link to={{ pathname: "/HomePage", userId: props.userId}} position={props.position}>InstaRent</Link></h1>
            {navBarPosition()}
        </div>
    );
}

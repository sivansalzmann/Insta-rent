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
                        <h3><Link to={{ pathname: "/RenterSearch",user:props.userId}}>Searchasset</Link></h3>
                    </div> : 
                    <div className={"menu"}>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'white', fontFamily: 'Lato',fontWeight: 'bold', fontSize: '100%'}}>
                        Hello {cookies.user.FirstName} {cookies.user.LastName}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={changePosition()} style={{fontFamily: 'Lato'}} >Change position to owner</MenuItem>
                        <MenuItem onClick={logout} style={{fontFamily: 'Lato'}}>Logout</MenuItem>
                    </Menu>
                    </div>
                </>
            )
        // }
        // if(props.isRenter == false) {
            return ( 
                <>
                    <div className={"rowOptionsNavBar"}>
                        {console.log(props.renter)}
                        <h3><Link to={{ pathname: "/"}}>AboutUs</Link></h3>
                        <h3><Link to={{ pathname: "/RenterSearch",user:props.userId}}>Searchasset</Link></h3>
                    </div>
                    <div className={"menu"}>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'white', fontFamily: 'Lato',fontWeight: 'bold', fontSize: '100%'}}>
                        Hello {props.userId.FirstName} {props.userId.LastName}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={changePosition()} style={{fontFamily: 'Lato'}} >Change position to owner</MenuItem>
                        <MenuItem onClick={logout} style={{fontFamily: 'Lato'}}>Logout</MenuItem>
                    </Menu>
                    </div>
                </>
            )
        // }
    }

    return (
        <div className={"navBar"}>
            <h1><Link to={{ pathname: "/HomePage", userId: props.userId}} position={props.position}>InstaRent</Link></h1>
            {navBarPosition()}
        </div>
    );
}

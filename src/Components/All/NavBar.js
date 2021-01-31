import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(props) {
    return (
        <div className={"navBar"}>
        <h1><Link to={{ pathname: "/"}}>InstaRent</Link></h1>
            <Link to={{ pathname: "/"}}>HOME</Link>
            <Link to={{ pathname: "/"}}>APPERTMANTS</Link>
            <Link to={{ pathname: "/"}}>PROFILE</Link>
        </div>
    );
}

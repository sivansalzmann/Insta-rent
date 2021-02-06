import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import NavBar from '../All/NavBar';
import Footer from '../All/Footer';

export default function App(props) {
    return (
        <div>
            <div className={"background"}> 
                <div className={'navBarHomePage'}>
                    <h1><a href="/">InstaRent</a></h1>
                    <div className={"options"}>
                        <h3><Link to={{ pathname: '/'}}>About</Link></h3>
                        <h3><Link to={{ pathname: '/'}}>Search</Link></h3>
                        <h3><Link to={{ pathname: '/Renter'}}>SignIn</Link></h3>
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
                    <div className={"buttons"}>
                        <Link to={{ pathname: "/RenterSearch"}}><button type={"submit"}><p>I want to rent asset</p></button></Link>
                        <Link to={{ pathname: "/OwnerPage"}}><button type={"submit"}><p>I want to post asset</p></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}


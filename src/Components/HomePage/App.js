import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const renterId = 3; // change to login
const ownerId = 2; // change to login

export default function App(props) {
    return (
        <div>
            <div className={"background"}> 
                <div className={'navBarHomePage'}>
                    <h1><a href="/">InstaRent</a></h1>
                    <div className={"options"}>
                        <h3><Link to={{ pathname: '/'}}>About</Link></h3>
                        <h3><Link to={{ pathname: '/RenterSearch' , renterId:renterId}}>Search</Link></h3>
                        <h3><Link to={{ pathname: '/Renter' , renterId:renterId}}>SignIn</Link></h3>
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
                        <Link to={{ pathname: "/RenterSearch" , renterId:renterId }}><button type={"submit"}><p>I want to rent asset</p></button></Link>
                        <Link to={{ pathname: "/OwnerPage" , ownerId:ownerId }}><button type={"submit"}><p>I want to post asset</p></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}


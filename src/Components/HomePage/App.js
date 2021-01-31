import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



import './App.css';

const userId = '3';

export default function App(props) {

    const [wantedAsset,setWantedAsset] = useState("");

    useEffect(() => {
        fetch(`https://instarent-1st.herokuapp.com/api/assets?RenterId=${userId}`)
            .then(response => response.json())
            .then(result => {
              setWantedAsset(result)
              console.log(result)
            })
    }, [])
  
    return (
        <div>
            <div className={"background"}> 
                <div className={'navBarHomePage'}>
                    <h1><a href="/">InstaRent</a></h1>
                    <div className={"options"}>
                        <h3><Link to={{ pathname: '/'}}>Home</Link></h3>
                        <h3><Link to={{ pathname: '/'}}>About</Link></h3>
                        <h3><Link to={{ pathname: '/'}}>Search</Link></h3>
                        <h3><Link to={{ pathname: '/'}}>Start</Link></h3>
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
                        <Link to={{ pathname: "/RenterSearch"}}><button type={"submit"}>I want to rent asset</button></Link>
                        <Link to={{ pathname: "/OwnerPage"}}><button type={"submit"}>I want to post asset</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}


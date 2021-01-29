import React, {useEffect, useState} from 'react';
import AssetSearchForm from './AssetSearchForm';

export default function App(props) {

    const [assets, setAssetList] = useState([]);

    useEffect(() => {
        fetch(`https://instarent-1st.herokuapp.com/api/assets`)
            .then(response => response.json())
            .then(result => setAssetList(result))
    }, [])

    return (
        <div className={'background'}>
            <div className={'navBarHomePage'}>
                <h1><a href="/">InstaRent</a></h1>
                <h2><a href="/Login">SIGN IN/SIGN UP</a></h2>
            </div>
            <div className={"homePageContainer"}>
                <div className={"choiseRenterOwner"}>
                    <ul>
                        <li><a href="/HomePageRenter" style={{textDecoration: 'underline'}}>I'm a Renter</a></li>
                        <li><a href="/">I'm a owner</a></li>
                    </ul>
                </div>
                <h1 className={"headLineHomePage"}>Looking for apartment</h1>
                <p className={"pHomePage"}>Search apartments by neighborhood, price, amenity, and more</p>	 
                <AssetSearchForm assets={assets} />
            </div>
        </div>
        )



}


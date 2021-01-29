import react, { useState, useEffect } from 'react';
import AssetCard from './AssetCard';

export default function AssetPage(props) {

    console.log(props.item)
	return (
        
		// <div className={"renterMainPage"}>
		// 	<div className={"navBar"}>
        //         <h1><a href="/">InstaRent</a></h1>
		// 		<ul>
		// 			<li><a href="/">HOME</a></li>
		// 			<li><a href="/">APPERTMANTS</a></li>
		// 			<li><a href="/">PROFILE</a></li>
		// 		</ul>
		// 	</div>
            <div className={"assetPageContainer"}>
                {props.item}
            </div>
        // </div>
    );
}
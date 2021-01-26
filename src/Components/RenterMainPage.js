import React from "react";
import AssetList from './AssetsList';
import AssetSearchForm from './AssetSearchForm';

export default function RenterMainPage(props) {

	return (
		<>
			<div className={'navBar'}>
				<div className={'navBarInsideWhite'}>
					<h1>InstaRent</h1>
				</div>
				<ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#">SEARCH</a></li>
					<li><a href="#">APPERTMANTS</a></li>
					<li><a href="#">PROFILE</a></li>
				</ul>
			</div>
			<div className="background">
				<AssetSearchForm/>
			</div>
				{/* <AssetList assets={ props.assets }></AssetList>      */}
		</>
	);
}


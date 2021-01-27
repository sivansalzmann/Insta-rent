import React from "react";
import AssetList from './AssetsList';
import AssetSearchForm from './AssetSearchForm';
import AppBar from '@material-ui/core/AppBar';

export default function RenterMainPage(props) {

	return (
		<>
		{/* <AppBar position="static"></AppBar> */}
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
			<div className="wrapper">
				<div className="background">
					<AssetSearchForm/>
				</div>
			</div>
				<AssetList assets={ props.assets }></AssetList>     
		</>
	);
}


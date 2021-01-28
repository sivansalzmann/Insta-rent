import React from "react";
import AssetList from './AssetsList';
import AssetSearchForm from './AssetSearchForm';
import ListIcon from '@material-ui/icons/List';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import Asset from './Asset';

export default function AssetPage(props) {

	return (
		<div className={"renterMainPage"}>
			<div className={"navBar"}>
                <h1><a href="#">InstaRent</a></h1>
				<ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#">APPERTMANTS</a></li>
					<li><a href="#">PROFILE</a></li>
				</ul>
			</div>
            <div className={"assetPageContainer"}>

            </div>
        </div>
    );
}
import React from "react";
import AssetList from './AssetsList';
import AssetSearchForm from './AssetSearchForm';
import ListIcon from '@material-ui/icons/List';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';

export default function RenterMainPage(props) {

	return (
		<div className={"renterMainPage"}>
			<div className={"navBar"}>
				<h1>InstaRent</h1>
				<ul>
					<li>HOME</li>
					<li>APPERTMANTS</li>
					<li>PROFILE</li>
				</ul>
			</div>
			<div className={"renterMainPageContainer"}>
				<p>500 results</p>
				<div className="navBarAssets">
					<ul style={{marginLeft: "100px"}}>
						<li><ListIcon fontSize="large"/></li>
						<li style={{marginLeft: "10px"}}>List</li>
						<li style={{marginLeft:"50px"}}><RoomIcon fontSize="large" /></li>
						<li>Map</li>
					</ul>
					<ul style={{marginLeft: "200px"}}>
						<li><SearchIcon fontSize="large" /> </li>
						<li>Filter</li>
						<li style={{marginLeft: "200px"}}>Sort by</li>
						<li style={{marginLeft: "20px"}}>
							<select style={{bordel: "none", height:"30px"}}>
								<option>Date</option>
								<option>Price-High to low</option>
								<option>Price-Low to high</option>
							</select>
						</li>
					</ul>
				</div>
				<AssetList/>
			</div>
		</div>
	);
}


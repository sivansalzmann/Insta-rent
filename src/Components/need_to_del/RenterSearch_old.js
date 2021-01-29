import { useState, useEffect } from 'react';
import AssetList from './AssetsList';
// import AssetSearchForm from './AssetSearchForm';
import ListIcon from '@material-ui/icons/List';
import RoomIcon from '@material-ui/icons/Room';
import FilterAssets from './FilterAssets';
import AssetSearchForm from './AssetSearchForm';
import { Link } from 'react-router-dom';


export default function RenterSearch(props) {

    console.log(props.location.assets)

	return (
		<div className={"renterMainPage"}>
			<div className={"navBar"}>
				<h1><a href="/">InstaRent</a></h1>
				<ul>
					<li><Link to={{ pathname: "/"}}>HOME</Link></li>
					<li><Link to={{ pathname: "/"}}>APPERTMANTS</Link></li>
					<li><Link to={{ pathname: "/"}}>PROFILE</Link></li>
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
						<li><FilterAssets /> </li>
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
			</div>
							<AssetSearchForm />

		</div>
	);
}


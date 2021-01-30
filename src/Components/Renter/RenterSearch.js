import AssetSearchForm from '../AssetSearch/AssetSearchForm';
import { Link } from 'react-router-dom';


export default function RenterSearch(props) {
	return (
		<div className={"renterMainPage"}>
			<div className={"navBar"}>
				<h1><Link to={{ pathname: "/"}}>InstaRent</Link></h1>
				<ul>
					<li><Link to={{ pathname: "/"}}>HOME</Link></li>
					<li><Link to={{ pathname: "/"}}>APPERTMANTS</Link></li>
					<li><Link to={{ pathname: "/"}}>PROFILE</Link></li>
				</ul>
			</div>
			<div className={"renterMainPageContainer"}>
				<p>FIND YOUR NEXT ASSET</p>
			</div>
			<AssetSearchForm />
		</div>
	);
}


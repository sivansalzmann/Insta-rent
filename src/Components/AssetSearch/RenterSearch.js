import AssetSearchForm from './AssetSearchForm';
import NavBar from '../All/NavBar';
import Footer from '../All/Footer';
import './RenterSearch.css';

export default function RenterSearch(props) {
	return (
		<div className={"renterMainPage"}>
			<NavBar userId={props.location.user} isRenter={props.location.isRenter}/>
			<p className={"renterMainPgeHeadline"}>FIND YOUR NEXT ASSET</p>
			<AssetSearchForm user={props.location.user}/>
			<Footer />
		</div>
	);
}


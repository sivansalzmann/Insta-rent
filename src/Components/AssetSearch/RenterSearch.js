import AssetSearchForm from './AssetSearchForm';
import NavBar from '../All/NavBar';
import Footer from '../All/Footer';
import './RenterSearch.css';

export default function RenterSearch(props) {
	return (
		<div className={"renterMainPage"}>
			<NavBar />
			<p className={"renterMainPgeHeadline"}>FIND YOUR NEXT ASSET</p>
			<AssetSearchForm renterId={props.location.renterId}/>
			<Footer />
		</div>
	);
}


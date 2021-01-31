import AssetSearchForm from '../AssetSearch/AssetSearchForm';
import NavBar from '../All/NavBar';
import Footer from '../All/Footer';
import './RenterSearch.css';

export default function RenterSearch(props) {
	return (
		<div className={"renterMainPage"}>
			<NavBar />
			<div className={"renterMainPageContainer"}>
				<p>FIND YOUR NEXT ASSET</p>
			</div>
			<AssetSearchForm />
			<Footer />
		</div>
	);
}


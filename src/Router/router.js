// import react from 'react';
import {Route} from 'react-router-dom';
import RenterSearch from "../Components/AssetSearch/RenterSearch";
import SignIn from '../Components/Register/SignIn';
import Signup from '../Components/Register/SignUp';
import OwnerPage from '../Components/Owner/OwnerPage';
import OwnerPage1 from '../Components/Owner/OwnerPage1';
import App from '../Components/HomePage/App';
// import AssetPage from '../Components/AssetPage'
// import AssetCard from '../Components/AssetCard'
// import AssetList from '../Components/AssetList_1';
import AssetAddForm from '../Components/Owner/AssetAddForm';
// import FilterAssets from '../Components/FilterAssets';
import Renter from '../Components/Renter/RenterPage';
import OwnerAssetsList from '../Components/Owner/OwnerAssetsList';

const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={App}/>
            <Route exact path="/SignIn" component={SignIn}/>
            <Route exact path="/RenterSearch" component={RenterSearch}/>
            {/* <Route exact path="/AssetPage" component={AssetPage}/>  */}
            <Route path="/signup" component={Signup} />
            <Route path="/OwnerPage" component={OwnerPage} />
            <Route path="/OwnerPage1" component={OwnerPage1} />
            {/* <Route path="/AssetCard" component={AssetCard} /> */}
            <Route exact path="/AssetAddForm" component={AssetAddForm}/>
            <Route exact path="/OwnerAssetsList" component={OwnerAssetsList}/>
            {/* <Route exact path ="/FilterAssets" component={FilterAssets} /> */}
            <Route exact path ="/Renter" component={Renter} />
        </>
    )
}

export default ReactRouter
// import react from 'react';
import {Route} from 'react-router-dom';
import RenterSearch from "../Components/RenterSearch";
// import Login from '../Components/Register/Login';
// import Signup from '../Components/Register/SignUp';
import OwnerPage from '../Components/OwnerPage';
import App from '../Components/App';
import AssetPage from '../Components/AssetPage'
// import AssetCard from '../Components/AssetCard'
// import AssetList from '../Components/AssetList_1';
import AssetAddForm from '../Components/AssetAddForm';
// import FilterAssets from '../Components/FilterAssets';


const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={App}/>
            {/* <Route exact path="/Login" component={Login}/> */}
            <Route exact path="/RenterSearch" component={RenterSearch}/>
            <Route exact path="/AssetPage" component={AssetPage}/> 
            {/* <Route path="/signup" component={Signup} /> */}
            <Route path="/OwnerPage" component={OwnerPage} />
            {/* <Route path="/AssetCard" component={AssetCard} /> */}
            <Route exact path="/AssetAddForm" component={AssetAddForm}/>
            {/* <Route exact path ="/FilterAssets" component={FilterAssets} /> */}

        </>
    )
}

export default ReactRouter
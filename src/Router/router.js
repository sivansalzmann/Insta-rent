// import react from 'react';
import {Route} from 'react-router-dom';
import RenterSearchFilter from "../Components/RenterSearchFilter";
// import Login from '../Components/Login';
// import Signup from '../Components/SignUp';
// import OwnerPage from '../Components/OwnerPage';
import App from '../Components/App';
// import AssetPage from '../Components/AssetPage'
// import AssetCard from '../Components/AssetCard'
// import AssetList from '../Components/AssetList_1';

const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={App}/>
            {/* <Route exact path="/Login" component={Login}/> */}
            <Route exact path="/RenterSearchFilter" component={RenterSearchFilter}/>
            {/* <Route exact path="/AssetPage" component={AssetPage}/>  */}
            {/* <Route path="/signup" component={Signup} />
            <Route path="/OwnerPage" component={OwnerPage} />
            <Route path="/AssetCard" component={AssetCard} /> */}
        </>
    )
}

export default ReactRouter
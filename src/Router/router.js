import React from 'react';
import {Route} from 'react-router-dom';
import RenterMainPage from "../Components/RenterMainPage";
// import Login from '../Components/Register/Login';
// import Signup from '../Components/Register/SignUp';
import OwnerPage from '../Components/OwnerPage';
import HomePage from '../Components/HomePageRenter';
import AssetPage from '../Components/AssetPage'
const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={HomePage}/>
            {/* <Route exact path="/Login" component={Login}/> */}
            <Route exact path="/RenterMainPage" component={RenterMainPage}/>
            <Route exact path="/AssetPage" component={AssetPage}/>
            {/* <Route path="/signup" component={Signup} /> */}
            <Route path="/OwnerPage" component={OwnerPage} />
        </>
    )
}

export default ReactRouter
import React from 'react';
import {Route} from 'react-router-dom';
import RenterMainPage from "../Components/RenterMainPage";
import Login from '../Components/Login';
import Signup from '../Components/SignUp';

const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={Login}/>
            <Route exact path="/RenterMainPage" component={RenterMainPage}/>
            <Route path="/signup" component={Signup} />
        </>
    )
}

export default ReactRouter
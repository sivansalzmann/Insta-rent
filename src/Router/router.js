import {Route} from 'react-router-dom';
import RenterSearch from "../Components/AssetSearch/RenterSearch";
import SignIn from '../Components/Register/SignIn';
import SignInDeatils from '../Components/Register/SignInDeatils';
import OwnerPage from '../Components/Owner/OwnerPage';
import App from '../Components/HomePage/App';
import Renter from '../Components/Renter/RenterPage';
import PrivatePage from '../Components/All/PrivatePage';
import UserRouter from "./userRouter";

const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={SignIn}/>
            <UserRouter exact path="/HomePage" component={App}/>
            <UserRouter exact path="/RenterSearch" component={RenterSearch}/>
            <UserRouter path="/SignInDeatils" component={SignInDeatils} />
            <UserRouter path="/OwnerPage" component={OwnerPage} />
            <UserRouter exact path ="/Renter" component={Renter} />
            <UserRouter exact path = "PrivatePage" component={PrivatePage} />
        </>
    )
}

export default ReactRouter
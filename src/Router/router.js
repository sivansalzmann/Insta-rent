import {Route} from 'react-router-dom';
import RenterSearch from "../Components/AssetSearch/RenterSearch";
import SignIn from '../Components/Register/SignIn';
import Signup from '../Components/Register/SignUp';
import OwnerPage from '../Components/Owner/OwnerPage';
import App from '../Components/HomePage/App';
import Renter from '../Components/Renter/RenterPage';
import PrivatePage from '../Components/All/PrivatePage';

const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={App}/>
            <Route exact path="/SignIn" component={SignIn}/>
            <Route exact path="/RenterSearch" component={RenterSearch}/>
            <Route path="/Signup" component={Signup} />
            <Route path="/OwnerPage" component={OwnerPage} />
            <Route exact path ="/Renter" component={Renter} />
            <Route exact path = "PrivatePage" component={PrivatePage} />
        </>
    )
}

export default ReactRouter
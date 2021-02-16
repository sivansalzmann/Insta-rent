import {Route} from 'react-router-dom';
import RenterSearch from "../Components/AssetSearch/RenterSearch";
import SignIn from '../Components/Register/SignIn';
import SignInDeatils from '../Components/Register/SignInDeatils';
import OwnerPage from '../Components/Owner/OwnerPage';
import App from '../Components/HomePage/App';
import Renter from '../Components/Renter/RenterPage';
import PrivatePage from '../Components/All/PrivatePage';

const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/HomePage" component={App}/>
            <Route exact path="/RenterSearch" component={RenterSearch}/>
            <Route path="/SignInDeatils" component={SignInDeatils} />
            <Route path="/OwnerPage" component={OwnerPage} />
            <Route exact path ="/Renter" component={Renter} />
            <Route exact path = "PrivatePage" component={PrivatePage} />
        </>
    )
}

export default ReactRouter
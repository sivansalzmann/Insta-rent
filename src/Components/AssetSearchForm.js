import { useState } from 'react';
import AssetList from './AssetsList';
import {Link} from 'react-router-dom';

export default function AssetSearchForm(props) {
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [assetsList,setAssetList] = useState([]);


    const onSubmit = () => {
        fetch(`https://instarent-1st.herokuapp.com/api/assets?City=${city}&Country=${country}&Avilability=${date}`)
            .then(response => response.json())
            .then(result => setAssetList(result))

    }

    return (
            <div className={ 'assetSearchForm' }>
                <form noValidate autoComplete="off">
                    <input type="text" style={{borderRadius: "20px 0px 0px 20px",borderLeft: "1px red"}} name="date" onChange={ (event) => setDate(event.target.value) } value={ date } placeholder="Arrival date" />
                    <input type="text" name="country" onChange={ (event) => setCountry(event.target.value) } value={ country } placeholder="Country" /> 
                    <input type="text" name="city" value={ city } onChange={ (event) => setCity(event.target.value) } placeholder="City" /> 
                    <input type="button" value={"search"} style={{borderRadius: "0px 20px 20px 0px"}} onClick={onSubmit} />
                </form>
                {/* <Link to={{ pathname: "/RenterSearchFilter" }} > */}
                    <AssetList assets={assetsList} />
                {/* </Link> */}
            </div>
        )
}

import { Button } from '@material-ui/core';
import { useState } from 'react';
import AssetList from '../AssetsList';
import FilterAssets from './FilterAssets';
import TextField from '@material-ui/core/TextField';
import './search.css';


export default function AssetSearchForm(props) {
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [assetsList,setAssetList] = useState([]);


    const onSubmit = () => {
        fetch(`https://instarent-1st.herokuapp.com/api/assets?City=${city}&Country=${country}&Availability=${date}`)           
             .then(response => response.json())
            .then(result => {
            setAssetList(result)}
        )
    }

    return (
            <div className={ 'assetSearchForm' }>
                <form noValidate autoComplete="off">
                    <div><TextField className="input" id="standard-basic" label="Country" size="large" onChange={ (event) => setCountry(event.target.value) } value={ country } name="Country"/></div>
                    <div><TextField className="input" id="standard-basic" label="city" size="large" onChange={ (event) => setCity(event.target.value) } value={ city } name="city"/></div>
                    <div><TextField className="input" id="standard-basic" label="date" size="large" onChange={ (event) => setDate(event.target.value) } value={ date } name="date"/></div>
                    <div><Button variant="contained" color="primary" onClick={onSubmit} value="search" >
                        search
                    </Button> </div>
                </form>
                <FilterAssets city={city} country={country} date={date} /> 
                <AssetList assetsList={assetsList}/>
            </div>

        )
}


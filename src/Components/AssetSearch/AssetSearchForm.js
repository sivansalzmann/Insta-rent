import { Button } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AssetList from '../AssetsList';
import RenterSearchFilter from '../RenterSearch';
import ListIcon from '@material-ui/icons/List';
import RoomIcon from '@material-ui/icons/Room';
import FilterAssets from './FilterAssets';
import TextField from '@material-ui/core/TextField';
import './search.css';

export default function AssetSearchForm(props) {
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [squareFeet, setSquareFeet] = useState("");
    const [rooms, setRooms] = useState("");
    const [condition, setCondition] = useState("");
    const [parking, setParking] = useState("");
    const [elevator, setElevator] = useState("");
    const [pets, setPets] = useState("");
    const [price, setPrice] = useState("");
    const [assetsList,setAssetList] = useState([]);


    const onSubmit = () => {
        fetch(`https://instarent-1st.herokuapp.com/api/assets?City=${city}&Country=${country}&Availability=${date}SquareFeet=${squareFeet}&Condition=${condition},&Price=${price}&Parking=${parking}&Elevator=${elevator}&PetsAllowed=${pets}&Rooms=${rooms}`)            .then(response => response.json())
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

{/* <div className="navBarAssets">
                <ul style={{marginLeft: "100px"}}>
                    <li><ListIcon fontSize="large"/></li>
                    <li style={{marginLeft: "10px"}}>List</li>
                    <li style={{marginLeft:"50px"}}><RoomIcon fontSize="large" /></li>
                    <li>Map</li>
                </ul>
                <ul style={{marginLeft: "200px"}}>
                    <li><FilterAssets /> </li>
                    <li>Filter</li>
                    <li style={{marginLeft: "200px"}}>Sort by</li>
                    <li style={{marginLeft: "20px"}}>
                        <select style={{bordel: "none", height:"30px"}}>
                            <option>Date</option>
                            <option>Price-High to low</option>
                            <option>Price-Low to high</option>
                        </select>
                    </li>
                </ul>
            </div> */}

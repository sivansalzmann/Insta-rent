import { Button } from '@material-ui/core';
import { useState } from 'react';
import AssetList from '../HomePage/AssetsList';
import TextField from '@material-ui/core/TextField';
import PopUp from '../All/PopUp';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AssetSearch.css';


export default function AssetSearchForm(props) {
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const [squareFeet, setSquareFeet] = useState("");
    const [rooms, setRooms] = useState("");
    const [condition, setCondition] = useState("");
    const [parking, setParking] = useState(false);
    const [elevator, setElevator] = useState(false);
    const [pets, setPets] = useState(false);
    const [price, setPrice] = useState("");
    const [assetsList,setAssetList] = useState([]);

    const [openEdit,setOpenEdit] = useState(false);

    const onSubmit = () => {
        fetch(`https://instarent-1st.herokuapp.com/api/assets?Country=${country}&City=${city}&Avilability=${date}&Price=${price}&SquareFeet=${squareFeet}&Condition=${condition}&Parking=${parking}&Elevator=${elevator}&PetsAllowed=${pets}&Rooms=${rooms}`)
             .then(response => response.json())
            .then(result => {
                setAssetList(result)
                setOpenEdit(false)
            }
        )
    }

    return (
            <div className={ 'assetSearchForm' }>
                <form noValidate autoComplete="off">
                    <div><TextField className="input" label="Country" size="large" onChange={ (event) => setCountry(event.target.value) } value={ country } name="Country"/></div>
                    <div><TextField className="input" label="city" size="large" onChange={ (event) => setCity(event.target.value) } value={ city } name="city"/></div>
                    <div><TextField className="input" label="date" size="large" onChange={ (event) => setDate(event.target.value) } value={ date } name="date"/></div>
                    <div><Button variant="contained" color="primary" onClick={onSubmit} value="search" >search</Button> </div>
                </form>
                <Button variant="outlined" color="primary" onClick={() => setOpenEdit(true)} className={"filterBut"}>
                    Advanced search
                </Button>
                <PopUp onSubmit={onSubmit} title={"Filter assets"} open={openEdit} closePopup={() => setOpenEdit(false)}>
                    <TextField autoFocus margin="dense" label="Square feet" type="Name" onChange={e => setSquareFeet(e.target.value)} value={squareFeet} fullWidth/>
                    <FormControlLabel control={<Checkbox onChange={e => setParking(e.target.value)} name="parking" color="primary" value = {parking} />} label="Parking"/>
                    <FormControlLabel control={<Checkbox onChange={e => setElevator(e.target.value)} name="elevator" color="primary" value = {elevator} />} label="Elevator"/>
                    <FormControlLabel control={<Checkbox onChange={e => setPets(e.target.value)} name="pets" color="primary" value = {pets} />} label="Pets"/>
                    <FormControl > 
                    <InputLabel htmlFor="age-native-simple">Rooms</InputLabel>
                    <Select native value={rooms} onChange={e => setRooms(e.target.value)}>
                        <option aria-label="None" value="Rooms" />
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>
                        <option >5</option>
                        <option >6</option>
                        <option >7</option>
                        <option >8</option>
                        <option >9</option>
                        <option >10</option>
                    </Select>
                </FormControl>
                <FormControl > <InputLabel htmlFor="age-native-simple">Condition</InputLabel>
                    <Select native value={condition} onChange={e => setCondition(e.target.value)}>
                        <option aria-label="None" value="Rooms" />
                        <option >Great</option>
                        <option>Good</option>
                        <option>Bad</option>
                    </Select>
                </FormControl>
                <FormControl >
                    <InputLabel htmlFor="age-native-simple">Minimum price in $</InputLabel>
                    <Select native value={price} onChange={e => setPrice(e.target.value)}>
                        <option aria-label="None" value="Price" />
                        <option >1000</option>
                        <option>2000</option>
                        <option>3000</option>
                        <option>4000</option>
                        <option>5000</option>
                        <option>7000</option>
                        <option>8000</option>
                    </Select>
                </FormControl>
            </PopUp>
            <AssetList assetsList={assetsList}/>
        </div>

    )
}


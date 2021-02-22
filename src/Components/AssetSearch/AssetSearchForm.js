import { Button } from '@material-ui/core';
import { useState } from 'react';
import AssetList from '../Asset/AssetsList';
import TextField from '@material-ui/core/TextField';
import PopUp from '../All/PopUp';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AssetSearchForm.css';

export default function AssetSearchForm(props) {
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
    const [openEdit,setOpenEdit] = useState(false);

    const onSubmit = () => {
        fetch(`https://instarent-1st.herokuapp.com/api/assets?Country=${country}&City=${city}&Price=${price}&SquareFeet=${squareFeet}&Condition=${condition}&Parking=${parking}&Elevator=${elevator}&PetsAllowed=${pets}&Rooms=${rooms}`)
            .then(response => response.json())
            .then(result => {
                setAssetList(result)
                setOpenEdit(false)
                setCountry("")
                setCity("")
                setSquareFeet("")
                setRooms("")
                setCondition("")
                setParking("")
                setElevator("")
                setPets("")
                setPrice("")
            }
        )
    }

    return (
        <div className={ 'assetSearchForm' }>
            <form noValidate autoComplete="off">
                <div><TextField className="input" label="Country" size="large" onChange={ (event) => setCountry(event.target.value) } value={ country } /></div>
                <div><TextField className="input" label="city" size="large" onChange={ (event) => setCity(event.target.value) } value={ city } /></div>
                <div><Button variant="contained" color="primary" onClick={onSubmit} value="search" >search</Button> </div>
            </form>
            <Button variant="outlined" color="primary" onClick={() => setOpenEdit(true)} className={"filterBut"} style={{marginBottom:'2%'}}>
                Advanced search
            </Button>
            <PopUp onSubmit={onSubmit} title={"Filter assets"} open={openEdit} closePopup={() => setOpenEdit(false)} sendBtn={true}>
                <TextField autoFocus margin="dense" label="Square feet" type="Name" onChange={e => setSquareFeet(e.target.value)} value={squareFeet} fullWidth/>
                <div className={"checkboxs"}>
                    <FormControlLabel control={<Checkbox onChange={e => setParking(e.target.value)} color="primary" value = {true} />} label="Parking"/>
                    <FormControlLabel control={<Checkbox onChange={e => setElevator(e.target.value)} color="primary" value = {true} />} label="Elevator"/>
                    <FormControlLabel control={<Checkbox onChange={e => setPets(e.target.value)} color="primary" value = {true} />} label="Pets"/>
                </div>
                <div className={"inputs"}>
                    <div className={"selectOption"}>
                        <FormControl> 
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
                    </div>
                    <div className={"selectOption"}>
                    <FormControl > 
                        <InputLabel htmlFor="age-native-simple">Condition</InputLabel>
                            <Select native value={condition} onChange={e => setCondition(e.target.value)}>
                                <option aria-label="None" value="Rooms" />
                                <option >Great</option>
                                <option>Good</option>
                                <option>Bad</option>
                            </Select>
                    </FormControl>
                    </div>
                    <div className={"selectOption"}>
                        <FormControl>
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
                    </div>
                </div>
                </PopUp>
            <AssetList assetsList={assetsList}/>
        </div>
    )
}


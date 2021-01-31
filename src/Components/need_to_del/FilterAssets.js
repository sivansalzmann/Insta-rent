import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AssetList from '../HomePage/AssetsList';
import {ButtonBase, Modal} from "@material-ui/core";
import PopUp from '../All/PopUp';

import "./FilterAssets.css";

const FilterAssets = (props) => {
    const [open, setOpen] = useState(false);
    const [squareFeet, setSquareFeet] = useState("");
    const [rooms, setRooms] = useState("");
    const [condition, setCondition] = useState("");
    const [parking, setParking] = useState("");
    const [elevator, setElevator] = useState("");
    const [pets, setPets] = useState("");
    const [price, setPrice] = useState("");
    const [assetsList,setAssetList] = useState([]);

    const filter = () => {

        fetch(`https://instarent-1st.herokuapp.com/api/assets?Country=${props.country}&City=${props.city}&Avilability=${props.date}&SquareFeet=${squareFeet}&Condition=${condition},&Price=${price}&Parking=${parking}&Elevator=${elevator}&PetsAllowed=${pets}&Rooms=${rooms}`)
            .then(response => response.json())
            .then(result => {
                closePopUp()
                setAssetList(result)
                console.log(props.city)
            })
        };

        const openPopUp = () => {
            setOpen(true);
        };
    
        const closePopUp = () => {
            setOpen(false);
    
        };

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={openPopUp} className={"filterBut"}>
                    Advanced search
                </Button>
                <PopUp ></PopUp>
                {/* <Dialog open={open} onClose={closePopUp} aria-labelledby="form-dialog-title" className={"popup"}>
                    <DialogTitle >Filter assets</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus margin="dense" label="Square feet" type="Name" onChange={e => setSquareFeet(e.target.value)} value={squareFeet} fullWidth/>
                        <FormControlLabel control={<Checkbox onChange={e => setParking(e.target.value)} name="parking" color="primary" value = {parking} />} label="Parking"/>
                        <FormControlLabel control={<Checkbox onChange={e => setElevator(e.target.value)} name="elevator" color="primary" value = {elevator} />} label="Elevator"/>
                        <FormControlLabel control={<Checkbox onChange={e => setPets(e.target.value)} name="pets" color="primary" value = {pets} />} label="Pets"/>
                        <div><FormControl > <InputLabel htmlFor="age-native-simple">Rooms</InputLabel>
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
                        </FormControl></div>
                        <div><FormControl > <InputLabel htmlFor="age-native-simple">Condition</InputLabel>
                            <Select native value={condition} onChange={e => setCondition(e.target.value)}>
                                <option aria-label="None" value="Rooms" />
                                <option >Great</option>
                                <option>Good</option>
                                <option>Bad</option>
                            </Select>
                        </FormControl></div>
                        <div><FormControl ><InputLabel htmlFor="age-native-simple">Minimum price in $</InputLabel>
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
                        </FormControl></div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="Primary" onClick={filter} >
                            FILTER
                        </Button>
                        <Button variant="contained" color="Primary" onClick={closePopUp}>
                            CANCEL
                    </Button>
                    </DialogActions>
                </Dialog> */}
                <AssetList assetsList={assetsList}/>
            </div>
        )
    
    }

export default FilterAssets;
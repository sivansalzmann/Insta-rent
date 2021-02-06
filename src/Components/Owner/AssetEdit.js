import React, {useState} from 'react';
import './AddAsset.css';
import PopUp from '../All/PopUp';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import { Button } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const ownerId = 2;

export default function AddAsset() {

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [street, setStreet] = useState("");
    const [zip, setZip] = useState("");
    const [squareFeet, setSquareFeet] = useState("");
    const [rooms, setRooms] = useState("");
    const [condition, setCondition] = useState("");
    const [parking, setParking] = useState(false);
    const [elevator, setElevator] = useState(false);
    const [petsAllowed, setPetsAllowed] = useState(false);
    const [price, setPrice] = useState("");
    const [avilability, setAvilability] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [newAsset, setNewAsset] = useState("");
    const [add,setOpenAdd] = useState(false);

  const addAsset = (props) => {
    const body = {City: city, Street: street, Zip: zip, Country: country, Neighborhood: neighborhood, Rooms: rooms, SquareFeet: squareFeet,  Parking: parking, Elevator: elevator, PetsAllowed: petsAllowed, Condition: condition, Price: price, Avilability: avilability, Description: description,OwnerId: ownerId,UrlPicture:imageUrl};
    console.log(props.idAsset);
    fetch(`http://localhost:3000/api/renterDeatils/${props.idAsset}` ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
			.then(response => response.json())
			.then(result => {
            setOpenAdd(false);
            setNewAsset(result);
            setCountry("");
            setCity("");
            setNeighborhood("");
            setStreet("");
            setZip("");
            setSquareFeet("");
            setRooms("");
            setCondition("");
            setParking("");
            setElevator("");
            setPetsAllowed("");
            setPrice("");
            setAvilability("");
            setDescription("");
            setImageUrl("");
		})
    }

  return (
    <div className={"addAssetContainer"}>
  <Button variant="contained" color="primary" onClick={() => setOpenAdd(true)}>EDIT</Button>
  <PopUp onSubmit={addAsset} title={"Edit asset"} open={add} closePopup={() => setOpenAdd(false)} sendBtn={true}>
        <div className={"addAssetForm"}>
            <TextField label="Country" onChange={(event) => setCountry(event.target.value)} value={country} fullWidth/>
            <TextField label="City" onChange={(event) => setCity(event.target.value)} value={city} fullWidth/>
            <TextField label="Neighborhood" onChange={(event) => setNeighborhood(event.target.value)} value={neighborhood} fullWidth/>
            <TextField label="Street" onChange={(event) => setStreet(event.target.value)} value={street} fullWidth/>
            <div className={"rowOptions"}>
                <TextField label="Zip" className={"inputRow"} onChange={(event) => setZip(event.target.value)} value={zip} />
                <TextField label="Floors" className={"inputRow"} onChange={(event) => setSquareFeet(event.target.value)} value={squareFeet} />
                <TextField label="Rooms" className={"inputRow"} onChange={(event) => setRooms(event.target.value)} value={rooms} />
            </div>
            <div className={"rowOptions"}>
                <TextField label="Avilability" className={"inputRow"} onChange={(event) => setAvilability(event.target.value)} value={avilability} />
                <TextField label="Price" className={"inputRow"}  onChange={(event) => setPrice(event.target.value)} value={price} />
            </div>
            <FormControl fullWidth > 
                        <InputLabel htmlFor="age-native-simple">Condition</InputLabel>
                            <Select native value={condition} onChange={e => setCondition(e.target.value)}>
                                <option aria-label="None" value="Rooms" />
                                <option >Great</option>
                                <option>Good</option>
                                <option>Bad</option>
                            </Select>
                    </FormControl>
            <div className={"rowOptions"}>
                <FormControlLabel control={<Checkbox onChange={e => setParking(e.target.value)} color="primary" value = {true} />} label="Parking"/>
                <FormControlLabel control={<Checkbox onChange={e => setElevator(e.target.value)} color="primary" value = {true} />} label="Elevator"/>
                <FormControlLabel control={<Checkbox onChange={e => setPetsAllowed(e.target.value)} color="primary" value = {true} />} label="Pets"/>
            </div>
            <TextField id="outlined-multiline-static" label="description"  multiline rows={4} onChange={(event) => setDescription(event.target.value)} value={description} variant="outlined" fullWidth/>
            <TextField label="Image Url" onChange={(event) => setImageUrl(event.target.value)} value={imageUrl} name="imageUrl" fullWidth/>
        </div>
   </PopUp>
   </div>
  );
}
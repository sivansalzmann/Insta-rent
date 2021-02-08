import React, {useState} from 'react';
import './AddAsset.css';
import PopUp from '../All/PopUp';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import { Button } from '@material-ui/core';
import moment from 'moment';

const ownerId = 2; // change to login

export default function AddAsset(props) {
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

    const assetValidation = () => {
      let errors = [];
      if (!moment(avilability, "DD.MM.YYYY").isValid())
        errors.push("Invalid date, please insert a valid date in format of: DD.MM.YYYY.\n")
      else if (moment().isAfter(moment(avilability, 'DD.MM.YYYY'))) 
        errors.push("Invalid date, please insert a valid date later then today. \n")
      if (country === "")
        errors.push("Country is requierd, please make sure the field is full. \n")
      if (city === "")
        errors.push("City is requierd, please make sure the field is full. \n")
      if(price === "" )
        errors.push("Price is requierd, please make sure the field is full. \n")
      if(isNaN(price))
        errors.push("Price must to be numbers. \n")
      if (errors.length > 0)
          alert(errors)
      else
          return true
    }

  const addAsset = (props) => {
    console.log(props.idOwner)

    if(assetValidation()) {
      const body = {City: city, Street: street, Zip: zip, Country: country, Neighborhood: neighborhood, Rooms: rooms, SquareFeet: squareFeet,  Parking: parking, Elevator: elevator, PetsAllowed: petsAllowed, Condition: condition, Price: price, Avilability: avilability, Description: description,OwnerId: ownerId,UrlPicture:imageUrl,RenterId:0};
      console.log(body);
      fetch(`http://localhost:3000/api/assets`, {
        method: 'POST',
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
          setParking(false);
          setElevator(false);
          setPetsAllowed(false);
          setPrice("");
          setAvilability("");
          setDescription("");
          setImageUrl("");
        })
      }
    }


  return (
    <div >
      <Button variant="contained" color="primary" className={"addButAsset"} onClick={() => setOpenAdd(true)}>Add new asset</Button>
      <PopUp onSubmit={addAsset} title={"Add asset"} open={add} closePopup={() => setOpenAdd(false)} sendBtn={true}>
        <div className={"addAssetForm"}>
          <TextField label="Country" onChange={(event) => setCountry(event.target.value)} value={country} fullWidth required/>
          <TextField label="City" onChange={(event) => setCity(event.target.value)} value={city} fullWidth required/>
          <TextField label="Neighborhood" onChange={(event) => setNeighborhood(event.target.value)} value={neighborhood} fullWidth/>
          <TextField label="Street" onChange={(event) => setStreet(event.target.value)} value={street} fullWidth/>
          <div className={"rowOptions"}>
            <TextField label="Zip" className={"inputRow"} onChange={(event) => setZip(event.target.value)} value={zip} />
            <TextField label="Floors" className={"inputRow"} onChange={(event) => setSquareFeet(event.target.value)} value={squareFeet} />
            <TextField label="Rooms" className={"inputRow"} onChange={(event) => setRooms(event.target.value)} value={rooms} />
          </div>
          <div className={"rowOptions"}>
            <TextField label="Avilability" className={"inputRow"} onChange={(event) => setAvilability(event.target.value)} value={avilability} required/>
            <TextField label="Price" className={"inputRow"}  onChange={(event) => setPrice(event.target.value)} value={price} required/>
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
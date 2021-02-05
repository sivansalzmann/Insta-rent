import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AssetAddForm = (props) => {
    
    
    
    // const addNewAsset = () => {
    //     const body = {
    //         	OwnerId: OwnerId,
    //         asset: asset
    //     }
    //     fetch(`https://instarent-1st.herokuapp.com/api/assets`),
    //         {headers: {'Content-Type': 'application/json'}, method: 'POST', body: JSON.stringify(body)})
    //         .then(response => response.json())
    //         .then(result => {
    //             setAsset(result)
    //             setInputMessage('')
    //         })
    // }
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [street, setStreet] = useState("");
    const [zip, setZip] = useState("");
    const [squareFeet, setSquareFeet] = useState("");
    const [rooms, setRooms] = useState("");
    const [condition, setCondition] = useState("");
    const [parking, setParking] = useState("");
    const [elevator, setElevator] = useState("");
    const [petsAllowed, setPetsAllowed] = useState("");
    const [price, setPrice] = useState("");
    const [avilability, setAvilability] = useState("");
    const [description, setDescription] = useState("");

//     // useEffect(() => {
//     //     if (props.initialData) {
//     //         setCountry(props.initialData.country);
//     //         setCity(props.initialData.city);
//     //         setNeighborhood(props.initialData.neighborhood);
//     //         setStreet(props.initialData.street);
//     //         setZip(props.initialData.zip);
//     //         setSquareFeet(props.initialData.squareFeet);
//     //         setRooms(props.initialData.rooms);
//     //         setCondition(props.initialData.condition);
//     //         setParking(props.initialData.condition);
//     //         setElevator(props.initialData.elevator);
//     //         setPetsAllowed(props.initialData.petsAllowed);
//     //         setPrice(props.initialData.price);
//     //         setAvilability(props.initialData.avilability);
//     //         setDescription(props.initialData.description);

//     //     }
//     // }, [props.initialData]);

    const formDataIsValid = () => {

        let errors = [];
        if (country === "" || city === "" || neighborhood === "" || street === "" || zip === "" || rooms === "" || squareFeet === "" || price === "" || description === "")
            errors.push("All fields are requierd, please make sure all fields are filled.")

        if (errors.length > 0)
            alert(errors)
        else
            return true


    }

    const onSubmit = () => {

        if (formDataIsValid()) {
            props.location.submit({ country, city, neighborhood, street, zip, squareFeet, rooms, condition, parking, elevator, petsAllowed, price, avilability, description });
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
        }
        fetch(`https://instarent-1st.herokuapp.com/api/assets`, {
            method: 'POST',
            body: JSON.stringify({
            City: city,
            Street: street,
            Zip: zip,
            Country: country,
            Neighborhood: neighborhood,
            Rooms: rooms,
            SquareFeet: squareFeet,
            Floors: floors,
            Parking: parking,
            Elevator: elevator,
            PetsAllowed: petsAllowed,
            Condition: condition,
            Price: price,
            Avilability: avilability,
            Description: description,
            OwnerId: {ownerId},
            }),
			headers: {'Content-Type': 'application/json'},
	})
			.then(response => response.json())
			.then(result => {

			})
    }

    return (
        <div className={'assetForm'}>
            <h1>Add new asset</h1>
            <form noValidate autoComplete="off">
                <div className="formLeft">
                    <div className="country wide">
                        <label>Country</label>
                        <input type="text" name="country" onChange={(event) => setCountry(event.target.value)} value={country} placeholder="Country" />
                    </div>
                    <div className="city wide">
                        <label>City</label>
                        <input type="text" name="city" onChange={(event) => setCity(event.target.value)} value={city} placeholder="City" />
                    </div>
                    <div className="neighborhood wide">
                        <label>Neighborhood</label>
                        <input type="text" name="neighborhood" onChange={(event) => setNeighborhood(event.target.value)} value={neighborhood} placeholder="Neighborhood" />
                    </div>
                    <div className="street wide">
                        <label>Street</label>
                        <input type="text" name="street" onChange={(event) => setStreet(event.target.value)} value={street} placeholder="Street" />
                    </div>
                    <div className="zsr wide">
                        <div className="zip">
                            <label>Zip</label>
                            <input type="number" name="zip" onChange={(event) => setZip(event.target.value)} value={zip} placeholder="Zip" />
                        </div>
                        <div className="squareFeet">
                            <label>Square Feet</label>
                            <input type="number" name="squareFeet" onChange={(event) => setSquareFeet(event.target.value)} value={squareFeet} placeholder="SquareFeet" />
                        </div>
                        <div className="rooms">
                            <label>Rooms</label>
                            <input type="select" name="rooms" onChange={(event) => setRooms(event.target.value)} value={rooms} placeholder="Number of rooms" />
                        </div>
                    </div>
                </div>
                <div className="formRight">
                    <div className="condition">
                        <label>Condition</label>
                        <select type="select" name="condition" onChange={(event) => setCondition(event.target.value)} value={condition} placeholder="Condition" >
                            <option value="Great">Great</option>
                            <option value="Good">Good</option>
                            <option value="Bad">Bad</option>
                        </select>
                    </div>
                    <div className="extras">
                        <label>Extras</label>
                        <div className="parking">
                            <input type="checkbox" name="parking" onChange={(event) => setParking(event.target.value)} value={true} />
                            <label className="check">Parking</label>
                        </div>
                        <div className="elevator">
                            <input type="checkbox" name="elevator" onChange={(event) => setElevator(event.target.value)} value={true} />
                            <label className="check">Elevator</label>
                        </div>
                        <div className="petsAllowed">
                            <input type="checkbox" name="petsAllowed" onChange={(event) => setPetsAllowed(event.target.value)} value={true} />
                            <label className="check" >Pets Allowed</label>
                        </div>
                    </div>
                    <div className="price">
                        <label>Price</label>
                        <input type="number" name="price" onChange={(event) => setPrice(event.target.value)} value={price} placeholder="price" />
                    </div>
                    <div className="avilability">
                        <label>Avilability</label>
                        <input type="date" name="avilability" onChange={(event) => setAvilability(event.target.value)} value={avilability} />
                    </div>
                    <div className="description">
                        <label>Description</label>
                        <input type="textarea" name="description" onChange={(event) => setDescription(event.target.value)} value={description} rows="4" cols="50" placeholder="Enter Description here" />
                    </div>
                </div>
                <Link to={{ pathname: "/OwnerPage" }}>
                    <Button variant="contained" className={'button'} onClick={onSubmit}>
                        Add
                </Button>
                </Link>

            </form>
        </div>
    )

}
export default AssetAddForm;
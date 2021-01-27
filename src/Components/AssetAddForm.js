import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button } from '@material-ui/core';

export default function AssetAddForm(props) {

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [rooms, setRooms] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (props.initialData) {
            setCountry(props.initialData.country);
            setCity(props.initialData.city);
            setRooms(props.initialData.rooms);
            setDate(props.initialData.date);
        }
    }, [props.initialData]);

    const formDataIsValid = () => {

        let errors = [];
        if (!moment(date, "DD.MM.YYYY").isValid())
            errors.push("Invalid date, please insert a valid date in format of: DD.MM.YYYY.\n")
        else if (moment().isAfter(moment(date, 'DD.MM.YYYY'))) {
            errors.push("Invalid date, please insert a valid date later then today.")
        }
        if (country === "" || city === "" || rooms === "" )
            errors.push("All fields are requierd, please make sure all fields are filled.")

        if (errors.length > 0)
            alert(errors)
        else
            return true


    }

    const onSubmit = () => {

        if (formDataIsValid()) {
            props.submit({ country, city, rooms,date });
            setCountry("");
            setCity("");
            setRooms("");
            setDate("");
        }
    }
    
    return (
        <div className={ 'assetForm' }>
            <h1>Apartments for Rent</h1>
            <h3>Search apartments by neighborhood, price, amenity, and more</h3>
            <form noValidate autoComplete="off">
                <input type="date" className={ 'input' } name="date" onChange={ (event) => setDate(event.target.value) } value={ date } placeholder="Date: DD.MM.YYYY" />
                <input type="text" className={ 'input' } name="country" onChange={ (event) => setCountry(event.target.value) } value={ country } placeholder="Country" />
                <input type="text" className={ 'input' } name="city" onChange={ (event) => setCity(event.target.value) } value={ city } placeholder="City" />
                <input type="select" className={ 'input' } name="rooms" onChange={ (event) => setRooms(event.target.value) } value={ rooms } placeholder="Number of rooms" />
                <Button variant="contained" className={ 'button' } onClick={ onSubmit }>
                    search
                </Button>
            </form>
        </div>
    )

}
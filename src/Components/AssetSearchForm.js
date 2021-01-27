import React, { useState, useEffect } from 'react';
import moment from 'moment';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import { Checkbox } from '@material-ui/core';

export default function AssetSearchForm(props) {

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (props.initialData) {
            setCountry(props.initialData.country);
            setCity(props.initialData.city);
            setDate(props.initialData.date);
        }
    }, [props.initialData]);

    const formDataIsValid = () => {

        let errors = [];
        if (!moment(date, "DD.MM.YYYY").isValid())
            errors.push("Invalid date, please insert a valid date in format of: DD.MM.YYYY.\n")
        if (country == "" || city == "" )
            errors.push("All fields are requierd, please make sure all fields are filled.")

        if (errors.length > 0)
            alert(errors)
        else
            return true


    }

    const onSubmit = () => {

        if (formDataIsValid()) {
            props.submit({ country, city, date });
            setCountry("");
            setCity("");
            setDate("");
        }
    }
    
    return (
        <div className={ 'assetSearchForm' }>
            <form noValidate autoComplete="off">
                <input type="text" style={{borderRadius: "20px 0px 0px 20px",borderLeft: "1px red"}} name="date" onChange={ (event) => setDate(event.target.value) } value={ date } placeholder="Arrival date" />
                <input type="text" name="country" onChange={ (event) => setCity(event.target.value) } value={ country } placeholder="Country" /> 
                <input type="text" name="city" onChange={ (event) => setCity(event.target.value) } value={ city } placeholder="City" /> 
                <input type="submit" value={"search"} style={{borderRadius: "0px 20px 20px 0px"}} onClick={ onSubmit }/>
            </form>
        </div>
    )

}
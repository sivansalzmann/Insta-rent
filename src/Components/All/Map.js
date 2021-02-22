import React, { useEffect,useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: 'auto',
    height: '400px'
};
const SimpleMap = (props) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDMG4PK6UUbGd1LT6je4pa34KwqhXOpkvs"
    })

    const [center, setCenter] = useState("")
    const [address, setAddress] = useState("")

    const toPlus = () => {
        let res = address.replace(/\s+/g, "+");
        setAddress(res)
    }

    // console.log(address)
    useEffect(() => {
        toPlus()
        fetch(`http://maps.googleapis.com/maps/api/geocode/json?address=${props.address}&key=AIzaSyDMG4PK6UUbGd1LT6je4pa34KwqhXOpkvs`)
            .then(response => response.json())
            .then(result => {
                setCenter(result.results[0].geometry.location)
            })
    })
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
        >
        </GoogleMap>
    ) : <></>
}

export default SimpleMap;

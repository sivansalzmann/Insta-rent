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



    useEffect(() => {
        toPlus()
        console.log(props.address)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${props.address}&key=AIzaSyA3M9jeCdMvyitFKwBaFGhdWMTdcIOuNPc`)
            .then(response => response.json())
            .then(result => {
                setCenter(result.results[0].geometry.location)
            })
    })

    const toPlus = () => {
        let res = address.replace(/\s+/g, "+");
        setAddress(res)
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
        >
            { /* Child components, such as markers, info windows, etc. */}

        </GoogleMap>
    ) : <></>
}

export default SimpleMap;

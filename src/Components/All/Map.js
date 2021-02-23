import React, { useEffect,useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: 'auto',
    height: '400px'
};
const SimpleMap = (props) => {
    

    const [center, setCenter] = useState("")
    const [load, setLoad] = useState(false)
    const [address, setAddress] = useState("")

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDMG4PK6UUbGd1LT6je4pa34KwqhXOpkvs"
    })
    useEffect(() => {
      
        if (isLoaded)
            setLoad(true)
    },[center])

    useEffect(() => {
        // toPlus()
        let tmp = `${props.asset.Street} ${props.asset.City}`
        let res = tmp.replace(/\s+/g, "+");
        console.log(res)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${res}&key=AIzaSyDMG4PK6UUbGd1LT6je4pa34KwqhXOpkvs`)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                console.log(result.results[0].geometry.location)
                setCenter(result.results[0].geometry.location)
            })
    },[])

    // const toPlus = () => {
       
    //     setAddress(res)
    // }

    return load ? (
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
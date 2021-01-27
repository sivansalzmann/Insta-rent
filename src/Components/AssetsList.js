import React, { useState, useEffect } from 'react';
import Asset from './Asset';
import AssetsData from '../Data/AssetsData.json';


export default function AssetList() {

    const [assets,setAssets] = useState([]);

    useEffect(() => {
        const loadAssets = AssetsData.map(asset => ({ 
            id: asset.id, 
            city: asset.City,
            street: asset.Street, 
            neighborhood:asset.Neighborhood,
            zip: asset.Zip,
            country: asset.Country,
            rooms: asset.Rooms,
            squareFeet: asset.SquareFeet,
            floors: asset.Floors,
            parking: asset.Parking,
            elevator: asset.Elevator,
            petsAllowed: asset.PetsAllowed,
            condition: asset.Condition,
            price: asset.Price,
            avilability: asset.Avilability,
            description: asset.Description,
            want: asset.Want,
            ownerId: asset.OwnerId,
            renterId: asset.RenterId
         }));
        return setAssets(loadAssets);
    }, []);

    const update = (newAsset, i) => {
        setAssets(prevState => prevState.map(data => data.id !== i ? data : { ...data, asset: newAsset }));
    };

    const deleteAsset = (id) => {
        console.log(id);
        setAssets(prevState => prevState.filter(asset => asset.id !== id));
    };

    const nextID = (assets = []) => {
        let max = assets.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
        return ++max;
    }

    const eachItem = (asset,i) => {
        return (
            <Asset
                key={i} 
                index={asset.id}
                id = {asset.id}
                city = {asset.city}
                street = {asset.street}
                neighborhood = {asset.neighborhood}
                zip = {asset.zip}
                country = {asset.country}
                rooms = {asset.rooms}
                squareFeet = {asset.squareFeet}
                floors = {asset.floors}
                parking = {asset.parking}
                elevator = {asset.elevator}
                petsAllowed = {asset.petsAllowed}
                condition = {asset.condition}
                price = {asset.price}
                avilability = {asset.avilability}
                description = {asset.description}
                want = {asset.want}
                ownerId = {asset.ownerId}
                renterId = {asset.renterId}
                onChange={update} onDelete={deleteAsset}
            /> 
        )
    }
    return (
        <div className={'assetList'}>
            { assets.map(eachItem) }             
        </div>
    )

}
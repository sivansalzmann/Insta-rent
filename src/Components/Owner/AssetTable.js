import React from 'react';
import AssetTab from './AssetTab';

export default function AssetTable(props) {


    const eachItem = (item) => {
        return (
            <AssetTab key={item.id} id={item.id} item={item}> 
                {props.children}
            </AssetTab>
        )
    }
    return (
        <>
            { props.assetsList.map(eachItem) }
        </>
    )
}
import React from 'react';
import AssetTab from './AssetTab';
import './AssetTable.css';

export default function AssetTable(props) {
    const eachItem = (item) => {
        return (
            <AssetTab key={item.id} id={item.id} item={item} idOwner={props.idOwner}> 
                {props.children}
            </AssetTab>
        )
    }
    return (
        <div className={"assetTable"}>
            { props.assetsList.map(eachItem) }
        </div>
    )
}
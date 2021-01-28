import { useState, useEffect } from 'react';
import AssetCard from './AssetCard';
import Grid from '@material-ui/core/Grid';

export default function AssetList(props) {

    const [assetsList, setAssetList] = useState([]);

    useEffect(() => {
        // const assets = props.eachItem()
        // if (assets === "undefined") {
            fetch(`http://localhost:3000/api/assets`)
                .then(response => response.json())
                .then(result => setAssetList(result))
        // }
        // else {
        //     setAssetList(assets)
        // }
    }, [])

    const eachItem = (item) => {
        return (
            <AssetCard key={item.id} id={item.id} item={item} pathName={props.pathName}> 
                {props.children}
            </AssetCard>
        )
    }

    // console.log( assetsList )

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            { assetsList.map(eachItem) }
        </Grid>
    )


}
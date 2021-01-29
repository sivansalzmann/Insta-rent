import { useState, useEffect } from 'react';
import AssetCard from './AssetCard';
import Grid from '@material-ui/core/Grid';

export default function AssetList(props) {

    const [assetsList, setAssetList] = useState([]);

    useEffect(() => {
        // const assets = props.eachItem()
        // if (assets === "undefined") {
            fetch(`https://instarent-1st.herokuapp.com/api/assets`)
                .then(response => response.json())
                .then(result => setAssetList(result))
        // }
        // else {
        //     setAssetList(assets)
        // }
    }, [])

    const eachItem = (item) => {
        return (
            <AssetCard key={item.id} id={item.id} item={item}> 
                {props.children}
            </AssetCard>
        )
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            {/* { props.assets.map(eachItem) } */}
            { assetsList.map(eachItem) }
        </Grid>
    )


}
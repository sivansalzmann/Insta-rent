import react, { useEffect, useState }  from 'react';
import Asset from './Asset';
import Grid from '@material-ui/core/Grid';


const AssetList = (props) => {
    const [assetList, setAssetList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/assets`)
            .then(response => response.json())
            .then(result => setAssetList(result))
    }, [])

    console.log(setAssetList)

    const eachAsset = (item) => {
        return  (<Asset key={item.id} Description={item.Description} id={item.id}/>) 
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            { assetList.map(eachAsset) } 
        </Grid>
    )
}

export default AssetList;
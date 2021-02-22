import AssetCard from './AssetCard';
import Grid from '@material-ui/core/Grid';

export default function AssetList(props) {

    const assetWanted = (item) => {
        if(item.RenterId === -1) {
            return (
            <AssetCard id={item.id} item={item} renterId={props.renterId}> 
                {props.children}
            </AssetCard>
            )
        }
    }
    const eachItem = (item) => {
        return (
            <>
                {assetWanted(item)}
            </>
        )
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom:"2%"}}>
            { props.assetsList.map(eachItem) }
        </Grid>
    )
}
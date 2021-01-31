import AssetCard from './AssetCard';
import Grid from '@material-ui/core/Grid';

export default function AssetList(props) {

    const eachItem = (item) => {
        return (
            <AssetCard key={item.id} id={item.id} item={item}> 
                {props.children}
            </AssetCard>
        )
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom:"2%"}}>
            { props.assetsList.map(eachItem) }
        </Grid>
    )


}
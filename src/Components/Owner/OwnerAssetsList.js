import OwnerAssetCard from './OwnerAssetCard';
import Grid from '@material-ui/core/Grid';

export default function OwnerAssetList(props) {
   
    const eachItem = (item) => {
        return (
            <OwnerAssetCard key={item.id} id={item.id} item={item} onClickEdit={props.onClickEdit} onClickDelete={props.onClickDelete} > 
                {props.children}
            </OwnerAssetCard>
        )
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            { props.ownerAssetsList.map(eachItem) }
        </Grid>
    )


}
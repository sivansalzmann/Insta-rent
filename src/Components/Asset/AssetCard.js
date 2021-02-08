import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AssetPage from '../Asset/AssetPage';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        margin: '2%',
    },
    
});

export default function AssetCard (props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia component="img" height="140" image={props.item.UrlPicture} title="Referrals"/>
            <CardContent>
                <Typography component="h5" style={{fontFamily: 'Lato',overflow: 'hidden',webkitLineClamp: '2',textOverflow: 'ellipsis'}}>
                    {props.item.Description}
                </Typography>
                <Typography color="textSecondary" component="subtitle2" style={{fontFamily: 'Lato',fontWeight: 'bold'}}>
                    {props.item.Country}
                </Typography>
                <Typography variant="h6" component="h6" style={{fontFamily: 'Lato',fontWeight: 'bold'}}>
                    {props.item.Price} / per month
                </Typography>
                <Typography variant="h5" component="h5" style={{fontFamily: 'Lato',fontWeight: 'bold'}}>
                Avilable from {props.item.Avilability} 
                </Typography>
            </CardContent>
            <AssetPage item={props.item} renterId={props.renterId}/>
        </Card> 
    );
}


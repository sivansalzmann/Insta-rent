import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import OwnerPage from './OwnerPage';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        margin: '2%',
    },

});


export default function OwnerAssetCard(props) {

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia component="img" height="140" image="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F960x0.jpg%3Ffit%3Dscale" title="Referrals" />
            <CardContent>
                <Typography component="h5" style={{ fontFamily: 'Lato' }}>
                    {props.item.Description}
                </Typography>
                <Typography color="textSecondary" component="subtitle2" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>
                    {props.item.Country}
                </Typography>
                <Typography variant="h6" component="h6" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>
                    {props.item.Price} / per month
                </Typography>
                <Typography variant="h5" component="h5" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>
                    Avilable from {props.item.Avilability}
                </Typography>
                <EditOutlinedIcon />
                <DeleteOutlineIcon />
            </CardContent>
        </Card>


    );
}


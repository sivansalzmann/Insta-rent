import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        margin: '2%',
    },
    
});


export default function AssetCard (props) {

    const classes = useStyles();

    const { onDelete, index } = props;

    const [editing, setEditing] = useState(false);

    const edit = () => setEditing(true);

    const deleteAsset = () => onDelete(index);

    // const showAsset = () => onShow(index);
    
    const isOwner = (ownerState) => {
        return (<CardActions><Button size="small" color="primary" onClick={edit}>EDIT</Button><Button size="small" color="primary" onClick={deleteAsset}>DELETE</Button></CardActions>);
    }

    const isRenter = (renterState) => {
        return (<CardActions><FavoriteBorderIcon fontSize="large" style={{margin:"5%"}} /></CardActions>)
    }


    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Link to={{pathname: props.pathName, data: props.item}}>
                <CardMedia component="img" height="140" image="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F960x0.jpg%3Ffit%3Dscale" title="Referrals"/>
                { isRenter() }
                <CardContent>
                    <Typography component="h5" style={{fontFamily: 'Lato'}}>
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
                </Link>
            </CardActionArea>
                {isOwner()}
        </Card> 
    );
}


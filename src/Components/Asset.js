import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        flexWrap: 'wrap',
        margin: '5%',
    },
    
});


export default function Asset (props) {
    const classes = useStyles();

    const { onDelete, index, children, onChange } = props;

    const [editing, setEditing] = useState(false);

    const edit = () => setEditing(true);

    const deleteAsset = () => onDelete(index);


    return (
        <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">  
                    {props.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.city}
                    {props.country}
                    {props.zip}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Fab size="small" color="primary" onClick={edit}>
                    {/* <ThumbUpIcon></ThumbUpIcon> */}
                    <EditIcon></EditIcon>
                </Fab>
                <Fab size="small" color="primary" onClick={deleteAsset}>
                    {/* <CloseIcon></CloseIcon> */}
                    <DeleteIcon></DeleteIcon>
                </Fab>
            </CardActions>
        </Card> 
    );
}


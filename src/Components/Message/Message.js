import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '95%',
        margin: '2%',
    },
    
});


const answerBtn = () => {
    return (
        <Button variant="contained" color="primary">
            Answer
        </Button>
    )
}

export default function AssetCard (props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography component="h5" style={{fontFamily: 'Lato',overflow: 'hidden',fontWeight: 'bold'}}>
                    {props.item.Timestamp}
                </Typography>
                <div>
                <Typography component="h5" color="textSecondary" component="subtitle2" style={{fontFamily: 'Lato',fontWeight: 'bold',marginTop:'5%'}}>
                    <p>{props.item.Message}</p>
                </Typography>
                </div>
                {answerBtn()}
            </CardContent>
        </Card> 
    );
}


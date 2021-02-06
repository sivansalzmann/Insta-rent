import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import PopUp from '../All/PopUp';

const useStyles = makeStyles({
    card: {
        width: '95%',
        margin: '2%',
    },
    
});
export default function AssetCard (props) {
    const classes = useStyles();
    const [openMessage,setOpenMessage] = useState("");
    const [answer,setAnswer] = useState("");

    const addAnswer = () => {
        console.log("here");
        const body = {Answer:answer};
        console.log(body);
        fetch(`http://localhost:3000/api/messages/${props.item.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(result => {
            setOpenMessage(false);
            setAnswer(result);
        })
    }
    const answerBtn = () => {
        if(props.isRenter) {
            return (
                <Button variant="contained" color="primary">
                    See answer
                </Button>
            )
        }
        else {
            return (
                <Button variant="contained" color="primary" onClick={() => setOpenMessage(true)}>
                    Send answer
                </Button>
            )
        }
    }
    const haveAnswer = () => {
        if(props.item.Answer != null){
            return (
                <>
                    <Typography component="h5" style={{fontFamily: 'Lato',overflow: 'hidden',fontWeight: 'bold'}}>
                        Answer:
                    </Typography>
                    <Typography component="h5" color="textSecondary" component="subtitle2" style={{fontFamily: 'Lato',fontWeight: 'bold',marginTop:'5%'}}>
                        <p>{props.item.Answer}</p>
                    </Typography>
                </>
            )
        }
        else {
            return (
                answerBtn()
            )
        }

    }
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
                <div>
                   {haveAnswer()}
                </div>
                <PopUp onSubmit={addAnswer} title={"Send answer"} open={openMessage} closePopup={() => setOpenMessage(false)} sendBtn={true}>
                    <TextField id="outlined-multiline-static" label="Answer"  multiline rows={4} onChange={(event) => setAnswer(event.target.value)} value={answer} variant="outlined" fullWidth/>
                </PopUp>
            </CardContent>
        </Card> 
    );
}


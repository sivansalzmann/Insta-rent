import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StreetviewIcon from '@material-ui/icons/Streetview';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import './search.css';
import imgAsset from './Media/house.jpg';


const userId = '5'; //change to login

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AssetPage(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseOwner = () => {
    fetch(`https://instarent-1st.herokuapp.com/api/assets/${props.item.id}`
        , {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({RenterId: userId}),
        })
          .then(response => response.json())
          .then(result => {
              setOpen(false);
              alert("The owner will contact with you soon as possible")
          })
   };
  const handleClickWishList = () => { 
        fetch(`https://instarent-1st.herokuapp.com/api/assets/${props.item.id}` //chage to update array
        , {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({RenterId: userId}),
        })
          .then(response => response.json())
          .then(result => {
            alert("The asset added to your wish list!")
          })

    };

  return (
    <div>
      <div className={"buttonsAssets"}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{margin:'2%'}}>Show deatils</Button>
        <Button variant="outlined" color="primary" style={{margin:'2%'}} onClick={handleClickWishList}>Save for later</Button>
      </div>
      <div className={"assetPage"}>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{fontFamily: 'Lato'}}>
          {props.item.Country},{props.item.City}
        </DialogTitle>
        <DialogContent dividers>
          <div className={"rowDeacImg"}>
          <Typography gutterBottom style={{fontFamily: 'Lato',fontWeight:'bold'}}>
            {props.item.Description}
          </Typography>
          <Typography gutterBottom style={{fontFamily: 'Lato',fontWeight:'bold'}}>
            <img src={imgAsset} alt="Asset" style={{width:'300px',height:'200px'}}/>
          </Typography>
          </div>
          <Typography gutterBottom style={{fontFamily: 'Lato'}}>
            <div className={"rowDetlails"}>
              <div><StreetviewIcon/></div>
              {props.item.Street}
              <div><ConfirmationNumberIcon/></div>
              {props.item.Zip}
              <div><LocationCityIcon/></div>
              {props.item.Neighborhood}
              <div><AspectRatioIcon/></div>
              {props.item.SquareFeet} m^2
            </div>
          </Typography>
          <Typography gutterBottom style={{fontFamily: 'Lato'}}>
            <div>The condition is {props.item.Condition}</div>
          </Typography>
          <Typography gutterBottom style={{fontFamily: 'Lato',fontWeight:'bold'}}>
            $ {props.item.Price}/month (include charges)
          </Typography>
          <Typography gutterBottom style={{fontFamily: 'Lato'}}>
            Avaliable from {props.item.Avilability}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseOwner} color="primary">
          Contect with owner
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
}
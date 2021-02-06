import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssetEdit from './AssetEdit';
import AssetDelete from './AssetDelete';
import PopUp from '../All/PopUp';
import './AssetTab.css';
import UserDeatils from '../All/UserDeatils';
import { Button } from '@material-ui/core';
import Contract from '../All/Contract';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
      fontFamily: 'Lato',
      fontWeight:'bold',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      fontFamily: 'Lato',

    },
  }));

export default function AssetTab (props) {
    const [expanded, setExpanded] = useState(false);
    const [openRenter,setOpenRenter] = useState("")

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const classes = useStyles();
    const isRenterExist = () => {
      if(props.item.RenterId !== 0) {
        return  (
          <>
            <Button variant="contained" color="primary" size="small" onClick={() => setOpenRenter(true)} className={"but"}>See renter</Button>
            <Contract isRenter={false}/>
            <PopUp onSubmit={() => setOpenRenter(false)} title={"Renter deatils"} open={openRenter} closePopup={() => setOpenRenter(false)} sendBtn={false}>
                <UserDeatils item={props.item.RenterId} />
            </PopUp>
          </>
          );
        }
      }
    const isRenterExistTop = () => {
      if(props.item.RenterId !== 0) {
        return (
          <>
            <Typography className={classes.secondaryHeading}>In proccess</Typography>
          </>
        )
      }
      else {
        return (
          <>
            <Typography className={classes.secondaryHeading}>Nobody interst yet</Typography>
          </>
        );
      }
    }
  return (
      <div className={"assetContainer"}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Typography className={classes.heading}>{props.item.Country},{props.item.City}</Typography>
              {isRenterExistTop()}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className={"details"}>
              {props.item.Description}
            </div>
            <div className={"detailsHead"}>
                Avilablie from {props.item.Avilability}
            </div>
            <div className={"detailsHead"}>
                {props.item.Price} $
            </div>
            <div>
              <div className={"butRow"}>
                {isRenterExist()}
                <AssetEdit idAsset={props.item.id}/>
                <AssetDelete idAsset={props.item.id}/>
              </div>
            </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
}


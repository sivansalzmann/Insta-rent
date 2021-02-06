import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AssetEdit from './AssetEdit';
import './AssetTab.css';

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
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const classes = useStyles();
    return (
        <div className={"assetContainer"}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography className={classes.heading}>{props.item.Country},{props.item.City}</Typography>
                    <Typography className={classes.secondaryHeading}>Renter name: {props.item.RenterId} see renter deatils</Typography>
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
                          <AssetEdit idAsset={props.item.id}/>
                          
                          {/* <EditOutlinedIcon onClick={() => props.onClickEdit(props.item.id)}/>
                          <DeleteOutlineIcon onClick={() => props.onClickDelete(props.item.id)} /> */}
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


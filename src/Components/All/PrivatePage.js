import React, { useState,useContext } from 'react';
import { Button } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PopUp from '../All/PopUp';
import TextField from '@material-ui/core/TextField';
import Contract from '../All/Contract';
import Footer from '../All/Footer';
import NavBar from '../All/NavBar';
import MessageList from '../Message/MessageList';
import AssetDeatils from '../Asset/AssetDeatils';
import PrsonalDeatils from '../All/PersonalDeatils';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import HouseIcon from '@material-ui/icons/House';
import AddAsset from '../Owner/AddAsset';
import AssetTable from '../Owner/AssetTable';
import './PrivatePage.css';
import Map from '../All/Map';
import {UserContext} from '../../UserContext';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other} >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function PrivatePage(props) {
  const { user} = useContext(UserContext);

  const theme = useTheme();
  const [message, setMessage] = useState("");
  const [openMessage, setOpenMessage] = useState(false);
  const [openAsset, setOpenAsset] = useState(false);
  const [timestamp, setTimestamp] = useState("");
  const [asset,setAsset] = useState("");

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addMessage = () => {
    let today = new Date();
    console.log(today)
    setTimestamp(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
    console.log(timestamp);
    const body = { Message: message, RenterId: props.userId.id, OwnerId: props.wantedAsset[0].OwnerId, Timestamp: timestamp };
    fetch(`http://localhost:3000/api/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(result => {
        setOpenMessage(false)
        setMessage(result)
        setMessage("")
      });
  }


  const giveUpOnAsset = () => {
    console.log(props.wantedAsset[0].id)
    const body = { RenterId: 0 }
    fetch(`http://localhost:3000/api/assets/${props.wantedAsset[0].id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(result => {
        setAsset(result)
        alert("Tha asset is deletd from your proccess successfully!")
        window.location.reload()
      })
  };

  const tabs = () => {
    if (props.isRenter) {
      return (
        <div className={"currentContainer"}>
          <div className={"curStatus"}>
            <h1>Current status</h1>
            <p>Looking for rent appetmant in {props.FavoriteCountry} </p>
          </div>
          <div className={"curBud"}>
            <h1>Cuurent budget</h1>
            <p>{props.Budget} $</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <AddAsset idOwner={props.userId.id} className={"addAssetBig"} />
        </div>
      )
    }
  }

  const wantedAsset = () => {
    if (props.wantedAsset == "") {
      return (
        <Stepper active orientation="vertical">
          <Step >
            <StepLabel style={{ fontFamily: 'Lato' }}></StepLabel>
            <StepContent>
              <Typography style={{ fontFamily: 'Lato' }}>You don't in proccess with owner yet, choose asset and start soon!</Typography>
            </StepContent>
          </Step>
          <Step>
            <StepLabel style={{ fontFamily: 'Lato' }}>Asset rentering in proccess</StepLabel>
          </Step>
          <Step >
            <StepLabel style={{ fontFamily: 'Lato' }}>Enjoy in your new journey!</StepLabel>
          </Step>
        </Stepper>
      )
    }
    else {
      return (
        <Stepper active orientation="vertical">
          <Step >
            <StepLabel style={{ fontFamily: 'Lato' }}>Request recived</StepLabel>
            <StepContent>
              <Typography style={{ fontFamily: 'Lato' }}>The owner of your wantes asset saw your reques and will be in touch soon</Typography>
              <Button variant="contained" color="primary" size="small" onClick={() => setOpenAsset(true)}>Asset deatils</Button>
              <PopUp onSubmit={() => setOpenAsset(false)} wantAssetBtn={false} title={props.wantedAsset.Country} open={openAsset} closePopup={() => setOpenAsset(false)} sendBtn={false} showBt={true}>
                <AssetDeatils item={props.wantedAsset[0]} />
              </PopUp>
            </StepContent>
          </Step>
          <Step active>
            <StepLabel style={{ fontFamily: 'Lato' }}>Asset rentering in proccess</StepLabel>
            <StepContent>
              <Typography style={{ fontFamily: 'Lato' }}>You can talk anytime you want with the owner in the chat and review on tour contract now</Typography>
              <Button variant="contained" color="primary" size="small" onClick={() => setOpenMessage(true)}>message to owner</Button>
              <PopUp onSubmit={addMessage} title={"Send Message"} open={openMessage} closePopup={() => setOpenMessage(false)} sendBtn={true} showBt={true}>
                <TextField label="Message" value={message} multiline rows={4} onChange={e => setMessage(e.target.value)} variant="outlined" fullWidth required />
              </PopUp>
              <Contract isRenter={true} />
              <Button variant="contained" color="primary" size="small" onClick={() => giveUpOnAsset()}>give up on this asset</Button>
            </StepContent>
          </Step>
          <Step >
            <StepLabel style={{ fontFamily: 'Lato' }}>Enjoy in your new journey!</StepLabel>
            <StepContent>
              <Typography style={{ fontFamily: 'Lato' }}></Typography>
              <Button variant="contained" color="primary" size="small">Chat</Button>
              <Contract />
            </StepContent>
          </Step>
        </Stepper>
      )
    }
  }

  const disableTabs = () => {
    if (props.wantedAsset == "") {
      return (
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="full width tabs example">
          <Tab label={props.label1} {...a11yProps(0)} />
          <Tab label={props.label2} {...a11yProps(1)} style={{ marginLeft: '8%' }} disabled/>
          <Tab label={props.label3} {...a11yProps(2)} style={{ marginLeft: '6%' }} disabled/>
        </Tabs>
      )
    }
    if(props.wantedAsset == "" || props.isRenter == true) {
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="full width tabs example">
        <Tab label={props.label1} {...a11yProps(0)} />
        <Tab label={props.label2} {...a11yProps(1)} style={{ marginLeft: '8%' }} />
        <Tab label={props.label3} {...a11yProps(2)} style={{ marginLeft: '6%' }} />
      </Tabs>
    }
  }

  const label1 = () => {
    if (props.isRenter) {
      return (
        wantedAsset()
      )
    }
    else {
      return (
        <div className={"ownerContainer"}>
          <div className={"currentContainerRow"}>
            <div className={"prsonalDetOwner"}>
              <MailOutlineIcon style={{ width: '20%', height: '20%', margin: '5%' }} />
              <h3>My email</h3>
              <p>{props.user.Email}</p>
            </div>
            <div className={"prsonalDetOwner"}>
              <PhoneIcon style={{ width: '20%', height: '20%', margin: '5%' }} />
              <h3>My phone</h3>
              <p>{props.user.Phone}</p>
            </div>
          </div>
          <h1>Assets deatils</h1>
          <div className={"currentContainerRow"}>
            <div className={"prsonalDetOwner"}>
              <HouseIcon style={{ width: '20%', height: '20%', margin: '5%' }} />
              <h3>Number of assets</h3>
              <p>{props.assets.length}</p>
            </div>
            <div className={"prsonalDetOwner"}>
              <MessageIcon style={{ width: '20%', height: '20%', margin: '5%' }} />
              <h3>Messages</h3>
              <p>{props.messages.length}</p>
            </div>
          </div>
        </div>
      )
    }
  }

  const label2 = () => {
    if (props.isRenter) {
      return (
        <>
          {/* <Map address={props.Country}/> */}
        </>
      )
    }
    else {
      return (
        <>
          <h2>My assets</h2>
          <AssetTable assetsList={props.assets} idOwner={props.userId.id} googleIdRenter={props.userId}/>
          <AddAsset idOwner={props.userId.id} />
        </>
      )
    }
  }

  const labeel3 = () => {
    if (props.isRenter) {
      return (
        <>
          <Button variant="contained" color="primary" size="large" style={{ width: "100%" }} onClick={() => setOpenMessage(true)}>send message to owner</Button>
          <PopUp onSubmit={addMessage} title={"Send Message"} open={openMessage} closePopup={() => setOpenMessage(false)} sendBtn={true} showBt={true}>
            <TextField label="Message" value={message} multiline rows={4} onChange={e => setMessage(e.target.value)} variant="outlined" fullWidth required />
          </PopUp>
          <MessageList messageList={props.messages} renter={true} />
        </>
      )
    }
    else {
      return (
        <MessageList messageList={props.messages} renter={false} />
      )
    }
  }
  
  return (
    <div className={"privatePage"}>
      <NavBar userId={props.userId}/>
      {/* <NavBar userId={props.userId} isRenter={props.renter}/> */}
      <div className={"privatePageConatiner"}>
        <div className={"personalDeatilsContainer"}>
          <PrsonalDeatils renterDeatilsId={props.renterDeatilsId} userId={props.userId} FirstName={props.FirstName} LastName={props.LastName} JobTitle={props.JobTitle} Gender={props.Gender} Age={props.Age} Country={props.Country} ImageUrl={props.ImageUrl} idOwner={props.idOwner} idRenter={props.idRenter} renter={props.isRenter} />
        </div>
        <div className={"containerOptions"}>
          {tabs()}
          <div className={"progressOwner"}>
            <AppBar position="static" color="default">
              {/* {disableTabs()} */}
              <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="full width tabs example">
                <Tab label={props.label1} {...a11yProps(0)} />
                <Tab label={props.label2} {...a11yProps(1)} style={{ marginLeft: '8%' }} />
                <Tab label={props.label3} {...a11yProps(2)} style={{ marginLeft: '6%' }} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <h1>{props.firstHead}</h1>
              <div className={"progress"}>
                {label1()}
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {label2()}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              {labeel3()}
            </TabPanel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

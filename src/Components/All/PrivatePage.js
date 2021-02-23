import React, { useState } from 'react';
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
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const [openMessage, setOpenMessage] = useState(false);
  const [openAsset, setOpenAsset] = useState(false);
  const [timestamp, setTimestamp] = useState("");
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const addMessage = () => {
    const body = { Message: message, RenterId: props.user.id, OwnerId: props.wantedAsset.OwnerId, Timestamp: timestamp };
    fetch(`https://instarent-1st.herokuapp.com/api/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(result => {
        setOpenMessage(false)
        setMessage(result)
        setMessage("")
        setTimestamp("")
      });
  }
  const giveUpOnAsset = () => {
    const body = { RenterId: -1 }
    fetch(`https://instarent-1st.herokuapp.com/api/assets/${props.wantedAsset.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(result => {
        let path = '/Renter'
        alert("Tha asset is deletd from your proccess successfully!")
        window.location.reload();
      })
  };
  const tabs = () => {
    if (props.isRenter) {
      return (
        <div className={"currentContainer"}>
          <div className={"curStatus"}>
            <h1>Current status</h1>
            <p>Looking to rent an appetmant in {props.user.FavoriteCountry} </p>
          </div>
          <div className={"curBud"}>
            <h1>Current budget</h1>
            <p>{props.user.Budget} $</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <AddAsset idOwner={props.user.id} className={"addAssetBig"} />
        </div>
      )
    }
  }
  const wantedAsset = () => {
    if (props.wantedAsset == null) {
      return (
        <Stepper active orientation="vertical">
          <Step >
            <StepLabel style={{ fontFamily: 'Lato' }}></StepLabel>
            <StepContent>
              <Typography style={{ fontFamily: 'Lato' }}>You don't have any proccess with a owner yet, choose an asset and start one!</Typography>
            </StepContent>
          </Step>
          <Step>
            <StepLabel style={{ fontFamily: 'Lato' }}>Asset rentering in proccess</StepLabel>
          </Step>
          <Step >
            <StepLabel style={{ fontFamily: 'Lato' }}>Enjoy you'r new journey!</StepLabel>
          </Step>
        </Stepper>
      )
    }
    else {
      return (
        <Stepper active orientation="vertical">
          <Step >
            <StepLabel style={{ fontFamily: 'Lato' }}>Requests recived</StepLabel>
            <StepContent>
              <Typography style={{ fontFamily: 'Lato' }}>The owner of the asset you intrested in saw your reques and will contact with you soon</Typography>
              <Button variant="contained" color="primary" size="small" onClick={() => setOpenAsset(true)}>Asset details</Button>
              <PopUp onSubmit={() => setOpenAsset(false)} wantAssetBtn={false} title={props.wantedAsset.Country} open={openAsset} closePopup={() => setOpenAsset(false)} sendBtn={false} showBt={true}>
                <AssetDeatils item={props.wantedAsset} />
              </PopUp>
            </StepContent>
          </Step>
          <Step active>
            <StepLabel style={{ fontFamily: 'Lato' }}>Asset rentering in proccess</StepLabel>
            <StepContent>
              <Typography style={{ fontFamily: 'Lato' }}>You can talk with the owner anytime you want and review your contract now</Typography>
              <Button variant="contained" color="primary" size="small" onClick={() => setOpenMessage(true)}>message to owner</Button>
              <PopUp onSubmit={addMessage} title={"Send Message"} open={openMessage} closePopup={() => setOpenMessage(false)} sendBtn={true} showBt={true}>
                <TextField type="date" value={timestamp} onChange={e => setTimestamp(e.target.value)} variant="outlined" fullWidth required />
                <TextField label="Message" value={message} multiline rows={4} onChange={e => setMessage(e.target.value)} variant="outlined" fullWidth required style={{marginTop:"1%"}}/>
              </PopUp>
              <Contract isRenter={true} />
              <Button variant="contained" color="primary" size="small" onClick={() => giveUpOnAsset()}>give up the asset</Button>
            </StepContent>
          </Step>
          <Step >
            <StepLabel style={{ fontFamily: 'Lato' }}>Enjoy you'r new journey!</StepLabel>
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
              <PhoneIcon style={{ width: '30%', height: '30%', margin: '5%' }} />
              <h3>My phone</h3>
              <p>{props.user.Phone}</p>
            </div>
          </div>
          <h1>Assets details</h1>
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
        <Map asset = {props.wantedAsset} />
        {props.wantedAsset ? <div><p>Here you can see map of your wanted country, enjoy!</p></div> : <div><p>There is not map yet, find your next asset to see one</p></div>}
        </>
      )
    }
    else {
      return (
        <>
          <h2>My assets</h2>
          <AssetTable assetsList={props.assets} idOwner={props.user.id}/>
          <AddAsset idOwner={props.user.id} />
        </>
      )
    }
  }

  const labeel3 = () => {
    if (props.isRenter) {
      return (
        <>
        {props.wantedAsset ? <Button variant="contained" color="primary" size="large" style={{ width: "100%" }} onClick={() => setOpenMessage(true)}>send a message to the owner</Button> : <div></div>}
          <PopUp onSubmit={addMessage} title={"Send Message"} open={openMessage} closePopup={() => setOpenMessage(false)} sendBtn={true} showBt={true}>
            <TextField type="date" value={timestamp} onChange={e => setTimestamp(e.target.value)} variant="outlined" fullWidth required />
            <TextField label="Message" value={message} multiline rows={4} onChange={e => setMessage(e.target.value)} variant="outlined" style={{marginTop:"1%"}} fullWidth required />
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
      <NavBar />
      <div className={"privatePageConatiner"}>
        <div className={"personalDeatilsContainer"}>
          <PrsonalDeatils user={props.user} FirstName={props.user.FirstName} LastName={props.user.LastName} JobTitle={props.user.JobTitle} Gender={props.Gender} Age={props.user.Age} Country={props.user.Country} ImageUrl={props.user.ImageUrl} Gender={props.user.Gender} idOwner={props.user.id} idRenter={props.user.id} isRenter={props.isRenter}/>
        </div>
        <div className={"containerOptions"}>
          {tabs()}
          <div className={"progressOwner"}>
            <AppBar position="static" color="default">
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

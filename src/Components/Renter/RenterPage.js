import React, {useEffect, useState} from 'react';
import './RenterPage.css';
import { Button } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
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
import AssetDeatils from '../All/AssetDeatils';
import PrsonalDeatils from '../All/PersonalDeatils';

const userId = '3'; //change it

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
export default function RenterPage(props) {

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const [renterMessages, setRenterMessages] = useState("");
    const [user,setUser] = useState("");
    const [renterDeatils,setRenterDeatils] = useState("");
    const [renterDeatilsId,setRenterDeatilsId] = useState("");
    const [value, setValue] = useState(0);
    const [message,setMessage] = useState("");
    const [timestamp,setTimestamp] = useState("");
    const [wantedAsset,setWantedAsset] = useState("");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    useEffect(() => {
      fetch(`http://localhost:3000/api/users/${userId}`)
        .then(response => response.json())
        .then(result =>  {
            setUser(result)
        })    
    }, [user])

  useEffect(() => {
    fetch(`http://localhost:3000/api/renterDeatils/${userId}`)
      .then(response => response.json())
      .then(result =>  {
        setRenterDeatils(result)
        setRenterDeatilsId(result.id)
      }) 
    }, [renterDeatils])

    useEffect(() => {
      fetch(`http://localhost:3000/api/assets?RenterId=${userId}`)
        .then(response => response.json())
        .then(result => {
          setWantedAsset(result)
      })
    }, [wantedAsset])
    useEffect(() => {
      fetch(`http://localhost:3000/api/messages?RenterId=${userId}`)
        .then(response => response.json())
        .then(result =>  {
          setRenterMessages(result)
        })
    }, [renterMessages])
    const addMessage = () => {
      let today = new Date();
      setTimestamp(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
      const body = { Message: message , RenterId:userId, OwnerId:wantedAsset[0].OwnerId,Timestamp:timestamp};
        fetch(`http://localhost:3000/api/messages` ,{
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
    return (
		<div className={"renterMainPage"}>
			<NavBar/>
			<div className={"renterPageContainer"}>
        <div className={"personalDeatilsContainer"}>
          <PrsonalDeatils FirstName={user.FirstName} LastName={user.LastName} Gender={user.Gender} Age={user.Age} Country={user.Country} ImageUrl={user.ImageUrl} JobTitle={renterDeatils.JobTitle} idRenter={renterDeatils.id} FavoriteCountry={renterDeatils.FavoriteCountry} renter={true}/>
        </div>
        <div className={"containerRenter"}>
          <div className={"currentContainer"}>
            <div className={"curStatus"}>
              <h1>Current status</h1>
              <p>Looking for rent appetmant in {renterDeatils.FavoriteCountry} </p>
            </div>
            <div className={"curBud"}>
                <h1>Cuurent budget</h1>
                <p>{renterDeatils.Budget} $</p>
            </div>
          </div>
          <div className={"progress"}>
            <AppBar position="static" color="default">
              <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="full width tabs example">
                <Tab label="In progress" {...a11yProps(0)} />
                <Tab label="Asset place deatils" {...a11yProps(1)}  />
                <Tab label="Messages to my owner" {...a11yProps(2)}  />
              </Tabs>
            </AppBar>
            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value}onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <h1 style={{fontFamily:'Lato'}}>Rent asset progress</h1>
              <div>
                <Stepper active orientation="vertical">
                  <Step >
                    <StepLabel style={{fontFamily:'Lato'}}>Request recived</StepLabel>
                    <StepContent>
                    <Typography style={{fontFamily:'Lato'}}>The owner of your wantes asset saw your reques and will be in touch soon</Typography>
                    <Button variant="contained" color="primary" size="small" onClick={() => setOpen(true)}>Asset deatils</Button>
                    </StepContent>
                  </Step>
                    <Step active>
                      <StepLabel style={{fontFamily:'Lato'}}>Asset rentering in proccess</StepLabel>
                      <StepContent>
                      <Typography style={{fontFamily:'Lato'}}>You can talk anytime you want with the owner in the chat and review on tour contract now</Typography>
                        <Button variant="contained" color="primary" size="small" onClick={() => setOpenMessage(true)}>message to owner</Button>
                        <PopUp onSubmit={addMessage} title={"Send Message"} open={openMessage} closePopup={() => setOpenMessage(false)} sendBtn={true}>
                          <TextField label="Message" value={message} onChange={e => setMessage(e.target.value)} fullWidth required/>
                        </PopUp>
                        <Contract/>
                      </StepContent>
                    </Step>
                    <Step >
                      <StepLabel style={{fontFamily:'Lato'}}>Enjoy in your new journey!</StepLabel>
                      <StepContent>
                      <Typography style={{fontFamily:'Lato'}}></Typography>
                      <Button variant="contained" color="primary" size="small">Chat</Button>
                      <Contract/>
                      </StepContent>
                    </Step>
                </Stepper>
              </div> 
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}> 
                From google api
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <MessageList messageList={renterMessages} renter={true}/>
              </TabPanel>
          </SwipeableViews>
        </div> 
      </div>
    </div>
    <PopUp onSubmit={() => setOpen(false)} wantAssetBtn={false} title={wantedAsset.Country} open={open} closePopup={() => setOpen(false)} sendBtn={false}>
      <AssetDeatils item={wantedAsset[0]} />
    </PopUp>
    <Footer/>
	</div>
	);
}


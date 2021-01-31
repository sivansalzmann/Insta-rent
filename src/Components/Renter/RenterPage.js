import React, {useEffect, useState} from 'react';
import './RenterPage.css';
import profileImg from './Media/profile.png'
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
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StreetviewIcon from '@material-ui/icons/Streetview';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import imgAsset from './Media/house.jpg';
import AssetPage from '../AssetSearch/AssetPage';
import PopUp from '../All/PopUp';
import TextField from '@material-ui/core/TextField';
import Contract from './Contract';
import Footer from '../All/Footer';
import NavBar from '../All/NavBar';
import Message from '../All/Message';

const userId = '3';

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

    const [openEdit,setOpenEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const [user,setUser] = useState("");
    const [value, setValue] = useState(0);
    const [JobTitle,setJob] = useState("");
    const [Budget,setBudget] = useState("");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

    useEffect(() => {
      fetch(`https://instarent-1st.herokuapp.com/api/users/${userId}`)
          .then(response => response.json())
          .then(result =>  {
             setUser(result)
          })
          
  }, [user])

    const editUser = () => {
        const body = { JobTitle: JobTitle,Budget:Budget };
        console.log(body)
        fetch(`https://instarent-1st.herokuapp.com/api/users/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
          .then(response => response.json())
          .then(result => {
              setOpenEdit(false);
              setUser(result)
              setJob("")
              setBudget("")
          });
      }

    return (
		<div className={"renterMainPage"}>
			<NavBar/>
			<div className={"renterPageContainer"}>
        <div className={"personalDeatils"}>
            <img src={profileImg} alt="profile" />
            <h1>{user.FirstName} {user.LastName}</h1>
            <h3>{user.JobTitle}</h3>
            <div className={"line"}></div>
            <p>Gender</p>
            <span>{user.Gender}</span>
            <p>Age</p>
            <span>blabla</span>
            <p>Country</p>
            <span>blabla</span>
            <div><Button style={{marginBottom:'5%'}} variant="contained" color="primary" onClick={() => setOpenEdit(true)}>Edit</Button></div>
        </div>
      <div className={"containerRenter"}>
          <div className={"currentContainer"}>
              <div className={"curStatus"}>
                  <h1>Current status</h1>
                  <p>Looking for rent appetmant in NYC</p>
              </div>
              <div className={"curBud"}>
                  <h1>Cuurent budget</h1>
                  <p>{user.Budget}</p>
              </div>
          </div>
          <div className={"progress"}>
            <AppBar position="static" color="default">
                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="full width tabs example">
                <Tab label="In progress" {...a11yProps(0)} />
                <Tab label="Asset place deatils" {...a11yProps(1)}  />
                <Tab label="Chat with my owner" {...a11yProps(2)} disabled  />
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
                            <Message />
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
              Chat
            </TabPanel>
          </SwipeableViews>
        </div> 
      </div>
    </div>
    <PopUp onSubmit={editUser} title={"Edit User"} open={openEdit} closePopup={() => setOpenEdit(false)}>
        <TextField label="JobTitle" value={JobTitle} onChange={e => setJob(e.target.value)} fullWidth required/>
        <TextField label="Budget" value={Budget} onChange={e => setBudget(e.target.value)} fullWidth required/>
    </PopUp>
    <PopUp onSubmit={() => setOpen(false)} WantAsset={false} title={props.location.wantedAsset[0].Country} open={open} closePopup={() => setOpen(false)}>
    <div className={"rowDeacImg"}>
      <span>
        <h3>{props.location.wantedAsset[0].City}</h3>
        {props.location.wantedAsset[0].Description}
      </span>
      <img src={imgAsset} alt="Asset"/>
    </div>
      <div className={"rowDetlails"}>
        <StreetviewIcon/>
        {props.location.wantedAsset[0].Street}
        <ConfirmationNumberIcon/>
        {props.location.wantedAsset[0].Zip}
        <LocationCityIcon/>
        {props.location.wantedAsset[0].Neighborhood}
        <AspectRatioIcon/>
        {props.location.wantedAsset[0].SquareFeet} m^2
      </div>
      <div className={"moreDeatils"}>
        <span>The condition is {props.location.wantedAsset[0].Condition}</span>
        <span>${props.location.wantedAsset[0].Price}/month (include charges)</span>
        <span>Avaliable from {props.location.wantedAsset[0].Avilability}</span>
      </div>
    </PopUp>
    <Footer/>
	</div>
	);
}


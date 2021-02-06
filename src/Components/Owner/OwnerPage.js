import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NavBar from '../All/NavBar';
import Footer from '../All/Footer';
import './OwnerPage.css';
import PrsonalDeatils from '../All/PersonalDeatils';
import AssetTable from './AssetTable';
import MessageList from '../Message/MessageList';
import AddAsset from './AddAsset';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import HouseIcon from '@material-ui/icons/House';

const ownerId = 2;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" hidden={value !== index}  id={`scrollable-auto-tabpanel-${index}`} aria-labelledby={`scrollable-auto-tab-${index}`} {...other}>
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
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
export default function OwnerPage1() {

    const [user,setUser] = useState("");
    const [assets,setAssets] = useState("");
    const [messages,setOwnerMessages] = useState("");
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    useEffect(() => {
      fetch(`http://localhost:3000/api/users/${ownerId}`)
        .then(response => response.json())
        .then(result =>  {
            setUser(result)
        })
    }, [user])

    useEffect(() => {
      fetch(`http://localhost:3000/api/assets?OwnerId=${ownerId}`)
        .then(response => response.json())
        .then(result =>  {
            setAssets(result)
        })     
    }, [assets])

    useEffect(() => {
      fetch(`http://localhost:3000/api/messages?OwnerId=${ownerId}`)
        .then(response => response.json())
        .then(result =>  {
            setOwnerMessages(result)
        }) 
    }, [messages])
    
  return (
    <div className={"ownerMainPage"}>
      <NavBar />
      <div className={"containerOwner"}>
        <div className={"personalDet"}>
          <PrsonalDeatils FirstName={user.FirstName} LastName={user.LastName} Gender={user.Gender} Age={user.Age} Country={user.Country} ImageUrl={user.ImageUrl} idOwner={user.id} renter={false}/>
        </div>
        <div className={"containerOptions"}>
          <div className={"progressOwner"}>
            <AppBar position="static" color="default">
              <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto" >
              <Tab label="General" {...a11yProps(0)} />
              <Tab label=" My assets" {...a11yProps(1)} style={{marginLeft:'8%'}}/>
              <Tab label="My messages" {...a11yProps(2)} style={{marginLeft:'6%'}}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
            <h1>Prsonal info</h1>
            <div className={"ownerContainer"}>
              <div className={"currentContainerRow"}>
                <div className={"prsonalDetOwner"}>
                  <MailOutlineIcon style={{width:'20%' ,height:'20%',margin:'5%'}}/> 
                  <h3>My email</h3>
                  <p>{user.Email}</p>
                </div>
                <div className={"prsonalDetOwner"}>
                  <PhoneIcon style={{width:'20%' ,height:'20%',margin:'5%'}}/> 
                  <h3>My phone</h3>
                  <p>{user.Phone}</p>
                </div>
              </div>
              <h1>Assets deatils</h1>
              <div className={"currentContainerRow"}>
                <div className={"prsonalDetOwner"}>
                  <HouseIcon style={{width:'20%' ,height:'20%',margin:'5%'}}/>
                    <h3>Number of assets</h3>
                    <p>{assets.length}</p>
                  </div>
                  <div className={"prsonalDetOwner"}>
                  <MessageIcon style={{width:'20%' ,height:'20%',margin:'5%'}}/>
                    <h3>Messages</h3>
                    <p>{messages.length}</p>
                  </div>
              </div>
          </div>
          </TabPanel>
          <TabPanel value={value} index={1} className={"myAssetsTab"}>
            <h2>My assets</h2>
            <AssetTable assetsList={assets}/>
            <AddAsset />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <MessageList messageList={messages} isRenter={false}/>
          </TabPanel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
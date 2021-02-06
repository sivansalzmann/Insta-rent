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
import AssetList from '../HomePage/AssetsList';
import MessageList from '../Message/MessageList';
import { Button } from '@material-ui/core';
import AddAsset from './AddAsset';

const ownerId = 2;



function TabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
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
        // fetch(`https://instarent-1st.herokuapp.com/api/users/${userId}`)
          fetch(`http://localhost:3000/api/users/${ownerId}`)
            .then(response => response.json())
            .then(result =>  {
               setUser(result)
            })
            
    }, [user])

    useEffect(() => {
        // fetch(`https://instarent-1st.herokuapp.com/api/users/${userId}`)
          fetch(`http://localhost:3000/api/assets?OwnerId=${ownerId}`)
            .then(response => response.json())
            .then(result =>  {
               setAssets(result)
            })
            
    }, [assets])

    useEffect(() => {
        // fetch(`https://instarent-1st.herokuapp.com/api/users/${userId}`)
          fetch(`http://localhost:3000/api/messages?OwnerId=${ownerId}`)
            .then(response => response.json())
            .then(result =>  {
                setOwnerMessages(result)
              // console.log(result)
            })
            
        }, [messages])

  return (
    <div className={"ownerMainPage"}>
        <NavBar />
      <div className={"containerOwner"}>
          <div className={"personalDet"}>
              <PrsonalDeatils FirstName={user.FirstName} LastName={user.LastName} Gender={user.Gender} Age={user.Age} Country={user.Country} ImageUrl={user.ImageUrl}/>
          </div>
          <div className={"containerOptions"}>
          <div className={"currentContainer"}>
              <div className={"curStatus"}>
                  <h1>Total number of assets</h1>
                  <p>4</p>
              </div>
              <div className={"curBud"}>
                  <h1>Total number of assers in proccess</h1>
                  <p>2</p>
              </div>
          </div>
            <div className={"progressOwner"}>
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto" >
                    <Tab label="My assets" {...a11yProps(0)} />
                    <Tab label="Assets in proccess" {...a11yProps(1)} />
                    <Tab label="My messages" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <AddAsset />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <h2>My assets</h2>
                  <AssetList assetsList={assets} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MessageList messageList={messages} />
                </TabPanel>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}
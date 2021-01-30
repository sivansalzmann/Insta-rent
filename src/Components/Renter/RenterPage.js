import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Renter.css';
import profileImg from './Media/profile.png'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const userId = '3';

const useStyles = makeStyles((theme) => ({



  }));

  


export default function RenterPage(props) {

    const [renter,setRenter] = useState([]);
    const [assetList,setAssetList] = useState([]);

    const classes = useStyles();


    const handleAssetDeatils = () => {
        
      };
    
      const handleAssetPlaceDeatils = () => {
        
      };
    
      const handleChat = () => {
        
      };

      const handleContract = () => {
        
     };


    useEffect(() => {
        fetch(`https://instarent-1st.herokuapp.com/api/renters/3`)
            .then(response => response.json())
            .then(result =>  {
                setRenter(result)
                console.log(result)
            })
    }, [])

    return (
		<div className={"renterMainPage"}>
			<div className={"navBar"}>
				<h1><Link to={{ pathname: "/"}}>InstaRent</Link></h1>
				<ul>
					<li><Link to={{ pathname: "/"}}>HOME</Link></li>
					<li><Link to={{ pathname: "/"}}>APPERTMANTS</Link></li>
					<li><Link to={{ pathname: "/"}}>PROFILE</Link></li>
				</ul>
			</div>
			<div className={"renterPageContainer"}>
                <div className={"personalDeatils"}>
                    <img src={profileImg} alt="profile" />
                    <h1>{renter.Person[0].FirstName} {renter.Person[0].LastName}</h1>
                    <h3>{renter.JobTitle}</h3>
                    <div className={"line"}></div>
                    <p>Gender</p>
                    <span>{renter.Person[0].Gender}</span>
                    <p>Age</p>
                    <span>blabla</span>
                    <p>Country</p>
                    <span>blabla</span>
                    <div><Button variant="contained" color="primary">Edit</Button></div>
                </div>
                <div className={"containerRenter"}>
                    <div className={"currentContainer"}>
                        <div className={"curStatus"}>
                            <h1>Current status</h1>
                            <p>Looking for rent appetmant in NYC</p>
                        </div>
                        <div className={"curBud"}>
                            <h1>Cuurent budget</h1>
                            <p>{renter.Budget}</p>
                        </div>
                    </div>
                    <div className={"litMenu"}>
                        <Button variant="outlined" size="small">Asset in progress</Button>
                        <Button variant="outlined" size="small">Wish list</Button>
                        <Button variant="outlined" size="small" disabled>Chat with my owner</Button>
                    </div>
                    <div className={"progress"}>
                        <h1>Rent asset progress</h1>
                        <div>
                            <Stepper active orientation="vertical">
                                <Step >
                                    <StepLabel style={{fontFamily:'Lato'}}>Request recived</StepLabel>
                                    <StepContent>
                                    <Typography style={{fontFamily:'Lato'}}>The owner of your wantes asset saw your reques and will be in touch soon</Typography>
                                    <Button onClick={handleAssetDeatils} variant="contained" color="primary" size="small">Asset deatils</Button>
                                        <Button variant="contained" color="primary" onClick={handleAssetPlaceDeatils} size="small"> Asset place deatils</Button>
                                    </StepContent>
                                </Step>
                                <Step active>
                                    <StepLabel style={{fontFamily:'Lato'}}>Asset rentering in proccess</StepLabel>
                                    <StepContent>
                                    <Typography style={{fontFamily:'Lato'}}>You can talk anytime you want with the owner in the chat and review on tour contract now</Typography>
                                        <Button onClick={handleChat} variant="contained" color="primary" size="small">Chat</Button>
                                        <Button onClick={handleContract} variant="contained" color="primary" size="small">Contract</Button>
                                    </StepContent>
                                </Step>
                                <Step >
                                    <StepLabel style={{fontFamily:'Lato'}}>Enjoy in your new journey!</StepLabel>
                                    <StepContent>
                                    <Typography style={{fontFamily:'Lato'}}></Typography>
                                    <Button onClick={handleChat} variant="contained" color="primary" size="small">Chat</Button>
                                        <Button onClick={handleContract} variant="contained" color="primary" size="small">Contract</Button> // change buttons actions
                                            Asset place deatils
                                    </StepContent>
                                </Step>
                            </Stepper>
                            </div>
                        </div>
                     </div>
                </div>
		</div>
	);

}


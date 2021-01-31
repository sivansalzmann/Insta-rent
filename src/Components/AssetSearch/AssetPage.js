import { useState } from 'react';
import Button from '@material-ui/core/Button';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StreetviewIcon from '@material-ui/icons/Streetview';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import './AssetPage.css';
import imgAsset from './Media/house.jpg';
import PopUp from '../All/PopUp';


const userId = '5'; //change to login

export default function AssetPage(props) {
  const [open, setOpen] = useState(false);

  const handleOwner = () => {
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
        <Button variant="outlined" color="primary" onClick={() => setOpen(true)} style={{margin:'2%'}}>Show deatils</Button>
        <Button variant="outlined" color="primary" style={{margin:'2%'}} onClick={handleClickWishList}>Save for later</Button>
      </div>
        <PopUp onSubmit={handleOwner} WantAsset={true} title={props.item.Country} open={open} closePopup={() => setOpen(false)}>
          <div className={"rowDeacImg"}>
            <span>
              <h3>{props.item.City}</h3>
              {props.item.Description}
            </span>
            <img src={imgAsset} alt="Asset"/>
          </div>
            <div className={"rowDetlails"}>
              <StreetviewIcon/>
              {props.item.Street}
              <ConfirmationNumberIcon/>
              {props.item.Zip}
              <LocationCityIcon/>
              {props.item.Neighborhood}
              <AspectRatioIcon/>
              {props.item.SquareFeet} m^2
            </div>
            <div className={"moreDeatils"}>
              <span>The condition is {props.item.Condition}</span>
              <span>${props.item.Price}/month (include charges)</span>
              <span>Avaliable from {props.item.Avilability}</span>
            </div>
        </PopUp>
    </div>
  );
}
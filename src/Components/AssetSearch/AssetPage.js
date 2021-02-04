import { useState } from 'react';
import Button from '@material-ui/core/Button';
import AssetDeatils from '../All/AssetDeatils';
import './AssetPage.css';
import PopUp from '../All/PopUp';


const userId = '5'; //change to login

export default function AssetPage(props) {
  const [open, setOpen] = useState(false);

  const wantIt = () => {
    const body={RenterId: userId}
    fetch(`https://instarent-1st.herokuapp.com/api/assets/${props.item.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
          .then(response => response.json())
          .then(result => { //add message
              // alert("The owner will contact with you soon as possible")
          })
   };

  return (
    <div>
      <div className={"buttonsAssets"}>
        <Button variant="outlined" color="primary" onClick={() => setOpen(true)} style={{margin:'2%'}}>Show deatils</Button>
        <Button variant="outlined" color="primary" style={{margin:'2%'}} onClick={wantIt()}>I wnat this asset</Button>
      </div>
        <PopUp onSubmit={() => setOpen(false)} WantAsset={true} title={props.item.Country} open={open} closePopup={() => setOpen(false)}>
            <AssetDeatils item={props.item} />
        </PopUp>
    </div>
  );
}
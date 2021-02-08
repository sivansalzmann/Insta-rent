import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import AssetDeatils from '../Asset/AssetDeatils';
import PopUp from '../All/PopUp';

const userId = 2; //change to login

export default function AssetPage(props) {

  const [open, setOpen] = useState(false);
  const [asset, setAsset] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/assets?RenterId=${userId}`)
      .then(response => response.json())
      .then(result =>  {
        setAsset(result)
      })    
  },)

  const wantIt = () => {
    console.log(userId)
    const body={RenterId: userId}
    fetch(`https://instarent-1st.herokuapp.com/api/assets/${props.item.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
          .then(response => response.json())
          .then(result => { 
              alert("The owner will contact with you soon as possible")
              window.location.reload()
          })
    };

    const haveAsset = () => {
      if(asset == "") {
        return (
          <Button variant="outlined" color="primary" style={{margin:'2%'}} onClick={() => wantIt()}>I wnat this asset</Button>
        )
      }
      else {
        return (
          <Button variant="outlined" color="primary" style={{margin:'2%'}} onClick={() => wantIt()} disabled>I wnat this asset</Button>
        )
      }
    }
    
  return (
    <div>
      <div className={"buttonsAssets"}>
        <Button variant="outlined" color="primary" onClick={() => setOpen(true)} style={{margin:'2%'}}>Show deatils</Button>
        {/* <Button variant="outlined" color="primary" style={{margin:'2%'}} onClick={() => wantIt()}>I wnat this asset</Button> */}
        {haveAsset()}
      </div>
        <PopUp onSubmit={() => setOpen(false)} WantAsset={true} title={props.item.Country} open={open} closePopup={() => setOpen(false)}>
            <AssetDeatils item={props.item} />
        </PopUp>
    </div>
  );
}
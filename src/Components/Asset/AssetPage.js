import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import AssetDeatils from '../Asset/AssetDeatils';
import PopUp from '../All/PopUp';
import {useHistory} from "react-router-dom";

export default function AssetPage(props) {
  let history = useHistory();

  const [open, setOpen] = useState(false);
  const [asset, setAsset] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/assets?RenterId=${props.renterId}`)
      .then(response => response.json())
      .then(result =>  {
        setAsset(result)
      })    
  },)

  const wantIt = () => {
    const body={RenterId: props.renterId}
    fetch(`https://instarent-1st.herokuapp.com/api/assets/${props.item.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(result => { 
          let path = '/Renter'
          alert("The owner will contact with you soon as possible")
          history.push({
            pathname: path,
            user: result
          })
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
        {haveAsset()}
      </div>
        <PopUp onSubmit={() => setOpen(false)} WantAsset={true} title={props.item.Country} open={open} closePopup={() => setOpen(false)} showBt={true}>
            <AssetDeatils item={props.item} />
        </PopUp>
    </div>
  );
}
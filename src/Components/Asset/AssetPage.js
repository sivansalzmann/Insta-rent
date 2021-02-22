import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import AssetDeatils from '../Asset/AssetDeatils';
import PopUp from '../All/PopUp';
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function AssetPage(props) {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [asset, setAsset] = useState("");
  const [cookies] = useCookies(['user']);

  useEffect(() => {
    fetch(`https://instarent-1st.herokuapp.com/api/assets?RenterId=${cookies.user.id}`, {credentials: 'include'})
      .then(response => response.json())
      .then(result =>  {
        setAsset(result)
      })    
  },[cookies.user.id,asset])
  const wantIt = () => {
    const body={RenterId: cookies.user.id}
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
      if(asset.length < 0) {
        return (
          <Button variant="outlined" color="primary" style={{margin:'2%'}} onClick={() => wantIt()} disabled>I wnat this asset</Button>
        )
      }
      else {
        return (
          <Button variant="outlined" color="primary" style={{margin:'2%'}} onClick={() => wantIt()}>I wnat this asset</Button>
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
import React, {useEffect, useState} from 'react';
import './AddAsset.css';
import { Button } from '@material-ui/core';

export default function AssetDelete(props) {
    const [asset, setAsset] = useState("");

	useEffect(() => {
		fetch(`http://localhost:3000/api/assets/${props.idAsset}`)
		.then(response => response.json())
		.then(result =>  {
			setAsset(result)
		})  
	},)
  
    const deleteAsset = () => {
		fetch(`http://localhost:3000/api/assets/${asset.id}`, {
		method: 'DELETE',
		})
		.then(response => response.json())
		.then(result => {})
	}
  return (
    <div className={"deleteAssetContainer"}>
        <Button variant="contained" color="primary" className={"but"} onClick={deleteAsset}>DELETE</Button>
   </div>
  );
}
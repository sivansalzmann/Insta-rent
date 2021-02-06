import React, {useEffect, useState} from 'react';
import './AddAsset.css';

import { Button } from '@material-ui/core';

export default function AssetDelete(props) {
    const [asset, setAsset] = useState("");

	useEffect(() => {
		console.log(props.idAsset)
		fetch(`http://localhost:3000/api/assets/${props.idAsset}`)
		  .then(response => response.json())
		  .then(result =>  {
			console.log(result)
			setAsset(result)
		  })
		  
		}, [])
  
    const deleteAsset = () => {
        console.log(props.idAsset);
		fetch(`http://localhost:3000/api/assets/${asset.id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(result => {
				console.log(result)
				// window.location.reload()
			})
	}

  return (
    <div className={"deleteAssetContainer"}>
        <Button variant="contained" color="primary" className={"but"} onClick={deleteAsset}>DELETE</Button>
   </div>
  );
}
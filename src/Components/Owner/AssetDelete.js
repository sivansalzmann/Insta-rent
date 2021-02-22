import React, {useEffect, useState} from 'react';
import './AddAsset.css';
import { Button } from '@material-ui/core';

export default function AssetDelete(props) {
    const [asset, setAsset] = useState("");

	useEffect(() => {
		fetch(`https://instarent-1st.herokuapp.com/api/assets/${props.idAsset}`)
		.then(response => response.json())
		.then(result =>  {
			setAsset(result)
		})  
	},[props.idAsset,asset])
    const deleteAsset = () => {
		fetch(`https://instarent-1st.herokuapp.com/api/assets/${asset.id}`, {
		method: 'DELETE',
		})
		.then(response => response.json())
		.then(result => {})
	}
	return (
		<div className={"deleteAssetContainer"}>
			<Button variant="contained" color="primary" className={"but"} onClick={deleteAsset}>Delete</Button>
	</div>
  );
}
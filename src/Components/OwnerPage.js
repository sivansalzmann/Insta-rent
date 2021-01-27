import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import AssetList from './AssetsList';
import AssetAddForm from './AssetAddForm';


export default function OwnerPage(props) {

    return (
        <>
        <div className={'navBar'}>
				<div className={'navBarInsideWhite'}>
					<h1>InstaRent</h1>
				</div>
				<ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#">SEARCH</a></li>
					<li><a href="#">APPERTMANTS</a></li>
					<li><a href="#">PROFILE</a></li>
				</ul>
            </div>
			<h1>Your assets</h1>
        <AssetList assets={ props.assets }></AssetList>   
		<AssetAddForm></AssetAddForm>
        </>
    );
}
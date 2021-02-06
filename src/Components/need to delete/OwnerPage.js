
import React, { useEffect, useState } from 'react';
import AssetList from '../HomePage/AssetsList';
import { Link } from 'react-router-dom';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import OwnerAssetsList from './OwnerAssetsList';
import RenterList from './RenterList';
import TextField from '@material-ui/core/TextField';
import PopUp from '../All/PopUp';

const ownerId = 6;
const OwnerPage = (props) => {
	// const [items, setItems] = useState(AssetsData.items);
	const [editing, setEditing] = useState(false);
	const [itemToEdit, setItemToEdit] = useState(null);
	// const [ownerId,setOwnerId] = useState("");
	const [ownerAssetsList, setOwnerAssetsList] = useState([]);
	const [renterNumb, setRenterNumb] = useState([]);


	useEffect(() => {
		fetch(`https://instarent-1st.herokuapp.com/api/assets?OwnerId=${ownerId}`)
			.then(response => response.json())
			.then(result => {
				setRenterNumb(result)
				setOwnerAssetsList(result)
			})

	}, [])

	const editAsset = (assetId) => {
		// fetch(`https://instarent-1st.herokuapp.com/api/assets/${assetId}`, {
		// 	method: 'PUT',
		// 	body: JSON.stringify(),
		// headers: {'Content-Type': 'application/json'},
		// })
		// 	.then(response => response.json())
		// 	.then(result => {
		// 		setAsset(result)
		// 	})
		console.log(assetId)
	}


	const deleteAsset = (assetId) => {
		fetch(`https://instarent-1st.herokuapp.com/api/assets/${assetId}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(result => {
				console.log(result)
				window.location.reload()
			})
		// setItems(prevState => ({
		// 	items: prevState.items.filter(item => item.id !== target)
		// }))
		console.log(assetId)
	}

	// const editItem = (id) => {
	// 	const item = this.state.items.filter(item => item.id === id)[0];
	// 	setEditing(() => ({
	// 		editing: true,
	// 		itemToEdit: item
	// 	}));
	// }

	// const showAsset = (id) => {
	// 	const item = this.state.items.filter(item => item.id === id)[0];
	// 	console.log(item);
	// }

	// add(item) {
	// 	this.setState(prevState => ({
	// 		items: [
	// 			...prevState.items, {
	// 				id: this.nextId(prevState.items),
	// 				date: item.date,
	// 				location: item.location,
	// 				client: item.client
	// 			}]
	// 	}))
	// }

	// update(updatedItem) {
	// 	this.setState(prevState => ({
	// 		items: prevState.items.map(
	// 			item => item.id === this.state.itemToEdit.id ? { id: item.id, client: updatedItem.client, date: updatedItem.date, location: updatedItem.location } : item
	// 		),
	// 		editing: false,
	// 		itemToEdit: null
	// 	}));
	// }

	// const nextId = (items = []) => {
	// 	let max = items.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
	// 	return ++max;
	// }

	const onAddAsset = (data) => {
		console.log(data)
	}
	// const onChange = () => {
	// 	setCountry("");
	// 	setCity("");
	// 	setNeighborhood("");
	// 	setStreet("");
	// 	setZip("");
	// 	setSquareFeet("");
	// 	setRooms("");
	// 	setCondition("");
	// 	setParking("");
	// 	setElevator("");
	// 	setPetsAllowed("");
	// 	setPrice("");
	// 	setAvilability("");
	// 	setDescription("");
	// }

	return (
		<>
			<div className={"renterMainPage"}>
				<div className={"navBar"}>
					<h1><Link to={{ pathname: "/" }}>InstaRent</Link></h1>
					<ul>
						<li><Link to={{ pathname: "/" }}>HOME</Link></li>
						<li><Link to={{ pathname: "/" }}>APPERTMANTS</Link></li>
						<li><Link to={{ pathname: "/" }}>PROFILE</Link></li>
					</ul>
				</div>
				<div className="wrapper">
					<h1>Youe Assets</h1>
					<Link to={{ pathname: "/AssetAddForm", submit: onAddAsset }}>
						<AddCircleIcon className="plus" />
					</Link>
					<OwnerAssetsList ownerAssetsList={ownerAssetsList} onClickEdit={editAsset} onClickDelete={deleteAsset} />
					<h1>Your assets in proccess</h1>
					<RenterList renterNumb={renterNumb} />
					{/* <PopUp onSubmit={() => editAsset(false)} title={"Edit Asset"} open={open} closePopup={() => setOpen(false)}>
						<div><TextField className="input" label="Country" size="large" onChange={(event) => setCountry(event.target.value)} value={country} name="Country" /></div>
						<div><TextField className="input" label="City" size="large" onChange={(event) => setCity(event.target.value)} value={city} name="City" /></div>
						<div><TextField className="input" label="Neighborhood" size="large" onChange={(event) => setNeighborhood(event.target.value)} value={neighborhood} name="Neighborhood" /></div>
						<div><TextField className="input" label="Street" size="large" onChange={(event) => setStreet(event.target.value)} value={street} name="Street" /></div>
						<div><TextField className="input" label="Zip" size="large" onChange={(event) => setZip(event.target.value)} value={zip} name="Zip" /></div>
						<div><TextField className="input" label="SquareFeet" size="large" onChange={(event) => setSquareFeet(event.target.value)} value={squareFeet} name="SquareFeet" /></div>
						<div><TextField className="input" label="Rooms" size="large" onChange={(event) => setRooms(event.target.value)} value={rooms} name="Rooms" /></div>
					</PopUp> */}
				</div>


			</div>
		</>
	)



}

export default OwnerPage;

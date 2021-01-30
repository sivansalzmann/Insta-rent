import react, { useState, useEffect } from "react";
// import AssetsData from '../Data/AssetsData.json';
import AssetList from './AssetsList';
import { Link } from 'react-router-dom';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const ownerId = 9;
const OwnerPage = (props) => {
	// const [items, setItems] = useState(AssetsData.items);
	const [editing, setEditing] = useState(false);
	const [itemToEdit, setItemToEdit] = useState(null);
	// const [ownerId,setOwnerId] = useState("");
	const [assetsList,setAssetList] = useState([]);

	useEffect(() => {
        fetch(`https://instarent-1st.herokuapp.com/api/assets?OwnerId=${ownerId}`)
            .then(response => response.json())
            .then(result => {
                setAssetList(result)})
    }, [])

	

	// const deleteOwner = (target) => {
	// 	setItems(prevState => ({
	// 		items: prevState.items.filter(item => item.id !== target)
	// 	}))
	// }

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

	// const onAddAsset = (data) => {
	// 	console.log(data)
	// }

	return (
		<>
			<div className={"renterMainPage"}>
				<div className={"navBar"}>
					<h1><Link to={{ pathname: "/"}}>InstaRent</Link></h1>
					<ul>
						<li><Link to={{ pathname: "/"}}>HOME</Link></li>
						<li><Link to={{ pathname: "/"}}>APPERTMANTS</Link></li>
						<li><Link to={{ pathname: "/"}}>PROFILE</Link></li>
					</ul>
				</div>
				<div className="wrapper">
					<h1>Youe Assets</h1>
					<Link to={{ pathname: "/AssetAddForm", submit: onAddAsset }}>
						<button className="plus">
							Plus
					</button>
					</Link>
					<AssetList assetsList={assetsList} />
					<h1>Your assets in proccess</h1>
					<div className="inProList">
						<MessageOutlinedIcon/>
						<EditOutlinedIcon/>
						<DeleteOutlineIcon/>
					</div>
				</div>

				
			</div>
		</>
	)



}

export default OwnerPage;

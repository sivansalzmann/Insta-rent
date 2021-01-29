// import { useState, useEffect } from 'react';
// import AssetsData from '../Data/AssetsData.json';
// import AssetList from './AssetsList';
// import AssetAddForm from './AssetAddForm'
// import { Link } from 'react-router-dom';


// const OwnerPage = (props) => {
// 	const [items, setItems] = useState(AssetsData.items);
// 	const [editing, setEditing] = useState(false);
// 	const [itemToEdit, setItemToEdit] = useState(null);




// 	const deleteOwner = (target) => {
// 		this.setState(prevState => ({
// 			items: prevState.items.filter(item => item.id !== target)
// 		}))
// 	}

// 	const editItem = (id) => {
// 		const item = this.state.items.filter(item => item.id === id)[0];
// 		this.setState(() => ({
// 			editing: true,
// 			itemToEdit: item
// 		}));
// 	}

// 	const showAsset = (id) => {
// 		const item = this.state.items.filter(item => item.id === id)[0];
// 		console.log(item);
// 	}

// 	// add(item) {
// 	// 	this.setState(prevState => ({
// 	// 		items: [
// 	// 			...prevState.items, {
// 	// 				id: this.nextId(prevState.items),
// 	// 				date: item.date,
// 	// 				location: item.location,
// 	// 				client: item.client
// 	// 			}]
// 	// 	}))
// 	// }

// 	// update(updatedItem) {
// 	// 	this.setState(prevState => ({
// 	// 		items: prevState.items.map(
// 	// 			item => item.id === this.state.itemToEdit.id ? { id: item.id, client: updatedItem.client, date: updatedItem.date, location: updatedItem.location } : item
// 	// 		),
// 	// 		editing: false,
// 	// 		itemToEdit: null
// 	// 	}));
// 	// }

// 	const nextId = (items = []) => {
// 		let max = items.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
// 		return ++max;
// 	}

// 	const onAddAsset = (data) => {
// 		console.log(data)
// 	}

// 	return (
// 		<>
// 			<div className={"renterMainPage"}>
// 				<div className={"navBar"}>
// 					<h1><a href="#">InstaRent</a></h1>
// 					<ul>
// 						<li><a href="#">HOME</a></li>
// 						<li><a href="#">APPERTMANTS</a></li>
// 						<li><a href="#">PROFILE</a></li>
// 					</ul>
// 				</div>
// 				<div>
// 					<Link to={{ pathname: "/AssetAddForm", submit: this.onAddAsset }}>
// 						<button className="plus">
// 							Plus
// 					</button>
// 					</Link>
// 				</div>

// 				<AssetList />
// 			</div>
// 		</>
// 	)



// }

// export default OwnerPage;
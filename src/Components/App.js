import { Component } from 'react';
// import AssetsData from '../Data/AssetsData.json';
import AssetSearchForm from './AssetSearchForm';

class App extends Component {

    constructor() {
		super()
		this.state = {
			// items: AssetsData.items,
			editing: false,
			itemToEdit: null,
        }

    }

    // const [assets,setAssets] = useState([]);

    // useEffect(() => {
    //     const loadAssets = AssetsData.map(asset => ({ 
    //         id: asset.id, 
    //         city: asset.City,
    //         street: asset.Street, 
    //         neighborhood:asset.Neighborhood,
    //         zip: asset.Zip,
    //         country: asset.Country,
    //         rooms: asset.Rooms,
    //         squareFeet: asset.SquareFeet,
    //         floors: asset.Floors,
    //         parking: asset.Parking,
    //         elevator: asset.Elevator,
    //         petsAllowed: asset.PetsAllowed,
    //         condition: asset.Condition,
    //         price: asset.Price,
    //         avilability: asset.Avilability,
    //         description: asset.Description,
    //         want: asset.Want,
    //         ownerId: asset.OwnerId,
    //         renterId: asset.RenterId
    //      }));
    //     return setAssets(loadAssets);
    // }, []);

    // componentDidMount () {
    //     const that = this;
    //     let data = [];
    //     async function fetchData() {
    //         try {
    //             data = await fetch("http://localhost:3000/api/assets ")
    //         .then(res => res.json());
    //         } catch(err) {
    //             console.log(`Error while fetching data from server: ( ${err})`);
    //         }
    //         // data.map(item => that.add({id: item.id, txt: item.idea, grp: item.group}));
    //     }
    //     fetchData();
    // }
    
    
       

    // editAsset (newAsset, i) {
    //     setAssets(prevState => prevState.map(data => data.id !== i ? data : { ...data, asset: newAsset }));
    // };

    // deleteAsset = (id) => {
    //     setAssets(prevState => prevState.filter(asset => asset.id !== id));
    // };

    // const showAsset = (id) => {
    //     console.log(assets.map(eachItem)[id]);
    //     return (<div> { assets.map(eachItem)[id] } </div>);
    // };

    // nextID = (assets = []) => {
    //     let max = assets.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
    //     return ++max;
    // };

    render() {
        return (
                <>
                    <div className={'background'}>
                <div className={'navBarHomePage'}>
                    <h1><a href="/">InstaRent</a></h1>
                    <h2><a href="/Login">SIGN IN/SIGN UP</a></h2>
                </div>
                <div className={"homePageContainer"}>
                    <div className={"choiseRenterOwner"}>
                        <ul>
                            <li><a href="/HomePageRenter" style={{textDecoration: 'underline'}}>I'm a Renter</a></li>
                            <li><a href="/">I'm a owner</a></li>
                        </ul>
                    </div>
                    <h1 className={"headLineHomePage"}>Looking for apartment</h1>
                    <p className={"pHomePage"}>Search apartments by neighborhood, price, amenity, and more</p>	 
                    <AssetSearchForm data={this.data} />
                </div>
            </div>
                </>
            )
    }


}

export default App;


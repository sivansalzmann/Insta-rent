import { useState } from 'react';
import AssetCard from './AssetCard';
import AssetList from './AssetsList';

export default function AssetSearchForm(props) {
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [assetsList,setAssetList] = useState([]);


    const onSubmit = () => {
        fetch(`http://localhost:3000/api/assets?City=${city}&Country=${country}&Avilability=${date}`)
            .then(response => response.json())
            .then(result => setAssetList(result))
    }

    const eachItem = item => {
        return (<AssetCard key={item.id} item={item} />)
    }
    // const list = () => {
    //     return <AssetList assetsList={assetsList} />
    // }


    return (
            <div className={ 'assetSearchForm' }>
                <form noValidate autoComplete="off">
                    <input type="text" style={{borderRadius: "20px 0px 0px 20px",borderLeft: "1px red"}} name="date" onChange={ (event) => setDate(event.target.value) } value={ date } placeholder="Arrival date" />
                    <input type="text" name="country" onChange={ (event) => setCountry(event.target.value) } value={ country } placeholder="Country" /> 
                    <input type="text" name="city" value={ city } onChange={ (event) => setCity(event.target.value) } placeholder="City" /> 
                    <input type="button" value={"search"} style={{borderRadius: "0px 20px 20px 0px"}} onClick={ onSubmit } />
                </form>
                {assetsList.map(eachItem)}
            </div>
        )
}

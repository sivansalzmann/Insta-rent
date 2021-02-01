import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StreetviewIcon from '@material-ui/icons/Streetview';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import './AssetDeatils.css';
import imgAsset from './Media/house.jpg';

export default function AssetPage(props) {

  return (
    <div>
        <div className={"rowImg"}>
            <h3>{props.item.City}</h3>
            <p>{props.item.Description}</p>
            </div>
        <div className={"image"}>
            <img src={imgAsset} alt="Asset"/>
        </div>
        <div className={"rowDetlails"}>
            <div>
                <StreetviewIcon/>
                <p>{props.item.Street}</p>
            </div>
            <div>
                <ConfirmationNumberIcon/>
                <p>{props.item.Zip}</p>
            </div>
            <div>
                <LocationCityIcon/>
                <p>{props.item.Neighborhood}</p>
            </div>
            <div>
                <AspectRatioIcon/>
                <p>{props.item.SquareFeet} m^2</p>
            </div>
        </div>
        <div className={"moreDeatils"}>
            <span>${props.item.Price}/month <br/>(include charges)</span>
        </div>
    </div>
  );
}
import {CDN_URL} from "../utils/constants.js";
const ResturantCard = (props) =>{ 
    const {resData} = props;
    // console.log(resData.info);
    // console.log(props);
    const {name, cuisines, avgRating, costForTwo, locality, cloudinaryImageId} = resData?.info;
    cuisineList = cuisines.join(", ")
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-img" src={CDN_URL+cloudinaryImageId}/>
            
            <h3>{name}</h3>
            <h4>{cuisineList}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export default ResturantCard;
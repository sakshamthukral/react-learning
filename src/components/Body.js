import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
// import apiResponse from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
// State Variable - Super powerful variable that can change the UI when it's value changes => Hooks
// resturants = apiResponse[0].data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants;
const [listOfResturants, setListOfResturant] = useState([]); // array destructing on the fly. We can normally get it into an array 'arr' and then access values in as arr[0] and arr[1] as well.

// Another state variable that will store the filtered resturants
const [filteredResturants, setFilteredResturants] = useState([]);

useEffect(()=>{
  fetchData();
},[]);

console.log("Body Rendered");
async function fetchData() {
  const url = "https://corsproxy.io/?https://www.swiggy.com/api/seo/getListing?lat=30.730231845869277&lng=76.77189049002534";
  const payload = {
    "isFiltered": true,
    "facets": {
        "deliveryTime": [
            {
                "value": "deliveryTimefacetquery1"
            }
        ]
    },
    "seoParams": {}
  };

  try {
      const response = await fetch(url, {
          method: 'POST',
          // headers: {
          //     'Content-Type': 'application/json'
          // },
          body: JSON.stringify(payload)
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // setListOfResturant(data);
      // console.log(data);
      resturants = data.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      console.log(resturants);
      setListOfResturant(resturants);
      setFilteredResturants(resturants);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

const[searchText, setSearchText] = useState("");

// Conditional Rendering
// if(listOfResturants.length === 0) {
//   return <Shimmer />
// } Did the same thing using ternary operator below

// console.log(listOfResturants);
  return listOfResturants.length === 0 ? (<Shimmer />) : (
      <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" placeholder="Search Resturants" value={searchText} onChange={(event)=>{
                setSearchText(event.target.value);
              }}/>
              <button onClick={()=>{
                // Filter the resturant cards and update the UI
                // searchText
                console.log(searchText);
                const filteredResults = listOfResturants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                // console.log(filteredResturants);
                setFilteredResturants(filteredResults);
              }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
              const filteredList = listOfResturants.filter(res=>res.info.avgRating>4.5);
              console.log(listOfResturants);
              setFilteredResturants(filteredList);
            }}>Top Rated Resturants</button>
          </div>
          <div className="res-container">
            {filteredResturants.map((resturant) => (<ResturantCard key={resturant.info.id} resData={resturant} />))}
          </div>
      </div>
    )
  }

export default Body;
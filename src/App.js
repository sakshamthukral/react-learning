import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const resObj = {
//   "type": "restaurant",
//   "info": {
//     "resId": 19275390,
//     "name": "Aurah",
//     "image": {
//       "url": "https://b.zmtcdn.com/data/pictures/0/19275390/2513953e531ea15619e796c3a6a91a59_featured_v2.jpg",
//       "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/19275390/2513953e531ea15619e796c3a6a91a59_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
//     },
//     "o2FeaturedImage": {
//       "url": "https://b.zmtcdn.com/data/pictures/chains/0/19275390/a2b5021488d3d8ed23e8a0e0c16837f8_o2_featured_v2.jpg"
//     },
//     "rating": {
//       "has_fake_reviews": 0,
//       "aggregate_rating": "4.3",
//       "rating_text": "4.3",
//       "rating_subtitle": "Very Good",
//       "rating_color": "5BA829",
//       "votes": "1,032",
//       "subtext": "REVIEW",
//       "is_new": false
//     },
//     "ratingNew": {
//       "newlyOpenedObj": null,
//       "suspiciousReviewObj": null,
//       "ratings": {
//         "DINING": {
//           "rating_type": "DINING",
//           "rating": "4.5",
//           "reviewCount": "353",
//           "reviewTextSmall": "353 Reviews",
//           "subtext": "353 Dining Reviews",
//           "color": "#1C1C1C",
//           "ratingV2": "4.5",
//           "subtitle": "DINING",
//           "sideSubTitle": "Dining Ratings",
//           "bgColorV2": {
//             "type": "green",
//             "tint": "800"
//           },
//           "newOnDining": false
//         },
//         "DELIVERY": {
//           "rating_type": "DELIVERY",
//           "rating": "4.0",
//           "reviewCount": "679",
//           "reviewTextSmall": "679 Reviews",
//           "subtext": "679 Delivery Reviews",
//           "color": "#E23744",
//           "ratingV2": "4.0",
//           "subtitle": "DELIVERY",
//           "sideSubTitle": "Delivery Ratings",
//           "bgColorV2": {
//             "type": "green",
//             "tint": "700"
//           },
//           "newOnDelivery": false
//         }
//       }
//     },
//     "cft": {
//       "text": "₹1,000 for two"
//     },
//     "cfo": {
//       "text": "₹600 for one"
//     },
//     "locality": {
//       "name": "Ranjit Avenue, Amritsar",
//       "address": "Nagpal Tower 1, SCO 128, Near Vishal Mega Mart, Ranjit Avenue, Amritsar",
//       "localityUrl": "amritsar/ranjit-avenue-restaurants"
//     },
//     "timing": {
//       "text": "",
//       "color": ""
//     },
//     "cuisine": [
//       {
//         "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
//         "url": "https://www.zomato.com/amritsar/restaurants/continental/",
//         "name": "Continental"
//       },
//       {
//         "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//         "url": "https://www.zomato.com/amritsar/restaurants/chinese/",
//         "name": "Chinese"
//       },
//       {
//         "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//         "url": "https://www.zomato.com/amritsar/restaurants/north-indian/",
//         "name": "North Indian"
//       },
//       {
//         "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
//         "url": "https://www.zomato.com/amritsar/restaurants/thai/",
//         "name": "Thai"
//       },
//       {
//         "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
//         "url": "https://www.zomato.com/amritsar/restaurants/italian/",
//         "name": "Italian"
//       },
//       {
//         "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
//         "url": "https://www.zomato.com/amritsar/restaurants/asian/",
//         "name": "Asian"
//       }
//     ],
//     "should_ban_ugc": false,
//     "costText": {
//       "text": "₹1,000 for two"
//     }
//   },
//   "order": [],
//   "gold": {
//     "instant": 10,
//     "welcome_offer": false,
//     "gold_offer": false,
//     "text": "Flat",
//     "offerValue": "10% OFF",
//     "isGoldIcon": false
//   },
//   "takeaway": [],
//   "cardAction": {
//     "text": "",
//     "clickUrl": "/amritsar/aurah-1-ranjit-avenue/info",
//     "clickActionDeeplink": ""
//   },
//   "distance": "1.7 km",
//   "isPromoted": false,
//   "promotedText": "",
//   "trackingData": [
//     {
//       "table_name": "zsearch_events_log",
//       "payload": "{\"search_id\":\"a472bd22-1f3f-4027-bc19-60cf19031d7c\",\"location_type\":\"delivery_cell\",\"location_id\":\"4114430487827578880\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19275390\",\"element_type\":\"listing\",\"rank\":15}",
//       "event_names": {
//         "tap": "{\"action\":\"tap\"}",
//         "impression": "{\"action\":\"impression\"}"
//       }
//     }
//   ],
//   "allCTA": [],
//   "promoOffer": "",
//   "checkBulkOffers": false,
//   "bulkOffers": [],
//   "isDisabled": false,
//   "bottomContainers": []
// }

// props will be an object here with all the properties passed to the component

// const ResturantCard = ({resName, cuisine}) -> Another way of taking props is to destructure it in the argument itself


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
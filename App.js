import React from "react";
import ReactDOM from "react-dom";



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" />
            </div>
            <div className="nav-menu">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name,cuisines,starrating,deliveryTime } = resData?.data;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sidigb8zqjfrfpkrtqgl" />
            <h3 className="res-name">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{starrating} Stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

const resList = [
    {
        type: "restaurant",
        data: {
            id: "1212",
            name: "KFC",
            cuisines: ["Burgers", "Biryani"],
            starrating: "4.0",
            deliveryTime: "40 Mins"
        }
    },
    {
        type: "restaurant",
        data: {
            id: "2212",
            name: "Vasantha Bhavan",
            cuisines: ["Veg Meals", "Sweets"],
            starrating: "4.0",
            deliveryTime: "40 Mins"
        }
    },
    {
        type: "restaurant",
        data: {
            id: "3212",
            name: "Star Biryani",
            cuisines: ["Chicken Biryani"],
            starrating: "4.0",
            deliveryTime: "40 Mins"
        }
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
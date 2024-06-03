import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";

function FoodDisplay() {
  const { food_list,category } = useContext(StoreContext);

  // Filter food_list based on category
  const filteredFoodList = category === 'All' 
    ? food_list 
    : food_list.filter(item => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;

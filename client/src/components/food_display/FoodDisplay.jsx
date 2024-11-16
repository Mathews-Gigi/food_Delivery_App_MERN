import React, { useContext } from "react";
import classes from "./FoodDisplay.module.css";
import { StoreContext } from "../../context/store/StoreContext";
import FoodItem from "../food_item/FoodItem";
function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className={classes.food_display} id={classes.food_display}>
      <h2>Top dishes for you</h2>
      <div className={classes.food_display_list}>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                // category={item.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;

import React, { useContext } from "react";
import classes from "./FoodItem.module.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/store/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, removeFromCart, addTOCart } = useContext(StoreContext);
  return (
    <div className={classes.food_item}>
      <div className={classes.food_item_img_container}>
        <img className={classes.food_item_image} src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="white"
            className={classes.add}
            onClick={() => addTOCart(id)}
          />
        ) : (
          <div className={classes.food_item_counter}>
            <img
              src={assets.remove_icon_red}
              alt="remove"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="add"
              onClick={() => addTOCart(id)}
            />
          </div>
        )}
      </div>
      <div className={classes.food_item_info}>
        <div className={classes.food_item_name_rating}>
          <p>{name}</p>
          <img src={assets.rating_starts} alt={name} />
        </div>
        <p className={classes.food_item_desc}>{description}</p>
        <p className={classes.food_item_price}>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

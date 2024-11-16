import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { StoreContext } from "../../context/store/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  //3 : 23 vedio length / time
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className={classes.cart}>
      <div className={classes.cart_items}>
        <div className={classes.cart_items_title}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  className={`${classes.cart_items_title} ${classes.cart_items_item}`}
                >
                  <img src={item.image} alt="cart item image" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className={classes.cross}
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className={classes.card_bottom}>
        <div className={classes.card_total}>
          <h2>Card Totals</h2>
          <div>
            <div className={classes.card_total_details}>
              <p>Sub total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className={classes.card_total_details}>
              <p>delivery fee</p>
              <p>${getTotalCartAmount() ? 2 : 0}</p>
            </div>
            <hr />
            <div className={classes.card_total_details}>
              <b>Total</b>
              <b>${getTotalCartAmount() ? getTotalCartAmount() + 2 : 0}</b>
            </div>
          </div>
          <button onClick={() => navigate("/orders")}>CheckOut</button>
        </div>
        <div className={classes.card_promocode}>
          <div>
            <p>if you have a promo code enter here</p>
            <div className={classes.card_promocode_input}>
              <input type="text" placeholder="Enter your promo code." />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

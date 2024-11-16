import React from "react";
import classes from "./OrderPage.module.css";
import { StoreContext } from "../../context/store/StoreContext";
import { useContext } from "react";
function OrderPage() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <form className={classes.place_order}>
        <div className={classes.palce_order_left}>
          <p className={classes.title}>Delivery information</p>
          <div className={classes.multi_feild}>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="street" />
          <div className={classes.multi_feild}>
            <input type="text" placeholder="city" />
            <input type="text" placeholder="State" />
          </div>
          <div className={classes.multi_feild}>
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="phone" />
        </div>
        <div className={classes.palce_order_right}>
          <div className={classes.card_total}>
            <h2>Card Totals</h2>
            <div>
              <div className={classes.card_total_details}>
                <p>Sub total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <br />
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
            <button>Proced to payment</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default OrderPage;

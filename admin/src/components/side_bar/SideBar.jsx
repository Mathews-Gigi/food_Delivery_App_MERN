import React from "react";
import classes from "./SideBar.module.css";
import { assets } from "../../assets/admin_assets/assets";
const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_options}>
        <div className={classes.sidebar_option}>
          <img src={assets.add_icon} alt="add_icon" />
          <p>Add items</p>
        </div>
        <div className={classes.sidebar_option}>
          <img src={assets.order_icon} alt="order_icon" />
          <p>List items</p>
        </div>
        <div className={classes.sidebar_option}>
          <img src={assets.order_icon} alt="add_icon" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

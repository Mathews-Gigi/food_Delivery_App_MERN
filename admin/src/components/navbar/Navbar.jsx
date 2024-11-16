import React from "react";
import classes from "./Navbar.module.css";
import { assets } from "../../assets/admin_assets/assets.js";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src={assets.logo} alt="logo" className={classes.logo} />
      <img
        src={assets.profile_image}
        alt="logo 2"
        className={classes.profile}
      />
    </div>
  );
};

export default Navbar;

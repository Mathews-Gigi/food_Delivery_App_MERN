import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerContent}>
        <h2>Order your favourite food here</h2>
        <p>
          choose from a diverse menu featuring a delectable array of dishes with
          the finest ingredients and culinary expertises
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;

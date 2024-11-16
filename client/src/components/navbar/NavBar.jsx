import React, { useContext, useState } from "react";
import classes from "./NavBar.module.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/store/StoreContext";
const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className={classes.navBar}>
      <Link to="/">
        <img src={assets.logo} alt="App logo" className={classes.logo} />
      </Link>
      <ul className={classes.navBarMenu}>
        <Link
          to="/"
          className={menu === "home" ? classes.active : null}
          onClick={() => setMenu("home")}
        >
          home
        </Link>
        <a
          href="#exploreMenu"
          className={menu === "menu" ? classes.active : null}
          onClick={() => setMenu("menu")}
        >
          menu
        </a>
        <a
          href="#app_download"
          className={menu === "mobile-app" ? classes.active : null}
          onClick={() => setMenu("mobile-app")}
        >
          mobile app
        </a>
        <a
          href="#footer"
          className={menu === "contact-us" ? classes.active : null}
          onClick={() => setMenu("contact-us")}
        >
          contact us
        </a>
      </ul>
      <div className={classes.navBarRight}>
        <img src={assets.search_icon} alt="search icons" />
        <div className={classes.search_icon}>
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket" />
          </Link>
          <div className={getTotalCartAmount() ? `${classes.dot}` : ""}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default NavBar;

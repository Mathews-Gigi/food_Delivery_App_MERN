import React from "react";
import classes from "./Footer.module.css";
import { assets } from "../../assets/frontend_assets/assets";
function Footer() {
  return (
    <div className={classes.footer} id="footer">
      <div className={classes.footer_content}>
        <div className={classes.footer_content_left}>
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            id aperiam nulla ratione repellendus officiis magni architecto
          </p>
          <div className={classes.footer_social_icons}>
            <img src={assets.facebook_icon} alt="facebook_icon" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linked_in" />
          </div>
        </div>
        <div className={classes.footer_content_center}>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={classes.footer_content_right}>
          <h2>Get in touch</h2>
          <ul>
            <li>96888989898</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={classes.footer_copyright}>
        copyright 2024 Lorem, ipsum Lorem ipsum dolor sit amet consectetur !
      </p>
    </div>
  );
}

export default Footer;

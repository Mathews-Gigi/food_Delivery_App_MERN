import React from "react";
import classes from "./AppDownload.module.css";
import { assets } from "../../assets/frontend_assets/assets";
function AppDownload() {
  return (
    <div className={classes.app_download} id="app_download">
      <p>
        Foe better experince download <br />
        Tomato App
      </p>
      <div className={classes.app_download_platfoms}>
        <img src={assets.play_store} alt="play store" />
        <img src={assets.app_store} alt="app store" />
      </div>
    </div>
  );
}

export default AppDownload;

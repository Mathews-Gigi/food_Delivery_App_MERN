import React, { useState } from "react";
import classes from "./Home.module.css";
import Header from "../../components/header/Header";
import ExploreMenu from "../../components/explore/ExploreMenu";
import FoodDisplay from "../../components/food_display/FoodDisplay";
import AppDownload from "../../components/app_download/AppDownload";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/side_bar/SideBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar />
      </div>
    </div>
  );
};

export default App;

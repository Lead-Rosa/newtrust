import React from "react";
import "../css/home.css";
import Main from "../components/Main";
import Cards from "../components/Cards";
import Counts from "../components/Counts";

function Home() {
  return (
    <div className="home-main-div">

      <Main />
      <Cards />
      <Counts />
    </div>
  );
}

export default Home;

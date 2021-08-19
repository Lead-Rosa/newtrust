import React from "react";
import classes from "../css/FoundationStyles.module.css";
import { Fade } from "react-awesome-reveal";
import Slide from "../components/Slide";
import img1 from "../img/pro2.jpg";
import image3 from "../img/open_img2.jpg";
import svg from "../img/svg/adoption.svg";
import svg2 from "../img/svg/plant.svg";
import svg3 from "../img/svg/avatar.svg";
import { MainAbout } from "./Homepage/MainAbout";
import image1 from "../img/svg/work2.jpg";
import Environment from "./Environment";

function Main() {
  return (
    <div className={classes.main}>
      <Slide />
      <MainAbout />
      <Environment />
    </div>
  );
}

export default Main;

import React from "react";
import classes from '../css/FoundationStyles.module.css';
import { Fade } from "react-awesome-reveal";
import img1 from "../img/pro2.jpg";
import Slide_img_Res from "../components/Slide_img_Res";
import "../css/about.css";
import "../css/main.css";

function Main() {
  return (
    <div id="main">
      <Slide_img_Res />
      <div className={classes.ceo_div}>
       
        <div className={classes.main_about_container}>
        <Fade direction="left">
          <img  id="main"  src={img1} className={classes.main_ceo_img}alt="" />
          </Fade>
          <Fade direction="right">
          <div className={classes.main_ceo_container_div}>
            <h2 className={classes.main_ceo_name}>Wiberto Blanc</h2>
            <h5 className={classes.main_ceo_tag}>CEO of Org</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
          </div>
          </Fade>
        </div>
        
      </div>
      <div className={classes.sec_div}>
        <div className={classes.main_sec_div}>
          <Fade direction="down">
          <h1 className={classes.main_heading}>Who we are</h1>
          </Fade>
          <div className={classes.main_container}>
          <Fade damping delay={100} >
            <div className={classes.sec_sub_div}>
            <h2 className={classes.main_h2_1}>Our Envi</h2>
            <p className={classes.main_p_1}>
              <strong>Lorem Ipsum </strong> is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
              <strong>It was popularised </strong>in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>
            </div>
            {/* </Fade>
            <Fade triggerOnce direction="left" delay={300}> */}
            <div  className={classes.sec_sub_div_2}>
            <h2 className={classes.main_h2}>Missions</h2>
            <p className={classes.main_p}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45
              BC,cilisis imperdiet diam in faucibus. Quisque et arcu quis turpis
              placerat venenatis. Vestibulum ante ipsum primis in faucibus orci
              luct making it over 2000 years old.
              <strong>Richard McClintock</strong>, a Latin professor at
              <strong>Hampden-Sydney College</strong> in Virginia, looked up one
              of the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source..
            </p>
            </div>
            {/* </Fade>
            <Fade triggerOnce direction="left" delay={400}> */}
            <div className={classes.sec_sub_div}>
            <h2 className={classes.main_h2}>Future</h2>
            <p className={classes.main_p}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of
              <strong>over 200 Latin words</strong>, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable.
            </p>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

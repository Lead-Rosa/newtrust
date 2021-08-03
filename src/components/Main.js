import React from "react";
import classes from "../css/FoundationStyles.module.css";
import { Fade} from "react-awesome-reveal";
import Slide from '../components/Slide';
import img1 from "../img/pro2.jpg";
import image3 from "../img/open_img2.jpg";
import svg from '../img/svg/adoption.svg'
import svg2 from '../img/svg/plant.svg'
import svg3 from '../img/svg/avatar.svg'

function Main() {
  return (
    <div className={classes.main}>
             <img className={classes.slide_image} src={image3} alt="" />
      <Slide />
      <div className={classes.ceo_div}>
        <div className={classes.main_about_container}>
          <Fade direction="left">
            <img id="main" src={img1} className={classes.main_ceo_img} alt="" />
          </Fade>
          <Fade direction="right">
            <div className={classes.main_ceo_container_div}>
              <h2 className={classes.main_ceo_name}>Wiberto Blanc</h2>
              <h5 className={classes.main_ceo_tag}>CEO of Org</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className={classes.goals}>
        <div >
        <h2 className={classes.goals_heading}>Our goals</h2>
      <div className={classes.sub_goals}>
            <div className={classes.sub_goals_div}>
            <div className={classes.goals_png_head} >
                <img src={svg} className={classes.svg_goals} alt='' />
                <h3>Save Children</h3>
                </div>
                <p> Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              t
              book.</p>
              </div>             
            <div className={classes.sub_goals_div}>
              <div className={classes.goals_png_head} >
                <img src={svg2} className={classes.svg_goals} alt='' />
                <h3 >More Green</h3>
                </div>
               <p> Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              t
              book.</p>
              </div>             
            <div className={classes.sub_goals_div}>
            <div className={classes.goals_png_head} >
                <img src={svg3} className={classes.svg_goals} alt='' />
                <h3>Care</h3>
                </div>
              <p> Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              t
              book.</p>
              </div>             
      </div>  
       </div>

      </div>
      <div className={classes.sec_div}>
        <div className={classes.sec_maindiv}>
          <div className={classes.sub_div}>
          <h2 className={classes.main_h2_1}>Our Envi</h2>
            <p className={classes.main_p_1}>
              <span>Lorem Ipsum </span> is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
              <span>It was popularised </span>in the 1960s with the release
             
            </p>
          </div>
          <div className={classes.sub_div2}>
          <h2 className={classes.main_h2_2}>Our Missions</h2>
            <p className={classes.main_p_1}>
              <strong>Lorem Ipsum </strong> is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
              <strong>It was popularised </strong>in the 1960s with the release
        
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Main;

import React, { Component } from "react";
import Slider from "react-slick";
import classes from "../css/FoundationStyles.module.css";
import { BsArrowDown } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
// import "../css/Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../img/img1.jpg";
import image2 from "../img/img2.jpg";
import image3 from "../img/img3.jpg";
import image4 from "../img/img4.jpg";
import image5 from "../img/img5.jpg";

export default class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
 scroll = () =>{
    // window.scrollTo({  top: 950, behavior: 'smooth'});
    window.scrollBy({ 
      top: 950, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    })
  };
  render() {
    const settings = {
      dots: true,
      className: classes.slide,
      autoplay: true,
      infinite: true,
      speed: 1500,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <img className={classes.slide_image} src={image1} alt="" />
        
        <div className={classes.flex_div}>

          <div className={classes.mainText_div}>
          <Fade triggerOnce direction='up'>
            <p className={classes.mainText_subtitle}># Most Trusted Org</p>
            <h1 className={classes.mainText_head}>Welcome How you Doin..!</h1>
            <h4 className={classes.mainText_para}>
              click to dig in
            </h4>
            <button onClick={()=>this.scroll()} className={classes.mainText_button}>
              EXPLORE
              <BsArrowDown className={classes.btn_arrow} size="1.5rem" />
            </button>
            </Fade>
          </div>
         
        </div>
        {/* <Slider {...settings}>
        <img className={classes.slide_image} src={image1} alt="" />
        <img className={classes.slide_image} src={image2} alt="" />
        <img className={classes.slide_image} src={image3} alt="" />
        <img className={classes.slide_image} src={image4} alt="" />
        <img className={classes.slide_image} src={image5} alt="" />
      </Slider> */}
      </div>

    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
import "../css/Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../img/img1.jpg";
import image2 from "../img/img2.jpg";
import image3 from "../img/img3.jpg";
import image4 from "../img/img4.jpg";
import image5 from "../img/img5.jpg";

export default class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      className:'slide',
      autoplay: true,
      infinite: true,
      speed: 1500,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <img className="slide-image" src={image1} alt="" />
        <img className="slide-image" src={image2} alt="" />
        <img className="slide-image" src={image3} alt="" />
        <img className="slide-image" src={image4} alt="" />
        <img className="slide-image" src={image5} alt="" />
      </Slider>
    );
  }
}

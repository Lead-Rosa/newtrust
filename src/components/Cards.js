import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import classes from "../css/FoundationStyles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/card.css';

export class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: [
        {
          id: 1,
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
          cardTitle: "Food demand",
          cardHeading: "City Lights in New York",
          description:
            " New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments.",
        },
        {
          id: 2,
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
          cardTitle: "cloths demand",
          cardHeading: " in New York",
          description:
          " New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments.",
        },
        {
          id: 3,
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
          cardTitle: "Food demand",
          cardHeading: "City Lights in New York",
          description:
            " New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments.",
        },
        {
          id: 4,
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
          cardTitle: "Food demand",
          cardHeading: "City Lights in New York",
          description:
            " New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments.",
        },
        {
          id: 5,
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
          cardTitle: "Food demand",
          cardHeading: "City Lights in New York",
          description:
            " New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments.",
        },
        {
          id: 6,
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
          cardTitle: "Food demand",
          cardHeading: "City Lights in New York",
          description:
            " New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments.",
        },
        {
          id: 7,
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
          cardTitle: "Food demand",
          cardHeading: "City Lights in New York",
          description:
            " New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments.",
        },

        {
          id: 8,
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
          cardTitle: "Food demand",
          cardHeading: "City Lights in New York",
          description:
            " New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments.",
        },
      ],
    };
  }

  slider = () => {
    return this.state.card.map((cardValue) => {
      return (
        <div key={cardValue.id} className={classes.column}>
          <div className={classes.post_module}>
            <div className={classes.thumbnail}>
              <div className={classes.date}>
                <p className={classes.day}>New</p>
              </div>
              <img src={cardValue.img} alt='' />
            </div>
            <div className={classes.post_content}>
              <p className={classes.category}>{cardValue.cardTitle}</p>
              <h2 className={classes.title}>{cardValue.cardHeading}</h2>
              <p>{cardValue.description}</p>
              {/* <div className="sub-main">
                          <button className="button-two">
                            <span>Hover Me</span>
                          </button>
                        </div> */}
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 3000,
      className: classes.card_slide,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          autoplay: false,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            speed: 3000,
            autoplaySpeed: 3000,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          autoplay: false,
          settings: {
            slidesToShow: 1,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 3000,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={classes.main_card_container}>
        <h1 className={classes.main_heading}>Whats today</h1>
        <Fade direction="left">
          <Slider {...settings}>{this.slider()}</Slider>
        </Fade>
      </div>
    );
  }
}

export default Cards;

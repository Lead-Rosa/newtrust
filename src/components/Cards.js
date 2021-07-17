import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../css/slid2.css';
import "../css/card.css";
import image from "../img/image1.jpg";

export default class Cards extends Component {
  render() {
    var settings = {
      autoplay: false,
      infinite: true,
      speed: 1000,
      className: "card-slide",
      autoplaySpeed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            speed: 500,
            autoplaySpeed: 500,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            autoplaySpeed: 500,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            speed: 500,
            autoplaySpeed: 500,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="main-card-container">
        <h1 className="main-heading">Whats today</h1>
        <Slider {...settings}>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <p className="day">New</p>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments.
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="post-module">
              <div className="thumbnail">
                <div className="date">
                  <div className="day">New</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              <div className="post-content">
                <p className="category">Food Demand</p>
                <h2 className="title">City Lights in New York</h2>
                     <p>
                  New York, the largest city in the U.S., is an architectural
                  marvel with plenty of historic monuments,
                </p>
                <div className="sub-main">
                  <button className="button-two">
                    <span>Hover Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

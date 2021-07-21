import React from "react";
import { Fade } from "react-awesome-reveal";
import img1 from "../img/pro2.jpg";
import Slide_img_Res from "../components/Slide_img_Res";
import "../css/about.css";
import "../css/main.css";

function Main() {
  return (
    <div>
      <Slide_img_Res />
      {/* <div className="main-title-div">
        <h1>Title title </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div> */}
      <div className="ceo-div">
       
        <div className="main-about-container">
        <Fade direction="left">
          <img src={img1} className="main-ceo-img" alt="" />
          </Fade>
          <Fade direction="right">
          <div className="main-ceo-container-div">
            <h2 className="main-ceo-name">Wiberto Blanc</h2>
            <h5 className="main-ceo-tag">CEO of Org</h5>
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
      <div className="sec-div">
        <div className="main-sec-div">
          <Fade direction="down">
          <h1 className="main-heading">Who we are</h1>
          </Fade>
          <div className="main-container">
          <Fade damping delay={100} >
            <div className='sec-sub-div'>
            <h2 className="main-h2-1">Our Envi</h2>
            <p className="main-p-1">
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
            <div  className='sec-sub-div-2'>
            <h2 className="main-h2">Missions</h2>
            <p className="main-p">
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
            <div className='sec-sub-div'>
            <h2 className="main-h2">Future</h2>
            <p className="main-p">
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

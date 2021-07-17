import React from "react";
import img1 from "../img/pro2.jpg";
import Slide_img_Res from "./Slide_img_Res";
import '../css/about.css';
import "../css/main.css";
import Slide from "../components/Slide";

function Main() {
  return (
    <div  className='about-main-div'>
        {/* <Slide_img_Res /> */}
        <div className='ceo-container'>
        <div className="about-container">
          <img
            src={img1}
            className="ceo-img"
            alt=""
          />
          <div className='ceo-container-div'>
            <h2 className="ceo-name">AK</h2>
            <h5 className="ceo-tag">CEO of Org</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </p>
          </div>
        </div>
        </div>
      <h1 className="main-heading">Who we are</h1>
      <div className="main-container">
        <h2 className="main-h2">Our Envi</h2>
        <p className="main-p">
          <strong>Lorem Ipsum </strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.{" "}
          <strong>It was popularised </strong>in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <h2 className="main-h2">Missions</h2>
        <p className="main-p">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC,cilisis
          imperdiet diam in faucibus. Quisque et arcu quis turpis placerat
          venenatis. Vestibulum ante ipsum primis in faucibus orci luct making
          it over 2000 years old.<strong>Richard McClintock</strong>, a Latin
          professor at <strong>Hampden-Sydney College</strong> in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source..
        </p>
        <h2 className="main-h2">Future</h2>
        <p className="main-p">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of{" "}
          <strong>over 200 Latin words</strong>, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable.
        </p>
      </div>
    </div>
  );
}

export default Main;

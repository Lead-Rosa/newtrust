import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/work.css";
import image1 from "../img/img1.jpg";
import img_slum from "../img/slum.jpg";

import pro2 from "../img/pro2.jpg";

function Work() {
  return (
    <div className="about-main-div">
      <img className="work-image" src={image1} alt="" />
      <div className="work-main-container">
        <h3 className="work-title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the industry's <br />
          standard dummy text ever since the `
        </h3>
        {/* Work 1 */}
        <div className="title-content">
          <h2 className="main-title">Our work Heading main</h2>
          <p className="main-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
        <div className="content-descp">
          <img src={img_slum} alt="" className="descp-img" />
          <p className="descp-para">
            <h3 className="desc-title">Detail</h3>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        {/* Work 2 */}
        <div className="title-content">
          <h2 className="main-title">Our work Heading main</h2>
          <p className="main-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
        <div className="content-descp">
          <p className="descp-para">
            <h3 className="desc-title">Detail</h3>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <img src={img_slum} alt="" className="descp-img" />
        </div>
      </div>
      {/* Stars content */}
      <h2 className="star-title">Stars on the Field</h2>
      <div className="start-container">
        <div className="img-div">
          <img src={image1} className="main-str-img" alt="" />
          <div className="text-main">
            <h2>Martin Luther</h2>
            <p>Head of field work</p>
          </div>
        </div>
        <div className="sub-img">
          <div className="img-div">
            <img src={pro2} className="star-img" alt="" />
            <div className="text">
              <h2>Martin Luther</h2>
              
            </div>
          </div>
          <div className="img-div">
            <img src={pro2} className="star-img" alt="" />
            <div className="text">
              <h2>Martin Luther</h2>
             
            </div>
          </div>
          <div className="img-div">
            <img src={pro2} className="star-img" alt="" />
            <div className="text">
              <h2>Martin Luther</h2>
          
            </div>
          </div>
          <div className="img-div">
            <img src={pro2} className="star-img" alt="" />
            <div className="text">
              <h2>Martin Luther</h2>
            
            </div>
          </div>
          <div className="img-div">
            <img src={pro2} className="star-img" alt="" />
            <div className="text">
              <h2>Martin Luther</h2>
         
            </div>
          </div>
          <div className="img-div">
            <img src={pro2} className="star-img" alt="" />
            <div className="text">
              <h2>Martin Luther</h2>
              {/* <p>Head of field work</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

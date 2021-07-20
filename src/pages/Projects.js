import React from "react";
import image1 from "../img/img1.jpg";
import "../css/project.css";
import img_slum from "../img/slum.jpg";

function Projects() {
  return (
    <div className="about-main-div">
      <img className="work-image" src={image1} alt="" />
      <div className="div-main-container">


        <div className="content-container">
          <img src={img_slum} className="cont-img" alt="" />
          <div className="second-container">
            <h2 className="project-heading">Project Title </h2>

            <p className="cont-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letmany web sites still in
              their infancy. Various versibeen the industry's standard dummy
              text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="content-container">
         
          <div className="second-container">
            <h2 className="project-heading">Project Title </h2>

            <p className="cont-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letmany web sites still in
              their infancy. Various versibeen the industry's standard dummy
              text ever since the 1500s
            </p>
          </div>
          <img src={img_slum} className="cont-img" alt="" />
        </div>
        <div className="content-container">
          <img src={img_slum} className="cont-img" alt="" />
          <div className="second-container">
            <h2 className="project-heading">Project Title </h2>

            <p className="cont-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letmany web sites still in
              their infancy. Various versibeen the industry's standard dummy
              text ever since the 1500s
            </p>
          </div>
        </div>

   
      </div>
    </div>
  );
}

export default Projects;

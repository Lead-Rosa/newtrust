import React from "react";
import { useEffect } from "react";
import classes from '../css/FoundationStyles.module.css';
import image1 from "../img/img1.jpg";
import "../css/project.css";
import img_slum from "../img/slum.jpg";

function Projects() {
  useEffect(()=> window.scrollTo(0,0),[]);
  return (
    <div >

      <img className={classes.work_image} src={image1} alt="" />
      <div className={classes.div_main_container}>

      <h1 className={classes.project_head}>Future Projects</h1>
        <div className={classes.content_container}>
          <img src={img_slum} className={classes.cont_img} alt="" />
          <div className={classes.second_container}>
            <h2 className={classes.project_heading}>Project Title </h2>

            <p className={classes.cont_p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letmany web sites still in
              their infancy. Various versibeen the industry's standard dummy
              text ever since the 1500s
            </p>
          </div>
        </div>
        <div className={classes.content_container}>
         
          <div className={classes.second_container}>
            <h2 className={classes.project_heading}>Project Title </h2>

            <p className={classes.cont_p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letmany web sites still in
              their infancy. Various versibeen the industry's standard dummy
              text ever since the 1500s
            </p>
          </div>
          <img src={img_slum} className={classes.cont_img} alt="" />
        </div>
        <div className={classes.content_container}>
          <img src={img_slum} className={classes.cont_img} alt="" />
          <div className={classes.second_container}>
            <h2 className={classes.project_heading}>Project Title </h2>

            <p className={classes.cont_p}>
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

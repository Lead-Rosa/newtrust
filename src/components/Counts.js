import React from "react";
import { Fade } from "react-awesome-reveal";
import classes from '../css/FoundationStyles.module.css';
import img from '../img/project.png';
import img1 from '../img/volunteer.png';
import img2 from '../img/donate.png';
import img3 from '../img/marker.png';
import img4 from '../img/teacher.png';

function Counts() {
  return (
    <div className={classes.count_main_container}>
      <Fade direction='down'>
      <h1 className={classes.main_heading}>Reach</h1>
      </Fade>
      <ul className={classes.count_container}>
        <Fade direction='left'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>
    
              <img src={img} alt='' className={classes.count_img}/>
      
            <div className={classes.para_div}>
              <h3 className={classes.count_para}> 99 Projects</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='down'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>

            <img src={img1} alt='' className={classes.count_img}/>
        
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>152 Volunteers</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='right'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>
        
            <img src={img2} alt='' className={classes.count_img}/>
         
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>5555 Donees</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='left'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>
   
          <img src={img3} alt='' className={classes.count_img}/>
            
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>3 Regions</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='up'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>

          <img src={img4} alt='' className={classes.count_img}/>
      
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>Mentors</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='right'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>
         
          <img src={img1} alt='' className={classes.count_img}/>
       
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>Project</h3>
            </div>
          </div>
        </li>
        </Fade>
      </ul>
    </div>
  );
}
export default Counts;

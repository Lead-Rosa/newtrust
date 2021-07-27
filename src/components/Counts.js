import React from "react";
import { Fade } from "react-awesome-reveal";
import classes from '../css/FoundationStyles.module.css';
import img1 from '../img/project.png';
import img2 from '../img/volunteer.png';
import img3 from '../img/donate.png';
import img4 from '../img/marker.png';
import img5 from '../img/teacher.png';
import img6 from '../img/briefcase.png';

function Counts() {
  const countValue= {
    "project":"22 Projects",
    "volunteers":"150 Volunteers",
    "donees":"550 Donees",
    "regions":"5 Regions",
    "mentors":"50 Mentors",
    "wip":"30 Work in Progress",
  
  }
  return (
    <div className={classes.count_main_container}>
      <Fade direction='down'>
      <h1 className={classes.main_heading}>Reach</h1>
      </Fade>
      <ul className={classes.count_container}>
        <Fade direction='left'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>
    
              <img src={img1} alt='' className={classes.count_img}/>
      
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>{countValue.project}</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='down'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>

            <img src={img2} alt='' className={classes.count_img}/>
        
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>{countValue.volunteers}</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='right'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>
        
            <img src={img3} alt='' className={classes.count_img}/>
         
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>{countValue.donees}</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='left'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>
   
          <img src={img4} alt='' className={classes.count_img}/>
            
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>{countValue.regions}</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='up'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>

          <img src={img5} alt='' className={classes.count_img}/>
      
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>{countValue.mentors}</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='right'>
        <li className={classes.count_box}>
          <div className={classes.number_div}>
         
          <img src={img6} alt='' className={classes.count_img}/>
       
            <div className={classes.para_div}>
              <h3 className={classes.count_para}>{countValue.wip}</h3>
            </div>
          </div>
        </li>
        </Fade>
      </ul>
    </div>
  );
}
export default Counts;

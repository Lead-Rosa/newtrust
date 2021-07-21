import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/count.css";
import img from '../img/project.png';
import img1 from '../img/volunteer.png';
import img2 from '../img/donate.png';
import img3 from '../img/marker.png';
import img4 from '../img/teacher.png';

function Counts() {
  return (
    <div className="count-main-container">
      <Fade direction='down'>
      <h1 className="main-heading">Reach</h1>
      </Fade>
      {/* <Fade direction='up'> */}
      <ul className="count-container">
        <Fade direction='left'>
        <li className="count-box">
          <div className="number-div">
            {/* <div className="content"> */}
              <img src={img} className='count-img'/>
            {/* </div> */}
            <div className="para-div">
              <h3 className="count-para"> 99 Projects</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='down'>
        <li className="count-box">
          <div className="number-div">

            <img src={img1} className='count-img'/>
        
            <div className="para-div">
              <h3 className="count-para">152 Volunteers</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='right'>
        <li className="count-box">
          <div className="number-div">
        
            <img src={img2} className='count-img'/>
         
            <div className="para-div">
              <h3 className="count-para">5555 Donees</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='left'>
        <li className="count-box">
          <div className="number-div">
   
          <img src={img3} className='count-img'/>
            
            <div className="para-div">
              <h3 className="count-para">3 Regions</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='up'>
        <li className="count-box">
          <div className="number-div">

          <img src={img4} className='count-img'/>
      
            <div className="para-div">
              <h3 className="count-para">Mentors</h3>
            </div>
          </div>
        </li>
        </Fade>
        <Fade direction='right'>
        <li className="count-box">
          <div className="number-div">
         
          <img src={img1} className='count-img'/>
       
            <div className="para-div">
              <h3 className="count-para">Project</h3>
            </div>
          </div>
        </li>
        </Fade>
      </ul>
      {/* </Fade> */}
    </div>
  );
}
export default Counts;

import React from "react";
import "../css/count.css";
import img from '../img/project.png';
import img1 from '../img/volunteer.png';
import img2 from '../img/donate.png';
import img3 from '../img/marker.png';
import img4 from '../img/teacher.png';

function Counts() {
  return (
    <div className="count-main-container">
      <h1 className="main-heading">Reach</h1>
      <ul className="count-container">
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
        <li className="count-box">
          <div className="number-div">

            <img src={img1} className='count-img'/>
        
            <div className="para-div">
              <h3 className="count-para">152 Volunteers</h3>
            </div>
          </div>
        </li>
        <li className="count-box">
          <div className="number-div">
        
            <img src={img2} className='count-img'/>
         
            <div className="para-div">
              <h3 className="count-para">5555 Donees</h3>
            </div>
          </div>
        </li>
        <li className="count-box">
          <div className="number-div">
   
          <img src={img3} className='count-img'/>
            
            <div className="para-div">
              <h3 className="count-para">3 Regions</h3>
            </div>
          </div>
        </li>
        <li className="count-box">
          <div className="number-div">

          <img src={img4} className='count-img'/>
      
            <div className="para-div">
              <h3 className="count-para">Mentors</h3>
            </div>
          </div>
        </li>
        <li className="count-box">
          <div className="number-div">
         
          <img src={img1} className='count-img'/>
       
            <div className="para-div">
              <h3 className="count-para">Project</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Counts;

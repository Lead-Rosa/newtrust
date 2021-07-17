import React from "react";
import "../css/count.css";

function Counts() {
  return (
    <div className="count-main-container">
      <h1 className="main-heading"> Count</h1>
      <ul className="count-container">
        <li className="count-box">
          <div className="number-div">
            <div className="content">
              <h2 className="count-number">454</h2>
            </div>
            <div className="para-div">
              <h3 className="count-para">Projects</h3>
            </div>
          </div>
        </li>
        <li className="count-box">
          <div className="number-div">
            <div className="content">
              <h2 className="count-number">33</h2>
            </div>
            <div className="para-div">
              <h3 className="count-para">Volunteers</h3>
            </div>
          </div>
        </li>
        <li className="count-box">
          <div className="number-div">
            <div className="content">
              <h2 className="count-number">454</h2>
            </div>
            <div className="para-div">
              <h3 className="count-para">Donated Person</h3>
            </div>
          </div>
        </li>
        <li className="count-box">
          <div className="number-div">
            <div className="content">
              <h2 className="count-number">45454</h2>
            </div>
            <div className="para-div">
              <h3 className="count-para">Regions</h3>
            </div>
          </div>
        </li>
        <li className="count-box">
          <div className="number-div">
            <div className="content">
              <h2 className="count-number">45454</h2>
            </div>
            <div className="para-div">
              <h3 className="count-para">Rally</h3>
            </div>
          </div>
        </li>
        <li className="count-box">
          <div className="number-div">
            <div className="content">
              <h2 className="count-number">45454</h2>
            </div>
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

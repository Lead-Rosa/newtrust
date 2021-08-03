import React, { Component } from "react";
import classes from "../css/FoundationStyles.module.css";
import { BsArrowDown } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";


export default class Slide extends Component {
  constructor(props) {
    super(props);

  }
 scroll = () =>{
    // window.scrollTo({  top: 950, behavior: 'smooth'});
    window.scrollBy({ 
      top: 950, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    })
  };
  render() {
    return (
      <div>

        
        <div className={classes.flex_div}>

          <div className={classes.mainText_div}>
          <Fade triggerOnce direction='up'>
            <p className={classes.mainText_subtitle}><span ># </span>Most Trusted Org </p>
            <h1 className={classes.mainText_head}>Welcome How you Doin.!</h1>
            <h4 className={classes.mainText_para}>
              click to dig in
            </h4>
            <button onClick={()=>this.scroll()} className={classes.mainText_button}>
              EXPLORE 
              <BsArrowDown className={classes.btn_arrow} size="1.5rem" />
            </button>
            </Fade>
          </div>
         
        </div>

      </div>

    );
  }
}

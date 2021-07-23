import React from "react";
import classes from '../css/FoundationStyles.module.css';
import { useEffect } from "react";
// import "../css/work.css";
import image1 from "../img/img1.jpg";
import img_slum from "../img/slum.jpg";

import pro2 from "../img/pro2.jpg";

function Work() {
  useEffect(()=> window.scrollTo(0,0),[]);
  return (
    <div className={classes.about_main_div}>
      <img className={classes.work_image} src={image1} alt="" />
      <div className={classes.work_main_container}>
        <h3 className={classes.work_title}>
          Lorem Ipsum is simply dummyof the printing and typesetting
          industry Lorem Ipsum has been the industry's <br />
          standard dummy ever since the `
        </h3>
        {/* Work 1 */}
        <div className={classes.title_content}>
          <h2 className={classes.main_title}>Our work Heading main</h2>
          <p className={classes.main_content}>
            Lorem Ipsum is simply dummy{classes.text}of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummyever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
        <div className={classes.content_descp}>
          <img src={img_slum} alt="" className={classes.descp_img} />
          <p className={classes.descp_para}>
            <h3 className={classes.desc_title}>Detail</h3>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        {/* Work 2 */}
        <div className={classes.title_content}>
          <h2 className={classes.main_title}>Our work Heading main</h2>
          <p className={classes.main_content}>
            Lorem Ipsum is simply dummy of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummyever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
        <div className={classes.content_descp}>
          <p className={classes.descp_para}>
            <h3 className={classes.desc_title}>Detail</h3>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            modeland a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <img src={img_slum} alt="" className={classes.descp_img} />
        </div>
      </div>
      {/* Stars content */}
      <h2 className={classes.star_title}>Stars on the Field</h2>
      <div className={classes.start_container}>
        <div className={classes.img_div}>
          <img src={image1} className={classes.main_str_img} alt="" />
          <div className={classes.text_main}>
            <h2>Martin Luther</h2>
            <p>Head of field work</p>
          </div>
        </div>
        <div className={classes.sub_img}>
          <div className={classes.img_div}>
            <img src={pro2} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Martin Luther</h2>
              
            </div>
          </div>
          <div className={classes.img_div}>
            <img src={pro2} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Martin Luther</h2>
             
            </div>
          </div>
          <div className={classes.img_div}>
            <img src={pro2} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Martin Luther</h2>
          
            </div>
          </div>
          <div className={classes.img_div}>
            <img src={pro2} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Martin Luther</h2>
            
            </div>
          </div>
          <div className={classes.img_div}>
            <img src={pro2} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Martin Luther</h2>
         
            </div>
          </div>
          <div className={classes.img_div}>
            <img src={pro2} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Martin Luther</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

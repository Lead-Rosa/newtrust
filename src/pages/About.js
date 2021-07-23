import React from "react";
import { useEffect } from "react";
import classes from '../css/FoundationStyles.module.css';
import { Fade } from "react-awesome-reveal";
import image1 from "../img/img1.jpg";
import img1 from "../img/pro2.jpg";
import img2 from "../img/05.jpg";
import { ImQuotesLeft } from "react-icons/im";


function About() {

    useEffect(()=> window.scrollTo(0,0),[]);
  return (
    <div>
      <div className={classes.about_main_div}>
      <img src={image1} alt='' className={classes.about_image} />
        
      <div className={classes.about_title}>
      <Fade direction='right'>
        <h2>About title</h2>
        <p>
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged.
        </p>
        </Fade>
      </div>
  
    </div>
      <div className={classes.about_quote}>
        <Fade triggerOnce direction='left'>
          <h2><ImQuotesLeft className={classes.quote_img} size='5rem'/>About it to make a type s not only five
          centuries, but also the
          essentially unchanged.</h2>
          </Fade>
        </div>
      <div className={classes.ceo_container}>
        
        <div className={classes.about_container}>
        
          <div  className={classes.ceo_img}>
              <Fade direction='left'>
          <img
            src={img1}
            className={classes.ceo_img}
            alt=""
          />
                 </Fade>
          </div>
   <Fade direction='right'>
          <div className={classes.ceo_container_div}>
            <h2 className={classes.ceo_name}>Name name</h2>
            <h5 className={classes.ceo_tag}>CEO of Org</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </p>
          </div>
          </Fade>
        </div>
        <Fade triggerOnce direction='down'>
        <div className={classes.sec_container}>
          <div className={classes.what_div}>
            <h2 className={classes.what_title}>What we do</h2>
            <p className={classes.what_para}>
              <strong>Investigate:- </strong>including versions of Lorem Ipsum
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots
            </p>
            <p className={classes.what_para}>
              <strong>Expose: </strong> Expose the situation including versions
              of Lorem Ipsum Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots
            </p>
            <p className={classes.what_para}>
              <strong>Make Change: </strong>including versions of Lorem Ipsum
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots
            </p>
            <p className={classes.what_para}>
              <strong>Maintain: </strong>including versions of Lorem Ipsum
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots
            </p>
          </div>
        </div>
        </Fade>
        </div>
        <div className={classes.main_staff_div}>
          <h1 className={classes.staff_title}>Staffs</h1>
          <div className={classes.staff_container}>
            <div className={classes.staff_div}>
              <img src={img2} className={classes.staff_img} alt="" />
              <div className={classes.staff_detail}>
                <h3 className={classes.staff_name}>Name name</h3>
                <p className={classes.staff_desig}>Designation</p>
              </div>
            </div>
            <div className={classes.staff_div}>
              <img src={img2} className={classes.staff_img} alt="" /> 
              <div className={classes.staff_detail}>
                <h3 className={classes.staff_name}>Name name</h3>
                <p className={classes.staff_desig}>Designation</p>
              </div>
            </div>
            <div className={classes.staff_div}>
              <img src={img2} className={classes.staff_img} alt="" />
              <div className={classes.staff_detail}>
                <h3 className={classes.staff_name}>Name name</h3>
                <p className={classes.staff_desig}>Designation</p>
              </div>
            </div>
            <div className={classes.staff_div}>
              <img src={img2} className={classes.staff_img} alt="" />
              <div className={classes.staff_detail}>
                <h3 className={classes.staff_name}>Name name</h3>
                <p className={classes.staff_desig}>Designation</p>
              </div>
            </div>
            <div className={classes.staff_div}>
              <img src={img2} className={classes.staff_img} alt="" />
              <div className={classes.staff_detail}>
                <h3 className={classes.staff_name}>Name name</h3>
                <p className={classes.staff_desig}>Designation</p>
              </div>
            </div>
            <div className={classes.staff_div}>
              <img src={img2} className={classes.staff_img} alt="" />
              <div className={classes.staff_detail}>
                <h3 className={classes.staff_name}>Name name</h3>
                <p className={classes.staff_desig}>Designation</p>
              </div>
            </div>
            

          </div>
        </div>

  
    </div>
  );
}

export default About;

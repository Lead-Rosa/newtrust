import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from '../css/FoundationStyles.module.css';

// import MapContainer from "../components/MapContainer";

// import { BrowserRouter as Router, Route,Redirect, Switch, Link } from "react-router-dom";
// import "../css/Contact.css";

function Contact() {
  const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
    };
    const handleInputChange = (event) => {
      event.persist();
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
    };
    // console.log(inputs)
    return {
      handleSubmit,
      handleInputChange,
      inputs,
    };
  };
  useEffect(()=> window.scrollTo(0,0),[]);
  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName}
           Email: ${inputs.email}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);
  return (
    <div className={classes.contact_main_div}>
      <div className={classes.locate_div}>
        <div className={classes.locate_address}>
          <h3 className={classes.locate_h3}>Lead integrated business Pvt.Ltd.</h3>
          <p>
            No.20,Appar St,Kamakodi nagar,
            <br />
            Valasaravakkam, Chennai-87
            <br />
            <span>9876543210</span>
            <br />
            <span>68416815</span>
            <br />
            <span>reach@lead.org</span><br/>
            <span>
              <a href='https://goo.gl/maps/AsPdN383R2DTCxcFA' style={{textTransform:'lowercase'}}>Locate us</a>
            </span>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={classes.form_container}>
        <h2 className={classes.contact_head}>Get in touch</h2>
        <div>
          <label className={classes.name_lable}>First Name</label>
          <input
            type="text"
            name="firstName"
            className={classes.field}
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
        </div>
        <div>
          <label className={classes.name_lable}>Email</label>
          <input
            type="name"
            name="email"
            className={classes.field}
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div>
          <label className={classes.name_lable}>Contact</label>
          <input
            type="text"
            name="number"
            max="15"
            className={classes.field}
            onChange={handleInputChange}
            value={inputs.number}
          />
        </div>
        <div>
          <label className={classes.name_lable}>City</label>
          <input
            type="text"
            name="city"
            className={classes.field}
            onChange={handleInputChange}
            value={inputs.number}
          />
        </div>
        <div>
          <label className={classes.name_lable}>State</label>
          <input
            type="text"
            name="state"
            className={classes.field}
            onChange={handleInputChange}
            value={inputs.number}
          />
        </div>
        <button className={classes.btn} type="submit">
          Submit
        </button>
      </form>
      {/* <Router>
        <Switch>
          <Redirect to="https://goo.gl/maps/AsPdN383R2DTCxcFA" />
        </Switch>
      </Router> */}
    </div>
  );
}

export default Contact;

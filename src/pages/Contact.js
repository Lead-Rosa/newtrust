import React from "react";
import { useState } from "react";
import MapContainer from "../components/MapContainer";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../css/Contact.css";

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
    return {
      handleSubmit,
      handleInputChange,
      inputs,
    };
  };
  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName}
           Email: ${inputs.email}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);
  return (
    <div className="contact-main-div">
      <div className="locate-div">
        <div className="locate-address">
          <h3 className="locate-h3">Lead integrated business Pvt.Ltd.</h3>
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
              <Link to="/Map">Find us</Link>
            </span>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="contact-head">Get in touch</h2>
        <div>
          <label className="name-lable">First Name</label>
          <input
            type="text"
            name="firstName"
            className="field"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
        </div>
        <div>
          <label className="name-lable">Email</label>
          <input
            type="name"
            name="email"
            className="field"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div>
          <label className="name-lable">Contact</label>
          <input
            type="text"
            name="number"
            max="15"
            className="field"
            onChange={handleInputChange}
            value={inputs.number}
          />
        </div>
        <div>
          <label className="name-lable">City</label>
          <input
            type="text"
            name="city"
            className="field"
            onChange={handleInputChange}
            value={inputs.number}
          />
        </div>
        <div>
          <label className="name-lable">State</label>
          <input
            type="text"
            name="state"
            className="field"
            onChange={handleInputChange}
            value={inputs.number}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <Router>
        <Switch>
          <Route path="/Map" component={MapContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default Contact;

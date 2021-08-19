import React from "react";
import { useState, useEffect } from "react";
import "../css/FormStyles.css";
import classes from "../css/FoundationStyles.module.css";

function Form() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  let errmsg = {};

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
    if (!values.name)
      setErrors((prevState) => ({ ...prevState, name: "Your Name" }));
    else setErrors( delete errors.name);
    if (!/\S+@\S+\.\S+/.test(values.email))
      setErrors((prevState) => ({ ...prevState, email: "invalid email" }));
    else setErrors( delete errors.email);
    if (!values.number)
      setErrors((prevState) => ({ ...prevState, number: "invalid number" }));
    else setErrors(delete errors.number);
    if (!values.message)
      setErrors((prevState) => ({ ...prevState, message: "Address" }));
    else setErrors(delete errors.message);
  };

useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // console.log(values);
      setValues("");
      alert("Submitted Successfullly");
    }
  }, [errors]);

  // if(!values ) setIsSubmitting(false)
// console.log(errors)
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrors(errmsg);
    setIsSubmitting(true);
    // alert(values);

    // setValues("")
  //   if (e) e.preventDefault();
  //   setErrors(errmsg);
  //  if(!isSubmitting && values) alert("Submitted Successfullly");
  //  else alert('ss')
  };

  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center"></div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="row no-gutters">
                <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Get in touch</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form
                      method="POST"
                      noValidate
                      onSubmit={handleSubmit}
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="name">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              autoComplete="off"
                              name="name"
                              placeholder="Ak"
                              value={values.name || ""}
                              onChange={handleChange}
                              required
                              id="name"
                            />
                            {/* <input
                              type="text"
                              className="form-control"
                              onChange={(e)=>setFirstName(e.target.value)}
                              value={firstName}
                              id="name"
                            />
                            <h1>{firstName}</h1> */}
                            {errors.name && (
                              <p className={classes.errMsg}>{errors.name}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="email">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              autoComplete="off"
                              placeholder="aka@gmail.in"
                              onChange={handleChange}
                              value={values.email}
                              required
                            />
                            {errors.email && (
                              <p className={classes.errMsg}>{errors.email}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="subject">
                              Mobile
                            </label>
                            <input
                              type="text"
                              name="number"
                              className="form-control"
                              placeholder="90922222222"
                              onChange={handleChange}
                              value={values.number || ""}
                              required
                            />
                            {errors.number && (
                              <p className={classes.errMsg}>{errors.number}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="#">
                              Message
                            </label>
                            <textarea
                              type="text"
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Address"
                              // onChange={handleChange}
                              value={values.address}
                              noRequired
                            ></textarea>
                            {errors.address && (
                              <p className={classes.errMsg}>{errors.address}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                  <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                    <h3>Let's get in touch</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <a href="https://goo.gl/maps/KVHrUnmucf55RCJh8">
                          <span className="fa fa-map-marker"></span>
                        </a>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span>
                          <br />
                          Lead integrated business Pvt.Ltd.No.20,Appar
                          st,Kamakodi nagar, Valasaravakkam, Chenevi-87
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <a href="tel://1234567920">
                          <span className="fa fa-phone"></span>
                        </a>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>
                          <br />
                          <a href="tel://1234567920">+91 9876543210</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <a href="mailto:contact@leadfoundation.in">
                          <span className="fa fa-paper-plane"></span>
                        </a>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                          <br />
                          <a href="mailto:contact@leadfoundation.in">
                            contact@leadfoundation.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;

// import React, { useState } from "react";
// import validator from 'validator'

// const App = () => {

//   const [emailError, setEmailError] = useState('')
//   const validateEmail = (e) => {
//     var email = e.target.value
//     console.log(email)

//     if (validator.isEmail(email)) {
//       setEmailError('Valid Email :)')
//     } else {
//       setEmailError('Enter valid Email!')
//     }
//   }
//   return (
//     <div style={{
//       margin: 'auto',
//       marginLeft: '300px',
//     }}>
//       <pre>
//         <h2>Validating Email in ReactJS</h2>
//         <span>Enter Email: </span><input type="text" id="userEmail"
//         onChange={(e) => validateEmail(e)}></input> <br />
//         <span style={{
//           fontWeight: 'bold',
//           color: 'red',
//         }}>{emailError}</span>
//       </pre>
//     </div>
//   );
// }

// export default App


// import * as React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true })} placeholder="First name" />

//       <input {...register("lastName", { minLength: 2 })} placeholder="Last name" />

//       <select {...register("category")}>
//         <option value="">Select...</option>
//         <option value="A">Category A</option>
//         <option value="B">Category B</option>
//       </select>

//       <input type="submit" />
//     </form>
//   );
// }
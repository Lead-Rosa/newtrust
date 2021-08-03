import React from "react";
import { useState, useEffect } from "react";
import classes from "../css/FoundationStyles.module.css";


function Form() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    let errmsg = {};
  
    // Validation
  
    if (!values.name) errmsg.name = "Required";
    if (!values.address) errmsg.address = "Required";
    if (!values.email) {
      errmsg.email = "email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errmsg.email = "email invalid";
    }
    if (!values.number) {
      errmsg.number = "number required";
    } else if (
      
      !/^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/.test(values.number)
    ) {
      errmsg.number = "number invalid";
    }
  
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        console.log(values);
        setValues("");
        alert("Submitted Successfullly");
      }
    }, [errors]);
  
    const handleSubmit = (event) => {
      if (event) event.preventDefault();
      setErrors(errmsg);
      setIsSubmitting(true);
      // alert(values);
    };
  
    const handleChange = (event) => {
      event.persist();
  
      setValues((values) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
      // console.log(values)
    };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={classes.form_container}
        noValidate
      >
        <div className="field">
          <div className="control">
            <input
              autoComplete="off"
              className={classes.field}
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name || ""}
              required
            />
            {errors.name && <p className={classes.errMsg}>{errors.name}</p>}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              autoComplete="off"
              className={classes.field}
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
            {errors.email && <p className={classes.errMsg}>{errors.email}</p>}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className={classes.field}
              type="text"
              name="number"
              placeholder="Mobile"
              onChange={handleChange}
              value={values.number || ""}
              required
            />
          </div>
          {errors.number && <p className={classes.errMsg}>{errors.number}</p>}
        </div>
        <div className="field">
          <div className="control">
            <input
              rows="20"
              cols="50"
              autoComplete="off"
              className={classes.field}
              name="address"
              placeholder="Address"
              onChange={handleChange}
              value={values.address || ""}
              noRequired
            />
          </div>
          {errors.email && <p className={classes.errMsg}>{errors.address}</p>}
        </div>
        <div className={classes.btn_div}>
          <button type="submit" className={classes.submitBtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

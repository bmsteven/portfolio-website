import React, { useState } from "react";
import axios from "axios";

const GOOGLE_FORM_NAME_ID = "entry.505834097";
const GOOGLE_FORM_SUBJECT_ID = "entry.1498597591";
const GOOGLE_FORM_EMAIL_ID = "entry.2005966555";
const GOOGLE_FORM_MSG_ID = "entry.1142465389";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfiid4vwZN1a5ap1huRtoL0WhqMMHsow8GcCCnNtxJglG9CQQ/formResponse?";

const Form = () => {
  const [data, setData] = useState({
    Name: "",
    email: "",
    subject: "",
    msg: "",
  });

  const { Name, email, subject, msg } = data;

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  // const [emailSent, setEmailSent] = useState(false);

  const sendEmail = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append(GOOGLE_FORM_NAME_ID, Name);
    formData.append(GOOGLE_FORM_SUBJECT_ID, subject);
    formData.append(GOOGLE_FORM_EMAIL_ID, email);
    formData.append(GOOGLE_FORM_MSG_ID, msg);

    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
      .then(() => {
        setSuccess("Email Sent, will get back to you ASAP");
      })
      .catch(() => {
        setErrors("Failed to send the email, please try again");
      });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendEmail();
  };

  console.log(errors, success, loading);

  return (
    <section className='form'>
      <header className='primary-header form-header'>
        <h2>
          <span></span>Send A Message
        </h2>
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='field-group'>
          <label htmlFor='Name'>Name:</label>
          <input
            type='text'
            placeholder='Name'
            id='Name'
            name='Name'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className='field-group'>
          <label htmlFor='Email'>Email:</label>
          <input
            type='email'
            placeholder='Email'
            id='Email'
            name='Email'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className='field-group'>
          <label htmlFor='Subject'>Subject:</label>
          <input
            type='text'
            placeholder='Subject'
            id='Subject'
            name='Subject'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='field-group'>
          <label htmlFor='msg'>Brief Me:</label>
          <textarea
            placeholder='Write a message'
            id='msg'
            name='msg'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <p className='alert' id='alert'></p>
        <button className='btn btn-primary' style={{ cursor: "pointer" }}>
          <span>Submit</span>
        </button>
      </form>
    </section>
  );
};

export default Form;

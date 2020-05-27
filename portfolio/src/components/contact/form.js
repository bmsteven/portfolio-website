import React, { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const emailReg = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const Form = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    msg: "",
  });

  const { Email } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Email.match(emailReg)) {
      setError("Please enter a valid Email Address");
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })
        .then(() => {
          setMessage("Success");
        })
        .catch((error) => {
          setMessage("Error");
        });
    }
  };
  return (
    <section className='form'>
      <header className='primary-header form-header'>
        <h2>
          <span></span>Send A Message
        </h2>
      </header>
      <form onSubmit={(e) => handleSubmit(e)} name='contact'>
        <input type='hidden' name='form-name' value='contact' />
        <div className='field-group'>
          <label htmlFor='Name'>Name:</label>
          <input
            type='text'
            placeholder='Name'
            id='Name'
            name='Name'
            required
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
            name='Subject'
          />
        </div>
        <div className='field-group'>
          <label htmlFor='msg'>Brief Me:</label>
          <textarea
            placeholder='Write a message'
            id='msg'
            name='msg'
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        {message && (
          <p
            className={message === "Success" ? "alert success" : "alert error"}
            id='alert'
          >
            {message === "Success"
              ? "Your message was sent successful, will get back to you ASAP"
              : "Error while submitting you message, please try again"}
          </p>
        )}
        {error && (
          <p
            className="alert error"
            id='alert'
          >
            {error}
          </p>
        )}
        <button type='submit' className='btn btn-primary'>
          <span>Submit</span>
        </button>
      </form>
    </section>
  );
};

export default Form;

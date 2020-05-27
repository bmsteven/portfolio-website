import React, { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Form = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setMessage("Success");
        alert("Success!");
      })
      .catch((error) => {
        setMessage("Error");
        alert(error);
      });
  };
  return (
    <section className='form'>
      <header className='primary-header form-header'>
        <h2>
          <span></span>Send A Message
        </h2>
      </header>
      <form
        onSubmit={(e) => handleSubmit(e)}
        name='contact'
        method='POST'
        netlify='true'
        action='/'
        netlify-honeypot='bot-field'
      >
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
        {/* <div className='field-group'>
          <div data-netlify-recaptcha='true'></div>
        </div> */}
        {message && (
          <p className='alert success' id='alert'>
            {message}
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

import React, { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Your message was sent, I'll get back to you ASAP");
  };
  return (
    <section className='form'>
      <header className='primary-header form-header'>
        <h2>
          <span></span>Send A Message
        </h2>
      </header>
      <form
        // onSubmit={(e) => handleSubmit(e)}
        name='contact'
        method='POST'
        netlify="true"
        action='/'
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className='field-group'>
          <label htmlFor='Name'>Name:</label>
          <input
            type='text'
            placeholder='Name'
            id='Name'
            name='Name'
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
          />
        </div>
        <div className='field-group'>
          <label htmlFor='msg'>Brief Me:</label>
          <textarea
            placeholder='Write a message'
            id='msg'
            name='msg'
            required
          />
        </div>
        <div className='field-group'>
          <div data-netlify-recaptcha='true'></div>
        </div>
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

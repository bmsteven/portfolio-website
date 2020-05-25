import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
          <input type='text' placeholder='Name' id='Name' name='Name' />
        </div>
        <div className='field-group'>
          <label htmlFor='Email'>Email:</label>
          <input type='email' placeholder='Email' id='Email' name='Email' />
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
          <textarea placeholder='Write a message' id='msg' name='msg' />
        </div>
        <p className="alert" id="alert"></p>
        <button className='btn btn-primary'>
          <span>Submit</span>
        </button>
      </form>
    </section>
  );
};

export default Form;

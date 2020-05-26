import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // submitted = true
  };

  // https://docs.google.com/forms/d/e/1FAIpQLSfiid4vwZN1a5ap1huRtoL0WhqMMHsow8GcCCnNtxJglG9CQQ/viewform?usp=pp_url&entry.505834097=hj&entry.2005966555=hj&entry.1498597591=jk&entry.1142465389=kk

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
        <p className='alert' id='alert'></p>
        <button className='btn btn-primary' style={{ cursor: "pointer" }}>
          <span>Submit</span>
        </button>
      </form>
    </section>
  );
};

export default Form;
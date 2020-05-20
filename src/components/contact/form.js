import React from "react";

const Form = () => {
  return (
    <section className="form">
      <h1 className="form-header primary-header">Send Me a Message</h1>
      <form>
        <div className="field-group">
          <label htmlFor="Name">Name:</label>
          <input type="text" placeholder="Name" id="Name" name="Name" />
        </div>
        <div className="field-group">
          <label htmlFor="Name">Email:</label>
          <input type="email" placeholder="Email" id="Email" name="Email" />
        </div>
        <div className="field-group">
          <label htmlFor="Name">Subject:</label>
          <input
            type="text"
            placeholder="Subject"
            id="Subject"
            name="Subject"
          />
        </div>
        <div className="field-group">
          <label htmlFor="Name">Brief Me:</label>
          <textarea placeholder="Write a message" id="msg" name="msg" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default Form;

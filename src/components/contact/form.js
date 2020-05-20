import React from "react";

const Form = () => {
  return (
    <section className="form">
      <h1 className="form-header primary-header">Send Me a Message</h1>
      <form>
        <div className="field-group">
          <label htmlFor="Name">
            Name:
            <input type="text" placeholder="Name" id="Name" name="Name" />
          </label>
        </div>
        <div className="field-group">
          <label htmlFor="Name">
            Email:
            <input type="email" placeholder="Email" id="Email" name="Email" />
          </label>
        </div>
        <div className="field-group">
          <label htmlFor="Name">
            Subject:
            <input
              type="text"
              placeholder="Subject"
              id="Subject"
              name="Subject"
            />
          </label>
        </div>
        <div className="field-group">
          <label htmlFor="Name">
            Brief Me:
            <textarea placeholder="Write a message" id="msg" name="msg" />
          </label>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default Form;

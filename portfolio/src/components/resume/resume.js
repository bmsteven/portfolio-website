import React from "react";

const ResumeTemplate = ({ title, classname, children }) => {
  return (
    <section className={`resume-template ${classname}`}>
      <h2 className={`${classname}-header tertiary-header`}>{title}</h2>
      {children}
    </section>
  );
};

export default ResumeTemplate;

import React from "react";

import steps from "../../data/steps";

const Steps = () => {
  return (
    <section className="steps">
      <header className="header steps-header primary-header">
        <h1>My Work Process</h1>
      </header>
      <div className="showcase">
        {steps.map(step => (
          <article key={step.id}>
            <h2>{step.id}</h2>
            <h1>{step.title}</h1>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Steps;

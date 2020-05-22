import React from "react";

import steps from "../../data/steps";

const Steps = () => {
  return (
    <section className='steps'>
      <div className='container'>
        <header className='header steps-header primary-header'>
          <h1>My Work Process</h1>
        </header>
        <div className='showcase'>
          <div className='col-1'>
            {steps.slice(0,2).map((step) => (
              <article key={step.id}>
                <h2>{step.id}</h2>
                <h1>{step.title}</h1>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div class="col-2"></div>
          <div className='col-3'>
            {steps.slice(-2).map((step) => (
              <article key={step.id}>
                <h2>{step.id}</h2>
                <h1>{step.title}</h1>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

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
          <div className='col col1'>
            {steps.slice(0, 2).map((step) => (
              <article key={step.id} className={`row row-${step.id}`}>
                <h4>{step.id}</h4>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className='col col2'>
            <div className='circle'></div>
          </div>
          <div className='col col3'>
            {steps.slice(-2).map((step) => (
              <article key={step.id} className={`row row-${step.id}`}>
                <h4>{step.id}</h4>
                <h3>{step.title}</h3>
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

import React from "react";
import { AiOutlineAntDesign, FaCode, RiQuestionLine } from "react-icons/all";

const services = [
  {
    id: 1,
    title: "Web design",
    description:
      "I provide the best and current trending UI/UX designs for the websites that suits the theme of the website",
    icon: <AiOutlineAntDesign className='icon' />,
  },
  {
    id: 2,
    title: "Web development",
    description:
      "I bring designs to life, I develop fast and accessible websites and webapps",
    icon: <FaCode className='icon' />,
  },
  {
    id: 3,
    title: "Quick support",
    description:
      "I work with startups on how to improve their business/services by using tech solutions like e-marketing for free and I develop websites starting from free of cost depending on the complexity of work",
    icon: <RiQuestionLine className='icon' />,
  },
];

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <header className='header service-header primary-header'>
          <h1>Services</h1>
        </header>
        <div className='showcase'>
          {services.map((service) => (
            <article key={service.id}>
              <span>{service.icon}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

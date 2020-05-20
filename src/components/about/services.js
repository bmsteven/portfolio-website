import React from "react";
import { AiOutlineAntDesign, FaCode, RiQuestionLine } from "react-icons/all";

const services = [
  {
    id: 1,
    title: "Web design",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    icon: <AiOutlineAntDesign className="icon" />
  },
  {
    id: 2,
    title: "Web development",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    icon: <FaCode className="icon" />
  },
  {
    id: 3,
    title: "Quick support",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    icon: <RiQuestionLine className="icon" />
  }
];

const Services = () => {
  console.log(services[0].icon);
  return (
    <section className="services">
      <header className="header service-header primary-header">
        <h1>Services</h1>
      </header>
      <div className="showcase">
        {services.map(service => (
          <article key={service.id}>
            <span>{service.icon}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import {
  FaCode,
  BsMusicNoteBeamed,
  FaBaseballBall,
  GrGamepad,
  FaBook,
  GiCycling,
  MdLocalMovies,
  FaPencilAlt,
  MdPersonalVideo
} from "react-icons/all";

const hobbies = [
  {
    id: 1,
    title: "Coding",
    icon: <FaCode className="icon" />
  },
  {
    id: 2,
    title: "Music",
    icon: <BsMusicNoteBeamed className="icon" />
  },
  {
    id: 3,
    title: "Sports",
    icon: <FaBaseballBall className="icon" />
  },
  {
    id: 4,
    title: "Video Games",
    icon: <GrGamepad className="icon" />
  },
  {
    id: 5,
    title: "Books",
    icon: <FaBook className="icon" />
  },
  {
    id: 6,
    title: "Cycling",
    icon: <GiCycling className="icon" />
  },
  {
    id: 7,
    title: "Arts",
    icon: <FaPencilAlt className="icon" />
  },
  {
    id: 8,
    title: "TV",
    icon: <MdPersonalVideo className="icon" />
  },
  {
    id: 9,
    title: "Movies",
    icon: <MdLocalMovies className="icon" />
  }
];

const Hobbies = () => {
  return (
    <section className="steps">
      <header className="header hobbies-header primary-header">
        <h1>My Hobbies</h1>
      </header>
      <div className="showcase">
        {hobbies.map(hobby => (
          <article key={hobby.id}>
            <span>{hobby.icon}</span>
            <p>{hobby.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;

import React from "react";
import styles from "./expertArea.module.scss";
import Image from "next/image";

const skills = [
  {
    skillName: "Frontend Development",
    skillSmallDescription:
      "Built dynamic and responsive user interfaces using React.js. Implemented client-side routing, state management, and API integration to provide   seamless user experiences.",
    skillList: [
      {
        name: "HTML",
        icon: "/html.png",
        rating: 12,
      },
      { name: "CSS", icon: "/css.png", rating: 12 },
      {
        name: "JavaScript",
        icon: "/javascript.png",
        rating: 12,
      },
      {
        name: "React",
        icon: "/reactjs.png",
        rating: 12,
      },
      {
        name: "Next.js",
        icon: "/nextjs.png",
        rating: 12,
      },
      {
        name: "Material Design",
        icon: "/material-ui.png",
        rating: 12,
      },
      {
        name: "Tailwind CSS",
        icon: "/tailwind.png",
        rating: 12,
      },
      {
        name: "Sass",
        icon: "/scss.png",
        rating: 12,
      },
      {
        name: "Redux",
        icon: "/redux.png",
        rating: 12,
      },
    ],
  },
  {
    skillName: "Backend Development",
    skillSmallDescription:
      "Developed RESTful APIs using Node.js and Express.js to handle business  logic, authentication, and server-side operations. Ensured secure and  scalable backend architecture.",
    skillList: [
      {
        name: "Node.js",
        icon: "/nodejs.png",
        rating: 12,
      },
    ],
  },
  {
    skillName: "Database",
    skillSmallDescription:
      "Used MongoDB as a NoSQL database to store and manage application data. Designed schemas and performed CRUD operations efficiently using   Mongoose ODM.",
    skillList: [
      {
        name: "MongoDB",
        icon: "/mongodb.png",
        rating: 12,
      },
    ],
  },
  {
    skillName: "Other Skills",
    skillSmallDescription:
      "Experienced with Git and GitHub for version control and team  collaboration. Proficient in using Postman for API testing and debugging. Deployed full-stack applications using Vercel, Netlify, Render, and Heroku.",
    skillList: [
      {
        name: "Git",
        icon: "/git.png",
        rating: 12,
      },
      { name: "Github", icon: "/github.png", rating: 12 },
    ],
  },
];

const ExpertArea = () => {
  return skills.map((skill, i) => (
    <div key={i} className={styles.card}>
      <h3 className={styles.title}>{skill.skillName}</h3>
      <p className={styles.skillDescrip}>{skill.skillSmallDescription}</p>
      <div className={styles.grid}>
        {skill.skillList.map((skilllist, index) => (
          <div className={styles.skill} key={index} skill-rating={12}>
            <p>
              <Image
                src={skilllist.icon}
                alt={skilllist.name}
                className={styles.icon}
                height={0}
                width={0}
              />
              <span>{skilllist.name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  ));
};

export default ExpertArea;

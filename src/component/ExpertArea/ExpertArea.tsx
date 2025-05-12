import React from "react";
import styles from "./expertArea.module.scss";
import Image from "next/image";
const skills = [
  {
    name: "HTML",
    icon: "/html.png",
  },
  { name: "CSS", icon: "/css.png" },
  {
    name: "JavaScript",
    icon: "/javascript.png",
  },
  {
    name: "React",
    icon: "/reactjs.png",
  },
  {
    name: "Material Design",
    icon: "/material-ui.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.png",
  },
  {
    name: "Sass",
    icon: "/scss.png",
  },
  {
    name: "Redux",
    icon: "/redux.png",
  },

  {
    name: "MongoDB",
    icon: "/mongodb.png",
  },
  {
    name: "Node.js",
    icon: "/nodejs.png",
  },

  {
    name: "Git",
    icon: "/git.png",
  },
  { name: "Github", icon: "/github.png" },
];
const ExpertArea = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>My Expert Area</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div className={styles.skill} key={skill.name}>
            <Image
              src={skill.icon}
              alt={skill.name}
              className={styles.icon}
              height={0}
              width={0}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertArea;

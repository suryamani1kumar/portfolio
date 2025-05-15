import React from "react";
import styles from "./profileCard.module.scss";
import { FaLinkedin, FaGithub, FaBehance, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineFileDownload, MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <Image
          src="/reactjs.png"
          alt="Profile"
          className={styles.avatar}
          height={0}
          width={0}
        />
        <h2>Suryamani Kumar</h2>
        <p className={styles.subtitle}>
          Frontend Developer || React.js Developer
        </p>
        <p className={styles.subtitle}>MERN Stack Developer</p>
      </div>

      <div className={styles.info}>
        Skilled MERN Stack Developer with a strong focus on building fast,
        SEO-friendly, and responsive web applications using React.js.
        Experienced in optimizing performance, improving load times, and
        following best practices to enhance search engine visibility and user
        experience.
      </div>
      <div className={styles.download}>
        <button className={styles.downloadcv}>
          <Link href={`/javascript.png`} download="myFile">
            Download cv <MdOutlineFileDownload />
          </Link>
        </button>
        <button className={styles.downloadcv}>
          <Link href={`/javascript.png`} download="myFile">
            Send Email <MdOutlineMailOutline />
          </Link>
        </button>
      </div>

      <div className={styles.skills}>
        {[
          ["html", 90],
          ["CSS", 95],
          ["Js", 75],
          ["PHP", 65],
          ["Wordpress", 85],
        ].map(([name, percent], i) => (
          <div key={i} className={styles.skill_bar}>
            <div className={styles.label}>
              <span>{name}</span>
              <span>{percent}%</span>
            </div>
            <div className={styles.bar}>
              <div style={{ width: `${percent}%` }} className={styles.fill} />
            </div>
          </div>
        ))}
      </div>

      <ul className={styles.tech}>
        <li> Bootstrap, Materialize</li>
        <li> Stylus, Sass, Less</li>
        <li> Gulp, Webpack, Grunt</li>
      </ul>

      <div className={styles.footer_icons}>
        <FaLinkedin />
        <FaGithub />
        <FaBehance />
        <FaTwitter />
      </div>
    </div>
  );
};

export default ProfileCard;

import React from "react";
import Profile from "../../assets/main/DPImg.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abirami </h1>
        <p className={styles.description}>
          I am a Software Engineer with 1.6 years of working experience in IBM
          iSeries. I am also proficient in web development technologies, having
          gained hands-on experience during my internship. My skills span both
          backend and frontend development, and I thrive on building
          high-performance, user-centric applications.
        </p>
        <a href="mailto:abiabhi2712@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <div>
        <img src={Profile} alt="image" className={styles.profileImg}></img>
      </div>

      <div className={styles.topblur} />
      <div className={styles.bottomblur} />
    </section>
  );
};
export default About;

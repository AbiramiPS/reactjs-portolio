import React from "react";
import Email from "../../assets/contact/email.png"
import Github from "../../assets/contact/github.png"
import Linkedin from "../../assets/contact/linkedin.png"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Get in Touch!</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
           <img src={Email} alt="Email Icon" /> 
           <a href="mailto:abiabhi2712@gmail.com">abiabhi2712@gmail.com</a>
        </li>

        <li className={styles.link}>
           <img src={Linkedin} alt="Linkedin Icon" /> 
           <a href="https://www.linkedin.com/in/abirami-p-s">linkedin.com/AbiramiPS</a>
        </li>
        <li className={styles.link}>
           <img src={Github} alt="Github Icon" className={styles.img} /> 
           <a href="https://github.com/AbiramiPS">github.com/AbiramiPS</a>
        </li>
      </ul>
    </footer>

 
  );
};
export default Contact;

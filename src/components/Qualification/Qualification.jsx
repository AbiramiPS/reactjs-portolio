import React from "react";
import Graduation from "../../assets/qualification/Graduation.png";
import styles from "./Qualification.module.css";

const Qualification = () => {
  return (
    <section className={styles.container} id="qualifications">
      <h2 className={styles.title}>Qualifications</h2>
      <div className={styles.content}>
        <ul className={styles.itemsQual}>
          <li className={styles.itemQual}>
            <img src={Graduation} alt="gradIcon" />

            <div className={styles.itemText}>
              <h3>
                Bachelor of Engineering 
              </h3>
              <h5>August 2019 - 2023</h5>
              <p>
                Computer Science and Engineering <br /> Meenakshi Sundararajan
                Engineering College, Kodambakkam, Chennai <br /> CGPA: 8.98
              </p>
            </div>
          </li>

          <li className={styles.itemQual}>
            <img src={Graduation} alt="gradIcon" />

            <div className={styles.itemText}>
              <h3>
                Higher Secondary 
              </h3>
              <h5>June 2017 - March 2019</h5>
              <p>
                Zion Matriculation Higher Secondary School, Tambaram, Chennai{" "}
                <br /> Percentage : 90%
              </p>
            </div>
          </li>

          <li className={styles.itemQual}>
            <img src={Graduation} alt="gradIcon" />

            <div className={styles.itemText}>
              <h3>
                SSLC 
              </h3>
              <h5>June 2016 - March 2017</h5>
              <p>
                Srimathi Lakshmiammal Memorial Matriculation Higher Secondary
                School, Chrompet, Chennai <br /> Percentage : 98.6%
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Qualification;

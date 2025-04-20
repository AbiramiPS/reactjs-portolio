import React, { useState } from "react";
import styles from "./Navbar.module.css";
import MenuImage from "../../assets/nav/menu48.png";
import CloseImage from "../../assets/nav/close48.png";
//import getImageURL from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src= {menuOpen ? CloseImage : MenuImage}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
       onClick = {()=> setMenuOpen(false)}
      >
          <li>
            <a href="#qualifications">Qualifications</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

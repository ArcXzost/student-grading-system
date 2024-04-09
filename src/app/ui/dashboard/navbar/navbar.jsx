'use client';
import { usePathname } from 'next/navigation';
import React from 'react'
import styles from './navbar.module.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faComments, faBell, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <FontAwesomeIcon icon={faSearch} className="fas fa-search" style={{ color: "grey" }} />
          <input type="text" placeholder='Search...' className={styles.input} />
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faComments} className="fas fa-comments" style={{ color: "grey" }}/>
          <FontAwesomeIcon icon={faBell} className="fas fa-bell" style={{ color: "grey" }} />
          <FontAwesomeIcon icon={faEarthAmericas} className="fas fa-earth-americas" style={{ color: "grey" }} />
        </div>
      </div>
    </div>
  )
}

export default navbar

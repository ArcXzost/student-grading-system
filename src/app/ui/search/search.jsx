import React from 'react'
import styles from './search.module.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";

const search = ({ placeholder }) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faSearch} className="fas fa-search" style={{ color: "grey" }} />
            <input type="text" placeholder={placeholder} className={styles.input} />
        </div>
    )
}

export default search

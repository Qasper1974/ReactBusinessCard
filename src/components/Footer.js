import React from "react";

import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCat, faGasPump, faGrin, faHandPaper, faHatCowboy, faLanguage, faMicrochip } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <ul className={styles.list}>
            <li><FontAwesomeIcon icon={faCat} /> Twitter</li>
            <li><FontAwesomeIcon icon={faHandPaper} /> LinkedIn</li>
            <li><FontAwesomeIcon icon={faGasPump} /> Facebook</li>
            <li><FontAwesomeIcon icon={faAddressCard} /> Instagram</li>
        </ul>
    )
}
export default Footer
import React from "react";

import foto from '../images/C54BB3C6-E147-42DE-A2AC-9C9A27E1AC95.JPG';

import styles from './Info.module.css';

const Info = () => {
    return (
        <div className={styles.info}>
            <img src={foto} className={styles.foto}/>
            <h2 className={styles.naam}>Yves Faems</h2>
            <h3>buttons</h3>
        </div>
    )
}

export default Info
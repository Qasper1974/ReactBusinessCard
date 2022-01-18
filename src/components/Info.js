import React from "react";

import foto from '../images/C54BB3C6-E147-42DE-A2AC-9C9A27E1AC95.JPG';

import Button from "./Button";

import styles from './Info.module.css';

const Info = () => {
    return (
        <div className={styles.info}>
            <img src={foto} className={styles.foto}/>
            <h2 className={styles.naam}>Yves Faems</h2>
            <div className={styles.button_container}>
                <Button
                    button_text = 'email'
                    color = '#0A66C2'
                />
                <Button 
                    button_text = 'linkedIn'
                    colorBack = '#0A66C2'
                    color = 'white'
                />

            </div>
        </div>
    )
}

export default Info
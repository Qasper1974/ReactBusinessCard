import React from "react";

import foto from '../images/zion.png';

import Button from "./Button";

import styles from './Info.module.css';

const Info = () => {
    return (
        <div className={styles.info}>
            <img src={foto} className={styles.foto}/>
            <h2 className={styles.naam}>Yves Faems</h2>
            <div className={styles.button_container}>
                <Button
                    button_text = 'Email'
                    color = 'black'
                    colorBack = 'white'
                />
                <Button 
                    button_text = 'LinkedIn'
                    colorBack = '#0A66C2'
                    color = 'white'
                />

            </div>
        </div>
    )
}

export default Info
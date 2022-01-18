import React from "react";

import styles from './Button.module.css';

const Button = (props) => {
    return (
        <h3 className={styles.button} style={{'backgroundColor' : props.colorBack, 'color': props.color}} >{props.button_text}</h3>
    )  
}

export default Button
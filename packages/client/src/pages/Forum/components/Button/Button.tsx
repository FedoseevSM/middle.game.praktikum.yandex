import React from 'react';
import styles from './button.module.scss'

const Button = (props: any) => {
    const { text, width, callback } = props;

    return (
        <button className={styles.block} style={{ width: width }} onClick={callback}>
            {text}
        </button>
    );
};

export default Button;
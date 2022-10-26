import React from 'react';
import styles from './button.module.css'

const Button = (props: any) => {
    const {text, width} = props;

    return (
        <div className={styles.block} style={{width: width}}>
            {text}
        </div>
    );
};

export default Button;
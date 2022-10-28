import React from 'react';
import styles from './input.module.scss'


const Input = (props: any) => {
    const {style} = props;

    return (
        <input className={styles.block} style={style} />
    );
};

export default Input;
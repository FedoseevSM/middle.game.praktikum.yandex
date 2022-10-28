import React from 'react';
import styles from './card.module.scss'

const Card = (props: any) => {
    const {style} = props;

    return (
        <div className={styles.block} style={style} >
            {props.children}
        </div>
    );
};

export default Card;
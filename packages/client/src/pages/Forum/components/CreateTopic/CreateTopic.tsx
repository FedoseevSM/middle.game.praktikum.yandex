import React from 'react';
import { BlankWindow } from '../../../../components/BlankWindow';
import Input from '../../../../components/Input';
import styles from './createtopic.module.scss'

const CreateTopic = (props: any) => {

    return (
        <BlankWindow className={styles.card}>
            <div className={styles.topic}>
                <div className={styles.title}>NEW TOPIC: </div>
                <Input style={{ flex: 1 }} />
            </div>
            <div className={styles.title}>Topic description: </div>
            <div className={styles.description}>
                <Input className={styles.input} />
            </div>
        </BlankWindow>
    );
};

export default CreateTopic;
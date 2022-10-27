import React from 'react';
import Card from '../Card';
import Input from '../Input';
import styles from './createtopic.module.scss'

const CreateTopic = (props: any) => {
    
    return (
        <Card style={{ display: 'flex', flexFlow: 'column', height: '300px'}} >
            <div className={styles.topic}>
                <div className={styles.title}>NEW TOPIC: </div>
                <Input style={{ flex: 1 }} />
            </div>
            <div className={styles.title}>Topic description: </div>
            <div className={styles.description}>
                <Input style={{ margin: '5px 0px', flex: 1}} />
            </div>
        </Card>
    );
};

export default CreateTopic;
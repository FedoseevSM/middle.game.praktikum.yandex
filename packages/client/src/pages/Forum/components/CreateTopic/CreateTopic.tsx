import React from 'react';
import Card from '../Card/Card';
import Input from '../Input/Input';
import styles from './createtopic.module.scss'

const CreateTopic = (props: any) => {
    
    return (
        <Card style={{ flexFlow: 'column'}} >
            <div className={styles.topic}>
                <div className={styles.title}>NEW TOPIC: </div>
                <Input style={{ flex: 1 }} />
            </div>
            <div className={styles.title}>Topic description: </div>
            <div className={styles.description}>
                <Input style={{ margin: '5px 0px', flex: 1, height: '250px' }} />
            </div>
        </Card>
    );
};

export default CreateTopic;
import React, { useState } from 'react';
import Button from './components/Button/Button';
import CreateTopic from './components/CreateTopic/CreateTopic';
import Topic from './components/Topic/Topic';
import styles from './forum.module.scss'
import topics from './topics.json'

const Forum = () => {
    const [open, setOpen] = useState(false);

    const newTopic = () => {
        setOpen(!open);
    }

    return (
        <div className={styles.block}>
            <div className={styles.block_button}>
                <div className={styles.block_button_top}>
                    <Button text='GO BACK' width='100%' />
                    <Button text='PLAY' width='100%' />
                </div>
                <Button text='POST NEW TOPIC' width='100%' callback={newTopic} />
            </div>
            <div className={styles.block_posts}>
                {
                    open ?
                        <CreateTopic />
                        :
                        <>
                            {topics.map((topic, index) => {
                                return <Topic key={index} topic={topic} />
                            })}
                            <div className={styles.block_footer}>
                                1, 2, 3, 4, 5 ...
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Forum;
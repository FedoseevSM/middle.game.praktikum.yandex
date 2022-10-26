import React from 'react';
import Button from './components/Button/Button';
import Post from './components/Post/Post';
import styles from './forum.module.css'
import posts from './posts.json'

const Forum = () => {
    return (
        <div className={styles.block}>
            <div className={styles.block_button}>
                <div className={styles.block_button_top}>
                    <Button text='GO BACK' width='100%' />
                    <Button text='PLAY' width='100%' />
                </div>
                <Button text='POST NEW TOPIC' width='100%' />
            </div>
            <div className={styles.block_posts}>
            {posts.map((post) => {
                return <Post post={post}/>
            })}
            <div className={styles.block_footer}>
                1, 2, 3, 4, 5 ...
            </div>
            </div>
        </div>
    );
};

export default Forum;
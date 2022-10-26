import React from 'react';
import styles from './post.module.css'

const Post = (props: any) => {
    const { topic, description, author, date, comments, views } = props.post;
    console.log(props.post)

    return (
        <div className={styles.block}>
            <div className={styles.block_topic}>
                <div>{topic}</div>
                <div>{description}</div>
                <div className={styles.block_author}>
                    <div>author: {author}</div>
                    <div>{date}</div>
                </div>
            </div>
            <div style={{width: '10%', display: 'flex', flexFlow: 'column'}}>
                <div style={{textAlign: 'center'}}>comments</div>
                <div style={{backgroundColor: 'red', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{comments.length}</div>
            </div>
            <div  style={{width: '10%', display: 'flex', flexFlow: 'column'}}>
                <div style={{textAlign: 'center'}}>views</div>
                <div style={{backgroundColor: 'red', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{views}</div>
            </div>
        </div>
    );
};

export default Post;
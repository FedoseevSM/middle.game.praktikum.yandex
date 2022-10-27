import React from 'react';
import Card from '../Card/Card';
import styles from './topic.module.scss'

const Topic = (props: any) => {
    const { title, description, author, date, comments, views } = props.topic;

    return (
        <Card>
            <div className={styles.topic}>
                <div className={styles.title}>{title}</div>
                <div>{description}</div>
                <div className={styles.author}>
                    <div>author: {author}</div>
                    <div>{date}</div>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.title}>comments</div>
                <div className={styles.count}>{comments.length}</div>
            </div>
            <div  className={styles.views}>
                <div className={styles.title}>views</div>
                <div className={styles.count}>{views}</div>
            </div>
        </Card>
    );
};

export default Topic;
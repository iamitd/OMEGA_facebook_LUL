import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://million-wallpapers.ru/wallpapers/1/26/422650350151607/2014-avatara-2-simvolov.jpg'/>
            {props.message}
            <div>
                <span>like{props.LikesCount}</span>
            </div>
        </div>
    )
}

export default Post;
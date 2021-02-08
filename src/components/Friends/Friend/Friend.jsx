import React from 'react';
import s from './Friend.module.css'
const Friend = (props) => {
    return (
        <div className={s.profile}>
            <img src={props.img}/>
            <div>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default Friend;
import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsBar = props.state.map(f => <Friend img={f.img} name={f.name}/>)
    return (
        <div>
            {friendsBar}
        </div>
    )
}

export default Friends;
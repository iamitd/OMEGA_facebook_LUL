import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    console.log('RENDER')
    let postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.likesCount}/>)

    let addPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <AddPostFormRedux onSubmit={addPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostBody" placeholder="Enter your post" validate={[required, maxLength10]}/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: "addPostForm"})(AddPostForm)

export default MyPosts;
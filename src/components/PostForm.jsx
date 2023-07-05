import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = React.useState({title: '', body: ''});
    const addNewPost = () => {
     const newPost = {
            ...post, id: Date.now()
     }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
            <form style={{marginTop: 25}}>
                <MyInput
                    type="text"
                    placeholder="Post name"
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                />
                <br/>
                <MyInput
                    type="text"
                    placeholder="Post Description"
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                />
                <br/>
                <MyButton type = "button" onClick = {addNewPost}>Create Post</MyButton>
            </form>
    );
};

export default PostForm;
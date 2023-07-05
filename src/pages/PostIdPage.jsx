import React from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = React.useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [comments, setComments] = React.useState([]);
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    }
    );
    React.useEffect(() => {
        fetchPostById(params.id).then(r => r);
        fetchComments(params.id).then(r => r);
    } ,[]);

    return (
        <div>
            <h1>Post page {params.id}</h1>
            {isLoading
                ? <h1>Loading...</h1>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {isComLoading
                ? <h1>Loading...</h1>
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;
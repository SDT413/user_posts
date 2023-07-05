import React from 'react';
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/ModalWindow/MyModal";
import MyButton from "../components/UI/button/MyButton";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {usePosts} from "../hooks/usePosts";
import {getPageCount} from "../components/utils/pages";
import Pagination from "../components/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";


const Posts = () => {
    const [posts, setPosts] = React.useState([]);
    const [filter, setFilter] = React.useState({sort: '', query: ''});
    const [modal, setModal] = React.useState(false);
    const [totalPages, setTotalPages] = React.useState(0);
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = React.useRef();
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });
    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    });
    React.useEffect(() => {
        fetchPosts().then(r => r);
    }, [page, limit]);

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }
    return (
        <div className="App">
            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Number of elements on page"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Show all'},
                ]}
            />
            {postError && <h1>Error ${postError}</h1>}
            {isPostsLoading &&
                 <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Loader></Loader></div>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="List of posts"/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create = {(newPost) => {
                    setPosts([...posts, newPost])
                    setModal(false)
                }}/>
            </MyModal>
            <Pagination page={page} changePage={setPage} totalPages={totalPages}/>

        </div>
    );
};

export default Posts;
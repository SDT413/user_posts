import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {AuthContext} from "../context";
import Login from "./Login/Login";

const AppRouter = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
    return (
        isAuthenticated
            ? <Routes>
                <Route key = "login" path="/" element={<Login/>}/>
                <Route key = "about" path="/about" element={<About/>}/>
                <Route key = "error" path="*" element={<Error/>}/>
            </Routes>
            : <Routes>
                <Route key = "posts" path="/" element={<Posts/>}/>
                <Route key = "about" path="/about" element={<About/>}/>
                <Route key = "postsId" path="/posts/:id" element={<PostIdPage/>}/>
                <Route key = "error" path="*" element={<Error/>}/>
            </Routes>
    );
};

export default AppRouter;
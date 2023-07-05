import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../components/Login/Login";

export const privateRoutes = [
    {path: '/posts', exact: true, component: Posts},
    {path: '/about', exact: true, component: About},
    {path: '/posts/:id',  exact: true, component: PostIdPage},
    {path: '/error', exact: true, component: Error}
    ];

export const publicRoutes = [
    {path: '/about', exact: true, component: About},
    {path: '/login', exact: true, component: Login}
];
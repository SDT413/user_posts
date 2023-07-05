import React from 'react';
import MyInput from "../UI/input/MyInput";

const Login = () => {
    const [isAuth, setIsAuth] = React.useState(false);
    const submit = (event) => {
        event.preventDefault();
        setIsAuth(true);
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={submit}>
                <MyInput type="text" placeholder="Enter login"/>
                <MyInput type="password" placeholder="Enter password"/>
                <button type={"submit"}>Login</button>
            </form>
        </div>
    );
};

export default Login;
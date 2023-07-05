import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";


function App() {
const [isAuth, setIsAuth] = React.useState(false);
  return (
      <AuthContext.Provider value={{
            isAuth,
            setIsAuth
      }}>
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
        </AuthContext.Provider>
  );
}

export default App;

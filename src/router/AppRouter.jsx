import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../components/nav/Navbar";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "./../pages/about/About";
import Detail from "./../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/register/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        //!👆 Burada kullanıcı abouta tıkladıgı anda ilk bi PrivateRouter sayfasına yönlendireceğimiz için element içine PrivateRouter sayfasına yönlendirdik ilk önce.
        <Route path="" element={<About />} />
        {/* Burada kullanıcı about sayfasına tıklıyor PrivateRouter a yönlendiriyoruz kullanıcıya diyoruz ki PrivateRouter sayfasında senin giriş iznin var mı vasrsa abouta git yoksa  */}
        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import "./App.css";

import Home from "./pages/Home.js";
import Help from "./pages/Help.js";
import Login from "./pages/Login.js";
import Blog from "./pages/Blog.js";
import Register from "./pages/Register.js";
import Activities from "./pages/Activities.js";
import User_page from "./pages/User_page.js";

import Navbar from "./elements/Navbar.js";

import logo from "./logo.svg";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div id="page-container">
      <Navbar />

      <div id="content-wrap">
        <Routes>
          <Route exact path="home" element={<Home />} />
          <Route exact path="help" element={<Help />} />
          <Route exact path="activities" element={<Activities />} />
          <Route exact path="blog" element={<Blog />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="user_page" element={<User_page />} />

          <Route path="*" element={<Navigate to="home" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

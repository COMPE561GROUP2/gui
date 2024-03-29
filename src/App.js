import "./App.css";

import Home from "./pages/Home.js";
import Help from "./pages/Help.js";
import Login from "./pages/Login.js";
import Blog from "./pages/Blog.js";
import Post from "./pages/Post.js";
import Post1 from "./pages/Post1.js";
import Register from "./pages/Register.js";
import Activities from "./pages/Activities.js";
import UserProfile from "./pages/UserProfile.js";
import Location from "./pages/Location.js";
import NotFound from "./pages/NotFound.js";

import Navbar from "./elements/Navbar.js";
import Footer from "./elements/Footer.js"

import logo from "./logo.svg";

import axios from "axios";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

class App extends React.Component {

  render() {
    return (
      <AuthProvider>
        <div className="background-main fullscreen">
          <div id="page-container">
            <Navbar />

            <div id="content-wrap">
              <Routes>
                <Route exact path="" element={<Home />} />
                <Route exact path="home" element={<Home />} />
                <Route exact path="help" element={<Help />} />
                <Route exact path="activities" element={<Activities />} />
                <Route exact path="blog" element={<Blog />} />
                <Route exact path="post" element={<Post />} />
                <Route exact path="post1" element={<Post1 />} />
                <Route exact path="login" element={<Login />} />
                <Route exact path="register" element={<Register />} />
                <Route exact path="location" element={<Location />} />
                <Route exact path="404" element={<NotFound />} />

                <Route
                  exact
                  path="user-profile/:profile_owner"
                  element={<UserProfile />}
                />

                <Route path="*" element={<NotFound/>} />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default App;

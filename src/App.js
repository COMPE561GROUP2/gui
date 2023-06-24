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

import axios from "axios";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <AuthProvider>
        <div id="page-container" className="background-main">
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
      </AuthProvider>
    );
  }
}

export default App;

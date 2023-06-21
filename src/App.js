import './App.css';

import home from './pages/home.js';
import help from './pages/help.js';
import login from './pages/login.js';
import blog from './pages/blog.js';
import register from './pages/register.js';
import activities from './pages/activities.js';
import user_page from './pages/user_page.js';

import navbar from './elements/navbar.js';


import logo from './logo.svg';

import {Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <navbar/>
  );
}

export default App;

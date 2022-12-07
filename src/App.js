import React, { useState } from 'react';
import Navigation from "./Components/Navigation/Navigation";
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import BlogOverview from './Pages/BlogOverview/BlogOverview';
import {Routes, Route, Navigate, NavLink} from 'react-router-dom';


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
 // const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    const [ auth, toggleAuth ] = useState(false);

  return (
      <>
          <Navigation isAuth={auth} loggedOut={toggleAuth}/>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/login" element={<LoginPage toggleAuthenticated = {toggleAuth} />}/>
              <Route path="/blogposts" element={ auth ? <BlogOverview isAuth={auth}/> : <Navigate to="/login"/>}/>
              <Route path="/blogposts/:blogId" element={ auth ? <BlogPage /> : <Navigate to="/login"/>}/>
          </Routes>
      </>
  );
}

export default App;
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import {Routes, Route} from "react-router-dom"
import LandingPage from './components/landing_page/LandingPage';
import CreateProject from './components/landing_page/CreateProject';
import ProjectDetails from './components/landing_page/ProjectDetails';



function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/landing" element={<LandingPage/>} />
    <Route path="/create-project" element={<CreateProject/>} />
    <Route path="/projects/:id" element={<ProjectDetails/>} />



    </Routes>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/homePage/HomePage';
import React, { useState, useEffect } from "react";
import "./style.css";
import Preloader from './Preloader';
import BackendSkillsComponent from './components/Skills/BackendSkillsComponent';
import FrontendSkillsComponent from './components/Skills/FrontendSkillsComponent';
import DevopsSkillsComponent from './components/Skills/DevopsSkillsComponent';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}>
        <Route path='backend' element={<BackendSkillsComponent />} />
        <Route path='frontend' element={<FrontendSkillsComponent />} />
        <Route path='devops' element={<DevopsSkillsComponent />} />
        </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;

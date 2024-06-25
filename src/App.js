import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/homePage/HomePage';
import React, { useState, useEffect } from "react";
import "./style.css";
import Preloader from './Preloader';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;

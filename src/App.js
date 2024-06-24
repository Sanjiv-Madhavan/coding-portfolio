import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/homePage/HomePage';

import "./style.css";

function App() {
  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;

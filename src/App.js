import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import TimeAttackPage from './components/TimeAttackPage';

export default function App() {
  return (
    <Router>
      <div>
          <Menu />
          <div className="page">
              <Routes>
                <Route path="/" exact element={<HomePage/>}> </Route> 
                <Route path="/drift" element={<DriftPage/>}> </Route> 
                <Route path="/timeattack" element={<TimeAttackPage/>}></Route> 
                <Route path="/forza" element={<ForzaPage/>}> </Route> 
              </Routes>
          </div>
      </div>
    </Router>
  );
}
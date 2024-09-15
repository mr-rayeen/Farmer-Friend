import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar_Section/Sidebar';
import NotFound from './Pages/NotFound/NotFound'; // Create a NotFound component
import Dashboard from './Pages/Dashboard/Dashboard';
import Navbar from './Pages/Dashboard/Navbar/Navbar';
import Top from './Pages/Dashboard/Top_Section/Top'
import MatchCrop from './Pages/MatchCrop/MatchCrop';

const App = () => {
  return (
    <Router>
      <div className='container flex'>
        <Sidebar />
        <div className='mainContent'>
        <div style={{position:'sticky',top:'0rem',paddingBottom:'1rem',zIndex:'9999',background:'#EEEFF1'}}>
        <Navbar/>
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />  {/* Default route */}
          <Route path="/match-crop" element={<MatchCrop />} />
          <Route path="*" element={<NotFound />} />  {/* Route for non-existent paths */}
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

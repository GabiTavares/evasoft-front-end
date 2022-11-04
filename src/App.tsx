import React from 'react';
import Menu from './pages/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
          <Routes>
            <Route path='/' element={<Menu />} />
          </Routes>
        </Router>
        
    </>
  );
}

export default App;

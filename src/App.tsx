import React from 'react';
import Menu from './pages/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogo from './pages/catalogo';
import './styles/global.css'

function App() {
  return (
    <>
    <Router>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/catalogo' element={<Catalogo />} />
          </Routes>
        </Router>
        
    </>
  );
}

export default App;

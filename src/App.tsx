import React from 'react';
import Menu from './pages/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogo from './pages/catalogo';
import './styles/global.css'
import CadastroEquip from './pages/cadastro';
import Analise from './pages/decisão';
import CadFinal from './pages/cadfinal';

function App() {
  return (
    <>
    <Router>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/cadastro' element={<CadastroEquip />} />
            <Route path='/cadastro_finalizado' element={<CadFinal />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/analise' element={<Analise />} />
          </Routes>
        </Router>
        
    </>
  );
}

export default App;

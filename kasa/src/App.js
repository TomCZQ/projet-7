import React from 'react';
import { BrowserRouter as Router, Route, Routes, Links } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/A_propos';
import Error from './pages/Error';
import FichesLogement from './pages/Fiche_logement';

import './style/App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Fiche_Logement" element={<FichesLogement/>} />
        <Route path="/A_Propos" element={<APropos/>}/>
        <Route path="/404" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;

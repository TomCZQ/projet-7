import React from 'react';
import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/A_propos';
import Error from './pages/Error';
import FichesLogement from './pages/Fiche_logement';

import './style/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/logement/:id" element={<FichesLogement/>} />
        <Route path="/a-propos" element={<APropos/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

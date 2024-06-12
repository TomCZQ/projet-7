import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import APropos from "./pages/A_propos/A_propos";
import Error from "./pages/Error/Error";
import FichesLogement from "./pages/Fiche_logement/Fiche_logement";

import "./style/App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<FichesLogement />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

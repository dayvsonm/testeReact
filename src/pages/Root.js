import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreProvider from "../components/Store/Provider";
import RoutesPrivate from "../components/Routes/Private/Private";
import PainelControle from "./PainelControle/PainelControle";
import CadastroPeriodo from "./CadastroPeriodo/CadastroPeriodo";
import CadastroUsuario from "./CadastroUsuario/CadastroUsuario";
import Reservas from "./Reservas/Reservas";
import ValorHora from "./ValorHora/ValorHora";
import Login from "./Login/Login";
import Navbar from "../components/navbar/Navbar";
import '../App.css'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<RoutesPrivate><PainelControle /></RoutesPrivate>} />
      </Routes>
    </StoreProvider>
  </Router>
);

export default PagesRoot;

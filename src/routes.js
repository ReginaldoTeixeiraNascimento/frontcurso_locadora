import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Cliente from "./Pages/Cliente";
import ListaFilmes from "./Pages/ListaFilmes";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cliente" element={<Cliente/>} />
                <Route path="/listafilmes" element={<ListaFilmes/>} />
                
            </Routes>
        </BrowserRouter>
    );
}


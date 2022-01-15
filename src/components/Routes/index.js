import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Contato from '../Contato';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;

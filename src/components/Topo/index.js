import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Topo = () => (
    <header>
        <Link to="/" className="logo-link">
            <div className="logo">
                <img src="assets/dente.png" alt="logo" className="logo-img" />

                <h3 className="logo-text">Dentes Saudáveis</h3>
            </div>
        </Link>
        <nav className="links">
            <ul type="none">
                <li>
                    <Link to="/" className="link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/contato" className="link">
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Topo;

import React from 'react';
import ConteudoPagina from '../ConteudoPagina';
import Mapa from '../Mapa';
import './style.css';

const Contato = () => (
    <ConteudoPagina>
        <section className="container-horarios">
            <h1 className="info-container">
                Horários de <b>atendimento</b>
            </h1>
            <h3 className="text-container">
                Agende uma consulta pelo telefone (21) 3699 - 9999
            </h3>
            <div className="container-medicos">
                <div className="box-medico">
                    <img src="assets/medico01.png" />
                    <h5>Dr. Hélio</h5>
                    <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                </div>
                <div className="box-medico">
                    <img src="assets/medico02.png" />
                    <h5>Dr. Carlos</h5>
                    <p>Terças e quintas das 13:00 às 18:00</p>
                </div>
                <div className="box-medico">
                    <img src="assets/medico03.png" />
                    <h5>Dra. Suzana</h5>
                    <p>Terças, quintas e sábados das 08:00 às 12:00</p>
                </div>
            </div>
        </section>
        <section className="container-localizacao">
            <h1 className="info-container">
                Onde estamos <b>localizados?</b>
            </h1>
            <h3 className="text-container">
                Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ.
                CEP: 22775-904
            </h3>
            <Mapa />
        </section>
    </ConteudoPagina>
);

export default Contato;

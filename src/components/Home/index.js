import React from 'react';
import { Link } from 'react-router-dom';
import ConteudoPagina from '../ConteudoPagina';
import './style.css';

const Home = () => (
    <ConteudoPagina>
        <section className="especialidades">
            <h1>
                Os melhores <b>aparelhos dentários!</b>
            </h1>
            <h3>
                Confira abaixo todas as especialidades odontológicas que temos à
                sua disposição!
            </h3>
            <ul type="none">
                <li>
                    <img src="assets/dente.png" />
                    <span>Pré-avaliação</span>
                </li>
                <li>
                    <img src="assets/dente.png" />
                    <span>Aparelhos Dentários</span>
                </li>
                <li>
                    <img src="assets/dente.png" />
                    <span>Raio-X Digital</span>
                </li>

                <li>
                    <img src="assets/dente.png" />
                    <span>Clareamento Dental</span>
                </li>
            </ul>
        </section>
        <section className="container-aparelho">
            <h2>
                Por que usar <b>aparelho</b>?
            </h2>
            <img src="assets/aparelho.png" alt="Aparelho dentário" />
        </section>
        <section className="container-infos">
            <div className="box-infos">
                <h4>Dentes alinhados</h4>
                <p>
                    Dentes desalinhados causam problemas nos dentes e podem
                    afetar a digestão dos alimentos e a respiração.
                </p>
            </div>
            <div className="box-infos">
                <h4>Melhora a dicção e a higiene dentária</h4>
                <p>
                    Muitas pessoas não conseguem nem usar fio dental devido à
                    posição da sua dentição. Contudo, a correção possibilita o
                    cuidado com a saúde bucal de forma bem mais ampla.
                </p>
            </div>
            <div className="box-infos">
                <h4>Corrige espaço entre os dentes</h4>
                <p>
                    Uma dentição desalinhada e com espaços significativos
                    incomodam muitas pessoas. Usar aparelho nos dentes é uma das
                    formas mais eficientes para que esses problemas possam ser
                    corrigidos.
                </p>
            </div>
        </section>
        <section className="container-clientes">
            <h2>
                Veja o que nossos <b>clientes</b> estão falando...
            </h2>
            <div className="box-clientes">
                <div className="box-cliente">
                    <img src="assets/cliente01.png" />
                    <h5>Alberto</h5>
                    <p>
                        Usei aparelho por 2 anos e agora posso sorrir novamente.
                    </p>
                </div>
                <div className="box-cliente">
                    <img src="assets/cliente02.png" />
                    <h5>Eliana</h5>
                    <p>
                        Meus dentes eram espaçados e depois de 1 ano estão no
                        lugar certo.
                    </p>
                </div>
                <div className="box-cliente">
                    <img src="assets/cliente03.png" />
                    <h5>Carla</h5>
                    <p>
                        Comecei a usar ano passado e já estou notando a
                        diferença.
                    </p>
                </div>
            </div>
            <div className="button-area">
                <Link to="/contato" className="button">
                    Entrar em contato
                </Link>
            </div>
        </section>
    </ConteudoPagina>
);

export default Home;

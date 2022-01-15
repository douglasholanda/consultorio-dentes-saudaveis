import React from 'react';
import Topo from '../Topo';
import Rodape from '../Rodape';

const ConteudoPagina = (props) => (
    <section>
        <Topo />

        {props.children}

        <Rodape />
    </section>
);

export default ConteudoPagina;

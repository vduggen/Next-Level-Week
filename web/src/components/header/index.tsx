import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const logo = require('../../assets/logo.svg');

const Header: React.FC = () => {
    return (
        <Container>
            <img src={ logo } alt="Ecoleta"/>

            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/create-point">Cadastrar Ponto</Link>
                <Link to="/list-points">Listar Pontos</Link>
            </nav>
        </Container>
    )
}

export default Header;
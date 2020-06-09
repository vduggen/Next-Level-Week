import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { BsCheckCircle } from 'react-icons/bs';

import Header from '../../components/header';
import Footer from '../../components/footer';

const Successful = () => {

    React.useEffect(() => {
        document.title = 'Ecoleta - Successful';
    }, []);

    return (
        <Container>
            <Header />
                
            <main>
                <BsCheckCircle className="check-icon"/>
                <h1>Cadastro concluído</h1>

                <Link to="/create-point">
                    <FiArrowLeft />
                    Cadastrar mais um ponto
                </Link>
            </main>

            <Footer />
        </Container>
    )
}

export default Successful;
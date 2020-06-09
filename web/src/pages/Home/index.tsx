import React from 'react';

import { Container } from './styles';

import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

const Home = () => {
    React.useEffect(() => {
        document.title = 'Ecoleta - Home';
        document.querySelectorAll('header nav a')[0].classList.add('active');
    }, []);
    
    return (
        <Container>
            <section className="content">
                <Header />

                    <main>
                        <h1>Seu marketplace de coleta de resíduos.</h1>
                        <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                        <Link to="/create-point">
                            <span>
                                <FiLogIn />
                            </span>
                            <strong>Cadastre um ponto de coleta</strong>
                        </Link>
                    </main>

                <Footer />
            </section>
        </Container>
    );
}

export default Home;
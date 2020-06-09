import React from 'react';

import { Container } from './styles';

import Header from '../../components/header';
import Footer from '../../components/footer';

interface PointsCollect {
    name: string;
    city: string;
    items: string;
}

const ListPoints: React.FC = () => {
    
    React.useEffect(() => {
        document.title = 'Ecoleta - List Points';
        document.querySelectorAll('header nav a')[2].classList.add('active');
    }, []);

    return (
        <Container>
            <Header />

            <main>
                <h1>Pontos de coleta</h1>

                <ul>
                    <li>
                        <h1>Mercado do seu Zé</h1>
                        <p id="city">Blumenau - SC</p>
                        <p id="items">Lâmpadas, Óleo de Cozinha</p>
                    </li>
                </ul>
            </main>

            <Footer />
        </Container>
    )
}

export default ListPoints;
import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
    return (     
        <Container>
            <p>
                Desenvolvido por 
                <a href="https://github.com/vduggen" target="__blank" rel="noopener">Vitor Luiz Duggen.</a>
            </p>
        </Container>
    )
}

export default Footer;
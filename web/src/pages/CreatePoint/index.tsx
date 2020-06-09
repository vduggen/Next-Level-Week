import React, { ChangeEvent, FormEvent } from 'react';

import { Container } from './styles';

import { Link, useHistory } from 'react-router-dom';

import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import api from '../../services/api';
import axios from 'axios';

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

interface Item {
    id: number,
    title: string,
    image_url: string;
}

interface IBGE_UF_Response {
    sigla: string;    
}

interface IBGE_City_Response {
    nome: string;
}

const CreatePoint: React.FC = () => {
    const [items, setItems] = React.useState<Item[]>([]);
    const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

    const [ufs, setUfs] = React.useState<string[]>([]);
    const [selectedUF, setSelectedUF] = React.useState('0');    

    const [selectedCity, setSelectedCity] = React.useState('0');    
    const [cities, setCities] = React.useState<string[]>([]);

    const [selectedPosition, setSelectedPosition] = React.useState<[number, number]>([0, 0]);

    const [inititalPosition, setInitialPosition]  = React.useState<[number, number]>([0, 0]);

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        whatsapp: ''
    });

    const history = useHistory();
    
    React.useEffect(() => {
        document.title = 'Ecoleta - Create Point';
        document.querySelectorAll('header nav a')[1].classList.add('active');
    }, []);

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setInitialPosition([ latitude, longitude ]);
        });
    }, []);

    React.useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data)
            console.log(response.data)
        });
    }, []);

    React.useEffect(() => {
        axios.get<IBGE_UF_Response[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            let ufInitials = response.data.map(uf => uf.sigla);

            setUfs(ufInitials);
        });
    }, []);

    React.useEffect(() => {
        if (selectedUF === '0') {
            return;
        }else {
            axios.get<IBGE_City_Response[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`)
            .then(response => {
                let cityNames = response.data.map(city => city.nome);

                setCities(cityNames);
            });
        }
    },[selectedUF]);

    function handleSelectedUF(event: ChangeEvent<HTMLSelectElement>) {
        let uf = event.target.value;

        setSelectedUF(uf);
    }
    
    function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
        let city = event.target.value;

        setSelectedCity(city);
    }

    function handleMapClick(event: LeafletMouseEvent) {
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng
        ]);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        let { name, email, whatsapp } = formData;
        let uf = selectedUF;
        let city = selectedCity;
        let [latitude, longitude] = selectedPosition;
        let items = selectedItems;

        const data = {
            name,
            email,
            whatsapp,
            uf,
            city,
            latitude, 
            longitude,
            items
        };

        await api.post('points', data);
        alert('deu boa')
        history.push('/successful-point');
    }

    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex(item => item === id);

        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);

            setSelectedItems(filteredItems);
        }else {
            setSelectedItems([...selectedItems, id]);
        }
    }

    return (
        <Container>
            <Header />

            <form onSubmit={ handleSubmit }>
                <h1>Cadastro do <br /> ponto de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <section className="field">
                        <label htmlFor="name">Nome da entidade:</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            onChange={ handleInputChange }
                        />
                    </section>

                    <article className="field-group">
                        <section className="field">
                            <label htmlFor="email">E-mail:</label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                onChange={ handleInputChange }
                            />
                        </section>

                        <section className="field">
                            <label htmlFor="whatsapp">Whatsapp:</label>
                            <input 
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                onChange={ handleInputChange }
                            />
                        </section>
                    </article>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={ inititalPosition } zoom={15} onClick={ handleMapClick }>
                        <TileLayer 
                            attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={ selectedPosition }/>
                    </Map>

                    <section className="fiel-group">
                        <section className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select 
                                name="uf"
                                id="uf"
                                value={ selectedUF }
                                onChange={ handleSelectedUF }
                            >
                                <option value="0">Selecione uma UF</option>
                                {ufs.map(uf => {
                                    return <option key={ uf } value={ uf }>{ uf }</option>
                                })}
                            </select>
                        </section>

                        <section className="field">
                            <label htmlFor="city">Cidade</label>
                            <select 
                                name="city"
                                id="city"
                                value={ selectedCity }
                                onChange={ handleSelectedCity }
                            >
                                <option value="0">Selecione uma cidade</option>
                                {cities.map(city => {
                                    return <option key={ city } value={ city }>{ city }</option>
                                })}
                            </select>
                        </section>
                    </section>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Ítems de coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item => (
                            <li 
                                key={ item.id }
                                onClick={ () => handleSelectItem(item.id) }
                                className={ selectedItems.includes(item.id) ? 'selected' : '' }
                            >
                                <img src={ item.image_url } alt={ item.image_url }/>
                                <span>{ item.title }</span>
                            </li>
                        ))}
                    </ul>
                </fieldset>

                <button type="submit">Cadastrar ponto de coleta</button>
            </form>

            <Footer />
        </Container>
    );
}

export default CreatePoint;
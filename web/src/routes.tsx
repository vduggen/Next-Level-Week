import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import CreatePoint from './pages/CreatePoint/index';
import SuccessfulPoint from './pages/SuccessfulPoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Home } />
            <Route path="/create-point" exact component={ CreatePoint } />
            <Route path="/successful-point" exact component={ SuccessfulPoint } />
        </BrowserRouter>
    );
}

export default Routes;
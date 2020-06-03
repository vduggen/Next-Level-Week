import express from 'express';

const routes = express.Router();

const users = [
    'Vitor',
    'Diego',
    'Gabriel',
    'João'
]

routes.get('/users/:id', (req, res) => {
    let id = Number(req.params.id);

    const user = users[id];

    return res.json(user);
});

export default routes;
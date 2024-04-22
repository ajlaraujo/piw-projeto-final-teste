import express, { Request, Response } from 'express';
import { createUser, listUsers, getUser, updateUser, deleteUser } from '../controller/user'

const router = express.Router();

router.get('/users', (req, res) => {
    const users = listUsers();
    res.json(users);
});

router.post('/users', (req, res) => {
    const newUser = createUser(req.body);
    res.status(201).json(newUser);
});

router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = getUser(userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});

router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = updateUser(userId, req.body);
    if (updatedUser) {
        res.json(updateUser);
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});

router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const deletedUser = deleteUser(userId);
    if (deletedUser) {
        res.json(deletedUser);
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});

export default router;
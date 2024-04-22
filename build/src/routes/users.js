"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controller/user");
const router = express_1.default.Router();
router.get('/users', (req, res) => {
    const users = (0, user_1.listUsers)();
    res.json(users);
});
router.post('/users', (req, res) => {
    const newUser = (0, user_1.createUser)(req.body);
    res.status(201).json(newUser);
});
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = (0, user_1.getUser)(userId);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = (0, user_1.updateUser)(userId, req.body);
    if (updatedUser) {
        res.json(user_1.updateUser);
    }
    else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const deletedUser = (0, user_1.deleteUser)(userId);
    if (deletedUser) {
        res.json(deletedUser);
    }
    else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});
exports.default = router;

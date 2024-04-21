"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    const htmlResponse = `
        <html>
            <h1>ARENA</h1>
            <p>Website para aluguel de quadras esportivas</p>
            <p>Autores: Ana Julia Araujo, Ana Beatriz Machado,
            Carolaine Lima, Gabriel Andrade</p>
        </html>
    `;
    res.send(htmlResponse);
});
router.post('/teste', (req, res) => {
    console.log(req.body);
    return res.send('Teste!@@@');
});
